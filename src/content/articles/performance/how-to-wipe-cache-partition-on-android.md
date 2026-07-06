---
title: "How to wipe the cache partition on Android"
description: "What wiping the Android cache partition does, how to try it on Samsung phones, and what to do when the option is missing."
listSummary: "Cache partition cleanup"
hub: "performance"
sourceNumber: 71
order: 8
tags: ["performance","speed","android","optimization","troubleshooting"]
draft: false
---
You are staring at Android Recovery, using the volume buttons like it is 2012 again, and looking for **Wipe cache partition**. On some phones it is there. On others it is gone. On a few, it was never exposed in the first place.

That is why this topic is messier than most guides admit. Wiping the cache partition can still be useful on certain Samsung phones and older Android devices, but it is not a universal Android feature anymore.

## What a cache partition wipe actually does

A cache partition wipe removes temporary system cache files. It does not delete photos, messages, apps, accounts, downloads, or settings. Android rebuilds the cache after the next boot.

Think of it as clearing temporary system work files, not erasing your phone.

It can help when broad system behavior gets weird after an update: laggy transitions, multiple apps crashing, battery drain that appeared suddenly, or settings that feel stuck. If only one app is broken, do not start here. Clear that app's cache first through **Settings > Apps > [app name] > Storage > Clear cache**.

The cache partition wipe is for wider symptoms.

## Why the option is missing on many phones

Modern Android update systems do not rely on the old cache partition the way older phones did. A/B updates let the phone install an OTA update to an inactive slot while the current system keeps running. AOSP documentation also notes that A/B devices no longer need the cache partition to store OTA update packages.

That does not mean every cache-related file disappeared. It means the old Recovery Mode **Wipe cache partition** option is less central than it used to be.

Pixels are the easiest example. You can still boot a Pixel into Recovery Mode, but you should not expect a classic **Wipe cache partition** item on current models. Recovery is mainly for factory reset, sideloading updates, and lower-level repair steps.

Samsung has historically kept the option around longer than many others. That is why most people searching for this are really asking about Galaxy phones.

## The Samsung situation in 2026

Samsung's own UK support page still describes **Clear the cache partition** through Recovery Mode: power off, open Recovery with the button combination, select **Wipe cache partition**, confirm, then reboot.

At the same time, Samsung's February 2026 update appears to have removed several Recovery Mode tools, including **Wipe cache partition**, on some Galaxy models. Reports from Android Authority and GalaxyClub pointed first to Galaxy S25 models and newer foldables such as the Galaxy Z Fold 7. The new trimmed menu reportedly shows only **Reboot system now**, **Wipe data/factory reset**, and **Power off** on affected builds.

Samsung has not published one clear global explanation that covers every model and region. So the safe advice is this: on Galaxy phones in 2026, treat **Wipe cache partition** as firmware-dependent. If your Recovery menu has it, you can use it. If it is missing, your phone is not necessarily broken.

## Before you try Recovery Mode

Do the simple steps first.

Restart the phone once. Update your apps. Check storage. Use Samsung's **Device care** or **Battery and device care > Optimise now** if you are on a Galaxy. Clear the cache for the one app that is misbehaving.

If the whole phone is acting strange after a major update and you have already waited a day or two, then Recovery Mode is reasonable to try.

Backups are still smart. A cache wipe should not erase personal data, but Recovery Mode also contains **Wipe data/factory reset**, and that one absolutely does. Do not rush through menus when you are tired.

## How to reach Recovery Mode on Samsung Galaxy

The exact button combination depends on the model.

For many newer Galaxy phones without a physical Home button, power the phone off. Connect it to a computer or another USB-C device if Recovery Mode does not appear without a cable. Then hold **Volume Up + Side/Power** until the Samsung logo appears, release, and wait for the Recovery menu.

For older Galaxy phones with a separate Bixby button, the combination may be **Volume Up + Bixby + Power**.

For older models with a physical Home button, use **Volume Up + Home + Power**.

Once Recovery Mode opens, use the volume buttons to move and the power button to select.

## How to wipe the cache partition if the option exists

Select **Wipe cache partition**.

Confirm with **Yes**.

Wait for it to finish. It usually takes less than a minute.

Select **Reboot system now**.

The first boot after the wipe can take longer than usual because Android rebuilds temporary files. That is expected. Give it time before judging performance.

## What to do when the option is missing

Do not factory reset just because the cache option is gone. A factory reset is a much bigger step.

Use these alternatives instead:

- Clear cache for the specific problem app under **Settings > Apps > [app name] > Storage > Clear cache**.
- On Samsung, run **Settings > Battery and device care > Optimise now**.
- Free up storage until at least 10% is available, with 15% being a better target.
- Boot into Safe Mode to see whether a third-party app is causing the slowdown or crashes.
- Check for a newer system update if the problem started right after a major Android release.

If your phone is a Pixel, OnePlus, Xiaomi, Motorola, or another brand and Recovery Mode does not show **Wipe cache partition**, assume that the manufacturer manages this differently. Do not look for hidden ADB tricks unless you know exactly what they do.

## Does wiping the cache partition actually help?

Sometimes. That is the honest answer.

It can fix stale or corrupted temporary system data after an update. It can also do nothing at all. If the real problem is low storage, a bloated app, weak battery health, thermal throttling, or slow aging storage, a cache wipe will not change much.

I still consider it a reasonable low-risk step on Galaxy phones that expose the option. It is quick, it does not erase personal data, and it can clear odd post-update behavior. But it is not a performance button, and it is not worth obsessing over if your phone no longer offers it.

## What it will not fix

It will not downgrade Android.

It will not remove a bad app.

It will not repair failing flash storage.

It will not make a 4 GB RAM phone behave like a new flagship.

If the phone is still slow after a cache wipe, move on to real diagnostics: storage usage, battery temperature, app behavior, Safe Mode, and update status. That is where the answer usually is.
