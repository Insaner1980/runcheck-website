---
title: "Android phone won't turn on: troubleshooting guide"
description: "Android phone won't turn on or is stuck on a black screen? Work through the safest checks first, from charging and force restart to Recovery Mode and repair options."
listSummary: "No-power troubleshooting steps"
hub: "performance"
sourceNumber: 75
order: 12
tags: ["runcheck","seo","android","article","guide"]
draft: false
---
---

Someone plugs in a phone, sees nothing, presses Power five times, and assumes it's dead. Sometimes it is. More often, the battery is fully drained, the software is frozen with the screen off, or the display has failed while the phone itself is still running.

The order matters here. Start with the low-risk checks. Don't jump straight to factory reset tools unless Android clearly starts loading and you have no other route left.

## Charge it like the battery is truly empty

Use a wall charger, not a laptop USB port and not a wireless charger. Wireless charging is convenient when everything works, but it adds alignment and heat variables you don't need during troubleshooting.

Plug in the phone with a known-good cable and adapter. Then leave it alone for at least 15 minutes. A deeply discharged phone may show no battery icon at first. That's normal.

After 15 minutes, look for any sign of life. A battery icon, a vibration, a charging sound, or a tiny LED means power is getting in. Let it charge to at least 10 percent before trying to boot.

If nothing appears, change one thing at a time: cable, charger, outlet. Check the USB-C port with a flashlight. Pocket lint can pack itself into the port so tightly that the cable feels inserted but doesn't actually make a solid connection. Use a wooden toothpick or plastic pick if you clean it. Don't use metal.

## Force restart it the right way

A black screen doesn't always mean Android is off. It may be frozen with the display asleep.

Use the force restart method for your brand:

- On Pixel phones, hold Power for up to 60 seconds. Release when the Google logo appears.
- On Samsung Galaxy phones, hold Side key or Power + Volume Down until the phone turns off and restarts. This is usually more than 7 seconds.
- On Xiaomi, Redmi, and POCO phones, hold Power for more than 10 seconds.
- On other Android phones, try Power and Volume Down together for 10 to 20 seconds. If that fails, hold Power alone longer.

Vibration, notification sounds, or ringing from another phone point toward the screen rather than the whole device. That's a useful clue. A display repair is annoying, but it's a different problem from a dead main board.

## Check whether the screen is the only dead part

Call the phone. Use Find My Device from another device if it's enabled. Connect the phone to a charger and listen for a sound or feel for vibration. Plug it into a computer and see whether Windows, macOS, or Android File Transfer notices anything.

If the computer detects the phone, don't assume your data is safe yet. Most modern Android phones won't expose files over USB until you unlock the screen and approve file transfer. Still, detection means at least part of the hardware stack is alive.

A cracked screen with black spots, lines, or a faint backlight points to display damage. Recent liquid exposure is more serious. Even brief liquid exposure can corrode connectors or short power circuitry later.

A swollen battery is the one situation where you stop. If the back is bulging, the screen is lifting, or the phone doesn't sit flat, don't charge it and don't press it closed. Take it to a repair center.

## If it reaches the logo but won't boot

Reaching the Samsung, Pixel, Xiaomi, or Android logo means the device is not completely dead. It's failing during startup.

Try Safe Mode when startup gets far enough. On many devices, you can hold Volume Down during boot to start with downloaded apps disabled. If Safe Mode works, uninstall recent apps and restart normally.

A loop or freeze before the lock screen calls for Recovery Mode. Pixel usually starts by holding Power and Volume Down to reach the bootloader, then you choose Recovery Mode. Samsung commonly uses Volume Up + Power while the device is off, and newer models may need a USB cable connected. Xiaomi often uses Volume Up + Power.

In Recovery Mode, choose Reboot system now first. If your phone offers Wipe cache partition, try that next because it doesn't erase your data. Pixel phones generally don't show this option, so skip it there. Wipe data/factory reset is the last local step because it erases the phone.

Android 17 is now out for supported Pixel phones, with other eligible devices following later through 2026. If the startup problem began right after that upgrade or another major OS update, check the manufacturer's support page for a repair tool or update notice before wiping data.

## Use computer repair tools carefully

Computer tools can reinstall Android, but they aren't magic file savers.

For Pixel 4a and later, Google's Pixel Update and Software Repair tool is the safest first stop when the phone can connect over USB. For Pixel factory images, Android Flash Tool can flash supported Pixel devices through a WebUSB browser, but it requires the right device state and may require unlocking or wiping.

Samsung Smart Switch includes emergency software recovery for some update failures. Xiaomi's MiFlash can reinstall firmware on supported devices, but it often requires bootloader or fastboot access and the correct ROM for your exact model.

This is where tutorials get dangerous. Flashing the wrong build can make recovery harder. If you don't already know your model number, region, bootloader state, and backup status, a repair shop is the safer path.

## When it's probably hardware

No charging icon, no vibration, no USB detection, and no response to force restart after multiple chargers points to hardware.

The common failures are a dead battery, damaged USB-C port, failed power management chip, display failure, liquid damage, or main board failure. Battery and port repairs are usually the cheaper end. Board-level faults are not.

Under warranty or insurance, use that channel first. Third-party repair can be fine, but warranty providers may reject later claims if the phone has been opened elsewhere.

## Saving your data

Without a backup, boot failure leaves you with fewer options fast. Recovery Mode won't let a normal, non-rooted phone expose your files. USB file transfer usually needs the phone unlocked. A dead display can sometimes be worked around with USB-C video output, a hub, keyboard, and mouse, but only on models that support display output and still boot.

Professional data recovery exists, but it's expensive and not guaranteed. Modern Android encryption also means the storage chip alone usually isn't enough. The device has to be repaired far enough to unlock it.

That's the part nobody likes hearing. Backups are boring until the day they aren't.
