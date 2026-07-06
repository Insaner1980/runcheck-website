---
title: "Android diagnostic codes: complete list by manufacturer"
description: "Android diagnostic dialer codes by manufacturer, including Samsung, Pixel, Xiaomi, OnePlus, Motorola, OPPO, and Realme, with current Android 17 notes."
listSummary: "Manufacturer diagnostic code list"
hub: "hardware"
sourceNumber: 112
order: 9
tags: ["diagnostics","sensors","android","hardware","guide"]
draft: false
---
---

You type `*#0*#` into one Galaxy phone and a full hardware test menu opens. You type the same code into another Galaxy and nothing happens.

That is the normal state of Android diagnostic codes. They are useful, but the internet makes them look more universal than they are. A code can work on one phone, fail on another phone from the same brand, and disappear after a carrier firmware update. These codes sit in a messy space between Android, the dialer app, OEM service menus, and carrier restrictions.

Google released Android 17 on June 16, 2026, and made it available first for supported Pixel devices. Partner devices from brands such as OnePlus, OPPO, realme, vivo, Xiaomi, HONOR, Lenovo, Sharp, and iQOO are still handled through each manufacturer's Android 17 beta and rollout channels. That matters because Android 17 does not make hidden diagnostic codes consistent across brands.

Use the stock dialer when you try these. Samsung codes usually need Samsung Phone. Google codes usually need Phone by Google. Third-party dialers often won't process MMI or service codes at all.

## Before you try any code

Stick to read-only information and hardware test codes. Don't enter reset, provisioning, modem configuration, or service programming codes unless you know exactly what they do.

Most test codes run as soon as you type the last character. Some phones require you to press the call button. If nothing happens, don't keep hammering the code. It probably isn't supported on that model, dialer, carrier build, or Android version.

## Codes that work on many Android phones

These are the closest thing Android has to common diagnostic codes, but even these aren't guaranteed everywhere.

| Code | What it does | Notes |
|---|---|---|
| `*#06#` | Shows IMEI, and sometimes MEID or EID | The most widely supported phone code. Useful for warranty, blacklist checks, and carrier support. |
| `#07#` | Shows regulatory information and SAR details | Works on many Android phones. Some require the call button. |
| `*#*#4636#*#*` | Opens the Android Testing menu | Can show phone information, network state, signal data, battery stats, and Wi-Fi details. Availability varies heavily. |
| `*#*#426#*#*` | Opens Firebase Cloud Messaging diagnostics | Best tried from Phone by Google. Useful when push notifications aren't arriving. |

The `*#*#4636#*#*` menu is one of the most quoted Android codes, but don't be surprised if it has fewer fields than old screenshots show. Newer Android builds and OEM skins hide more network and battery details than they used to.

## Samsung Galaxy

Samsung gives you two diagnostic routes: Samsung Members and hidden dialer codes. Start with Samsung Members. It's supported, current, and easier to explain to normal users.

Open Samsung Members, tap Diagnostics on the Discover tab, then Phone diagnostics. Samsung's current test list includes items such as Camera, USB connection, Cable charging, Battery status, Touch screen, Sensors, Vibration, Mic, Speaker, Wi-Fi, Bluetooth, SIM card, NFC, and Fingerprint recognition. The exact list depends on the model.

Samsung dialer codes still help, especially on unlocked phones, but One UI security settings, Auto Blocker behavior, enterprise policies, and carrier firmware can block them.

| Code | What it does | Notes |
|---|---|---|
| `*#0*#` | Opens the main Samsung hardware test menu | Tests can include display colors, touch, receiver, speaker, vibration, cameras, sensors, S Pen, and more. |
| `*#0228#` | Battery status screen | Shows live battery voltage and related status on many models. Some newer builds block it. |
| `*#0011#` | ServiceMode network screen | Useful for signal and serving-cell details. Don't change settings here. |
| `*#0842#` | Vibration test | Works on many Samsung models, but not all. |
| `*#0673#` or `*#0289#` | Audio test | Speaker and receiver behavior varies by model. |
| `*#2663#` | Touch firmware information | Often used by service technicians. |
| `*#7353#` | Quick test menu | More common on older Galaxy models. |
| `*#1234#` | Firmware version details | Shows AP, CP, and CSC build information. |
| `*#7412365#` | Camera firmware information | Availability varies. |
| `*#0588#` | Proximity sensor test | Useful when the screen doesn't turn off during calls. |
| `*#9900#` | SysDump mode | Mainly for logs and debugging. Don't change random options. |
| `*#9090#` | Diagnostic configuration | Avoid changing anything unless you're following official service instructions. |

If `*#0*#` doesn't work, don't assume the phone is fake. First try Samsung Phone instead of Google Phone. Then check Samsung Members diagnostics. If that works, the hardware test path is still available even if the hidden code is blocked.

## Google Pixel

Pixel phones are more restrictive than Samsung phones. There is no Pixel version of Samsung's `*#0*#` menu.

| Code | What it does | Notes |
|---|---|---|
| `*#*#7287#*#*` | Opens Pixel repair diagnostics on supported devices | Google documents this for Pixel self-repair workflows. It requires an internet connection and may vary by model, region, and software state. |
| `*#*#4636#*#*` | Android Testing menu | Often used for phone and network details, but fields vary by Android build. |
| `*#*#426#*#*` | FCM diagnostics | Useful for push-notification troubleshooting. |
| `#07#` | Regulatory and SAR information | Works on many Pixel models. |

