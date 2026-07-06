---
title: "Internal storage vs SD card: what goes where"
description: "A microSD card can give an Android phone more room, but it is not equal to internal storage. That's the part people get wrong. More space and fast space are not the same thing."
listSummary: "Internal vs SD storage choices"
hub: "storage"
sourceNumber: 86
order: 8
tags: ["storage","android","cleanup","optimization","guide"]
draft: false
---
This matters more in 2026 because Android phone storage is split across very different hardware. Many flagships and mid-range phones have no microSD slot at all. Pixel phones don't have one, Samsung dropped it from the Galaxy S line years ago, and several current Galaxy A models skip it too. At the same time, many older Galaxy A and M phones, Motorola Moto G models, and Sony Xperia phones still support microSD.

Check your exact model. Product family names are not enough.

## The speed gap is real

Internal storage in modern Android phones usually uses UFS. Current high-end phones commonly use UFS 4.x, and Samsung's UFS 4.0 storage is rated for reads up to 4,200 MB/s and writes up to 2,800 MB/s. Older mid-range phones with UFS 2.1 can still reach around 850 MB/s in sequential reads.

A normal microSD card is much slower. Even a decent UHS-I card is usually closer to external-media speeds than phone-internal storage speeds. The visible speed label can mislead you too. V30 means the card is rated for sustained video writing around 30 MB/s, which is useful for recording video, but it doesn't turn removable storage into UFS when an app is doing thousands of tiny reads and writes.

That random access difference is why apps feel worse from SD cards.

## Keep apps on internal storage

Apps belong on internal storage whenever possible. App launches, databases, background sync, notifications, thumbnails, and caches all hit storage constantly. Put that on a slow card and you'll feel it as lag.

Android can move some apps to adopted storage or external storage, but only when the app and device allow it. Apps can be placed on adopted storage only when the developer has enabled support through the android:installLocation attribute. Many apps don't.

Games are the one place where people are tempted to fight this. A 15 GB game looks like the perfect SD card target. In practice, loading screens get longer, updates are slower, and some games simply refuse to move. If you're choosing what to delete, uninstalling a game you don't play usually beats trying to run it from a card.

## Put media on the SD card

Photos, videos, music, podcasts, movies, offline maps, PDFs, and archived files are better SD card candidates. These files are read in larger chunks and don't need the same random storage speed as apps.

If your camera app supports it, set the storage location to SD card. Samsung, Motorola, and Sony camera apps have offered this on many models with card slots, although the exact path changes by model and Android version. Look for Camera settings > Storage location or a similar option.

Streaming apps may also let you store offline downloads on the SD card. Netflix, Spotify, YouTube, and map apps have changed settings over time, so check inside the app rather than assuming Android controls it globally.

There is a catch. If the card fails, those photos and downloads fail with it. Use cloud backup, a computer copy, or another backup for anything important.

## Adoptable storage sounds better than it feels

Android 6.0 introduced adoptable storage. It lets Android format and encrypt removable storage so it acts more like internal storage. The card becomes tied to that one phone, and Android can store apps and private data on it.

On paper, that fixes low internal storage. In real life, it is a tradeoff. A slow card can make the phone feel sluggish, and if the card dies, Android may lose data it expected to be available. Removing an adopted card without ejecting it properly can also break apps or data stored on it.

Android warns about slow cards during setup on some devices, but the warning doesn't make slow media fast. It just warns you before you commit.

Adoptable storage also isn't universal. Some manufacturers hide or disable it, especially on phones where the experience would be poor. If the option is missing, that may be the manufacturer's choice, not something you did wrong.

## Portable storage is the safer default

Portable storage means the card stays as a separate drive. You can remove it, read it on a computer, move files on and off it, and use it mainly for media.

For most people, this is the better setup. Keep apps and app data inside the phone. Send camera media, offline music, movies, documents, and backups to the card. It is less fancy, but it fails in a cleaner way.

Simple is good here.

## What to do when internal storage is nearly full

If internal storage drops very low, the phone can feel slower. Flash storage needs free blocks for writes and cleanup, and Android also needs space for app updates, system updates, caches, and temporary files. A phone with 128 GB can still behave badly if the last few gigabytes are constantly being fought over.

Start with Settings > Storage. If photos and videos dominate, move media to the card or cloud. If apps dominate, uninstall unused apps and clear cache for the worst offenders. If Downloads is full, delete old installers, ZIP files, PDFs, and exported videos.

Moving an app's icon to removable storage is rarely the clean fix people hope it will be.

## SD card speed labels in plain English

Class 10 and U1 are fine for basic photos, music, and documents.

V30 is a safer pick for 4K video recording because it is designed around sustained write speed.

A1 and A2 refer to application performance. They matter most if you insist on using adoptable storage or running app-like workloads from the card. They don't turn microSD into UFS.

Buy cards from known brands and avoid suspiciously cheap high-capacity cards. Fake cards are still common, and the failure mode is ugly: the card looks huge until old files start corrupting.

## If your phone has no SD card slot

Use cloud storage for photos and video, move large files to a computer, or use a USB-C flash drive with USB OTG for occasional transfers. Past that, the real answer is boring: uninstall apps you don't use, clear app cache when it has grown out of control, delete old Downloads, and avoid buying a phone with too little storage next time.

That last point sounds blunt because it is true. A 64 GB Android phone in 2026 can still work, but it leaves very little room for videos, games, offline maps, and years of chat media.
