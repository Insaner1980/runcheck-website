---
title: "Phone keeps restarting: causes and fixes"
description: "If your Android phone keeps restarting on its own, here's how to tell whether it's a bad app, a software update problem, a weak battery, or a hardware fault."
listSummary: "Restart loop troubleshooting"
hub: "performance"
sourceNumber: 74
order: 11
tags: ["performance","speed","android","optimization","troubleshooting"]
draft: false
---
---

Is the phone restarting, or is it stuck looping at startup? That difference matters.

A random restart means the phone gets back to the lock screen and works for a while before doing it again. Startup looping means it never really starts. You see the Samsung, Pixel, Xiaomi, or Android logo, then it reboots and tries again. Random restarts are often fixable at home. Startup loops can be fixable too, but they get ugly faster.

Don't start by wiping the phone. That's the last resort, not the opening move.

## Quick checks before you dig deeper

Charge it first. A nearly empty battery can shut the phone down so abruptly that it looks like a restart. Plug it into a wall charger for 30 minutes with a cable and adapter you know work. When restarts happen while charging, try a different charger before blaming Android.

Force a clean restart. On Samsung Galaxy phones, hold Side key or Power + Volume Down until the phone turns off and restarts. On Pixel phones, hold Power for up to 60 seconds. On Xiaomi and Redmi phones, hold Power for more than 10 seconds. This doesn't erase anything.

Remove the microSD card. A corrupted card can trigger restart loops when Android tries to mount or scan it. If the restarts stop, back up the card on a computer, format it, and test again. If the same card causes trouble after formatting, replace it.

Check the buttons. A stuck Power button is boring, but it happens. So do tight cases that press the button just enough to trigger restarts. Take the case off and press every button until you feel a normal click.

## If it started after installing an app

Third-party apps are a common cause of repeated restarts, especially apps installed outside the Play Store or apps that run deep background services. Cleaners, antivirus tools, VPNs, custom launchers, automation apps, and battery optimizers deserve extra suspicion.

Use Safe Mode to test this. On Pixel, open the power menu and long-press Power off or Restart until the Safe Mode prompt appears. On Samsung, power the phone off, turn it on, and hold Volume Down when the Samsung logo appears. Safe Mode disables downloaded apps while leaving system apps running.

When Safe Mode stays stable, hardware probably isn't the first suspect. Restart normally and uninstall the most recent or most intrusive apps one by one. Pay attention to anything with Accessibility Service, Device Administrator, notification access, or always-on VPN permission.

Restarts in Safe Mode mean you should move on.

## If it started after a system update

Major Android updates can expose old app bugs, stale cached data, or manufacturer-specific firmware problems. Android 17 is current now, and Google released it first for supported Pixel devices. Other eligible Android devices are expected to receive it later through 2026, depending on the manufacturer and carrier.

If your Pixel started restarting right after Android 17, check for a newer monthly update before doing anything destructive. Also update apps, Google Play services, Android System WebView, and Chrome from the Play Store. A lot of update pain is really compatibility pain.

On Samsung phones and some other devices, wiping the cache partition from Recovery Mode can help after an update and doesn't erase personal data. Pixel phones don't expose the same cache partition option in normal recovery, so don't waste time looking for it there.

If reboots continue after updates and cache cleanup, back up the phone. Then consider Settings > System > Reset options > Erase all data, or the equivalent path on your device. A full reset is annoying, but it gives you a clean answer: if the problem survives a reset with no restored apps, it probably isn't an app.

## Battery, heat, and power delivery

A worn battery can cause restarts under load. The phone may sit idle for hours, then reboot the moment you open the camera, launch a game, turn brightness up, or start navigation. That pattern points to voltage drop, not a random Android bug.

Battery health pages are inconsistent across Android. Newer Pixel phones, Pixel 8a and later, can show Battery health under Settings > Battery > Battery health. Samsung directs users to Samsung Members > Support > Phone diagnostics for battery status. Other brands may show less, or nothing useful at all. That's frustrating, but it's normal for Android.

A battery status below about 80 percent of original capacity is a warning sign if restarts happen under load. The number alone doesn't prove anything, because phones estimate it differently, but it fits the pattern.

Heat can restart a phone too. If the device is hot when it reboots, stop charging it, remove the case, close demanding apps, and let it cool. Charging while gaming or navigating in a hot car is a reliable way to make a borderline phone fall over.

## What to do with a boot loop

This is the hard version. Try the simple things first anyway.

Force restart the phone using the right button method for your brand. Remove the microSD card and SIM tray, then try again. Leave the phone charging for 30 minutes and test with another cable.

If it still loops, enter Recovery Mode. The exact button combo varies by manufacturer. Pixel usually starts from the bootloader with Power + Volume Down, then you select Recovery Mode. Samsung often uses Volume Up + Power while the phone is off, and many newer Galaxy models need to be connected to USB first.

In Recovery Mode, try wiping the cache partition if your phone offers it. If not, skip it. The next step is Wipe data/factory reset, which erases the phone.

Firmware repair is possible, but be honest about your comfort level. Pixel owners should start with Google's Pixel Update and Software Repair tool when supported. Samsung owners can use Smart Switch emergency software recovery in some cases. Tools like Odin and MiFlash are real, but they're easier to misuse than most tutorials admit.

## When to stop troubleshooting

Get help when restarts continue after a factory reset, can't stay in Recovery Mode, or reboots before you can select anything. Also stop if the battery is swollen, the phone got wet, or the problem began right after a hard drop.

Battery replacement is often the cheapest hardware fix. Main board or storage failure is different. Those repairs can cost enough that replacing an older phone is the more sensible call.
