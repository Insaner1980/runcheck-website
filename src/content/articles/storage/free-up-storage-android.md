---
title: "How to free up storage on Android without losing anything"
description: "Practical ways to reclaim Android storage without deleting photos, apps, or files you care about. Start with cache, downloads, media backups, and offline content."
listSummary: "Storage cleanup without data loss"
hub: "storage"
sourceNumber: 79
order: 1
tags: ["storage","android","cleanup","optimization","guide"]
draft: false
---
---

You're trying to take a photo, install an update, or download a file, and Android tells you there isn't enough space. The panic move is deleting photos. Don't start there.

First, check what is actually using storage. Open **Settings > Storage**. On Samsung, look under **Settings > Device care > Storage**. On Xiaomi, try **Settings > About phone > Storage** or the Security app's cleaner. Android 17, now rolling out first to supported Pixel phones before wider OEM updates, keeps the same basic idea: the categories are there, but every manufacturer moves the buttons around.

## Clear cache without clearing data

Cache is temporary data. Browsers store images and pages. Social apps store thumbnails and videos. Streaming apps keep artwork, recommendations, and playback data. A phone that has been used for months can easily have a few gigabytes of cache scattered across apps.

Clearing cache doesn't delete your account, conversations, saved settings, or login. It removes temporary files the app can recreate. The next launch may feel a little slower because the app has to fetch fresh data again. That's normal.

Go to **Settings > Apps > [App name] > Storage > Clear cache**. Start with Chrome, Instagram, TikTok, Facebook, Spotify, YouTube, Telegram, WhatsApp, and any shopping or news app you open often.

Don't confuse **Clear cache** with **Clear storage** or **Clear data**. Clear data resets the app. For a game, that can mean lost local progress. For an authenticator app, it can lock you out of accounts. For Spotify or Netflix, it can remove offline downloads.

Stock Android no longer gives every phone a dependable one-tap button to clear all app cache at once. Samsung and Xiaomi may offer temporary-file cleanup through their own maintenance tools, but the wording changes between One UI and MIUI or HyperOS versions. If the built-in cleaner looks aggressive, skip anything you don't understand and clear cache per app instead.

## Empty the forgotten downloads pile

Open your file manager: Files by Google on Pixel, My Files on Samsung, File Manager on Xiaomi. Go to **Downloads** and sort by size.

This folder is where one-time files go to retire. PDF menus, invoices, APK installers, ZIP files, screenshots saved from browsers, boarding passes, and documents from email all collect here. Most of them were useful once.

Delete APK installers after the app is installed. Delete duplicate PDFs. Move important documents to Drive, OneDrive, a computer, or an SD card before removing local copies.

One catch: don't go digging through `Android/data/` or `Android/obb/` with random file-manager tricks on newer Android versions. Android 11 and later restrict access to those folders for a reason. If a game or streaming app is holding several gigabytes, open that app's Android storage page or use its own download manager instead.

## Clean messaging media from inside the app

WhatsApp, Telegram, Signal, Discord, and similar apps can quietly become the largest storage users on the phone. Group chats are the usual reason. One active group can add videos, GIFs, stickers, voice notes, and forwarded images every day.

In WhatsApp, go to **Settings > Storage and data > Manage storage**. Sort by size and review large items first. Forwarded media and viral clips are usually the easiest wins, because they have little personal value.

Deleting media from WhatsApp's storage manager removes the local file. The chat stays. Depending on backup and sender availability, the media may show as downloadable again, but don't rely on that for anything important.

In Telegram, use **Settings > Data and storage > Storage usage**. Telegram is aggressive with cache, especially if you follow channels or large groups. Set a smaller cache size or shorter retention period if you keep running out of space.

## Use Google Photos only after backup is complete

If Google Photos backup is on, your photos and videos may exist both on the phone and in your Google account. Open Google Photos, tap your profile picture, and use **Free up space** only after Photos says backup is complete.

This removes local copies that are safely backed up. You still see them in Google Photos and can download them later. Google notes that photos and videos younger than 30 days may remain on the device, so don't be surprised if the space gain isn't instant for very recent media.

Be strict here. If backup is paused, stuck on mobile data, waiting for Wi-Fi, or using the wrong Google account, don't free up space yet.

Samsung Gallery can do something similar when synced with OneDrive, but again, check sync status first. Cloud sync is not a backup if it hasn't finished.

## Review offline content

Offline media is easy to forget because it doesn't look like a normal file.

Spotify, Netflix, YouTube, podcast apps, audiobook apps, and Google Maps all store downloads inside their own app storage. Open each app and remove downloaded playlists, episodes, maps, and shows you no longer need offline.

This is one of the safest cleanup categories. If you delete an offline Netflix episode or Spotify playlist, you can download it again later. The only real cost is time and data.

## Archive apps instead of uninstalling them

For apps you rarely use but don't want to lose, use app archiving where available. Archiving removes most of the app package while keeping the icon and personal app data. When you tap the icon later, Android reinstalls the app if it is still available from the app store.

You can enable automatic archiving in the Play Store, and on supported devices the app info page has an **Archive** button. Not every app is eligible. Sideloaded apps, apps no longer available from the store, and some system apps won't behave the same way.

Archiving is cleaner than uninstalling an app you may need again. It is especially useful for airline apps, event apps, shopping apps, parking apps, and travel apps you only open a few times a year.

## Skip cleaner and booster apps

Most cleaner apps are worse than the problem. They exaggerate numbers, show ads, push notifications, and kill background apps that Android will restart anyway.

Files by Google is the exception I trust most. It can find duplicate files, large files, old downloads, and backed-up media without pretending to magically speed up the phone. Samsung and Xiaomi's built-in tools are also fine if you review the suggestions before tapping delete.

## When cleanup isn't enough

If a 32 GB or 64 GB phone fills up again every month, the problem may be capacity, not maintenance. Modern Android, app updates, messaging media, photos, and system partitions don't leave much room on small-storage phones.

A good target is 15-20% free space. That gives Android room for updates, temporary files, app installs, camera processing, and flash storage maintenance. runcheck shows storage usage alongside device health metrics, so you can see whether low storage is part of a broader performance problem instead of guessing.