Pixel 9 and later also have a Device health and support area in Settings for guided support in supported languages. That isn't the same thing as the repair diagnostics code, but it's often a better first stop for battery, charging, performance, and support questions.

Android 17 is available over the air for supported Pixel devices from Pixel 6 through Pixel 10a. That does not mean every Pixel has identical diagnostics. Hardware, region, and repair-mode support still matter.

## Xiaomi, Redmi, and POCO

Xiaomi's CIT menu is one of the better OEM test suites, but the contents vary between MIUI, HyperOS, region builds, and model lines.

| Code | What it does | Notes |
|---|---|---|
| `*#*#6484#*#*` | Opens the CIT hardware test menu | Commonly includes display, touch, vibration, speakers, microphones, cameras, sensors, GPS, Wi-Fi, Bluetooth, SIM, keys, fingerprint, IR blaster, and NFC. |
| `*#*#64663#*#*` | Alternative CIT code | Works on some older Xiaomi models. |
| `*#*#4636#*#*` | Android Testing menu | Availability varies, especially on newer HyperOS builds. |

Some Xiaomi phones also open diagnostics through Settings > My device > All specs by tapping the kernel version several times. If the dialer code fails, try that path.

## OnePlus

OnePlus diagnostic access has changed over the years as OxygenOS moved closer to ColorOS. Don't be surprised if older guides don't match your current phone.

| Code | What it does | Notes |
|---|---|---|
| `*#808#` | Engineering Mode | Hardware tests can include display, touch, cameras, sensors, audio, charging, and network modules. Availability varies by OxygenOS and region. |
| `*#*#4636#*#*` | Android Testing menu | Still works on many models. |
| `*#888#` | Hardware version or production info | Not present on every model. |
| `*#1234#` | Firmware version | Works on some OnePlus builds. |

Be careful inside Engineering Mode. Use test screens. Don't change modem, calibration, or service settings.

## Motorola

Motorola has fewer public dialer codes than Samsung or Xiaomi, but many models include a service test app.

| Code | What it does | Notes |
|---|---|---|
| `*#*#2486#*#*` | Opens CQATest or service test menu | Can include display, touch, speaker, vibration, camera, and sensors. |
| `*#*#4636#*#*` | Android Testing menu | Works on many models. |
| `.12345+=` | Opens engineering mode from the stock Calculator app | Only works on some Motorola devices, and only in the stock calculator. |

If CQATest appears in your app list after a test, don't panic. It's Motorola's factory test component.

## OPPO and Realme

OPPO and Realme share a lot of ColorOS DNA, so their service codes overlap.

| Code | What it does | Notes |
|---|---|---|
| `*#899#` | Manual test or engineering menu | Common hardware test entry point on many ColorOS and Realme UI builds. |
| `*#800#` | Engineering/log tool | Often used for logs and network diagnostics. |
| `*#6776#` | Software and device information | Shows model and firmware details on many models. |
| `*#*#4636#*#*` | Android Testing menu | Availability varies. |

The safer path is usually the built-in Phone Manager, My OPPO, My realme, or Support app if your model includes one.

## Codes to avoid

Avoid factory reset and service programming codes you find on random lists. The dangerous one people still repeat is `*2767*3855#`, a Samsung factory reset code from older devices. Don't type it to "see what happens." That's how people lose data.

Also avoid anything described as NV, RF calibration, modem programming, carrier provisioning, or service configuration. Those menus aren't diagnostic toys.

## When codes don't work

Try the stock dialer first. Then try the manufacturer's support or diagnostics app. Samsung Members, Pixel diagnostics, Xiaomi CIT through Settings, Motorola CQATest, and OPPO or Realme support tools often work when dialer codes don't.

Carrier-locked phones can block codes. Enterprise-managed phones can block them. Some security features can block them. Android version updates can remove or hide parts of a menu. This is frustrating, but it doesn't automatically mean the phone has a hardware problem.

For one-time component checks, diagnostic codes are useful. For slow problems, they aren't enough. A speaker test won't show that your phone overheats every afternoon, and a battery screen won't show that charging current has been declining for a month. runcheck fills that gap by monitoring battery, thermal, network, storage, and charging trends over time.

## FAQ

### Can diagnostic codes damage my phone?

Information and test codes are usually safe. Codes that reset data or change service settings are not. Search the exact code before entering it.

### Do I need to press the call button?

Usually no. Most `*#*#...#*#*` and `*#...#` codes run when the last character is entered. Some phones require the call button, especially for shorter codes like `#07#`.

### Why does a code work on one phone but not another?

Because the code is implemented by the OEM, dialer, firmware, and sometimes the carrier. Android itself doesn't guarantee a universal hardware test menu.

### Can apps replace diagnostic codes?

Partly. Apps such as Samsung Members, Phone Doctor Plus, TestM, and DevCheck can test the screen, speakers, cameras, sensors, battery readings, and network state through Android APIs. They usually can't access the same low-level service screens that OEM menus use.
