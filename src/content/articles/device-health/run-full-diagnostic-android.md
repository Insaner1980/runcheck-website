---
title: "How to run a full diagnostic on an Android phone"
description: "Android doesn't have a single \"run diagnostic\" button that checks everything at once. The tools exist, but they're scattered across Settings menus, hidden dialer codes, manufacturer apps, and system-level commands that most people never see. This guide pulls them together into one walkthrough that covers the widest set of phones, while pointing out where manufacturer, carrier, and Android-version gaps remain."
listSummary: "Full Android diagnostic walkthrough"
hub: "device-health"
sourceNumber: 7
order: 3
tags: ["android","updates","security","software","guide"]
draft: false
---
## The fastest path: manufacturer diagnostic tools

Many major Android manufacturers ship their own diagnostic utility, either pre-installed or accessible through a hidden code. Start here before installing anything.

**Samsung Galaxy phones** have the most accessible built-in diagnostics. Open the Phone app and dial `*#0*#`. This launches a test panel with individual buttons for the display (red, green, blue screens for dead pixel checks), touch responsiveness, front and rear cameras, speakers, vibration motor, and sensors like the accelerometer and proximity sensor. The code works on many Galaxy phones, including plenty of older models and modern flagships, but carrier firmware and regional builds can disable service menus. Samsung also includes a diagnostic suite inside the Samsung Members app. Open it, tap **Support**, then **Phone diagnostics**. This runs automated checks on the battery, display, touch, audio, Wi-Fi, Bluetooth, and several sensors, with pass/fail results for each. Samsung Members is available on most modern Galaxy phones. On supported models and regions, newer One UI builds may also show battery health percentage and cycle count in the battery information page.

**Google Pixel phones** have two relevant diagnostic paths. On Pixel 6 and later, **Settings > Device health and support** shows overall device status, feature status, battery and temperature information, and suggested checks such as charging or touch diagnostics. Pixel repair diagnostics can also be launched on supported Pixel phones by opening the Phone app, staying connected to the internet, and dialing `*#*#7287#*#*`. On the Pixel 8a and newer, **Settings > About phone > Battery information** shows cycle count, manufacturing date, and first-use date. For many other phones running stock or near-stock Android, the dialer code `*#*#4636#*#*` opens a hidden testing menu with tabs for phone information (signal strength, network type, preferred network mode), battery statistics (voltage, temperature, health status), and usage data. This code has been part of Android since its early versions but works more reliably on older phones, since some newer devices and carriers restrict access.

**Xiaomi, POCO, and Redmi phones** have a hidden CIT (Component Integrated Testing) menu. Dial `*#*#6484#*#*` or `*#*#64663#*#*` from the Phone app. This opens a test suite covering the touchscreen, display colors, proximity sensor, accelerometer, gyroscope, compass, flash LED, speakers, microphone, camera, vibration, Wi-Fi, Bluetooth, GPS, and the fingerprint sensor. Each test requires manual confirmation: the phone shows a pattern or plays a sound, and you tap pass or fail.

**OnePlus phones** respond to `*#808#` for a diagnostic menu on some models. Where available, OnePlus diagnostic tools can test the display, audio, connectivity, and sensors, but availability varies more than it does on Samsung and Pixel.

These codes don't work universally. Carrier-locked phones sometimes disable them, and some manufacturers remove them in software updates. If a code doesn't respond, it hasn't been implemented or has been disabled for that device.

## Built-in Android tools that work on almost every phone

Even without manufacturer-specific menus, every modern Android phone has useful diagnostic information in Settings. It is not a full health test, but it catches common problems.

