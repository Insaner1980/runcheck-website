---
title: "How to reset app preferences on Android"
description: "Resetting app preferences sounds like it should wipe something important. It doesn't. This is one of Android's safer troubleshooting buttons, and it fixes more app weirdness than people expect."
listSummary: "App preference reset"
hub: "software"
sourceNumber: 128
order: 10
tags: ["security","malware","android","privacy","guide"]
draft: false
---
The catch is that the name is terrible. It doesn't reset your apps. It resets the phone's app-related choices around permissions, defaults, notifications, background behavior, and disabled apps. Your photos, messages, files, saved accounts, and app data stay where they are.

## What it resets

The confirmation screen in Android's Settings app has listed the same core items for years: disabled apps, disabled app notifications, default apps for actions, background data restrictions, and permission restrictions. On current Android builds, the dialog can also mention battery usage settings, so don't be surprised if your phone includes that extra line.

In plain English, that means these things can change:

- Apps you disabled can turn back on. This includes some pre-installed apps and system apps you manually shut off.
- Default app choices are cleared. Links, PDFs, launchers, phone calls, SMS, and similar actions may ask which app you want to use again.
- App notification blocks are reset. Apps you silenced may start sending notifications until you turn them off again.
- Background data restrictions are removed. Apps you blocked from using mobile data in the background may regain that access.
- Permission restrictions are reset. Apps may ask again for camera, microphone, location, photos, notifications, or nearby-device access when they need it.
- Battery usage limits may reset on Android versions and OEM builds that include them in this reset.

What it doesn't do is just as important. It doesn't uninstall apps, erase app data, delete files, remove photos, clear messages, wipe downloads, or sign you out of every service. If you were logged into WhatsApp, Instagram, a banking app, or Gmail before the reset, the reset itself isn't meant to log you out.

That's the point. It's a broad settings reset, not a data wipe.

## When it's worth trying

Use reset app preferences when the problem feels system-wide, but not serious enough for a factory reset.

A common example is link handling. You tap a link and it opens in the wrong browser, opens in an app you don't use, or doesn't open at all. Clearing the default for one app can fix that, but resetting all app preferences is faster when the defaults are tangled.

It's also useful after you've disabled a handful of pre-installed apps and something starts breaking. Android apps often depend on boring background components with names nobody recognizes. You disable one, a different app crashes, and the connection isn't obvious. Resetting app preferences turns disabled apps back on so you can test whether that was the cause.

Notifications are another good case. Android's notification system has gained more per-app controls over the years, including runtime notification permission on newer versions. If one app stopped notifying you, fix that app directly. If several apps stopped at once after an update, a global reset is a reasonable middle step.

I wouldn't use this as routine maintenance. There's no benefit in resetting preferences every month. Use it when something is actually broken.

## How to reset app preferences

The path changes a little between Pixel, Samsung, Xiaomi, Motorola, OnePlus, and other Android skins. The option is usually near the Apps screen.

On many Pixel-style Android phones, open Settings, then Apps, then See all apps. Tap the three-dot menu in the upper-right corner and choose Reset app preferences. Confirm with Reset apps.

On Samsung Galaxy phones, open Settings, then Apps. Tap the three-dot menu and choose Reset app preferences. Samsung's wording and menu placement can shift between One UI versions, but Apps is still the right place to start.

On Xiaomi, Redmi, and POCO phones, try Settings, then Apps, then Manage apps. The reset option is usually behind the three-dot menu.

If you don't see it, use the search bar inside Settings and search for "reset app preferences". Some builds place it under System, then Reset options, especially on phones where the Apps screen has been redesigned.

The reset takes effect immediately. You don't need to reboot, though restarting afterward isn't harmful if you're troubleshooting a stubborn issue.

## What happens afterward

For the next day or two, your phone may ask more questions than usual. Tap a link, and Android may ask which browser to use. Open a PDF, and it may ask whether to use Drive, Acrobat, your browser, or another app. Open an app that needs your camera or location, and it may show a permission prompt again.

That's normal.

The annoying part is redoing the intentional choices. If you disabled carrier apps, duplicate galleries, extra browsers, or other bloatware, go back to Settings, then Apps, and disable them again. If you had strict notification rules, revisit the apps that matter. If you limit mobile data for social apps or video apps, check those settings again too.

This is why reset app preferences is safe but not invisible. It won't destroy your data, but it does undo some work.

## How it compares with other resets

Clearing an app cache removes temporary files for one app. Try that when one app is slow, glitchy, or showing stale content.

Clearing app storage is stronger. It resets one app's internal data, so it can sign you out or remove local settings. Use it carefully.

Resetting app preferences sits in the middle. It affects all apps, but only their system-level preferences. That's why it's useful when the phone has several small app problems and you can't find one obvious cause.

A factory reset is different. That wipes the phone and starts over from the currently installed Android version. Don't jump there just because links are opening in the wrong place.

## Common questions

Will this log me out of apps? No, not by itself. It doesn't clear app storage or remove account data.

Will it fix battery drain? Sometimes, indirectly. If a disabled system app or an overly restricted permission was causing apps to retry background work over and over, resetting preferences can help. If the battery is old or an app is genuinely power-hungry, this won't magically fix it.

Will I need to grant permissions again? Yes, for some apps. Apps can ask again when they need access.

Should I do this before a factory reset? Yes, if your problem is app behavior rather than a locked phone, severe corruption, or hardware trouble. It takes a minute and doesn't erase your life.
