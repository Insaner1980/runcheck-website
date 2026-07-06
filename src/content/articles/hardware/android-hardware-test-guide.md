---
title: "How to test Android phone hardware: complete diagnostic guide (2026)"
description: "Your Android phone can look fine and still have one failing part. A tired battery, weak speaker, bad proximity sensor, or damaged antenna won't always announce itself clearly. You just get shorter runtime, weird calls, random heat, or a screen that ignores touches in one corner."
listSummary: "Hardware diagnostic workflow"
hub: "hardware"
sourceNumber: 104
order: 1
tags: ["battery","drain","troubleshooting","android","performance"]
draft: false
---
The good news: you can test most of this before paying for repair. Android has settings pages, manufacturer diagnostics, dialer codes, and manual checks that cover the main hardware parts. The messy part is that none of it is truly universal.

Android 17 is now rolling out first to supported Pixel phones, while other brands move on their own schedules. That matters because diagnostic menus, battery health screens, and settings paths can differ by Android version, OEM skin, carrier build, and region. Treat every code in this guide as a shortcut, not a promise.

## Quick answer

Start with the official diagnostic tool for your brand when one exists.

- Samsung Galaxy: open Samsung Members, tap Support, then View tests. You can run all diagnostics or choose one part, such as battery, speaker, microphone, display, camera, or sensors. Many Samsung phones also support `*#0*#` in the Phone app for a hardware test menu.
- Google Pixel: dial `*#*#7287#*#*` while connected to the internet to open Pixel Diagnostics on supported Pixel phones. Pixel Tablet uses Google's web-based Pixel repair and diagnostics flow instead.
- Motorola: open Device Help, then Device diagnosis, Hardware test.
- Xiaomi, Redmi, and POCO: try `*#*#6484#*#*` for the CIT diagnostics menu. You can also usually open it by tapping the kernel version several times in About phone.
- Stock-like Android phones: `*#*#4636#*#*` can open a testing menu on many devices, mostly for phone, network, usage, and battery information. It is not a full hardware test, and many Samsung or carrier builds block it.

If a code does nothing, don't fight it. Use the manual tests below or a diagnostic app.

## First decide whether it's software or hardware

This step saves money. A software bug can look exactly like a broken part.

Safe Mode is the first filter. Hold the power button until the power menu appears, then press and hold Power off until the Safe Mode prompt appears. On some phones the button combination is different, but the goal is the same: boot Android with third-party apps disabled.

If the problem disappears in Safe Mode, a third-party app is probably involved. Remove recently installed apps one by one and restart normally after each removal. If the problem continues in Safe Mode, the cause is either core Android, the OEM firmware, or the hardware.

A factory reset is the last software test. Back up your data first. If the problem survives a clean reset with no restored apps, hardware becomes much more likely.

Look for patterns. A touch dead zone in the exact same place every time points to the display or digitizer. A phone that shuts off at 20% but works while plugged in points to the battery. A camera that started buzzing after a drop may have a damaged focus or OIS module. A phone that became unstable right after a major update, including Android 17 on Pixel, should be patched and retested before you assume a board failure.

## Why hardware fails

Batteries wear out. That's just lithium-ion chemistry. Google uses 80% remaining capacity as a replacement threshold for Pixel battery health, with rated cycle guidance that depends on the model. Pixel 3 through Pixel 8 Pro and Pixel Fold are listed at 800 cycles, while Pixel 8a and later are listed at 1000 cycles.

Ports and buttons fail from use. USB-C ports collect lint, especially if the phone lives in a pocket. Buttons lose their snap after thousands of presses. Speaker grilles clog slowly enough that you may not notice until calls sound muffled.

Drops cause stranger problems. A phone can survive with no cracked glass and still have a loose connector, damaged camera module, bent frame, or weakened solder joint. Water is worse because corrosion can show up days or weeks later.

Heat accelerates almost everything. Charging in direct sunlight, gaming while charging, or leaving the phone in a hot car can age the battery faster and trigger thermal throttling. Sustained battery temperatures above about 40°C are worth taking seriously.

Manufacturing variation is real too. Two phones with the same model name won't behave identically. Small differences in chips, thermal contact, display panels, sensor calibration, modem firmware, and regional builds can change battery life, heat, signal behavior, and benchmark results. That doesn't mean one unit is defective. It means online numbers are ranges, not promises.

## Test the battery

Start with the settings your phone actually exposes.

On Pixel 8a and later, go to Settings > Battery > Battery health. Pixel battery health shows whether the battery is Normal or Reduced, and Battery capacity shows the estimated remaining capacity compared with the original capacity. Pixel 6a, Pixel 7, Pixel 7 Pro, Pixel 7a, Pixel 8, and Pixel 8 Pro don't show the same battery health status.

On Samsung, use Samsung Members diagnostics. The path is Samsung Members > Support > View tests, then Battery. Samsung's exact wording can vary by region, but the Members app is the safer route than random battery codes.

On OnePlus, OPPO, realme, Xiaomi, and other brands, look under Settings > Battery or the brand's device care app. Some show battery health. Some don't. In practice, Android battery reporting is still inconsistent across manufacturers.

