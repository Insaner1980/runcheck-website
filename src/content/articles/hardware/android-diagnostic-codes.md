---
title: "Android service codes by brand: what still works"
description: "Working Android service codes by brand, with current notes for Android 17, Pixel devices, Samsung, Xiaomi, OnePlus, Motorola, Huawei, Realme, and Oppo."
listSummary: "Hidden hardware test codes"
hub: "hardware"
sourceNumber: 113
order: 10
tags: ["diagnostics","sensors","android","hardware","guide"]
draft: false
---
Android service codes are useful, but they're messy. Some are part of Android, some are added by the manufacturer, and some disappear after a firmware update without any warning.

That matters more now that Android 17 is rolling out. Google released Android 17 first for most supported Pixel devices, while Samsung, Xiaomi, OnePlus, Motorola, and other brands will ship their own Android 17 builds later. A code that works on a Pixel running Android 17 today may say nothing about a Galaxy or Redmi phone that hasn't received its Android 17 firmware yet.

Two rules before you start. Most codes activate as soon as you type the last character, so you usually don't press the call button. And if a code opens a menu you don't understand, look but don't change anything.

## Universal codes

These codes are the closest thing Android has to a common baseline. Even then, customized firmware can block them.

`*#06#` shows the IMEI number for the phone's cellular radio. Dual-SIM phones usually show two IMEI numbers. This is the safest code in the list and works on nearly every phone, including iPhones.

`*#*#4636#*#*` opens Android's Testing menu on many devices. It can show phone information, battery stats, signal strength, and radio details. The catch is that many OEM skins restrict it now, especially on newer Samsung and Xiaomi firmware.

`*#*#426#*#*` opens Firebase Cloud Messaging diagnostics. It's mostly useful when push notifications are delayed or missing, because it shows whether Google Play Services can keep a connection to Google's servers.

`*#07#` shows SAR information on many Android phones. SAR means Specific Absorption Rate, which is the amount of radio frequency energy absorbed by the body during use. In the US, the FCC limit for phones is 1.6 W/kg. In Europe, the common consumer limit for head and body exposure is 2.0 W/kg averaged over 10 grams of tissue.

## Samsung Galaxy

Samsung still has one of the better diagnostic setups, partly because it offers both dialer codes and a supported app route.

`*#0*#` opens Samsung's hardware test screen on many Galaxy phones. The exact layout changes by model, but you can usually test the screen, touch input, cameras, speakers, vibration, sensors, and sometimes fingerprint hardware. On some carrier models or heavily locked-down firmware, the code won't open at all.

Samsung Members is the safer route for normal users. Open Samsung Members, go to Get help or Support, then Diagnostics. It walks you through the tests and gives clearer results than the service menu.

`*#0228#` shows battery status details such as voltage and temperature on a lot of Galaxy firmware. It doesn't give a clean battery health percentage.

`*#0011#` opens ServiceMode across a wide range of models, with live cellular network data such as band, serving cell, and signal details. Useful, but easy to misread if you don't work with mobile networks.

`*#9900#` opens SysDump on some Galaxy phones. The only option most people should touch is the log cleanup option if support has told you to clear accumulated dumpstate or logcat files.

`*#2663#` shows touch panel firmware information on some models. Don't update touch firmware just because the button exists. Use it only when you're troubleshooting a real touch issue.

## Xiaomi, Redmi, and POCO

Xiaomi's factory test suite is called CIT. This is one of the few Android diagnostic menus that still has decent official support documentation.

`*#*#6484#*#*` opens CIT hardware detection on many Xiaomi, Redmi, and POCO phones. If that doesn't respond, try `*#*#64663#*#*`. Xiaomi support pages reference both codes depending on model and region.

The CIT menu can include tests for display, touch, speaker, microphone, vibration, camera, proximity sensor, light sensor, accelerometer, gyroscope, compass, Wi-Fi, Bluetooth, SIM detection, fingerprint, NFC, and charging. The list depends on the hardware in the phone.

You can often reach the same menu without a dialer code: Settings > About phone > Detailed info and specs or All specs, then tap Kernel version several times. Xiaomi changes the wording between MIUI and HyperOS builds, but the kernel-version tap trick is still worth trying when the dialer code is blocked.

