---
title: "Does bloatware slow down your phone, and can you remove it?"
description: "Pre-installed Android apps can take up space, send notifications, and run background services. Here is what bloatware actually does and what is safe to remove."
listSummary: "Bloatware impact and removal"
hub: "performance"
sourceNumber: 78
order: 15
tags: ["performance","speed","android","optimization","troubleshooting"]
draft: false
---
---

Bloatware gets blamed for almost every slow Android phone, but the truth is less dramatic. A pre-installed app doesn't slow anything down just because its icon exists. The trouble starts when that app runs in the background, wakes the phone, sends notifications, updates itself, or keeps services active even though you never asked for it.

That's the annoying part. You can buy a phone, skip an app during setup, never open it, and still find related services sitting in the app list later.

## What bloatware actually does

A dormant pre-installed app mostly costs storage. It doesn't use CPU, RAM, mobile data, or battery unless Android or another app starts one of its components.

Some pre-installed packages do more than sit there. Facebook-related services such as `com.facebook.appmanager` have shipped on phones as companion packages. Samsung phones may include Samsung Free, Samsung Global Goals, Samsung TV Plus, and other Samsung apps alongside Google's apps. Carrier phones can add account tools, setup wizards, voicemail apps, security trials, and promotional app installers.

One or two background services usually won't ruin performance. Fifteen of them on a low-end phone is a different story. A 3 GB or 4 GB RAM phone with a heavy launcher, social apps, carrier utilities, and manufacturer services can feel worse than an older flagship with cleaner software and more memory headroom.

Storage is easier to check than background activity. Open **Settings > Storage > Apps** or **Settings > Apps**, sort by size if your phone allows it, and look for apps you don't use. The exact path changes by brand. Pixel keeps it fairly plain, Samsung moves more of this into Device care, and Xiaomi usually splits storage tools between Settings and the Security app.

## Disable first, uninstall when Android allows it

Android lets you uninstall some pre-installed apps like normal apps. Long-press the icon, open app info, and look for **Uninstall**. If the button is missing, greyed out, or replaced by **Disable**, Android is treating the app as a system app.

Disabling is the safer first move. Go to **Settings > Apps**, choose the app, and tap **Disable**. A disabled app stops running, disappears from the launcher, and no longer receives normal updates. It still occupies some storage because the original app package remains in the system image, but Android removes its updates and user data where it can.

That last detail matters. Disabling a system app won't magically give you several gigabytes back. It can still help if the app had downloaded updates, cached media, logged you in, or stored local data.

Samsung and other OEMs sometimes show **Uninstall** for apps that originally came with the phone. In many cases, this removes the user-installed update layer and leaves the factory copy inactive. From your point of view, that's fine. You wanted it gone from daily use, not removed from the read-only system partition.

## When ADB removal makes sense

For stubborn packages, ADB can remove an app for the current user without root:

```text
adb shell pm uninstall -k --user 0 com.example.appname
```

That command doesn't delete the package from the system partition. It hides and disables it for user 0, which is the main phone user. A factory reset brings it back.

Use this only when you know the exact package and understand what you're removing. The package name might be visible in the Play Store URL, or you can list packages with:

```text
adb shell pm list packages
```

Tools such as Canta and Universal Android Debloater Next Generation make this less painful. Canta runs on the phone and uses Shizuku. UAD-ng runs from a computer and uses curated package lists with safety labels. Those labels are useful, but they aren't magic. If something is marked unsafe, expert, framework, provider, dialer, launcher, or Google Play Services related, leave it alone unless you have a real recovery plan.

No, really. Removing the wrong package can break notifications, calls, Play Store installs, widgets, account sync, or boot behavior.

## Which phones usually ship cleaner

Unlocked Pixel phones are still the cleanest mainstream Android option. They include Google's apps, but they usually avoid carrier bundles when bought directly. Motorola is often close, with a handful of Moto features rather than a second full app ecosystem.

Samsung is better than it used to be, but it still duplicates several Google categories with Samsung versions: browser, app store, gallery, notes, account services, TV, and news-style feeds. Some people like that. If you don't, it feels like clutter.

Xiaomi, Redmi, Poco, Oppo, Realme, and Vivo vary heavily by country and price tier. A European model and an Indian-market model with the same hardware name can ship with different third-party apps, recommendations, ads, or app-install prompts. Carrier models are their own category, because the carrier can add apps regardless of the manufacturer.

Nothing and OnePlus have moved around over the years. Some releases are clean, some have added more partner services than fans expected. Treat brand reputation as a hint, not proof. Check current reviews for the exact model and region before buying.

## What not to disable

Don't disable Google Play Services. Many apps rely on it for push notifications, location, sign-in, maps, safety checks, and billing. Disabling it turns a small annoyance into a broken phone.

Be careful with Android System WebView, the default launcher, the dialer, messaging app, keyboard, permissions controller, package installer, Settings, contacts provider, media provider, and anything with `framework` or `provider` in the package name. These sound boring because they're infrastructure.

Individual Google apps such as Google TV, YouTube Music, Google News, or Google One are usually safe to disable if you don't use them. Chrome is usually safe if another browser is installed, but OEM behavior varies enough that I still check WebView and browser defaults afterward.

## Can bloatware be malware?

Legitimate apps from Google, Samsung, Motorola, Xiaomi, a carrier, or another known OEM are not automatically malware. They can still be annoying, heavy, or too eager with notifications.

The risk is higher on very cheap phones from obscure brands, unofficial ROM builds, or devices bought from marketplaces where firmware may have been modified. If a pre-installed app pushes ads, installs other apps, asks for strange permissions, or keeps returning after you remove it, search the exact package name before trusting it.

## After a system update

Major Android or OEM updates can re-enable apps you disabled. Monthly security updates usually leave them alone, but it happens often enough that you should check after a big upgrade.

Android 17 doesn't change the basic advice here. It started on supported Pixel devices first, while other brands are expected to roll it into their own Android skins later. On Samsung, Xiaomi, Oppo, and similar phones, the bloatware question still depends more on the OEM image and carrier build than on the Android version number itself.
