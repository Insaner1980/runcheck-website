---
title: "How to test your phone's fingerprint sensor on Android"
description: "How to check whether your Android fingerprint sensor is working, using built-in diagnostics, dialer codes, Pixel tools, Samsung Members, Xiaomi CIT, and simple hands-on tests."
listSummary: "Fingerprint sensor testing"
hub: "hardware"
sourceNumber: 114
order: 11
tags: ["diagnostics","sensors","android","hardware","guide"]
draft: false
---
Is the fingerprint sensor broken, or is it just annoyed by your screen protector? That sounds like a joke, but it's the first question worth asking.

Fingerprint failures are often boring. Dry skin, moisture, a cheap tempered-glass protector, bad enrollment, or a half-finished software update can make a good sensor look dead. Hardware failure is real too, especially after a drop or display repair, but don't start there.

## Quick check: unlock ten times

Register one fingerprint, clean the sensor area, dry your finger, and try unlocking the phone ten times in a row.

For a rear or side capacitive sensor, 8 or 9 successful unlocks out of 10 usually means the hardware is fine. If it fails once or twice, you're probably dealing with finger placement, dirt, skin condition, or software.

For an in-display sensor, be a little stricter with the setup and a little more forgiving with the result. Optical and ultrasonic sensors depend on the display surface, so a screen protector can ruin accuracy. If a clean phone with no protector fails more than 3 times out of 10, keep testing.

## Samsung Galaxy tests

On many Samsung Galaxy phones, open the stock Phone app and enter `*#0*#`. In the diagnostic menu, look for Fingerprint Scanner or a fingerprint item under Sensors. The menu can report whether the hardware sees a finger and whether matching works.

Samsung Members is the better supported route. Open Samsung Members, go to Get help or Support, then Diagnostics, and run the fingerprint test if it's available for your model. Samsung's own troubleshooting guidance also points to common causes such as uncertified screen protectors, dirty sensors, scratched glass, dry skin, and cases that block the sensor.

One current Samsung detail is easy to miss: on Galaxy phones running Android 16 with One UI 8 and newer, Samsung says fingerprint registration uses a swipe-style process on some devices. Follow the on-screen enrollment movement instead of assuming every Galaxy still wants repeated static taps.

## Xiaomi, Redmi, and POCO tests

On Xiaomi, Redmi, and POCO phones, open the dialer and enter `*#*#6484#*#*`. If that doesn't open CIT mode, try `*#*#64663#*#*`.

In CIT, look for Fingerprint sensor check, Fingerprint input test, or a similarly named item. Xiaomi's support pages specifically recommend CIT hardware detection when the fingerprint option is missing, which makes this more than just a forum trick.

You can also try Settings > About phone > Detailed info and specs or All specs, then tap Kernel version several times. Xiaomi changes labels between MIUI and HyperOS, but the kernel-version path often survives when a dialer code doesn't.

## Google Pixel tests

Pixel phones don't have the same kind of public fingerprint-only dialer menu that Samsung and Xiaomi expose.

For repair diagnostics, Google documents `*#*#7287#*#*` for the Pixel Repair Diagnostics App on supported Pixel phones. It can help check device hardware before or after a repair. Google also points users to the Pixel Update and Software Repair tool for updating the OS and adjusting the Under-Display Fingerprint Sensor, or UDFPS.

For normal use, the practical Pixel test is still simple: delete all fingerprints, restart the phone, re-enroll one finger, and test repeated unlocks. When the sensor is completely absent from Settings, or enrollment never starts, that's more serious than a few failed unlocks.

Android 17 is worth mentioning here because it reached supported Pixel devices first. If a Pixel fingerprint problem starts right after a major Android 17 update, check for follow-up patches and Pixel support notes before paying for a repair.

## Other Android phones

OnePlus, Motorola, Realme, Oppo, and Nokia-style Android phones vary too much for one universal fingerprint code.

Start with the manufacturer's support or diagnostics app if the phone has one. Motorola, for example, has Device Help with hardware tests on many models. OnePlus and Oppo-family phones may expose `*#899#` or older engineering menus, but support is inconsistent.

A third-party app can still answer one basic question: does Android see a fingerprint sensor at all? Apps like Sensor Test, DevCheck, and Phone Doctor Plus can show whether the fingerprint hardware abstraction layer is present. They usually can't perform secure fingerprint matching, because Android deliberately protects biometric data, but they can help separate "missing hardware" from "bad recognition."

## What the result means

If the phone no longer shows fingerprint settings, the sensor isn't detected, or diagnostics report a hardware failure, the problem is probably physical. Common causes include a damaged flex cable, a cracked sensor, water exposure, or a screen replacement that didn't properly pair or align the in-display sensor.

When hardware is detected but matching is poor, don't assume the part is bad. That's the fixable bucket.

Delete all fingerprints and enroll again. Use one finger first. During enrollment, cover the center, edges, and tip of the finger so the phone gets a useful map instead of the same partial scan ten times.

Register the same finger twice if your phone allows it. This is not elegant, but it works surprisingly often. Use slightly different angles and pressure for the second enrollment.

Remove the screen protector for testing. This is the single biggest issue with in-display sensors. A protector that isn't made for the exact phone model can scatter light on optical sensors or interfere with ultrasonic reading. When recognition works without the protector, the protector was the problem.

Clean the sensor and your finger. Finger oil, dust, lotion residue, sweat, and cracked skin all reduce the number of usable ridge points. If your hands are very dry, apply a small amount of hand cream and let it absorb before testing. Wet fingers are just as bad.

Install pending system updates. Fingerprint drivers live in firmware, and biometric bugs do ship. Major Android upgrades, including Android 17 on Pixels and later OEM builds on other brands, can change fingerprint behavior because the vendor firmware sits between Android and the sensor.

## When repair makes sense

Try a factory reset only after you have backed up the phone and exhausted the normal fixes. A reset can clear corrupted biometric data and calibration state, but it's a blunt tool.

When the sensor still fails after a reset, or diagnostics say the hardware isn't detected, get a repair quote. Rear and side fingerprint sensors are often separate parts and can be affordable to replace. In-display sensors are different. If the fingerprint reader is bonded into the display assembly or needs calibration after screen replacement, the repair can cost enough that replacing the phone starts to look reasonable.

That's the annoying answer, but it's better than spending money on the wrong part.
