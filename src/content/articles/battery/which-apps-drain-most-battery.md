---
title: "Which apps drain the most battery on Android"
description: "Most lists of \"battery-draining apps\" are too confident. Your phone doesn't care which app topped a ranking on someone else's test bench. It cares what you installed, what permissions you gave it, how often you open it, and whether it keeps working after the screen turns off."
listSummary: "Battery-heavy app detection"
hub: "battery"
sourceNumber: 24
order: 14
subgroup: "Drain"
tags: ["battery","drain","troubleshooting","android","performance"]
draft: false
---
That said, the same categories keep causing trouble.

## The app types that usually sit near the top

Video apps are obvious. YouTube, Netflix, TikTok, Instagram Reels, and similar apps keep the screen on, decode video, pull data constantly, and often run at high brightness because people watch them in bright rooms or outside. If a video app is high in your battery list after two hours of use, that's not a bug. That's physics.

Navigation apps are the next easy one. Google Maps, Waze, delivery apps, rideshare apps, and fitness trackers combine GPS, mobile data, screen-on time, and sometimes Bluetooth. One hour of turn-by-turn navigation can take a visible chunk out of the battery, especially on 5G or in poor signal.

Games are blunt instruments. A 3D game pushes the GPU, CPU, display, audio, touch input, and network all at once. The good news is that games usually drain while you're playing them, not quietly at 3 a.m. If a game appears with background use, restrict it.

Social and messaging apps are messier. Facebook, Instagram, Snapchat, TikTok, WhatsApp, Telegram, Discord, X, Threads, Reddit, and news apps all want fresh content and notifications. Some behave well. Some don't. The annoying part is that two people can install the same app and get different battery results because one has location, notifications, autoplay, contact sync, and background refresh enabled while the other doesn't.

## Background use matters more than the app name

A battery screen that says an app used 8% while you watched videos for an hour is telling you something boring. A battery screen that says an app used 8% in the background while the phone sat in your pocket is telling you something useful.

Look for that split first. On Pixel, go to **Settings > Battery > Battery usage**, then view usage by apps and tap the app. On Samsung, use **Settings > Battery and device care > Battery > View details**. The wording differs by model, but you want foreground time, background time, and whether the app is allowed to keep running.

A rough rule: if a non-essential app uses more than a couple of percent in the background over a day, it should justify itself. Messaging, music, navigation, health, and security apps may have a reason. A shopping app doesn't.

The most common background drain mechanisms are simple: push notifications, content sync, location checks, wake locks, background network traffic, and analytics SDKs. Wake locks are worth naming because Google now treats them as a Play quality issue. A partial wake lock keeps the CPU awake even when the screen is off. Used carefully, it's normal. Held too long, it's battery waste.

## Google Play now has a battery quality signal

This is the big change since older versions of this article. Google made **Excessive partial wake locks** a core Android vitals metric. Starting March 1, 2026, apps that cross the threshold can lose visibility in Google Play discovery surfaces and may show a warning on their store listing.

The threshold is specific. For mobile apps, Android vitals considers non-exempt partial wake lock use excessive when wake locks are held for at least two hours in a 24-hour period and that pattern affects more than 5% of the app's sessions, averaged over 28 days.

That does not mean Google Play tells you every battery cost before installing an app. It doesn't flag a game for draining fast while you're actively playing. It doesn't judge whether you personally spend five hours in TikTok. It targets background CPU-awake behavior while the screen is off.

Still, it's useful. For the first time, a normal user may see a battery warning before installing a badly behaved app. That is better than discovering the problem after three nights of drain.

## What to change before uninstalling apps

Uninstalling is clean, but most people aren't deleting their main social, video, or messaging apps. So start with the settings that reduce silent work.

Turn off autoplay where the app allows it. Instagram, Facebook, X, Reddit, YouTube, and TikTok can burn battery and data by preparing videos you may never watch.

Limit location. Open **Settings > Location > App location permissions** and check apps allowed all the time. A weather app can usually live with location while in use. A navigation app needs location during trips. A social app rarely needs permanent access.

Restrict background battery use. On Pixel-style Android, open **Settings > Apps > [app] > App battery usage** and reduce background access for apps that don't need instant updates. On Samsung, use **Settings > Battery and device care > Battery > Background usage limits**, then add rarely used apps to Sleeping or Deep sleeping apps.

Reduce notifications. Every notification can wake the phone, light the screen, trigger vibration, and pull fresh content. Be strict with apps that notify for marketing, recommendations, or "you might like this" messages.

Update apps. This is boring advice, but it matters after Android updates, including the first Android 17 rollout on supported Pixel phones. App developers patch battery bugs, wake lock bugs, sync loops, and compatibility issues. Samsung and Google both point users toward app and system updates when troubleshooting battery drain.

## Browser instead of app is not always a win

A common tip says: use the browser version instead of the app. Sometimes that's smart because a website can't run the same kind of persistent Android background service as an installed app. If Facebook or X only drains you because the native app keeps waking up, the mobile website can help.

But don't turn that into a rule. Controlled research comparing Android native apps with their web counterparts has found native apps can use less energy during active use for some services. A browser tab isn't magic. It still renders video, JavaScript, ads, trackers, and images.

My practical take is this: use the browser for services you check occasionally and don't need notifications from. Use the native app for services you use heavily, especially if the web version is slow or janky. Then restrict the native app's background access if it starts showing up overnight.

## When a diagnostic app helps

Android's built-in battery screen should be your first stop. It's already there, and it's tied into the operating system.

A tool like runcheck becomes useful when the battery number alone doesn't explain the pattern. If drain spikes at the same time as heat, weak signal, slow network, or storage pressure, that points to a different fix than simply blaming Instagram. Context matters.

AccuBattery and similar tools can also estimate battery capacity over time, but treat the numbers as estimates unless the phone itself exposes battery health.

## The better way to find your worst apps

Do this over two normal days:

1. Charge normally and use the phone normally.
2. At night, check **Settings > Battery > Battery usage**.
3. Write down the top five apps and whether they used battery in the foreground or background.
4. Restrict only the apps with background use that doesn't make sense.
5. Check again the next day.

Don't clear all apps from Recents every hour. Android says it manages memory and battery automatically, and force-closing apps often wastes power when those apps reopen. Force stop is for a misbehaving app, not daily housekeeping.

The apps that drain the most battery are usually the ones that keep the screen, network, GPS, CPU, or GPU busy. The ones worth fixing are the ones doing that when you aren't using them.