**Battery usage indicators** at **Settings > Battery** show the discharge pattern over the past 24 hours (or a few days on some manufacturers). Look for unusually steep drops that indicate a misbehaving app or background process. On Android 9 and 10, this screen is more basic: a list of apps by consumption percentage without the detailed graph, but still useful for identifying the top battery consumers. On Android 14 and newer, some devices expose additional BatteryManager HAL properties through third-party apps, which can show estimated capacity and cycle count (though whether this data appears depends on the manufacturer's HAL implementation).

**Storage diagnostics** at **Settings > Storage** break down usage by category: apps, images, videos, audio, documents, and system files. If the phone is running slow and storage is above 85% full, that alone could explain it. Android's performance degrades noticeably when internal NAND flash approaches capacity because the controller can't efficiently manage wear leveling and garbage collection.

**Network diagnostics** at **Settings > Network & internet** show the current connection type, signal strength, and connected Wi-Fi network. For more detail, **Settings > About phone > SIM status** displays signal strength in dBm on most devices. Between -50 and -90 dBm is normal for cellular. Weaker than -110 dBm means poor reception.

**Developer Options** have a few useful diagnostic tools. Enable them at **Settings > About phone** by tapping **Build number** seven times. Then you get access to **Running services** (active background processes and memory usage), **USB debugging** (needed for ADB diagnostics), and **Take bug report** (generates a detailed system log for troubleshooting).

## Sensors and hardware checks without apps

The proximity sensor can be tested through `*#*#0588#*#*` on some devices. For other sensors, practical tests work just as well: open Google Maps and check if the blue direction cone rotates when you turn the phone (compass and gyroscope), make a call and check if the screen blanks when held to your ear (proximity sensor), or toggle auto-brightness and cover the front (ambient light sensor).

GPS can be tested with any map app, but a dedicated GPS test app shows satellite count and signal-to-noise ratios. A healthy GPS fix should lock onto 8-12 satellites outdoors within 30 seconds.

## When third-party apps add real value

Built-in tools cover a lot, but they have blind spots. Third-party apps fill three specific gaps.

Battery health estimation is the biggest. AccuBattery tracks charging behavior over time and estimates remaining capacity relative to design capacity. It needs about a week and several charge cycles to produce useful numbers, and the estimate keeps improving the longer it runs. DevCheck provides real-time CPU clock speeds, GPU frequency, thermal zones, battery current and voltage, and sensor readings. It's the go-to for diagnosing thermal throttling or catching a sensor reporting incorrect values. AIDA64 shows detailed hardware specs: SoC model, display resolution and density, RAM type and amount, storage benchmarks, installed codecs. More identification than diagnosis, but useful when you need to know exactly what hardware the phone contains.

None of these apps can access data the manufacturer has locked away. If the battery health HAL isn't implemented, no app can read the true cycle count or capacity. They can only estimate from charging patterns.

## ADB diagnostics for deeper inspection

Android Debug Bridge provides the deepest non-root diagnostic access. Connect the phone to a computer via USB with USB debugging enabled, then:

`adb shell dumpsys battery` shows battery level, temperature, voltage, charging status, health status, and on some devices, cycle count. The output varies by manufacturer: Samsung devices often report fields that Pixel devices don't, and vice versa.

`adb shell dumpsys batterystats` generates a massive log of battery usage history, including wake locks, app usage, and network activity. Piping this through Google's Battery Historian tool creates a visual timeline of what drained the battery and when.

`adb shell dumpsys connectivity` reports current network state, DNS servers, and active interfaces.

`adb shell cat /sys/class/thermal/thermal_zone*/temp` reads temperature sensors. Not all zones are accessible. SELinux policies on Android 12 and above restrict which sysfs paths can be read, and the restrictions have gotten tighter with each version. Some thermal zones return "Permission denied" even with ADB access.

ADB requires a computer and some comfort with command-line tools. For most people, the Settings menus, manufacturer diagnostic apps, and one careful manual hardware check cover what's needed.

## Reading the results

Raw numbers need context. A battery temperature of 32°C during light use is normal. 42°C while the phone sits idle in a cool room is not. Storage at 78% is fine. At 92%, the phone will struggle. Signal strength of -85 dBm works indoors. At -115 dBm, calls drop.

The point of diagnostics isn't finding a single number that says "broken." It's comparing what you see against what's expected, and catching patterns: a battery that lost 15% capacity in six months, a sensor that consistently returns zero, storage nearly full and dragging everything down.

runcheck combines battery, thermal, network, and storage diagnostics into a single dashboard with a unified health score, saving the time of checking each system individually. It also flags readings that might be unreliable through a confidence indicator, worth paying attention to since not every Android device reports every metric accurately.

## FAQ

**Can I run diagnostics on a phone that won't boot?**
Only partially. If the phone enters recovery mode (usually Power + Volume Up during boot), you can verify the display, touch, and buttons work. Some Samsung phones allow Download Mode for firmware flashing. Full diagnostics require a running OS.

**Do diagnostic apps need root access?**
No. Everything described here works without root. Root access allows reading additional kernel-level data, but it voids warranties, breaks SafetyNet/Play Integrity attestation, and isn't necessary for a practical health check.

**How often should I run a full diagnostic?**
When the phone acts up: slower launches, unexpected battery drain, connectivity drops, overheating. No fixed schedule needed. For used phone purchases, always run a full check before the transaction.

**Does `*#0*#` work on non-Samsung phones?**
No. Xiaomi uses `*#*#6484#*#*` on many models, OnePlus may use `*#808#`, Pixel repair diagnostics use `*#*#7287#*#*`, and many stock or near-stock Android phones use `*#*#4636#*#*`. Availability varies by model, region, firmware, and carrier.

**Will running diagnostics affect my data or settings?**
Standard diagnostics only read information. The exception: accidentally tapping a factory reset option in a service menu. Stick to diagnostic and test sections.
