---
title: "How to test your phone camera quality"
description: "Practical ways to check Android phone camera quality, including autofocus, lens switching, sensor defects, video stability, and diagnostic tools."
listSummary: "Camera quality checks"
hub: "hardware"
sourceNumber: 110
order: 7
tags: ["hardware","testing","diagnostics","android","guide"]
draft: false
---
---

Camera testing gets easier when you stop thinking about megapixels. A 50MP sensor can still take bad photos if the lens is dirty, the autofocus is broken, or the camera module was knocked slightly out of place.

The goal here is simple: check whether the cameras in your phone are behaving the way they should.

## Start with a clean lens and a simple subject

Wipe the lens glass with a clean microfiber cloth. Do this before every other test. A fingerprint can look like bad HDR, soft focus, lens haze, or poor low-light performance.

Open the default camera app and point it at something with fine detail. Printed text, a textured wall, a keyboard, or tree branches against the sky all work. Tap to focus. The image should snap into focus quickly and stay there.

If the camera hunts back and forth without settling, the autofocus mechanism may be damaged. This is common after drops because the tiny voice coil motor that moves the lens is delicate. If the image never gets sharp no matter where you tap, compare it with another lens on the same phone before blaming software.

Switch through every available camera: main, ultrawide, telephoto, macro, and front camera. A single blurry lens while the others look sharp points to that specific module. Possible causes include dust under the lens cover, a cracked lens cover, moisture inside the camera area, or a misaligned module after repair.

## Look for repeatable defects

Take a photo of a plain white wall or a clean sheet of paper in even light. This makes defects easier to see.

A little corner darkening is normal. Phone lenses are tiny and software often corrects the edges. What you're looking for is a strong dark patch, a colored stain, or a smudge that appears in exactly the same place in every photo.

Then take a low-light photo without flash. Zoom in. Bright colored dots that stay in the same position across multiple shots can be hot pixels or sensor damage. A single odd pixel isn't worth panicking over. A cluster is different.

Now take one photo toward a bright window or lamp, not directly at the sun. Purple or green tint across the whole image can point to damage around the sensor filter. Normal flare appears as streaks or ghost shapes near bright light. It shouldn't suddenly look much worse than it did before the phone was dropped or repaired.

## Test exposure and color

Take the same photo twice: once in daylight and once indoors under warm lighting. Skin tones, white walls, and gray objects are good references because your eyes notice when they look wrong.

Phones do a lot of processing, so don't expect perfectly neutral color. Pixel, Samsung, Xiaomi, and OnePlus all make different choices. The useful comparison is against the same model, not against a different brand with a different image style.

Review samples from the same phone model online if you need a sanity check. Look at real sample images instead of relying only on camera scores. Scores can be useful, but a side-by-side crop tells you more when you're trying to diagnose your own phone.

## Record a short video

Record 20 to 30 seconds at the highest resolution you normally use. Pan slowly, walk a few steps, and record some speech while you're doing it.

Play the clip back and check four things: focus, stabilization, frame drops, and audio sync. A phone with optical image stabilization should smooth out small hand movements. It won't make walking footage look like a gimbal, but it shouldn't look violently shaky either.

If video freezes for a moment, stutters, or loses audio sync, the issue may be heat, storage write speed, a camera app bug, or hardware. Try again after restarting the phone and freeing storage. If it repeats when the phone is cool and storage is available, take it seriously.

## Use built-in diagnostics

Samsung Galaxy phones can test cameras through Samsung Members. Open Samsung Members, tap Diagnostics, then Phone diagnostics, and run the Camera test. The available tests vary by model, but Samsung lists Camera as one of its phone diagnostics.

The Samsung dialer code `*#0*#` also opens camera tiles on many Galaxy models. Mega Cam tests the rear camera and Front Cam tests the selfie camera. These tests confirm that the modules open and capture. They don't judge photo quality for you.

Xiaomi, Redmi, and POCO devices usually include camera tests in the CIT menu opened with `*#*#6484#*#*`. On phones with several rear cameras, the menu may test each lens separately.

Pixel phones don't have a Samsung-style `*#0*#` menu. Google's Pixel diagnostics code `*#*#7287#*#*` is tied to Pixel repair diagnostics on supported devices, and the exact tests available can vary by model, region, and software version.

Android 17 doesn't make camera diagnostics universal. It still depends on the OEM.

## Check Camera2 support if features are missing

If third-party camera apps can't use manual exposure, RAW, high frame rate video, or a telephoto lens, install a Camera2 API inspection app such as Camera2 API Probe. It shows what each camera reports to Android: supported resolutions, autofocus modes, stabilization, and hardware level.

The hardware levels matter. `LEGACY` means the camera runs through older compatibility behavior. `LIMITED` is basic Camera2 support. `FULL` adds stronger manual control. `LEVEL_3` adds more advanced capability, including RAW and reprocessing support on devices that expose it.

Open Camera is also useful when you want to separate stock camera processing from the camera hardware. If Open Camera focuses correctly but the stock app does not, clear the stock Camera app cache and watch for a software update before assuming the module is broken.

This won't tell you whether your lens is scratched. It tells you whether Android can see the camera features the phone is supposed to expose.

## When it's probably hardware

A black preview from one camera, while the rest of the app opens, often means a failed module or loose camera connector. A camera app that won't open at all can be software, so clear the Camera app cache and restart before assuming the worst.

Blurry focus, repeatable stains, dead pixel clusters, heavy tint, and one lens behaving differently from all others are hardware signs. Software updates can change color processing or sharpening. They can't clean moisture behind the lens or repair a damaged autofocus motor.

If the problem appeared after a screen, back glass, or battery repair, bring it back to the shop quickly. A camera connector may not be seated fully, or dust may have entered while the phone was open.

runcheck won't score your photos, but it can help spot the surrounding conditions that hurt camera performance, such as heat, low storage, or battery drain during long recording sessions.