`*#*#6485#*#*` shows battery information on many Xiaomi phones. Treat the values as technical readings, not a simple replacement for a battery health page.

## Google Pixel

Pixels support the universal Android codes, but the important current diagnostic code is Pixel-specific.

`*#*#7287#*#*` opens the Pixel Repair Diagnostics App on supported Pixel phones. Google documents it for Pixel repair checks, and it can help verify hardware before or after a repair. It requires an internet connection and walks you through the process on screen.

For battery-specific checks on Pixel 6 and later, use Settings > Battery > Battery Diagnostics. That's a normal Settings path, not a hidden code.

`*#*#4636#*#*` still works on many Pixels for radio and battery information. It isn't a repair tool, and it won't magically force Android updates.

Older articles sometimes mention the Calculator `.12345+=` trick for Pixel engineering mode. I wouldn't rely on it in 2026. Use the official Pixel diagnostics code instead.

## OnePlus

OnePlus codes are inconsistent because OxygenOS moved closer to ColorOS over the last few years.

`*#808#` opens Engineer Mode on some older OnePlus phones, especially OnePlus 7, 8, and 9 series devices. On newer firmware, it may be blocked.

`*#899#` opens a diagnostic or log menu on some OnePlus and Oppo-family devices. The menu contents vary a lot.

`*#*#4636#*#*` is usually the most useful basic code for network and battery information. For hardware tests on newer OnePlus phones, the built-in diagnostics app, support app, or a trusted sensor app is often less frustrating than chasing old codes.

## Motorola

`*#*#2486#*#*` is widely reported to open Motorola's engineering or hardware test menu on many Moto phones. Support varies by model.

The more dependable path is the Device Help app. Open Device Help, then Device diagnosis, then Hardware test. That route is easier to explain to a non-technical user and doesn't depend on a hidden code staying enabled.

`*#*#4636#*#*` works on many Motorola phones because Motorola's Android builds stay fairly close to stock Android.

## Huawei and Honor

`*#*#2846579#*#*` opens ProjectMenu on many Huawei and older Honor phones running EMUI or MagicUI. It includes software, background, network, and service settings. Some options are meant for technicians.

`*#*#6130#*#*` shows network information on some Huawei models.

For newer HarmonyOS devices, use the Support app instead of expecting every old Android code to work. Huawei has moved a lot of user-facing diagnostics into guided support flows.

## Realme and Oppo

`*#800#` opens Engineer Mode on some Realme and Oppo phones. On newer ColorOS builds, access is much more restricted than it used to be.

`*#899#` may open a diagnostic or log menu on some models.

These brands change diagnostic access often. If the code doesn't work, don't keep trying random lists from old forum posts. Use the Phone Manager, support app, or a known hardware-info app.

## Why codes stop working

The dialer app matters. A third-party dialer may not process MMI and service codes the same way the stock dialer does. Try the preinstalled Phone app first.

Carrier firmware can remove codes. A carrier-locked Galaxy can behave differently from an unlocked Galaxy with the same hardware.

Major updates can change everything. Android 17 is a good example: Pixels received it first, but each OEM will ship its own version later with its own service menus, permissions, and restrictions. When a code stops working after a system update, the code may be blocked rather than broken.

And yes, some code lists online are stale. A code copied from a Galaxy S8 forum thread may not work on a Galaxy S26, even if the article says "all Samsung phones."

## Safer alternatives

For everyday checks, the manufacturer's diagnostics app is usually better than a hidden menu. Samsung Members, Xiaomi CIT, Pixel Repair Diagnostics, Motorola Device Help, and Huawei Support are easier to interpret and less risky.

For a read-only overview, apps like DevCheck, CPU-Z, AIDA64, and Phone Doctor Plus can show battery readings, sensor values, CPU details, storage, and network information through Android's public APIs. They can't access every factory test, but they're enough for most troubleshooting.

For a broader health view, runcheck combines battery, thermal, network, and storage diagnostics into one dashboard instead of making you jump between service menus.

## What not to touch

Don't change network bands unless you know exactly why you're doing it.

Don't run firmware update buttons inside service menus just to see what happens.

Don't use reset, calibration, or factory options from a code list unless you have backed up the phone and know what the option does.

Reading values is safe. Changing hidden settings is where people get into trouble.
