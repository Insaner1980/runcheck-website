---
title: "How to check for Android security patches"
description: "You're buying a used phone, or your own phone hasn't shown an update notification in months. The first thing to check is not the Android release. It is the security patch date."
listSummary: "Security patch checks"
hub: "software"
sourceNumber: 122
order: 4
tags: ["android","updates","security","software","guide"]
draft: false
---
On most Android phones, open the About phone page in Settings and look for Android security update or Android security patch level. The date will look like 2026-06-05.

## Where to find the patch date

Pixel phones show it on the Android version screen. You'll see the platform release, Android security update, the Mainline update date, and build number together.

Samsung puts the date under About phone > Software information > Android security patch level.

On Xiaomi, Redmi, and POCO phones, start on the main device-info page. Some builds show the patch date directly. Others put it behind the Android version or Xiaomi HyperOS details.

OnePlus usually keeps the same information inside About device, then the software details screen.

Manufacturers move menus around. If you can't find the field, use Settings search and type security patch.

## What the date means

Google publishes Android Security Bulletins every month. The date on your phone tells you which patch set the manufacturer claims the device includes.

Most bulletins use two levels. A date ending in the 1st of the month, for example 2026-06-01, covers the core Android issues for that bulletin. A date ending in the 5th includes the 1st-level fixes plus the vendor, kernel, and hardware component fixes listed for that month.

The June 2026 bulletin says devices patched to 2026-06-05 or later include all fixes from that bulletin. A phone showing only the 1st-level date has the core fixes but may be missing the full vendor set.

Android 17 launched with separate security release notes. Android 17 devices with a 2026-07-01 patch level or later address the issues listed there. This can look confusing right after a new Android release, because the OS rollout and monthly bulletin schedule don't always line up neatly.

## Check whether an update is available

Finding the current date is step one. Step two is checking whether a newer update is waiting.

On most phones, open System > Software update from Settings and tap Check for update.

Samsung users should use Settings > Software update > Download and install.

Pixel users can open System > Software updates. Pixel phones normally notify you when a build is ready, but a manual check is still useful.

On Xiaomi, Redmi, and POCO, open the Xiaomi HyperOS or System update page from device information. The exact label depends on the model and software branch.

Use Wi-Fi and charge the phone first. Google recommends charging to at least 75% before updating, and that advice is boring but sensible.

## Check Project Mainline too

Android has a second update track called Project Mainline. In Settings, this is usually shown as the Google Play system update date. It updates some system modules through Google Play instead of waiting for a full OEM firmware build.

On many phones, the path is Security & privacy > Updates > Google Play system update. Another common route is Android version, then the Mainline entry.

This date is separate from the main Android patch date. You want both to be reasonably current.

Mainline updates are useful, especially on Android 10 and newer, but they don't replace manufacturer patches. They can't fix every kernel, driver, modem, or vendor-specific vulnerability.

## How current should the patch be?

A phone patched within the last two months is in good shape. Three or four months behind is not ideal, but common on slower update schedules. Six months behind deserves attention, especially if the phone is used for banking, work, travel, or two-factor authentication.

A year behind is different. That means the phone has missed many public bulletins, and some of those bulletins may include critical or actively exploited vulnerabilities. At that point, the question is not "can the phone still turn on?" It can. The question is whether it should still hold sensitive data.

Pixel phones usually get patches first. Samsung flagships on monthly schedules often follow quickly, though timing varies by region and carrier. Other manufacturers range from monthly to quarterly to irregular, especially on budget models.

## If no update is available

The device may be out of support. Check the manufacturer's official support page or security update list for the exact model.

The carrier may be delaying the build. Carrier-sold phones sometimes receive updates after unlocked versions because the carrier tests and approves the firmware.

The rollout may not have reached your region yet. Android updates are often staged, so one country can get a patch days or weeks before another.

Or the phone may already be on its final patch. That is common with older budget devices.

## Common questions

### Are security patches the same as Android version updates?

No. A security patch fixes vulnerabilities. A major Android version update, such as Android 16 to Android 17, changes the platform, APIs, behavior, and often the manufacturer interface. Major updates usually include security fixes too, but they are not the same thing.

### Can I install security patches manually?

Only in limited cases. Pixel owners can sideload official OTA files with ADB. Samsung users can flash official firmware with Odin. Both methods require the exact build for the device and carry risk if done carelessly.

For most people, the normal update screen is the right path.

### My patch is over a year old. Is the phone unsafe?

It is not guaranteed to be compromised, but the risk is no longer small. If it holds bank apps, work accounts, private files, or your main Google account, replace it or move those accounts to a supported device. If it is a spare media device with no sensitive logins, the risk is lower, but don't sideload random apps onto it.

### Do all phones get patches at the same time?

No. Google publishes the Android bulletin, but each manufacturer and carrier decides when updates reach each model. Pixel gets Android platform releases first, Samsung and other OEMs follow on their own schedules, and cheaper phones often get fewer updates.
