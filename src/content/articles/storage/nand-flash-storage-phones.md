---
title: "How NAND flash storage works in phones and why it slows down"
description: "Phone storage uses NAND flash memory. Here's why full storage hurts performance, what TRIM and garbage collection do, and how to keep storage I/O healthy."
listSummary: "NAND flash slowdown basics"
hub: "storage"
sourceNumber: 89
order: 11
tags: ["performance","speed","android","optimization","troubleshooting"]
draft: false
---
Your phone can have a fast SoC, plenty of RAM, and still feel sticky when storage is almost full. Apps pause before opening. The camera takes an extra beat to save a photo. Updates take longer than they should.

That isn't always the processor's fault. Sometimes the storage is the bottleneck.

<figure class="not-prose my-10">
  <video class="aspect-video w-full rounded-2xl border border-run-border bg-black shadow-2xl" controls playsinline preload="metadata" poster="/videos/articles/nand-flash-storage-phones-poster.webp" aria-label="Why NAND flash storage can make a phone feel slow">
    <source src="/videos/articles/nand-flash-storage-phones.mp4" type="video/mp4" />
    Your browser does not support embedded video. <a href="/videos/articles/nand-flash-storage-phones.mp4">Open the video directly.</a>
  </video>
  <figcaption class="mt-3 text-sm leading-relaxed text-run-muted">A visual explanation of NAND pages and blocks, write amplification, TRIM, garbage collection, and full-storage slowdowns.</figcaption>
</figure>

## What NAND flash is doing

Phones store apps, photos, messages, caches, and system data on NAND flash chips soldered to the motherboard. A phone sold as 128 GB never gives you all 128 GB for your own files because Android, system partitions, recovery data, reserved space, and file system overhead take their share first.

NAND stores data as electrical charge inside tiny cells. Those cells are arranged into pages, and pages are grouped into larger erase blocks. The awkward part is this: NAND can write to empty pages, but it can't overwrite a used page in place.

To update data, the controller writes the new version somewhere else, marks the old page as invalid, and updates its mapping table. Later, during cleanup, it gathers the still-valid pages from a block, moves them if needed, and erases the old block so it can be reused.

That cleanup process is garbage collection. It is normal. It is also one of the reasons a nearly full phone feels worse than the same phone with breathing room.

## Why full storage feels slow

When storage has plenty of empty blocks, writing data is easy. The controller can pick a clean area and move on.

When storage is close to full, the controller has fewer clean blocks available. It has to work harder to find space, move valid data, erase blocks, and then write the new data. That extra internal work is called write amplification, and it can show up as small stalls in everyday use.

You might notice it when installing apps, saving videos, downloading updates, or switching between apps that keep large caches. A phone at 95% storage usage can feel much older than it really is.

The practical rule is simple: keep at least 15 to 20% of internal storage free when you can. It isn't magic, and different storage controllers behave differently, but that free space gives Android and the storage controller room to work.

## TRIM, garbage collection, and idle time

Deleting a file doesn't instantly wipe every NAND cell that held that file. Android marks the file as deleted in the file system. The controller still needs to know which underlying blocks can be cleaned up.

TRIM is the signal that helps with that. On Android, the maintenance process is handled through `fstrim` and idle storage maintenance. It tells the storage layer which blocks are no longer needed so garbage collection can reclaim them later.

This is why leaving a phone idle and charging can help after a big cleanup. You delete files, Android gets a chance to run maintenance, and the controller gets time to tidy up. Don't expect a miracle after five minutes. It works in the background.

No, you should not defragment phone storage. Defragging was for spinning hard drives. On NAND flash, it creates unnecessary writes and doesn't solve the real problem.

## SLC, MLC, TLC, and QLC in plain English

NAND cells can store different amounts of data per cell.

SLC stores one bit in each cell. It is fast and durable, but too expensive for normal phone storage.

MLC stores two bits. It was more common in older high-end storage, but it has mostly been pushed aside by denser NAND.

TLC stores three bits in the same cell. This is common in modern consumer storage because it balances cost, capacity, and speed well enough for phones.

QLC stores four bits. It is denser and cheaper per gigabyte, but endurance is lower. Phone makers rarely advertise the exact NAND cell type, so don't assume you know what is inside a device just from the storage capacity.

Packing more data into each cell means more careful voltage reading and more error correction. That is the tradeoff. Modern controllers hide most of the mess with wear leveling, ECC, spare area, and caching.

## UFS vs. eMMC matters more than people think

The storage interface matters as much as the NAND itself.

Many older and budget Android phones use eMMC. It is simple and cheap, but it doesn't handle heavy multitasking as well. Samsung's eMMC 5.1 parts, for example, advertised sequential reads up to 250 MB/s and sequential writes up to 125 MB/s when that generation launched.

UFS is the newer phone storage standard. It supports command queuing and full-duplex operation, which means reads and writes can happen more efficiently under load. UFS 3.1 devices commonly advertise sequential reads around 2,100 MB/s. UFS 4.0 doubled the headline number to 4,200 MB/s for sequential reads on Samsung's first announced UFS 4.0 storage.

Those are best-case sequential numbers, not a promise that every app will open twice as fast. Still, the difference is real. A cheap phone with eMMC can feel slower during updates, app installs, and camera bursts even when the processor looks decent on paper.

## What storage wear looks like

NAND wears out as blocks go through program and erase cycles. Controllers spread writes around so one area doesn't die early. That is wear leveling.

For normal phone use, storage wear usually takes years to matter. People fill storage, install updates, shoot video, and clear caches long before NAND endurance becomes the main reason a phone feels bad. Heavy write workloads are different. A device used for constant logging, video recording, or testing can age storage faster.

Android doesn't give most users a clean "storage health" percentage. Some manufacturer service tools expose more detail, but it isn't consistent. The visible symptom is duller: slow app installs, long save times, lag when writing files, and poor performance even after you free space and remove obvious background load.

## How to keep phone storage healthy

Keep free space. That is the boring answer, and it is still the best one.

Avoid installing storage cleaner apps that promise magic speed boosts. Many of them just delete caches that Android will rebuild later. Worse, some keep running in the background and create more noise than they remove.

Delete old downloads, remove apps you don't use, move large videos off the phone, and let the device sit idle on a charger after a big cleanup. If your phone supports an SD card, use it for media, not for apps that need fast storage I/O.

Apps like runcheck can help by showing storage pressure over time instead of treating storage as a one-time number. That trend matters because a phone that slowly creeps from 70% to 94% full is telling you exactly why it is starting to feel worse.
