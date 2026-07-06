---
title: "Android phone maintenance checklist: monthly, quarterly, yearly"
description: "Most Android phones don't need constant attention. But ignoring maintenance entirely means problems stack up until the phone feels sluggish, the battery barely lasts half a day, and storage is packed with files nobody remembers downloading. A few minutes of upkeep on a regular schedule prevents most of this."
listSummary: "Monthly phone maintenance cadence"
hub: "device-health"
sourceNumber: 8
order: 4
tags: ["storage","android","cleanup","optimization","guide"]
draft: false
---
This checklist scales to how you actually use a phone. Not everything needs to happen every month, and some tasks only matter once or twice a year.

## Every month

**Check cached data from large or misbehaving apps.** Go to **Settings > Storage > Other apps** (the exact path varies by manufacturer). Tap the apps that use the most cache: browsers, social media, and streaming apps tend to accumulate hundreds of megabytes. Clearing cache doesn't delete saved data or passwords. It removes temporary files the app will rebuild as needed. Do it when an app's cache has grown huge or the app is acting strangely, not as a ritual for every app every month.

On Samsung phones, Device Care at **Settings > Battery and device care** (One UI 4 and above) or **Settings > Device care** (older One UI) handles this with an "Optimize now" button. It clears cached files, closes background apps, and checks for obvious issues. Convenient, but aggressive. It sometimes kills apps you'd rather keep running.

**Check battery usage patterns.** Open **Settings > Battery > Battery usage** (stock Android and Pixel) or **Settings > Battery and device care > Battery** (Samsung) and review which apps consumed the most power over the past week. An app near the top that doesn't get much active use is likely misbehaving in the background. On Android 12 and above, restrict it at **Settings > Apps > [app name] > Battery > Restricted**. On older versions, the option is under **Settings > Apps > [app name] > Battery > Background restriction**. Samsung phones offer additional control through the "Sleeping apps" and "Deep sleeping apps" lists under Device Care.

**Review app permissions.** Go to **Settings > Privacy > Permission manager** (Android 12+) or **Settings > Apps > App permissions** (Android 10-11). Check which apps have access to location, camera, microphone, and files. Revoke anything that doesn't make sense, like a flashlight app accessing contacts. On Android 11 and above, unused apps can lose permissions automatically after a few months. Google Play services can also bring permission auto-reset to some Android 6 through Android 10 devices, but behavior varies. Manually checking still catches apps that slipped through or still have access you no longer want.

**Install available updates.** Check **Settings > Software update** (or **System > System update** on stock Android) for OS patches. Then open the Google Play Store, tap your profile icon, and select **Manage apps & device > Updates available**. Security patches matter more than feature updates. They close vulnerabilities that are actively exploited.

**Delete screenshots and downloads you no longer need.** The Downloads and Screenshots folders grow silently. Open **Files by Google** or the manufacturer's file manager and sort by date. Anything older than a month that hasn't been opened is probably safe to remove.

## Every three months

**Restart the phone.** Sounds trivial, but many people never power off their phones. A restart clears working memory, terminates stuck background processes, and resets temporary network states. Phones that haven't been restarted in weeks sometimes exhibit odd behavior (sluggish animations, Wi-Fi dropping, Bluetooth refusing to pair) that vanishes after a reboot. Samsung's Auto Restart feature (**Settings > General management > Reset > Auto restart**) can schedule this weekly.

**Audit installed apps.** Open **Settings > Apps** and scroll through the list. Anything untouched for three months can go. Every installed app, even one that never opens, can have background services, receive push notifications, and take up storage. On Android 12+, unused apps eventually enter a "hibernated" state and lose permissions, but they still occupy storage.

**Check storage health.** Beyond clearing space, look at overall usage at **Settings > Storage**. If internal storage exceeds 80%, the phone starts slowing down. NAND flash needs free space for write operations and wear leveling. Keep at least 15-20% free.

**Test the charging port and cable.** Plug in the charger and check that the connection is solid, with no wiggling or intermittent charging. Clean the USB-C port gently with a wooden toothpick if lint has accumulated. A loose or dirty port is one of the most common hardware complaints, and it's almost always fixable without a repair shop.

