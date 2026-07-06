---
title: "Why your phone freezes and how to fix it"
description: "Android phone freezing or becoming unresponsive? Learn what causes it, how to restart it safely, and how to stop the same problem coming back."
listSummary: "Freeze causes and fixes"
hub: "performance"
sourceNumber: 73
order: 10
tags: ["performance","speed","android","optimization","troubleshooting"]
draft: false
---
---

You tap the screen and nothing moves. The app is still there, the clock may be stuck, and even the back gesture does nothing. That's a frozen phone.

A slow phone still reacts, just late. A frozen phone doesn't react at all, at least not in any useful way. Most of the time this is a software lockup, not a dead motherboard. Android ran out of breathing room, one app got stuck, or the system is waiting on something that never finishes.

One freeze every few weeks isn't worth panicking over. Daily freezes are different. That's when you stop treating it as bad luck and start looking for a pattern.

## Restart it without erasing anything

A force restart is the first move. It cuts power to the running system and starts it again. It doesn't delete photos, apps, messages, or settings.

The button combo depends on the phone:

- On Samsung Galaxy phones, hold Side key or Power + Volume Down until the phone turns off and starts again. Samsung's own guidance says more than 7 seconds, though some models take closer to 10.
- On Google Pixel phones, press and hold Power for up to 60 seconds. Let go when the Google logo appears. On Pixel 6 and later, pressing Power with Volume Up opens the restart menu when the phone still responds, but a true force restart is Power alone.
- On Xiaomi, Redmi, and POCO phones, keep Power pressed for more than 10 seconds. Some models need 15 seconds before anything obvious happens.
- On many other Android phones, try holding Power with Volume Down for 10 to 20 seconds. If that does nothing, hold Power alone for longer.

If your phone has a removable battery, which is rare now, removing and reinserting it does the same job.

Don't keep mashing buttons. Hold the right one long enough. No, really.

## What usually causes freezing

Low RAM is the boring answer, and it's often the right one. Android keeps apps in memory so you can switch back to them quickly. When memory gets tight, Android kills background apps first. If the pressure gets bad enough, even the app on screen can stop behaving.

This hits 3 GB and 4 GB phones hardest. A budget phone with Maps, Spotify, WhatsApp, and a browser open can run into trouble faster than an older flagship with more RAM and cleaner storage. Games, video calls, camera apps, and browsers with too many tabs are the usual suspects.

Full storage causes a different kind of freeze. Android needs internal storage for temporary files, app databases, updates, and system housekeeping. When storage gets close to full, those writes slow down or fail. I wouldn't wait until the phone shows a warning. Once storage is above about 85 to 90 percent, clean it up.

A bad app can also drag the phone down. Look for apps that started the same week the freezing began, apps installed from outside the Play Store, old apps that haven't been updated in months, and cleaner or booster apps that promise to make Android faster. Those apps are often the problem they're supposed to solve.

Heat is another one. When the phone gets too hot, Android reduces CPU and GPU speed to protect the hardware. That's thermal throttling. In direct sun, in a hot car, or while charging and gaming at the same time, throttling can get so aggressive that the phone feels frozen even though it's technically still alive.

System updates can leave things messy for a day or two. Android 17 has just started rolling out, first to supported Pixel phones and then to other eligible devices through 2026. If freezing started right after a major update, install pending app updates, reboot once, and watch for the next monthly patch before assuming hardware is failing.

## Find the pattern

Start with storage. Open Settings > Storage. When storage is more than 85 percent full, delete large videos, unused downloads, old APK files, and apps you don't use. Also check Google Photos or your cloud backup before deleting media you care about.

Then check battery usage. The exact path varies, but look under Settings > Battery > Battery usage. An app using far more battery than makes sense may also be chewing through CPU or memory. A social app using a lot of power after hours of scrolling is normal. A wallpaper app or file manager doing the same thing is suspicious.

Safe Mode is the cleanest test for app trouble. On Pixel, long-press the power menu option and choose Safe Mode. On Samsung, power off, turn the phone back on, then hold Volume Down when the Samsung logo appears. In Safe Mode, downloaded apps are disabled. No freezing there means one of your installed apps is the cause.

After that, uninstall recent apps one at a time. Start with cleaners, antivirus apps, VPNs, custom launchers, battery savers, and anything that requested Accessibility or Device Administrator access. Restart normally between tests.

If you use a microSD card, remove it for a day. A slow or failing card can cause long system hangs, especially when photos, videos, or app data live on the card.

## Prevent the next freeze

Keep storage boringly empty. Around 15 percent free space is a good target, not because Android has a magic number there, but because it gives the system room for updates, cache files, and temporary writes.

Restart the phone once in a while. Weekly is enough for most people. A restart clears stuck background processes and gives Android a clean state. Samsung phones also have automatic restart options under Device Care or Auto optimization, depending on the model and One UI version.

Update the OS and apps. Use Settings > System > Software update for Android updates, though Samsung, Xiaomi, and others may use slightly different wording. In the Play Store, tap your profile icon and go to Manage apps & device to update apps.

Don't rely on RAM booster apps. They force-close processes that Android may reopen seconds later, which wastes battery and can make the phone feel worse. Android's built-in memory management is not perfect, but it understands process priority better than a random booster app.

If freezes line up with heat, remove the case during heavy use, avoid charging while gaming, and keep the phone out of sunlight. runcheck can help here because it logs battery and thermal readings over time, so you can see whether freezes tend to happen during temperature spikes rather than guessing.

## When it looks like hardware

Software is still the more common cause, but hardware does fail.

A phone that freezes in Safe Mode, freezes after a factory reset, and freezes with no third-party apps installed is no longer a normal troubleshooting case. At that point the likely causes are failing internal storage, a battery that can't deliver stable voltage under load, or board damage from a drop or liquid exposure.

Back up anything important before you keep testing. For warranty coverage, contact the manufacturer. If it isn't, get a repair estimate and compare it with the cost of replacing the phone. Main board repairs can get expensive fast, and on older budget phones they often don't make sense.
