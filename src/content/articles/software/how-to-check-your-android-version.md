---
title: "How to check your Android version"
description: "Your phone already shows its Android release. You just need to know which number to trust."
listSummary: "Android version lookup"
hub: "software"
sourceNumber: 119
order: 1
tags: ["android","updates","security","software","guide"]
draft: false
---
On most phones, open Settings, then About phone, then Android version. On Samsung, use Settings > About phone > Software information. That screen gives you more than the big OS number: it also shows the security date, Google Play system update date, build number, and sometimes the manufacturer's own software version.

That's the part people miss. Android 17 sounds newer than Android 16, and it is, but a current security patch matters just as much when you're judging whether a phone is still safe to use.

## Check the version in Settings

On most Android phones:

1. Open Settings.
2. Tap About phone or About tablet.
3. Open Android version if the details aren't already visible.
4. Check the platform release, Android security update, Google Play system update, and Build number.

Samsung puts the same information under Software information inside About phone. OnePlus often uses About device. Xiaomi, Redmi, and POCO phones usually start from the About phone page, then split the details between the platform page and Xiaomi HyperOS screens.

That's it. Really.

## What the release actually means

The main number identifies the major Android generation on the phone. In June 2026, Android 17 is the latest major release. Google released it first to most supported Pixel devices, while new phones and other manufacturers' updates follow on their own schedules.

For developers, the OS maps to an API level. The current mapping is Android 17/API 37, Android 16/API 36, Android 15/API 35, Android 14/API 34, and Android 13/API 33. You don't need to memorize any of this, but it explains why an app may say your phone is too old even though the device still turns on and works fine.

The build number is more specific. It identifies the exact software build installed on the device. Two phones can both run Android 17 and still have different builds because of region, carrier approval, beta channel, or manufacturer customization.

## The manufacturer skin matters too

Samsung doesn't just ship "plain Android." It ships One UI on top of it. One UI 9 is Samsung's Android 17 generation, but in June 2026 it is still rolling out by device, region, and channel. A Galaxy S26 user in the One UI beta program may see the new platform before someone with an older Galaxy model on the stable branch.

Xiaomi, Redmi, and POCO phones use Xiaomi HyperOS. The HyperOS number tells you about Xiaomi's own interface and features, but it doesn't always reveal the underlying Android base at a glance. Open the platform detail page before assuming that HyperOS 3, 3.1, or a later HyperOS build means the same thing on every model.

Pixel phones are simpler. The About phone screen shows the platform number, security patch, and build identifier together. A supported Pixel on the stable June 2026 rollout may show Android 17, while a device enrolled in beta testing may show a QPR beta build instead.

## How to check without the normal Settings path

Dialer codes can show firmware information on some phones, but they are inconsistent. Samsung's `*#1234#` can show AP, CP, and CSC firmware details on supported models. The `*#*#4636#*#*` testing menu works on some Android devices, but many manufacturers disable it.

If you're comfortable with ADB and the phone has already authorized your computer, these commands are more exact:

```bash
adb shell getprop ro.build.version.release
adb shell getprop ro.build.version.sdk
adb shell getprop ro.build.version.security_patch
```

Those output the release string, API level, and patch date. This is useful for testing, repair work, or checking a phone whose menus have been heavily customized.

## Why the version matters

App compatibility is the obvious reason. Apps set a minimum supported platform version. When your phone falls below that floor, the Play Store may block installation or stop offering updates.

Security is the better reason. Android security updates are tracked separately from the major release. A phone on Android 16 with a current patch is usually safer than a phone on Android 17 with an old patch. The patch date tells you how recently the device received vulnerability fixes.

Features also depend on the platform. Android 12 introduced Material You dynamic theming. Android 13 added per-app language settings. Android 14 tightened several privacy and background behavior rules. Android 17 adds App Bubbles, desktop interactive Picture-in-Picture for desktop-style environments, a privacy-focused Contact Picker for apps, and real-time location indicators.

If a feature is missing from your phone, the OS generation may be the reason. Or the manufacturer may simply have chosen not to ship that feature. Android is messy like that.

## Platform release and patch date are different

The platform number is the major generation. The security patch is a date, such as 2026-06-05. They move separately.

A phone can run Android 15 with fresh vulnerability fixes. Another model can run Android 17 while already lagging behind on patches. When you're judging whether a device is safe to keep using, look at both.

## Can you update manually?

Start with Settings > System > Software update, or Settings > Software update on Samsung. If the manufacturer has released an update for your exact model, region, and carrier build, it should appear there.

You can't install an official Android build that your manufacturer hasn't released for your device. Pixel owners can sideload official OTA images with ADB, and Samsung users can flash official firmware with Odin, but those are technical paths with real risk if you pick the wrong build. Custom ROMs are another option for some phones, but they are not the same as an official update.
