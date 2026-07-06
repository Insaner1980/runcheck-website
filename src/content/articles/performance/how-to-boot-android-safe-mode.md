---
title: "How to boot Android into Safe Mode and when to use it"
description: "How to start Android in Safe Mode, what it disables, and how to use it to find problem apps."
listSummary: "Safe Mode troubleshooting"
hub: "performance"
sourceNumber: 70
order: 7
tags: ["battery","drain","troubleshooting","android","performance"]
draft: false
---
How do you know whether your phone is slow because Android is having a bad day or because one app is wrecking everything in the background? Safe Mode is the cleanest test.

Safe Mode starts Android with the system software and built-in apps only. Apps you installed later are disabled until you restart normally. Nothing is deleted. The point is isolation: if the problem disappears in Safe Mode, a third-party app is probably involved. If the problem stays, look at Android itself, storage, the battery, or hardware.

## When Safe Mode is worth using

Use Safe Mode when the phone is crashing, freezing, rebooting, overheating, draining battery unusually fast, or showing pop-ups that will not go away. It is also useful after a major Android update if the phone suddenly feels terrible and battery usage does not clearly point to one app.

It is not only for dramatic failures. If your keyboard lags, the launcher keeps redrawing, or the phone takes several seconds to respond after unlocking, Safe Mode can still answer the important question: is an installed app part of this?

The test is simple. Boot into Safe Mode, use the phone for a few minutes, and try to reproduce the issue.

## Start Safe Mode from a phone that is on

On most Android phones, open the power menu first.

On Pixel 6 and later, including Pixel Fold models, press and hold **Power + Volume Up** for a few seconds. On many other phones, press and hold the **Power** or **Side** button. Samsung phones often use **Side button + Volume Down**, or the power icon in Quick Settings.

When the power menu appears, touch and hold **Power off** or **Restart** on the screen. After a moment, Android should show a Safe Mode prompt. Tap **OK** or **Safe mode**.

The phone restarts. When it finishes, you should see **Safe Mode** in the lower-left corner.

## Start Safe Mode from a phone that is off

This method is useful when the phone is too unstable to reach the power menu.

Turn the phone on normally. As soon as the manufacturer logo or boot animation appears, press and hold **Volume Down**. Keep holding it until the lock screen or home screen loads. If it worked, **Safe Mode** appears at the bottom of the screen.

Timing matters. Press too early and some phones may open the bootloader or Recovery Mode. Press too late and Android boots normally. If it misses, shut down and try again.

## Samsung notes

Samsung supports both routes on current Galaxy phones and tablets.

From a powered-on Galaxy, open the power menu, touch and hold **Power off**, then tap **Safe mode**. From a powered-off Galaxy, turn it on and hold **Volume Down** when the Samsung logo appears.

Samsung also notes that some customization settings, such as wallpapers or themes, may reset after leaving Safe Mode. That is not data loss, but it is irritating. Take a home screen screenshot first if your layout matters.

## If the phone is frozen

If the phone will not respond, force a restart first.

On most Samsung phones, hold **Power + Volume Down** for more than 7 seconds. On many other Android phones, hold **Power** or **Power + Volume Down** for about 10 to 15 seconds until the screen goes dark or the phone restarts.

Then use the powered-off Safe Mode method: turn it on, wait for the logo, hold **Volume Down**.

## What to test in Safe Mode

Do not boot into Safe Mode and immediately leave. Use the phone long enough to learn something.

Try the thing that was broken. Open Settings. Unlock the phone a few times. Type in a text field. Watch battery temperature. Leave the screen on for five minutes. If the phone was randomly rebooting, let it sit for a while.

Safe Mode disables downloaded apps, so your normal messaging, social, banking, VPN, launcher, and keyboard apps may not work. That is expected. Built-in phone, SMS, Wi-Fi, mobile data, and Settings should still be available, though Google notes that Airplane mode may turn on automatically on some Pixel devices when entering Safe Mode. Turn it off if you need connectivity for testing.

## If the problem disappears

A third-party app is the main suspect.

Start with the apps that changed recently. New installs, recent updates, launchers, VPNs, cleaner apps, automation apps, battery savers, keyboard apps, and anything with accessibility or device admin permissions deserve attention first.

Exit Safe Mode, uninstall or disable one suspect app, and test normally. Do not remove ten apps at once unless the phone is unusable. One change at a time tells you what actually fixed it.

Some apps are stubborn because they have device admin access. If Android refuses to uninstall one, check **Settings > Security & privacy > More security settings > Device admin apps** or the closest equivalent on your phone. The path varies, but the idea is the same: remove the app's admin access first, then uninstall it.

## If the problem stays

If Safe Mode does not help, the cause is probably not a downloaded app.

That points to a system bug, corrupted system state, storage pressure, a bad update, a failing battery, overheating, or another hardware issue. After a recent Android 17 upgrade, for example, I would check whether other owners of the same model are reporting the same symptom before doing anything drastic.

The next steps are practical: update the system again if a patch is available, free up storage, check battery usage and temperature, wipe the cache partition only if your phone still offers that option, and back up important data before considering a factory reset.

A factory reset is a last resort. It can fix software problems, but it is a lot of work and it will not repair aging storage, a weak battery, or a damaged button.

## How to exit Safe Mode

Restart the phone normally. That is it.

Press the power button or use the power icon in Quick Settings, then tap **Restart**. Samsung also offers a Safe Mode notification you can tap to turn it off on some models.

If the phone keeps returning to Safe Mode, check the **Volume Down** button. A stuck button, a tight case, dirt around the key, or a damaged switch can trigger Safe Mode during boot. Remove the case and restart again.

## Limits and common surprises

Safe Mode does not delete apps, photos, messages, or account data. It only disables downloaded apps while the mode is active.

Home screen widgets from third-party apps may disappear while you are in Safe Mode. Google specifically recommends taking a screenshot before using Safe Mode if widgets matter to you. They may need to be added back after you leave.

Safe Mode also does not disable manufacturer system apps. Samsung, Xiaomi, OnePlus, carrier, and Google system components may still run because Android treats them as part of the installed system image. If a preinstalled app is causing trouble, Safe Mode may not isolate it.

That limitation is annoying, but Safe Mode is still worth using. It answers one of the most useful troubleshooting questions in under five minutes.