A battery is suspicious when the phone drains fast during light use, shuts down at 15 to 20%, gets hot while charging, or shows swelling around the back cover or display. Stop using a swollen phone and get it serviced. That is not a software problem.

## Test the screen and touch layer

For dead pixels, show full-screen white, black, red, green, and blue images. Look slowly across the display. Dead pixels stay black. Stuck pixels stay lit in one color. OLED burn-in is easiest to see on a flat gray background at medium brightness.

For touch, use a drawing app and draw tight horizontal and vertical lines across the whole screen. Breaks in the line reveal dead zones. You can also enable Developer Options and turn on Show taps or Pointer location, then drag your finger over the full panel.

Samsung's `*#0*#` menu includes display and touch tests on many Galaxy models. Pixel Diagnostics, Motorola Device Help, and Xiaomi CIT can also test display and touch when available.

## Test speakers and microphones

Play a ringtone, then music or a video you know well. Listen for rattling, distortion, or one stereo channel sounding much quieter than the other. Cover one speaker at a time with a finger to isolate the earpiece speaker from the bottom speaker on stereo phones.

For the microphone, record a short voice clip from arm's length and play it back. Then test a real call. Call audio uses noise cancellation and network processing, so a recording can sound fine while calls still sound bad.

Before blaming hardware, remove the case, disconnect Bluetooth devices, clean the speaker and mic openings with a dry soft brush, and check microphone permission for the app you're testing.

## Test cameras

Open the camera app and test every camera the phone has: rear wide, ultrawide, telephoto, macro if present, and front camera. Look for focus hunting, fixed blurry patches, color tint, shaking in video, or clicking noises when focus changes.

Optical image stabilization can fail after a drop. The symptom is often obvious: video jitters even when your hands are steady, or the camera makes a buzzing sound. Software can affect image processing, but it can't fix a physically loose stabilization module.

## Test charging and ports

Use a known-good cable and charger before blaming the phone. This sounds basic, but a surprising number of "bad USB-C port" cases are actually bad cables.

Inspect the port with a light. Pocket lint can pack into the bottom of the port and stop the plug from seating fully. Use a wooden or plastic toothpick carefully, or low-pressure air. Don't scrape the contacts with metal.

If the phone charges only at a certain angle, disconnects when moved, or refuses data transfer with multiple cables, the port or bottom board may need repair.

## Test sensors

Sensor failures show up as oddly specific bugs: auto-rotate stops, the screen stays on during calls, the compass points the wrong way, or auto-brightness overreacts.

For accelerometer and gyroscope, turn off rotation lock and rotate the phone slowly. The screen should follow cleanly. A panorama photo is also a decent gyroscope check because stitching depends on motion tracking.

For the proximity sensor, make a call and cover the top of the screen near the earpiece. The display should turn off, then wake again when uncovered. Remove the case and screen protector before calling the sensor broken.

For the light sensor, turn on auto-brightness and move between bright and dark areas. The screen should adjust within a few seconds.

For the magnetometer, open Maps or a compass app outside and away from cars, laptops, magnets, and metal tables. If direction is wrong, recalibrate with the figure-eight motion.

Samsung's `*#0*#` menu and Samsung Members can test sensors. Pixel Diagnostics, Motorola Device Help, and Xiaomi CIT may cover them too, depending on model.

## Test network hardware

Antenna and radio problems are harder to prove because the carrier network changes constantly. Compare against another phone on the same network, in the same place, at the same time.

Signal strength is usually shown in dBm in status or SIM information screens. The scale is negative, so closer to zero is better. Around -50 dBm is excellent. Around -90 dBm is usable. Around -110 dBm or weaker is poor. These numbers mean different things across LTE, 5G, and Wi-Fi, so use them as a comparison tool rather than a universal pass/fail score.

If your phone drops Wi-Fi while every other device stays connected, test it near the router, on another Wi-Fi network, and with Bluetooth off. If the same phone fails everywhere, radio hardware or firmware is more likely.

runcheck helps here because it combines battery, thermal, network, storage, and speed test data in one pass. That matters after drops, heat events, or water exposure, where multiple symptoms can overlap.

## When to repair

Repair makes sense when a problem is repeatable, survives Safe Mode, survives a clean reset, and appears in a brand diagnostic or manual test.

Don't replace parts because one app behaved badly once. Do replace or service the phone when the battery is swollen, the charging port is physically loose, touch fails in the same area every time, cameras buzz after a drop, or microphones fail across recordings and calls.

## Common questions

### Are diagnostic codes safe?

The common test menus listed here are mostly read-only or interactive hardware checks. Still, don't enter random codes from the internet. Some manufacturer codes can change radio settings or trigger service actions.

### Why doesn't `*#*#4636#*#*` work?

It isn't standardized across Android. It works on many stock-like builds but can be disabled by Samsung, carriers, or OEM firmware.

### How often should I test hardware?

Every few months is enough for normal maintenance. Test immediately after a hard drop, water exposure, sudden battery drain, charging problems, or before buying or selling a used phone.

### Is a slow phone always a hardware problem?

No. Start with Safe Mode, storage space, app updates, and recent system updates. Slowness that survives a factory reset is the point where hardware, storage wear, battery weakness, or thermal throttling deserves more attention.
