"""Create a centered transparent logo PNG from the visible alpha bounds.

Example:
  python make_logo_asset.py input.png output.png
"""

from __future__ import annotations

import argparse
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import TypeAlias

from PIL import Image

BBox: TypeAlias = tuple[int, int, int, int]
Size: TypeAlias = tuple[int, int]
Point: TypeAlias = tuple[int, int]

CANVAS_SIZE: Size = (1000, 1600)
TARGET_SIZE: Size = (792, 1376)
POSITION: Point = (104, 112)
DEFAULT_ALPHA_THRESHOLD = 10
DEFAULT_ASPECT_TOLERANCE = 0.01
VERIFY_PIXEL_TOLERANCE = 1


@dataclass(frozen=True)
class AssetResult:
    input_path: Path
    output_path: Path
    detected_bbox: BBox
    detected_bbox_size: Size
    detected_aspect_ratio: float
    target_aspect_ratio: float
    aspect_delta_percent: float
    scaled_proportionally: bool
    output_bbox: BBox
    output_bbox_size: Size


def find_alpha_bbox(image: Image.Image, threshold: int = DEFAULT_ALPHA_THRESHOLD) -> BBox | None:
    validate_threshold(threshold)
    alpha = image.convert("RGBA").getchannel("A")
    mask = alpha.point(lambda value: 255 if value > threshold else 0, mode="L")
    return mask.getbbox()


