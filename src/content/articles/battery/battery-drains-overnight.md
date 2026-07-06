---
title: "Phone battery drains overnight: causes and fixes"
description: "You go to bed with 62% battery, wake up with 41%, and the phone has been face-down all night. That feels wrong because it is wrong. A small overnight drop is normal, but a 20-point drop means the phone spent the night doing work."
listSummary: "Overnight battery drain fixes"
hub: "battery"
sourceNumber: 23
order: 13
subgroup: "Drain"
tags: ["battery","drain","troubleshooting","android","performance"]
draft: false
---
For a healthy Android phone, 2 to 5% overnight loss is a boring result. It still keeps a cellular connection alive, listens for notifications, syncs some account data, and runs small maintenance jobs. Once the loss is above 10% night after night, stop treating it as normal background noise.

## Check the battery screen first

Start with **Settings > Battery > Battery usage**. On Pixels, tap **View by apps** if the screen is grouped by system and app usage. On Samsung, go to **Settings > Battery and device care > Battery**, then open the usage graph or **View details**. The exact labels move around, but the pattern you're looking for is the same: an app with battery use during hours when you weren't using the phone.

Don't obsess over one odd night. A backup, Play Store update, photo sync, or system job can create one ugly dip. What matters is repetition. If the same app appears in the top list every morning, especially with background use, it's the first suspect.

System entries are harder. **Google Play services**, **Android System**, and **Mobile network standby** can hide the real cause because they sit underneath other features. If Google Play services is high, think account sync, location, push notifications, Google Photos, or a stuck Google account. If mobile standby is high, think signal.

## Test the radio before changing ten settings

Weak signal is one of the easiest overnight drains to miss. Your phone may sit in one corner of the bedroom with one bar of LTE or 5G, then raise modem power again and again to stay connected. Samsung's own battery guidance calls out unstable or weak network connection as a reason battery drains faster.

The clean test is simple:

1. Charge the phone to around 80%.
2. Note the exact battery level.
3. Turn on airplane mode before bed. If your phone keeps Wi-Fi or Bluetooth on in airplane mode, turn those off too for this test.
4. Check the level in the morning.

If the phone loses 1 to 3% in airplane mode but 12% with the network on, the problem probably isn't a mystery app. It's the connection. Move the phone closer to a window, use Wi-Fi calling if your carrier supports it, or keep airplane mode on overnight when you don't need calls.

Wi-Fi can do the same thing at the edge of router range. A phone that drops and rejoins Wi-Fi every few minutes wakes the processor and radio each time. If your bedroom is a dead spot, fixing the router placement may do more than uninstalling apps.

## Always-on display is small, until it runs all night

Always-on display doesn't usually destroy battery on a modern AMOLED phone, but it isn't free. Samsung also treats Always On Display as one of the display features that can be limited by power saving. Over an eight-hour night, even a small hourly cost can be the difference between a normal drop and a noticeable one.

On Samsung, use **Settings > Lock screen > Always On Display** and choose **Tap to show**, **As scheduled**, or **For new notifications** instead of showing it all night. On Pixel, look under **Settings > Display > Lock screen** and turn off **Always show time and info**.

Ambient wake features are quieter but sneakier. If the screen lights for every notification, nearby movement, or vibration on a nightstand, that adds up. Turn off wake-for-notification options if the lock screen keeps lighting up while you sleep.

## Restrict the apps that don't need the night shift

Android is better at background control than it used to be, but some apps still push their luck. Social feeds, shopping apps, news apps, weather widgets, email clients, and fitness apps can all wake the phone after the screen turns off.

Use restrictions on individual apps instead of force-closing everything. Swiping apps away from Recents is not a battery strategy. Android already manages memory and background state, and closing everything often just makes apps reload later.

On Pixel and other stock-style Android phones, open **Settings > Apps > [app name] > App battery usage**. Newer wording may show **Allow background usage** with an optimized setting, while older Android builds used labels such as **Unrestricted**, **Optimized**, and **Restricted**. The goal is the same: stop non-essential apps from running freely in the background.

On Samsung, go to **Settings > Battery and device care > Battery > Background usage limits**. Put apps you don't need overnight into **Sleeping apps** or **Deep sleeping apps**. Samsung says deep sleeping apps only work when opened, which is exactly what you want for games, shopping apps, and random utilities.

