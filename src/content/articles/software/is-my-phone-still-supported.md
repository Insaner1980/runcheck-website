---
title: "Is my phone still supported? How to check Android update and security lifecycle"
metaTitle: "Is my phone still supported?"
description: "Your phone can look completely normal and still be past its safe update life. Calls work. Apps open. The camera still takes photos. But if the manufacturer has stopped shipping security patches, newly discovered Android bugs don't get fixed on that device."
listSummary: "Android support lifecycle"
hub: "software"
sourceNumber: 123
order: 5
tags: ["android","updates","security","software","guide"]
draft: false
---
That is the part people miss. End of support doesn't brick a phone. It just means the risk keeps creeping up while the phone feels the same.

The check takes about two minutes.

## Start with the security patch date

Go to Settings > About phone > Android version. On Samsung phones, the path is often Settings > About phone > Software information. Look for Android security patch level.

You'll see a date such as June 5, 2026. That date matters more than the Android version number for day-to-day safety.

A simple reading:

- Within the last 90 days: the phone is probably still getting active security updates.
- Four to six months old: check the manufacturer's support list. The phone may be on a slower quarterly schedule.
- More than a year old: assume support has ended unless the manufacturer says otherwise.

There are exceptions, because Android update schedules are messy. A budget phone on a quarterly schedule can look stale for a while without being abandoned. Still, a security patch from last year is a bad sign.

## Android version and security patch aren't the same thing

Android 17 was released in June 2026 and rolled out first to supported Pixel devices. Other eligible Android devices will get it later through their own manufacturers during 2026.

That doesn't mean every phone still on Android 16 is unsafe. A phone running Android 16 with a current June 2026 security patch is in better shape than a phone running Android 17 with no future patch support.

Think of the Android version as the feature branch and the security patch level as the safety check. Both matter, but if you only look at one number, look at the patch date.

## How long major brands support phones

Support windows depend on the brand, model tier, launch year, and sometimes region. This is annoying, but it is where Android is now.

Google Pixel is the cleanest example. Pixel 8 and later phones get seven years of OS and security updates from the date the device first became available in the US Google Store. Pixel 6, Pixel 7, Pixel 7a, Pixel 6a, Pixel Fold, and Pixel Tablet get five years of OS and security updates. That puts the Pixel 6 and Pixel 6 Pro near the end of their guaranteed window in October 2026.

Samsung is also strong on recent models. The Galaxy S26 series is promised seven generations of OS upgrades plus a seven-year security window from global launch. Samsung's security page also groups supported devices into monthly, quarterly, and biannual update tiers. Newer Galaxy A models such as Galaxy A56 5G and Galaxy A36 5G are promised up to six generations of Android OS and One UI upgrades plus six-year security support.

OnePlus, Xiaomi, Motorola, and other brands vary more. OnePlus lists a minimum three-year security update pledge for smartphones and tablets, while selected flagship models can get longer support. Xiaomi says many phones get three years or longer, depending on the model. Motorola publishes per-device support details rather than one simple rule.

So don't rely on brand reputation alone. A flagship and a cheap phone from the same company can have very different lifespans.

## Check the manufacturer's list

Use the phone's exact model name, not just the marketing family. The About phone screen should show it.

For Samsung, go to security.samsungmobile.com and open the scope list. If the phone appears under monthly, quarterly, or biannual updates, it is still supported. If it isn't listed, support is probably over.

For Pixel, search Google's Pixel update support page. It lists the supported Pixel families and explains the seven-year and five-year update windows.

For Xiaomi, OnePlus, Motorola, and others, search for the brand's security update policy or the exact model plus "security updates." If the official page is vague, endoflife.date is a useful second opinion, but treat it as community-tracked rather than official.

## What end of support changes

Three things happen after support ends.

Security patches stop. Google still publishes Android Security Bulletins, and manufacturers still receive fixes, but your phone no longer gets them. The May 2026 Android Security Bulletin included a critical System component issue that could allow nearby remote code execution without user interaction. That is exactly the kind of fix an unsupported phone can miss.

App support slowly gets worse. Developers raise their minimum Android versions over time. Banking, payment, password, and work apps are usually stricter than games or media apps.

Google Play Protect keeps working if the phone has Google Play Services. That helps with harmful apps, including apps installed from outside Google Play, but it doesn't patch the kernel, drivers, modem firmware, or manufacturer code.

## If your phone is no longer supported

The safest move is replacing it with a supported phone. That is not always possible right away, so reduce the risk while you plan.

Install apps only from Google Play. Sideloading APK files on an unpatched phone is asking for trouble.

Keep Play Protect on. Open Google Play Store > profile icon > Play Protect, then check that scanning is enabled.

Move sensitive tasks off the phone if you can. Banking, password storage, cryptocurrency wallets, and SMS-based two-factor authentication are the kinds of things that deserve a patched device.

Update every installed app. App updates can't repair the operating system, but they can close app-level holes.

Remove apps you don't use. Fewer apps means fewer permissions, fewer background services, and fewer chances for something old to become a problem.

## What about custom ROMs?

A custom ROM such as LineageOS can extend a phone's useful life, but it isn't magic. The Android layer may keep getting patched, while closed-source hardware firmware for the modem, GPU, camera, or Wi-Fi chip can still be frozen.

For a hobby phone, that may be fine. For your banking phone, I wouldn't treat it as equal to full manufacturer support.

## The practical answer

A supported phone has a recent security patch and appears on the manufacturer's active support list. An unsupported phone still works, but it slowly becomes a worse place to keep important accounts and private data.

Check the patch date first. Then check the official support list. That usually tells you enough.