**Verify backup status.** The backup settings location has moved around across Android versions: try **Settings > Google > Backup**, **Settings > Google > All services > Backup**, or **Settings > System > Backup** on stock Android 9-11. On Samsung: **Settings > Accounts and backup > Backup data**. Confirm backup is on and check the "Last backup" timestamp. If it's older than a week, tap "Back up now." Google One backup covers app data, call history, contacts, device settings, and SMS. Photos need a separate check: open Google Photos and confirm backup is active there too.

**Run a quick battery health check.** If you've been using AccuBattery or similar, check the estimated health percentage. After a year of normal use, many recent phones are still above 90%, but heat, heavy use, and frequent full charges can pull that down faster. Between 80-90% is common on older daily drivers. Below 80%, replacement becomes worth considering. Pixel 8a and later show battery health and cycle count directly in Settings. Some newer Samsung models show battery health percentage and cycle count too, but the page depends on model, region, and One UI version.

## Every six months

**Review notification settings.** Apps accumulate notification permissions over time. Go to **Settings > Notifications > App notifications** and turn off notifications for apps that don't need to interrupt you. Less battery drain from constant wake-ups, and the notification shade stays usable.

**Check for rogue background processes.** Enable Developer Options (**Settings > About phone > tap Build number seven times**), then look at **Settings > Developer options > Running services**. This shows which apps and services are active in memory. Anything consuming RAM that isn't a system process or an actively used app deserves investigation.

**Clean the phone physically.** Power off, wipe the screen with a microfiber cloth slightly dampened with water or a 70% isopropyl alcohol wipe. Clean speaker grilles and microphone openings with a soft brush. Check the charging port for debris. Remove the case and clean underneath, since trapped moisture and grit can damage the frame or cause overheating by restricting airflow.

**Evaluate your case and screen protector.** Cases wear out. A case with cracked corners or a loose fit isn't protecting anything. Screen protectors accumulate scratches that reduce touch sensitivity and display clarity. Replacing a worn screen protector costs very little compared to replacing the screen.

## Once a year

**Run a full diagnostic.** Go beyond the monthly battery check. Test the display for dead pixels (display a pure white, red, green, and blue image in full screen), check all sensors (compass, accelerometer, gyroscope, proximity), verify GPS lock time, and test all speakers and microphones. Use the built-in diagnostic tool where available: `*#0*#` on many Samsung phones, `*#*#6484#*#*` on many Xiaomi phones, `*#*#7287#*#*` for Pixel repair diagnostics, Samsung Members diagnostics, or a reputable third-party tool.

**Consider a factory reset, carefully.** A phone with over a year of heavy use, hundreds of app installs and uninstalls, can accumulate leftover data. A factory reset followed by a restore from backup gives the system a clean slate. Especially worth it after a major OS upgrade (Android 16 to Android 17, for example) if the phone feels sluggish afterward. But make sure the backup is complete and verified first.

**Assess battery health and decide on replacement.** After a year of daily use, many batteries sit between 85-95% of original capacity depending on model, charging habits, and ambient temperatures. Below 80%, look into replacement. Samsung offers battery replacement through authorized service centers, Google's Pixel repair program supports out-of-warranty battery swaps, and independent repair shops handle the job for roughly €50-200 depending on model, country, part quality, and warranty.

**Review data retention and privacy settings.** Check **Settings > Google > Manage your Google Account > Data & privacy** and review what's being collected. Delete old location history, web activity, and YouTube history if it's not needed. Also review which third-party apps have access to the Google account at **myaccount.google.com/permissions**.

## What about "cleaner" and "booster" apps?

Skip them. Apps that promise to "clean RAM" or "boost performance" by closing background processes are either useless or harmful. Android manages memory on its own. Aggressively killing background apps forces them to restart from scratch, which uses more battery and CPU than leaving them alone. Google Play Protect already scans for malware. The tasks above cover everything a phone actually needs.

**Files by Google** is the exception. It identifies large files, duplicate photos, and unused apps without the predatory ads and fake virus warnings that plague most "cleaner" apps.

## Adapting the schedule to older phones

Phones running Android 10 or 11 that won't receive further OS updates still benefit from this routine, with adjustments. Security patches may stop arriving, so avoiding sideloaded APKs and sticking to the Play Store becomes more important. Storage management matters more on phones with 32 or 64 GB, where a quarterly cleanup might need to happen monthly. Battery degradation is likely further along, making the health check more relevant. If the battery is below 75% and the phone is out of warranty, replacement or upgrade are the realistic options.
