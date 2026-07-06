---
title: "Android Doze mode explained: how your phone saves battery while sleeping"
metaTitle: "Android Doze mode explained"
description: "Android Doze mode reduces standby battery drain by delaying background work when your phone is idle. Here's what it limits, why notifications can arrive late, and when to exempt an app."
listSummary: "Doze mode sleep behavior"
hub: "battery"
sourceNumber: 34
order: 24
subgroup: "Drain"
tags: ["battery","optimization","android","tips","performance"]
draft: false
---
Why did ten notifications arrive the moment you picked up your phone? A lot of the time, the answer is Doze.

Doze is Android's built-in idle system. You don't turn it on, and most people never see a Doze screen in Settings. It works quietly when the phone is unplugged, the screen is off, and Android decides the device should stop letting every app run whenever it wants.

Android 17 is now the current platform release on most supported Pixel devices, with other manufacturers following on their own schedules. That doesn't change the basic Doze advice. The mechanics that matter to users are still the same: fewer background wake-ups, longer standby time, and sometimes delayed non-urgent notifications.

## What Doze does

When Doze is active, Android restricts the expensive stuff. Apps lose normal network access. Standard alarms are deferred. Jobs and syncs wait. Wake locks are ignored during the deep idle parts of the cycle. Wi-Fi scans also stop during Doze.

Your device is not frozen forever. Android opens short maintenance windows so delayed work can run in batches. Apps sync, queued tasks execute, and normal-priority notifications can show up. Then Android sends it back into idle.

That's the whole trick. Batching background work is much cheaper than letting every app wake the CPU and radio whenever it feels like it.

## When Doze turns on

Doze first arrived in Android 6.0 (API 23). The original version needed the device to be unplugged, stationary, and screen-off for a period of time. Android 7.0 added the "Doze on the go" behavior, which applies a lighter set of restrictions when it is unplugged and the screen has been off, even if it is moving in your pocket.

In practice, modern Android phones usually get two levels of help. They get lighter idle restrictions while being carried, and deeper restrictions after the device has been sitting still for a while.

Manufacturer software can make this messier. Pixel phones tend to behave close to Google's reference behavior. Samsung, Xiaomi, OnePlus, Oppo, and others add their own battery management layers on top. Sometimes that helps. Sometimes it is too aggressive and breaks notifications.

## What gets delayed

The most visible delay is background sync. Email may not check as often. A notes app may sync later. A weather widget may update during the next maintenance window instead of right away.

Developer-scheduled work is also affected. `JobScheduler` and `WorkManager` tasks generally wait while Doze is active. Standard `AlarmManager` alarms are deferred too, although user-facing alarm clock alarms still fire on time.

Calls and SMS are not supposed to wait for a maintenance window. High-priority Firebase Cloud Messaging (FCM) notifications can also wake an app briefly so it can show a time-sensitive notification. That is why WhatsApp, Signal, Telegram, and similar apps usually still feel immediate, assuming the app and manufacturer battery settings are configured properly.

Normal-priority push messages are different. If the app uses them for background refresh or low-urgency alerts, Android can hold them until the next maintenance window.

## Why notifications arrive late

Late notifications are not always a bug. They are often the trade-off Doze is designed to make.

A delivery app promotion, a social media like, or a news alert can wait a few minutes if that helps the phone sleep. A work chat, alarm, incoming call, or security alert should not. Good apps use the right priority for the right kind of message. Bad apps either ask for too much priority or don't integrate with FCM properly and rely on background polling.

The annoying part is that users don't get a clean explanation. You just see messages arrive late and have to work backward.

Start with the app's own notification settings. Then check the phone's battery settings for that app. On Pixel, look under **Settings > Apps > [app name] > App battery usage**. On Samsung, check **Settings > Battery and device care > Battery > Background usage limits** and make sure the app is not in **Sleeping apps** or **Deep sleeping apps**.

## Exempting apps from Doze

Android lets you exempt specific apps from battery optimization. The stock path is usually **Settings > Apps > Special app access > Battery optimization**. Pick the app and choose **Don't optimize** or the equivalent wording.

Be selective. Every exemption gives an app more room to run in the background, and too many exemptions make Doze less useful. Messaging apps, VPNs, medical or safety apps, and some work apps are reasonable candidates. A shopping app is not.

Google Play policy also limits when apps should ask users to exempt them from Android power management. The short version is simple: exemption should be reserved for apps whose core function breaks without it.

## How to tell whether Doze is helping

The easiest user-level test is overnight drain. Charge the phone, unplug it before bed, leave it screen-off, and check the drop in the morning. Losing a few percent overnight is normal. Losing 15% or 25% with the screen off means something is waking the phone too often, the signal is poor, or the battery itself is aging.

Battery stats won't always say "Doze failed." They may show Android System, Google Play services, mobile network, or a vague app entry. That's why screen-off drain rate matters more than a single battery chart. If a phone loses more than about 1-2% per hour while idle, it is worth investigating.

Developers can test Doze through ADB with `adb shell dumpsys deviceidle force-idle`, but that is a testing tool, not a normal setting for everyday use.

## Common questions

You can't disable Doze through normal Android settings, and you probably shouldn't try. It is one of the main reasons modern Android phones can sit idle for hours without draining themselves flat.

Doze does work while the phone is in your pocket, but not always at the deepest level. Android 7.0 and later apply lighter restrictions while the screen is off and the device is moving. The deeper mode still depends on longer idle periods.

Clock app alarms still fire. Background alarms from apps are the ones that get pushed to maintenance windows unless they use APIs designed for alarms that must run while idle.

If one device has worse standby drain than another, don't assume Doze is broken. Signal strength, OEM battery policy, app mix, account sync, widgets, and battery age can all make two Android phones behave very differently.

runcheck can help by separating screen-on drain from screen-off drain and showing whether idle periods line up with network, thermal, or background activity patterns. That is much more useful than guessing from one overnight percentage drop.
