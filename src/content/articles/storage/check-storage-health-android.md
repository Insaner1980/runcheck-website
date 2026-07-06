---
title: "How to check storage health on Android"
description: "Android storage can wear out, but most phones do not show a simple storage health percentage. Here is what you can check, what the numbers mean, and when to worry."
listSummary: "Storage health checks"
hub: "storage"
sourceNumber: 80
order: 2
tags: ["storage","android","cleanup","optimization","guide"]
draft: false
---
---

How do you know whether your Android phone's storage is healthy rather than merely low on space? Annoyingly, most phones still don't make this easy.

Storage health and free storage are different problems. A phone can have 80 GB free and still have a weak NAND chip. A nearly full phone can feel slow even when the storage hardware is fine. Those two issues get mixed up constantly, so start by separating them.

## What wears out phone storage

Android phones use NAND flash storage. Budget models have often used eMMC, while mid-range and flagship phones usually use UFS. Both types wear out through program/erase cycles. Each time data is written, erased, and rewritten, the cells take a tiny amount of wear.

The controller spreads writes across the chip through wear leveling, which is why normal phone use rarely kills storage quickly. Photos, messages, app updates, and web browsing are not the same as writing security-camera footage all day.

Heavy video recording, constant game installs, repeated factory resets, and keeping the phone nearly full are harder on storage. The last one matters because the controller has fewer free blocks for cleanup and wear leveling. It works. Until it doesn't.

For most people, storage wear is not the first part of the phone to fail. The battery, screen, USB-C port, or software support usually becomes the reason to replace the phone first. Refurbished phones and heavily used budget phones are where storage health becomes more interesting.

## The problem with Android storage health numbers

There is no universal Android setting that says "your storage has 92% of its lifetime remaining" the way recent Pixel phones can show battery health on supported models.

The Android framework does include a storage lifetime API that can return the estimated remaining life of internal storage as a percentage, or `-1` when the information isn't available. The catch is access. In AOSP, that API is privileged and requires `READ_PRIVILEGED_PHONE_STATE`, so normal Play Store apps usually can't call it.

Pixel builds have exposed storage status through Device diagnostics on some Android 15 and later builds, often through hidden or repair-oriented diagnostic screens rather than a normal Settings page. Samsung Members can run broad device diagnostics on Galaxy phones, but don't expect a clean NAND lifetime percentage there.

Android 17 doesn't turn storage health into a universal consumer setting. It is now rolling out to Pixel first, with other manufacturers following later through their own skins, so OEM differences still matter.

## Check storage type first

Before benchmarking, find out what kind of storage your phone has. Look at the manufacturer's spec sheet, or use a hardware-info app such as DevCheck and check the storage section.

As a rough rule, cheap phones from the last few years often use eMMC 5.1. Better mid-range phones use UFS 2.2 or UFS 3.1. Recent flagships commonly use UFS 4.0 or UFS 4.1. UFS 5.0 has been announced, but it is not the baseline for current phones.

The type matters because a slow eMMC phone and a degraded UFS phone can produce similar benchmark numbers for different reasons.

## Benchmark storage speed carefully

Use a storage benchmark app such as CPDT. Run the test when the phone is cool, above 20% battery, not charging hot, and with at least 15-20% storage free. Then run it again. One bad run doesn't prove anything.

These numbers are only anchors, not pass/fail rules:

Reference points for sequential read/write: eMMC 5.1 can land near 250/100-125 MB/s, UFS 2.1 near 850/250, UFS 3.1 near 2,100/1,200, and UFS 4.0 near 4,200/2,800.

Real phones don't always hit those figures. Capacity, controller, thermals, encryption, firmware, free space, and the benchmark itself all affect the result. A 128 GB model can also be slower than a 512 GB model from the same phone line because it has fewer NAND dies working in parallel.

If your result is much lower than expected, free up space first and test again after a restart. If it stays low and the phone also freezes during installs, file moves, camera saves, or app updates, then storage health becomes a real suspect.

## Signs that point to storage trouble

Storage problems have a different feel from normal old-phone slowness.

Apps may install or update painfully slowly. The camera may pause after each photo while it saves. The phone may hang when copying, deleting, or moving files. Boot can take much longer than before. Large games may verify or repair files more often.

More serious signs are harder to ignore: corrupted photos, documents that won't open, apps crashing during file writes, "can't write to storage" errors despite free space, or a phone that sometimes fails to boot.

Back up immediately if you see corruption. Don't benchmark a phone for an hour while the data you care about is still only on that phone.

## Root-only checks

Rooted devices can sometimes read lower-level health data from sysfs. On eMMC devices, lifetime estimates may appear through Extended CSD values under paths like `/sys/class/mmc_host/mmc0/mmc0:*/life_time`. On UFS devices, health descriptors may exist under `/sys/class/scsi_device/` or related vendor paths.

This is not normal user advice. Paths vary, SELinux blocks access on stock phones, and the values are easy to misread. If you already have root and know what you're doing, they can be useful. If you don't, don't root a phone just to check storage health.

## How to reduce storage stress

Keep 15-20% of internal storage free. On a 128 GB phone, that means roughly 20 GB. On a 256 GB phone, 40 GB is a comfortable buffer, although you don't need to obsess over the exact number.

Avoid factory resets as routine maintenance. One reset to fix a messy phone is fine. Monthly resets are pointless wear and usually recreate the same storage problem after you reinstall everything.

Record long videos to external storage only if your phone and camera app support it properly. If you use an SD card, keep media there, not apps. Apps still belong on internal storage because UFS is much faster and more dependable than most microSD cards.

If you use runcheck, watch storage pressure over time rather than staring at one number. The storage section shows capacity usage, and combined with battery temperature and other health signals, it helps separate a full-phone problem from a possible hardware problem.
