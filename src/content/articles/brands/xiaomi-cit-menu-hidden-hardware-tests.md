---
title: "Xiaomi CIT menu: hidden hardware tests for Xiaomi, Redmi, and POCO"
description: "Xiaomi's CIT menu lets you run built-in hardware tests on Xiaomi phones. Learn the dialer codes, Settings route, useful tests, and what CIT can't diagnose."
listSummary: "Xiaomi CIT hardware tests"
hub: "brands"
sourceNumber: 159
order: 7
tags: ["hardware","testing","diagnostics","android","guide"]
draft: false
---
CIT is the quickest built-in hardware check on most Xiaomi phones, including Redmi and POCO models running official MIUI or HyperOS. It's not pretty. It doesn't explain much. But when you need to know whether the touch screen, speaker, microphone, sensor, or camera is actually responding, it gets you there faster than most Play Store diagnostic apps.

Xiaomi usually calls it hardware detection or CIT mode in support pages. You'll mostly see it when troubleshooting a specific issue, like a drifting touch screen or a phone that keeps restarting. The menu is meant for point-in-time testing, not health tracking.

That's the whole trick.

## Open CIT first

The fastest route is the dialer code. Open the Phone app and enter `*#*#6484#*#*`. On some Xiaomi builds, `*#*#64663#*#*` opens the same hardware detection menu. You don't need to press the call button.

If the dialer code doesn't react, try the Settings route. Go to **Settings > About phone > Detailed info and specs** or **Settings > About phone > All specs**, then tap **Kernel version** several times. On many MIUI and HyperOS builds, the phone counts down and opens CIT.

The exact path varies because Xiaomi has changed Settings layouts across MIUI, HyperOS, region builds, and tablets. Older MIUI versions may show **Kernel version** directly under About phone. Newer HyperOS builds usually bury it under the detailed specs page.

If neither route opens CIT, check three things before assuming the phone lacks it: you're running official Xiaomi firmware, you're using the stock Phone app, and the device isn't on a custom ROM such as LineageOS. Custom ROMs often remove Xiaomi's private diagnostic components.

## What CIT can actually test

CIT tests hardware directly enough to be useful, but it still gives simple pass or fail results. It can tell you that a microphone didn't record or that a touch zone didn't register. It won't tell you whether the cause is water damage, a loose flex cable, a bad replacement screen, or a firmware bug.

The menu changes by model. A Redmi Note without NFC won't show the same list as a Xiaomi flagship with an IR blaster, in-display fingerprint reader, barometer, and multiple camera modules. That's normal.

Common CIT checks include the display, touch panel, receiver, loudspeaker, microphones, vibration motor, cameras, fingerprint sensor, proximity sensor, ambient light sensor, accelerometer, gyroscope, compass, SIM reader, Wi-Fi, Bluetooth, NFC, IR blaster, and charging status.

## The touch test is the one to run first

If you're buying a used Xiaomi phone, start with the touch test. It catches problems that a quick swipe around the home screen can miss.

The test usually shows a grid or drawing area. Drag your finger across the required sections and watch for gaps, broken lines, or sections that refuse to turn green. A used phone can look spotless and still have a dead strip near the edge of the digitizer. I would rather find that before paying, not after.

Xiaomi's own support pages recommend using CIT mode when the panel drifts, lags, or doesn't respond correctly. They also point out the boring causes people skip: cracked glass, water damage, third-party screen protectors, sweaty fingers, unstable chargers, or a single bad app. The test is useful, but it isn't magic.

## Sensors, audio, cameras and connectivity

The audio tests are simple. Speaker tests play sound through the loudspeaker, receiver tests use the earpiece, and microphone tests record and play back a short clip. Listen for crackling, low volume, static, or silence. A bottom microphone can fail while calls still sound fine because the phone may switch microphones depending on the app.

Sensor tests usually show live values or ask you to perform a small action. Cover the proximity sensor near the earpiece. Rotate the phone for the gyroscope. Move it around for the accelerometer and compass. Point the light sensor toward and away from a lamp. If the values never move, something is wrong.

Camera tests open the front and rear modules. They confirm that the camera starts, focuses, and captures. They don't prove image quality. A scratched lens, poor stabilization, dust under glass, or a bad third-party camera app can still cause problems outside the test.

Connectivity checks scan for Wi-Fi networks or Bluetooth devices. That is enough to confirm the radio can see the world around it. It doesn't diagnose your router, carrier, VPN, or apartment full of noisy 2.4 GHz networks.

## Battery, charging and version info

CIT can show basic battery and charging information, such as charge level, voltage, temperature, and whether the phone sees a charger. This is useful when a phone refuses to charge or only charges from one cable.

Don't confuse that with a proper battery health history. CIT won't give you a long-term degradation chart, charge cycle timeline, or charger comparison. It is a snapshot.

There is also a hardware information area on many Xiaomi builds. Xiaomi's support pages reference using `*#*#6484#*#*` to reach hardware detection and check items such as IMEI, build number, baseband version, kernel version, CPU ID, and hardware version. That's handy when you want to compare the software build shown in Settings with the low-level device information.

## Android 17, HyperOS and compatibility

Android 17 has started with supported Pixel devices first. Xiaomi is listed by Google as an Android 17 Beta partner, but that doesn't mean every Xiaomi, Redmi, or POCO phone is already running stable Android 17.

For Xiaomi phones, the thing that matters here is the firmware layer: MIUI or HyperOS. CIT is Xiaomi's hardware detection feature, not a generic Android 17 feature. A HyperOS update can change the path, hide a code, rename a test, or fix a diagnostic bug without Android itself being the main reason.

In plain terms, don't panic if a guide written on MIUI 14 doesn't match your HyperOS phone exactly. Try both entry methods.

## When CIT is useful

CIT is best for quick checks before buying a used phone, after a drop, after water exposure, or after a screen or battery repair. Run the full automatic test if you have time. Run individual tests if you already know the problem area.

Take a screenshot of the result screen if you need proof. Don't count on CIT to keep a permanent report you can export later.

It is less useful for slow phones, random app crashes, storage pressure, battery drain over several days, or thermal throttling under gaming load. Those problems need history, not a one-minute hardware test.

## Common questions

### Can CIT damage the phone?

No. The normal tests read sensors, play audio, vibrate the motor, open cameras, and check whether components respond. They don't erase data or flash firmware. Exit with Back or restart the phone if the menu gets stuck.

### Why are some labels in Chinese?

Some Xiaomi and Redmi models still show untranslated CIT labels, especially on China-region firmware or older MIUI builds. The tests usually work the same way. The language is annoying, not dangerous.

### Does CIT work on POCO phones and Xiaomi tablets?

Usually, yes, when the device is running official Xiaomi firmware. The available tests depend on the hardware. A Wi-Fi-only tablet won't show the same cellular checks as a Redmi phone, and a POCO without an IR blaster won't show an IR test.

---
