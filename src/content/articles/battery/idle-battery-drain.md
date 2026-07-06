---
title: "Why your phone loses battery when not in use"
description: "Your phone is never completely idle unless it's powered off. Screen off just means the display is off. The modem, Wi-Fi, notifications, alarms, account sync, sensors, and security services can still wake up."
listSummary: "Idle drain causes and fixes"
hub: "battery"
sourceNumber: 26
order: 16
subgroup: "Drain"
tags: ["battery","drain","troubleshooting","android","performance"]
draft: false
---
That's normal. Excessive idle drain is not.

## What normal idle drain looks like

For a healthy Android phone on Wi-Fi with decent signal, losing about 2 to 6% over an eight-hour night is normal. A very quiet phone may lose less. A phone with cellular data, weak signal, many accounts, a smartwatch, and Always-on display may lose more.

Percentages are also a little misleading. A new 5,000 mAh battery and a worn battery that now holds much less charge can both spend the same mAh overnight, but the worn battery shows a bigger percentage drop. That's why an older phone can suddenly make normal background work look dramatic.

Heat matters too. Google warns that a hot phone drains faster even when not in use, and that kind of drain can also damage the battery over time. Don't leave the phone under a pillow, on a hot wireless charger, or in direct sun and then judge idle drain from that night.

My practical threshold is simple: under 5% overnight is fine, 5 to 10% is worth watching, and more than 10% repeatedly means something deserves attention.

## Why Android doesn't fully sleep

Android uses Doze and App Standby to reduce work when the device is idle. In Doze, Android defers jobs and syncs, limits network access, and gives apps maintenance windows instead of letting every app wake whenever it wants.

There are exceptions. High-priority push notifications can wake an app briefly. Some foreground services are allowed because the user expects them, such as navigation, music, or a health tracker. Alarm apps need to fire. A phone that's moving may not enter the deepest idle state as quickly as a phone sitting still on a table.

This is why idle drain is messy. Android is trying to balance battery life with being reachable.

## The biggest causes of idle drain

Weak signal is the first thing to test. Samsung's battery support notes that unstable network connection and weak signal can increase drain. If your bedroom has poor reception, the phone may spend the whole night maintaining a marginal connection.

Always-on display is the visible one. It may only use a small amount per hour, but it runs for hours. On Samsung, switch it to **Tap to show**, **As scheduled**, or **For new notifications**. On Pixel, turn off **Always show time and info** under the lock screen settings.

Background apps are the broad category. Social apps, email, cloud storage, messaging, shopping apps, weather widgets, and fitness apps can all wake the phone. Some need to. Many don't.

Location is the quiet one. Open **Settings > Location > App location permissions** and check **Allowed all the time**. If a weather app or social app doesn't need location while you sleep, change it to **Allow only while using the app**.

Sync errors are the boring one. An old Google account, work account, or email account that can't authenticate can keep retrying. Open **Settings > Accounts** or **Settings > Passwords & accounts** and look for warnings.

Bluetooth accessories are easy to miss. Watches and trackers can keep a phone busy through reconnect attempts, health sync, or notification mirroring. Test one night with Bluetooth off if idle drain started after pairing something new.

## The clean idle test

Charge the phone to at least 80%. Note the exact battery level and time. Turn on airplane mode. If Wi-Fi or Bluetooth stay on, turn them off manually too. Leave the phone untouched for four to six hours with the screen off.

If it loses less than 1 to 2%, the battery and core system are probably fine. Your normal drain is coming from network, sync, location, Bluetooth, or background apps.

If it still loses a lot, boot into Safe Mode and repeat the test. Safe Mode disables downloaded apps. If Safe Mode fixes the drain, one of your apps is responsible. Start with recently installed or recently updated apps. This is especially useful after a major update such as Android 17 on Pixel, because a newly incompatible app can look like system drain.

If airplane mode and Safe Mode don't help, check battery health. On Pixel 8a and later, **Settings > Battery > Battery health** shows health status and capacity. On Samsung, use **Samsung Members > Support > Phone diagnostics > Battery status**.

## Fix idle drain without breaking the phone

You don't need to turn your smartphone into a dumb alarm clock. Be selective.

Put rarely used apps to sleep. Samsung gives you **Sleeping apps** and **Deep sleeping apps** under **Battery and device care > Battery > Background usage limits**. Deep sleeping apps only run when opened, which is perfect for games and shopping apps.

Restrict background battery use on apps that don't need instant updates. On Pixel-style Android, use **Settings > Apps > [app] > App battery usage**. Keep messaging, alarms, calendar, and security apps optimized rather than fully restricted unless you're sure.

Turn off background data for apps that don't need it. Some phones expose this under **Settings > Apps > [app] > Mobile data & Wi-Fi > Background data**. A banking app or game doesn't need to refresh while you're asleep.

Trim notifications. Marketing notifications are battery noise. Turn them off in **Settings > Notifications > App notifications** or inside the app.

Use Battery Saver overnight if you don't want to micromanage. Google says Battery Saver limits or turns off background activity and may delay some features, network connections, and apps. That's the trade-off. For sleeping hours, it's often acceptable.

Delete unused accounts. Google lists this as a battery-saving step, and it's one of the few fixes that also makes the phone cleaner.

## A note about Wi-Fi and Bluetooth scanning

Android can use Wi-Fi, Bluetooth, and sensor data to improve location accuracy. That's useful for maps and nearby features, but it's another source of background activity. On Android 12 and higher, you can separately manage precise location per app, which is a better first step than turning off everything globally.

If you still need to be stricter, look under **Settings > Location > Location services** for location accuracy, Wi-Fi scanning, or Bluetooth scanning options. Names vary by brand.

Don't disable features you rely on just because a battery article told you to. If Find Hub, trusted places, watch unlock, or family location sharing matters to you, keep it on and fix the real drain somewhere else.

## When idle drain is worth a repair visit

A phone that loses more than 10% overnight with normal connectivity needs troubleshooting. A phone that loses more than 10% overnight in airplane mode and Safe Mode is different. That points toward battery age, hardware fault, or a low-level system problem.

Before repair, update the system, update apps, restart, and check battery diagnostics. If the battery health tool says Reduced, Weak, or Bad, don't keep hunting for a magical setting. The battery is telling you what happened.

Idle drain is supposed to be boring. When it isn't, isolate the network first, then apps, then battery health.
