---
title: "Why apps crash on Android and how to stop it"
description: "Android apps crash for specific reasons. Learn how to tell whether the issue is one app, WebView, low RAM, low storage, or a recent Android update."
listSummary: "App crash troubleshooting"
hub: "performance"
sourceNumber: 77
order: 14
tags: ["performance","speed","android","optimization","troubleshooting"]
draft: false
---
---

Most app crashes aren't random. They feel random because you don't see the error that caused them.

An app crashes when it hits a condition it can't recover from. Android closes it, sometimes with an "app keeps stopping" message, sometimes with no drama at all. An app that crashes on launch is a different problem from one that crashes after ten minutes. One bad app is a different problem from half the phone crashing at once.

That's the trick: don't fix "Android." Fix the pattern.

## One app keeps crashing

Start with the app's cache. On Pixel and many stock Android phones, go to Settings > Apps > See all apps > app name > Storage & cache > Clear cache. On Samsung, the path is usually Settings > Apps > app name > Storage > Clear cache.

Clearing cache removes temporary files. It doesn't log you out or delete your account data. Still crashing? Clear storage or clear data, but pause before doing that. This resets the app. For WhatsApp, Signal, note apps, offline maps, music downloads, or games with local saves, clearing data without a backup can delete things you care about.

Update the app next. Open Google Play, search for the app, and install any update. If the crashes began right after an app update, check recent Play Store reviews. When dozens of people report the same crash on the same version, the fix probably has to come from the developer.

Uninstall and reinstall when that app still won't behave. Reinstalling is dull, but it rebuilds the app package and local files cleanly. It works more often than people expect.

## Many apps started crashing at once

When several unrelated apps crash on the same day, suspect a shared Android component. Android System WebView is the classic example.

WebView lets apps display web content inside the app instead of sending you to a browser. Email apps, shopping apps, banking apps, help screens, login flows, and news apps may all rely on it. In March 2021, a bad WebView update caused widespread Android app crashes until Google pushed fixed WebView and Chrome updates.

So update WebView and Chrome first. Open Google Play, search for Android System WebView, and update it. Do the same for Google Chrome. If WebView was updated immediately before the crashes began and no fixed update is available yet, uninstalling WebView updates can be a temporary workaround on some devices. Treat that as temporary, because WebView is a security-sensitive component.

Google Play services can create similar broad problems when it's outdated or stuck. Update it if Google Play offers one. Restart after updating system components.

## Low RAM and low storage crashes

Apps crash when they ask for memory Android can't give them. Sometimes Android kills background apps quietly. Sometimes the app you're using is the one that falls over.

This is common on 3 GB and 4 GB phones running modern apps. Games, video editors, camera apps, and browsers with lots of tabs are the usual crash points. A messaging app may work all day, then crash when you try to attach a large video because that one action needs more memory.

Storage can look like an app bug too. Apps need space for cache files, downloads, databases, and updates. When internal storage is almost full, those writes can fail. Freeing 1 or 2 GB may be enough to stop crashes on a cramped phone, but a better target is keeping at least 10 to 15 percent of storage free.

Check Settings > Storage. Delete large videos, old downloads, duplicate files, unused apps, and APK files you no longer need. Also empty trash in gallery or file apps if they keep deleted files for 30 days.

## Crashes after an Android update

Major OS updates change the ground under every app. Android 17 is the current example: it rolled out first to supported Pixel phones, while other eligible Android devices are scheduled through 2026 by their manufacturers. If an app was barely compatible before, a major update can expose that quickly.

Update your apps after the OS update. Then update WebView, Chrome, Google Play services, and the app that crashes. Reboot once. Give the phone a few hours if the update just installed, because Android may still be optimizing apps and rebuilding caches in the background.

If only one app crashes after Android 17, the developer probably needs to update it. Clearing cache and data may help if stale local files are the trigger, but it won't fix code that isn't compatible with the new Android version.

If many apps crash after the update, look for a system patch from the phone maker. Pixel users should check monthly updates. Samsung, Xiaomi, OnePlus, OPPO, and others roll fixes through their own update channels, often later than Pixel.

## Safe Mode tells you whether another app is interfering

Safe Mode starts Android with downloaded apps disabled. It doesn't remove them. It just gives you a clean test.

On Pixel, open the power menu, long-press Power off or Restart, then accept the Safe Mode prompt. On Samsung, power off, turn the phone back on, and hold Volume Down when the Samsung logo appears. Xiaomi's wording and timing vary, but many models enter Safe Mode by holding Volume Down during startup.

If crashes stop in Safe Mode, a downloaded app is interfering. Restart normally and uninstall recent or intrusive apps first: cleaners, battery savers, antivirus apps, VPNs, custom launchers, automation tools, and apps with Accessibility permission.

If crashes continue in Safe Mode, the issue is more likely system software, storage, hardware, or the pre-installed app itself.

## When an app freezes instead of crashing

An "app isn't responding" message is an ANR, short for Application Not Responding. The app hasn't crashed yet. Android is warning you that the app didn't respond quickly enough.

For user input, Android's default ANR timeout is 5 seconds. Broadcast receivers have longer limits, usually 10 to 20 seconds depending on the case. To you, it feels the same: tap, wait, nothing happens.

Tap Wait during work worth saving, like exporting a video or sending a large file. Tap Close if it's clearly stuck. Repeated ANRs from the same app usually mean the app is doing too much work on its main thread, waiting on a slow network request, or fighting with low memory.

## What not to install

Don't install crash fixer, RAM booster, or stability booster apps. They can't repair another app's code. At best they clear cache and force-close background apps. At worst they add another always-running service to a phone that is already short on memory.

The useful fixes are boring: update the app, clear cache, clear data only when safe, reinstall, free storage, test Safe Mode, and wait for the developer or phone maker when the bug is on their side.

Crashes don't damage the phone. They can lose unsaved work, though. When crashes happen during saving photos, notes, or documents, stop trusting it until you've backed up the data.