def create_logo_asset(
    input_path: str | Path,
    output_path: str | Path,
    *,
    allowed_root: str | Path,
    threshold: int = DEFAULT_ALPHA_THRESHOLD,
    tolerance: float = DEFAULT_ASPECT_TOLERANCE,
    preserve_proportions: bool = False,
    canvas_size: Size = CANVAS_SIZE,
    target_size: Size = TARGET_SIZE,
    position: Point = POSITION,
) -> AssetResult:
    validate_threshold(threshold)
    validate_tolerance(tolerance)
    validate_geometry(canvas_size, target_size, position)

    source_path = resolve_path_within_root(input_path, allowed_root)
    destination_path = resolve_path_within_root(output_path, allowed_root)

    with Image.open(source_path) as source:
        rgba = source.convert("RGBA")

    detected_bbox = find_alpha_bbox(rgba, threshold=threshold)
    if detected_bbox is None:
        raise ValueError(f"No visible pixels found with alpha > {threshold}.")

    detected_size = bbox_size(detected_bbox)
    detected_aspect = detected_size[0] / detected_size[1]
    target_aspect = target_size[0] / target_size[1]
    aspect_delta = abs(detected_aspect - target_aspect) / target_aspect
    scaled_proportionally = can_scale_to_target_without_distortion(detected_size, target_size)

    if aspect_delta > tolerance and preserve_proportions:
        raise ValueError(
            "Detected bbox size: "
            f"{detected_size[0]}x{detected_size[1]}; detected visible logo "
            f"aspect ratio {detected_aspect:.6f} differs from target {target_aspect:.6f} "
            f"by {aspect_delta * 100:.2f}%, exceeding tolerance "
            f"{tolerance * 100:.2f}%. Refusing to stretch because "
            "preserve proportions was requested."
        )

    if preserve_proportions and not scaled_proportionally:
        scale_x = target_size[0] / detected_size[0]
        scale_y = target_size[1] / detected_size[1]
        raise ValueError(
            "Exact 792x1376 output cannot be achieved with proportional scaling "
            f"from detected bbox size {detected_size[0]}x{detected_size[1]} "
            f"and aspect ratio {detected_aspect:.6f} "
            f"(scale_x={scale_x:.6f}, scale_y={scale_y:.6f}) while preserve "
            "proportions was requested."
        )

    cropped = rgba.crop(detected_bbox)
    resized = cropped.resize(target_size, Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", canvas_size, (0, 0, 0, 0))
    canvas.paste(resized, position)

    destination_path.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(destination_path, "PNG")

    output_bbox = verify_saved_png(
        destination_path,
        threshold=threshold,
        canvas_size=canvas_size,
        target_size=target_size,
        position=position,
    )

    return AssetResult(
        input_path=source_path,
        output_path=destination_path,
        detected_bbox=detected_bbox,
        detected_bbox_size=detected_size,
        detected_aspect_ratio=detected_aspect,
        target_aspect_ratio=target_aspect,
        aspect_delta_percent=aspect_delta * 100,
        scaled_proportionally=scaled_proportionally,
        output_bbox=output_bbox,
        output_bbox_size=bbox_size(output_bbox),
    )


def verify_saved_png(
    output_path: str | Path,
    *,
    threshold: int = DEFAULT_ALPHA_THRESHOLD,
    canvas_size: Size = CANVAS_SIZE,
    target_size: Size = TARGET_SIZE,
    position: Point = POSITION,
    pixel_tolerance: int = VERIFY_PIXEL_TOLERANCE,
) -> BBox:
    with Image.open(output_path) as saved:
        if saved.size != canvas_size:
            raise ValueError(f"Saved canvas is {saved.size}, expected {canvas_size}.")
        saved_rgba = saved.convert("RGBA")

    output_bbox = find_alpha_bbox(saved_rgba, threshold=threshold)
    if output_bbox is None:
        raise ValueError(f"Saved PNG has no visible pixels with alpha > {threshold}.")

    expected_bbox = (
        position[0],
        position[1],
        position[0] + target_size[0],
        position[1] + target_size[1],
    )
    for actual, expected in zip(output_bbox, expected_bbox):
        if abs(actual - expected) > pixel_tolerance:
            raise ValueError(
                f"Saved visible bbox is {format_bbox(output_bbox)}, expected about "
                f"{format_bbox(expected_bbox)} within {pixel_tolerance}px."
            )

    output_size = bbox_size(output_bbox)
    for actual, expected in zip(output_size, target_size):
        if abs(actual - expected) > pixel_tolerance:
            raise ValueError(
                f"Saved visible bbox size is {output_size[0]}x{output_size[1]}, "
                f"expected about {target_size[0]}x{target_size[1]} within "
                f"{pixel_tolerance}px."
            )

    return output_bbox


def bbox_size(bbox: BBox) -> Size:
    return bbox[2] - bbox[0], bbox[3] - bbox[1]


def resolve_path_within_root(path_value: str | Path, allowed_root: str | Path) -> Path:
    root = Path(allowed_root).resolve()
    candidate = Path(path_value).resolve()
    if not candidate.is_relative_to(root):
        raise ValueError(f"Path must stay within {root}: {candidate}")
    return candidate


def can_scale_to_target_without_distortion(source_size: Size, target_size: Size) -> bool:
    return source_size[0] * target_size[1] == source_size[1] * target_size[0]


def validate_geometry(canvas_size: Size, target_size: Size, position: Point) -> None:
    if canvas_size != CANVAS_SIZE:
        raise ValueError(f"Canvas size must be {CANVAS_SIZE[0]}x{CANVAS_SIZE[1]}.")
    if target_size != TARGET_SIZE:
        raise ValueError(f"Target visible size must be {TARGET_SIZE[0]}x{TARGET_SIZE[1]}.")
    expected_position = (
        (canvas_size[0] - target_size[0]) // 2,
        (canvas_size[1] - target_size[1]) // 2,
    )
    if position != expected_position:
        raise ValueError(f"Position must be {expected_position} to center the logo.")


def validate_threshold(threshold: int) -> None:
    if not 0 <= threshold <= 255:
        raise ValueError("Alpha threshold must be between 0 and 255.")


def validate_tolerance(tolerance: float) -> None:
    if tolerance < 0:
        raise ValueError("Aspect-ratio tolerance must not be negative.")


def format_bbox(bbox: BBox) -> str:
    return f"({bbox[0]}, {bbox[1]}, {bbox[2]}, {bbox[3]})"


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description=(
            "Crop a transparent PNG to its alpha bounds, resize the visible logo "
            "to 792x1376, and center it on a transparent 1000x1600 canvas. "
            "By default this produces the exact requested visible box even when "
            "the source aspect ratio requires independent width/height scaling."
        ),
        epilog="Example:\n  python make_logo_asset.py input.png output.png",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    parser.add_argument("input", help="Path to the transparent PNG input file.")
    parser.add_argument("output", help="Path for the generated transparent PNG.")
    parser.add_argument(
        "--threshold",
        type=int,
        default=DEFAULT_ALPHA_THRESHOLD,
        help=f"Alpha threshold for visible pixels. Default: {DEFAULT_ALPHA_THRESHOLD}.",
    )
    parser.add_argument(
        "--tolerance",
        type=float,
        default=DEFAULT_ASPECT_TOLERANCE,
        help=(
            "Allowed relative aspect-ratio difference before refusing to resize. "
            f"Default: {DEFAULT_ASPECT_TOLERANCE}."
        ),
    )
    parser.add_argument(
        "--preserve-proportions",
        action="store_true",
        help="Reject input instead of stretching if exact 792x1376 would distort it.",
    )
    parser.add_argument(
        "--allow-distortion",
        action="store_true",
        help="Accepted for compatibility; exact 792x1376 resizing is now the default.",
    )
    return parser.parse_args(argv)


def print_result(result: AssetResult) -> None:
    print(f"Input: {result.input_path}")
    print(f"Output: {result.output_path}")
    print(f"Detected bbox: {format_bbox(result.detected_bbox)}")
    print(
        "Detected bbox size: "
        f"{result.detected_bbox_size[0]}x{result.detected_bbox_size[1]}"
    )
    print(f"Detected aspect ratio: {result.detected_aspect_ratio:.6f}")
    print(f"Target aspect ratio: {result.target_aspect_ratio:.6f}")
    print(f"Aspect delta: {result.aspect_delta_percent:.2f}%")
    if not result.scaled_proportionally:
        print(
            "Warning: source aspect ratio differs from target; resized with "
            "independent width/height scaling to produce the requested visible box."
        )
    print(f"Output canvas: {CANVAS_SIZE[0]}x{CANVAS_SIZE[1]}")
    print(f"Output visible bbox: {format_bbox(result.output_bbox)}")
    print(f"Output visible size: {result.output_bbox_size[0]}x{result.output_bbox_size[1]}")


def main(argv: list[str] | None = None) -> int:
    args = parse_args(argv)
    try:
        result = create_logo_asset(
            args.input,
            args.output,
            allowed_root=Path(__file__).resolve().parent,
            threshold=args.threshold,
            tolerance=args.tolerance,
            preserve_proportions=args.preserve_proportions,
        )
    except Exception as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 1

    print_result(result)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
