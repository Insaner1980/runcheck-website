import sys
import tempfile
import unittest
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from make_logo_asset import create_logo_asset, find_alpha_bbox, parse_args


class MakeLogoAssetTest(unittest.TestCase):
    def test_creates_centered_transparent_canvas_with_target_visible_box(self):
        with tempfile.TemporaryDirectory() as tmp:
            tmp_path = Path(tmp)
            input_path = tmp_path / "input.png"
            output_path = tmp_path / "output.png"

            image = Image.new("RGBA", (500, 500), (0, 0, 0, 0))
            image.putpixel((0, 0), (255, 0, 0, 5))
            for y in range(70, 414):
                for x in range(140, 338):
                    image.putpixel((x, y), (20, 120, 220, 255))
            image.save(input_path)

            result = create_logo_asset(input_path, output_path)

            self.assertEqual(result.detected_bbox_size, (198, 344))
            self.assertEqual(result.output_bbox_size, (792, 1376))
            self.assertEqual(result.output_bbox, (104, 112, 896, 1488))

            with Image.open(output_path) as saved:
                self.assertEqual(saved.size, (1000, 1600))
                self.assertEqual(saved.mode, "RGBA")
                self.assertEqual(find_alpha_bbox(saved, threshold=10), (104, 112, 896, 1488))
                self.assertEqual(saved.getpixel((0, 0)), (0, 0, 0, 0))

    def test_resizes_mismatched_source_to_exact_target_by_default(self):
        with tempfile.TemporaryDirectory() as tmp:
            tmp_path = Path(tmp)
            input_path = tmp_path / "square.png"
            output_path = tmp_path / "output.png"

            image = Image.new("RGBA", (500, 500), (0, 0, 0, 0))
            for y in range(100, 300):
                for x in range(100, 300):
                    image.putpixel((x, y), (20, 120, 220, 255))
            image.save(input_path)

            result = create_logo_asset(input_path, output_path)

            self.assertEqual(result.detected_bbox_size, (200, 200))
            self.assertEqual(result.output_bbox_size, (792, 1376))
            self.assertEqual(result.output_bbox, (104, 112, 896, 1488))

            with Image.open(output_path) as saved:
                self.assertEqual(saved.size, (1000, 1600))
                self.assertEqual(find_alpha_bbox(saved, threshold=10), (104, 112, 896, 1488))

    def test_can_still_reject_distortion_when_requested(self):
        with tempfile.TemporaryDirectory() as tmp:
            tmp_path = Path(tmp)
            input_path = tmp_path / "square.png"
            output_path = tmp_path / "output.png"

            image = Image.new("RGBA", (500, 500), (0, 0, 0, 0))
            for y in range(100, 300):
                for x in range(100, 300):
                    image.putpixel((x, y), (20, 120, 220, 255))
            image.save(input_path)

            with self.assertRaisesRegex(ValueError, "preserve proportions"):
                create_logo_asset(input_path, output_path, preserve_proportions=True)

            self.assertFalse(output_path.exists())

    def test_accepts_legacy_allow_distortion_flag(self):
        args = parse_args(["input.png", "output.png", "--allow-distortion"])

        self.assertFalse(args.preserve_proportions)


if __name__ == "__main__":
    unittest.main()
