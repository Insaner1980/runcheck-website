---
title: "Samsung #0# diagnostic menu: complete guide"
description: "Samsung's #0# code can open a hidden Galaxy diagnostic menu for screen, touch, sensor, camera, speaker, and vibration tests. Here's what it checks and what to use when the code is blocked."
listSummary: "Samsung diagnostic menu guide"
hub: "brands"
sourceNumber: 160
order: 8
tags: ["manufacturer","android","diagnostics","brand-specific","guide"]
draft: false
---
You type `*#0*#` into the Samsung Phone app, and the normal dialer disappears. In its place you get a plain grid of test buttons for the screen, touch panel, speakers, sensors, cameras, vibration motor, and buttons.

When it works, it feels almost too easy. When it doesn't, it can be surprisingly frustrating because Samsung doesn't present this menu like a normal consumer feature. Treat it as a low-level service menu that often works on Galaxy phones, not as a guaranteed feature on every model, carrier build, or region.

## Before you try the code

Use the Samsung Phone app. The code may not work from Google Phone or another third-party dialer, even on the same device. Open the dial pad, enter `*#0*#`, and wait. You don't press Call.

If nothing happens, the menu may be blocked by the phone's firmware, carrier configuration, work profile, MDM policy, or security settings. Some people also find that Samsung's Auto Blocker interferes with service and diagnostic codes on newer One UI builds. If you test that, turn Auto Blocker off only briefly, then turn it back on. It exists for a reason.

For most people, Samsung Members is the safer official fallback. Depending on your region and app version, open Samsung Members and tap **Diagnostics** or go to **Support > Phone diagnostics**. You can run all tests or choose one category. It covers the checks most people actually need, with clearer instructions than the raw `*#0*#` grid.

## Display and touch tests

The Red, Green, Blue and Black buttons fill the screen with solid colors. Use them to look for dead pixels, stuck pixels, tinting, uneven brightness, and screen damage that isn't obvious on your wallpaper.

Black is especially useful on OLED Galaxy phones. A real black screen should look off. Bright dots or colored specks can point to stuck pixels, while cloudy patches may indicate panel damage or pressure marks.

The Touch test shows a grid or pattern that you trace with your finger. Every section should register cleanly. This catches dead zones near the edges, which are easy to miss if you only type a few words or scroll through Settings.

The Dimming test changes display brightness and color output. Use it to look for flicker, uneven brightness, weird color shifts, or a panel that doesn't dim smoothly. On older LCD Galaxy models you may notice backlight problems. On OLED models, you're looking more at pixel behavior and brightness control.

## Audio, vibration and buttons

Receiver plays sound through the earpiece. Speaker plays through the loudspeaker setup. On newer stereo Galaxy phones, listen for imbalance between the earpiece speaker and bottom speaker. One side sounding weak can matter even if the phone technically makes noise.

The Vibration test runs the haptic motor. A healthy motor feels even and controlled. If it rattles, buzzes loudly, or feels rough, the motor or internal mounting may be worn.

Sub key checks the hardware buttons and some navigation inputs. Press volume, power, and any supported navigation keys the test asks for. If a button only works when pressed hard or from one angle, don't ignore it. That's usually not a software problem.

## Sensors and cameras

The Sensor menu is one of the better reasons to use `*#0*#`. It can show live readings from the accelerometer, gyroscope, proximity sensor, light sensor, magnetic sensor, barometer on supported models, fingerprint reader, and older heart rate sensors on Galaxy models that still have them.

A few checks are simple. Cover the proximity sensor near the top of the display and watch the state change. Move the phone and watch accelerometer values change. Rotate it and check the gyroscope. Cover the light sensor and then point it toward a lamp.

Sensor results need common sense. A magnetic sensor can behave oddly near a laptop, case magnet, car mount, or metal desk. A proximity sensor can fail because a screen protector is blocking it. Test in a clean setup before assuming the sensor is dead.

Mega Cam and Front Cam open the rear and front cameras. They confirm that modules start, focus, and capture. They don't prove that every lens is sharp, that optical image stabilization is healthy, or that your night photos will look good. Hardware checks are blunt tools.

## Codes that might help

Samsung has other dialer codes, but support varies by model, carrier, One UI version, and region. Don't treat code lists on the internet as universal.

`*#06#` shows the IMEI. This is safe and works broadly across phones, not just Samsung.

`*#1234#` shows Samsung firmware information on many Galaxy devices, including AP, CP and CSC build strings. This is useful when checking exactly which software build is installed.

`*#0228#` can show battery status details on many Galaxy phones. If it opens, use it as a quick status screen, not as a full battery health report.

Older codes such as `*#7353#`, `*#0842#`, `*#0673#`, and `*#0289#` may still work on some devices. On others, nothing happens. That's normal now.

## What `*#0*#` can't prove

The menu tests whether hardware responds in that moment. It doesn't give you long-term battery health, charge cycle history, thermal throttling logs, signal strength history, or storage I/O performance over time.

It also won't prove a phone is genuine by itself. A working Samsung diagnostic menu is a good sign, but it isn't enough. Check the IMEI, firmware build, Knox status where relevant, purchase history, and physical details if you're buying used.

A phone can pass `*#0*#` and still feel slow because storage is nearly full, a bad app is running in the background, the battery voltage sags under load, or a recent update introduced a bug. Hardware tests don't explain everything.

## When Samsung Members is the better choice

Use Samsung Members when the raw code doesn't work, when you need a clearer pass or fail result, or when you want to send an error report. Samsung's official diagnostics can test battery status, cable charging, wireless charging, touch screen, sensors, mic, speaker, camera, Wi-Fi, Bluetooth, SIM card, mobile network, fingerprint recognition, NFC, buttons, and more, depending on the device.

Less technical users should start with Samsung Members. It tells you what to do next when a test fails. The `*#0*#` menu mostly assumes you already know what you're looking at.

That doesn't make one tool better for every case. I would use `*#0*#` for quick screen, touch, sensor, and audio checks on a used phone. For normal troubleshooting, support, and official reporting, I would use Samsung Members.

## Android 17 and Galaxy compatibility

Android 17's stable rollout started on supported Pixel devices first. Galaxy phones follow Samsung's own One UI schedule, so your Samsung diagnostics menu won't change just because Android 17 exists.

When Galaxy Android 17 builds arrive for your model, diagnostic access may still depend on Samsung Phone, One UI version, carrier firmware, region, security settings, and Samsung Members updates. In other words, the code working on one Galaxy S-series phone doesn't prove it will work on another Galaxy A-series phone sitting next to it.

If `*#0*#` is blocked, don't waste an hour fighting the dialer. Run Samsung Members diagnostics instead.

---