Be careful with messaging, alarm, calendar, and security apps. Restrict those too hard and you may delay notifications you actually want.

## Sync, backup, and location are the quiet drainers

A phone with three Google accounts does more background work than a phone with one. Gmail, Calendar, Contacts, Drive, Photos, and app data all have their own sync behavior. Google even lists deleting unused accounts as a battery-saving step, which tells you how real this category is.

Open **Settings > Passwords & accounts** or **Settings > Accounts**, depending on the phone. Look for accounts with sync errors, repeated sign-in prompts, or services you don't need. A stale work account that fails to sync all night is a classic drain source.

Google Photos deserves a separate mention. Backup is usually smarter than people assume, and it may pause to save battery when the screen is off, but photo and video backup can still be heavy when it runs. If the drain lines up with a lot of new photos, check Photos backup settings before blaming the battery.

Location has the same pattern. Go to **Settings > Location > App location permissions** and check anything under **Allowed all the time**. Weather, family tracking, fitness, delivery, and automation apps are common entries here. Change apps that don't need overnight location to **Allow only while using the app**.

## Give updates a little time, but not endless time

After a system update, the phone may spend extra time optimizing apps, rebuilding caches, downloading app updates, and relearning background patterns. A warm phone and worse battery for the first day or two after a major update isn't shocking. That includes Pixel phones moving to Android 17, which Google released on June 16, 2026 before wider non-Pixel stable availability.

A week later, that excuse is gone.

If overnight drain started right after an update and didn't settle, check app updates in the Play Store, restart the phone, and look again at battery usage. On Samsung, wiping the cache partition is still a useful post-update fix and Samsung documents the recovery-menu path for it. On Pixel and many newer A/B update devices, that old cache-partition option may not exist, so don't waste time hunting for a menu your phone doesn't have.

## When the battery itself is the problem

A worn battery makes every drain number look worse. The phone may use the same amount of power overnight, but that power is now a bigger slice of the remaining capacity.

On Pixel 8a and later, check **Settings > Battery > Battery health**. Google's current Pixel docs say **Reduced** means remaining capacity is below 80%, and Google recommends replacement below 80% or at the rated cycle count. Older Pixels, including Pixel 8 Pro and earlier, don't show the same health status page.

On Samsung, use **Samsung Members > Support > Phone diagnostics > Battery status**. It gives a status such as Normal, Weak, or Bad, not always a neat percentage. That's less satisfying, but it's still better than guessing.

Avoid relying on dialer codes for battery health. Some hidden menus exist on some phones, but they're inconsistent across brands, carriers, and Android versions. For a consumer article, manufacturer diagnostics are the safer advice.

## A three-night isolation test

If the cause still isn't obvious, don't change fifteen things at once. Run this instead.

Night 1: airplane mode, Wi-Fi off, Bluetooth off. If the drain drops under 3%, the radio or network-connected apps are the issue.

Night 2: normal network, Always-on display off, wake-for-notification off. If the drain improves, the lock screen was part of it.

Night 3: normal network, Battery Saver on overnight. If the drain improves, background apps, sync, or location are the likely cause.

That's it. The whole point is to separate network, display, and background work instead of guessing.

## Quick answers

### Is 5% overnight drain normal?

Yes. With Wi-Fi, cellular standby, notifications, and a few accounts syncing, 3 to 5% is fine. Under 3% is excellent. Above 10% every night deserves a closer look.

### Should I turn the phone off at night?

Only if you don't need calls, notifications, or alarms tied to the phone being on. Airplane mode gives most of the battery benefit while keeping the alarm clock available.

### Does Do Not Disturb save battery?

A little, if notifications would otherwise light the screen. Do Not Disturb doesn't stop apps from syncing or holding background work by itself.

### Could malware cause overnight battery drain?

It can, but it's not the first explanation on a phone that only uses the Play Store. If drain appears with pop-ups, unknown apps, odd permissions, or unusual data use, run Play Protect from the Play Store and test Safe Mode. Safe Mode disables downloaded apps, so a big improvement there points to a third-party app.

Most overnight drain has a boring cause: weak signal, a lock-screen feature, sync, location, or one app that won't sleep. Start there before assuming the phone needs repair.
