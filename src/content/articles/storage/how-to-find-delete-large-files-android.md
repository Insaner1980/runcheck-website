---
title: "How to find and delete large files on Android"
description: "The fastest way to free Android storage is to find the biggest files first. Use Files by Google, your phone's file manager, and app storage screens without deleting the wrong things."
listSummary: "Large file cleanup"
hub: "storage"
sourceNumber: 82
order: 4
tags: ["storage","android","cleanup","optimization","guide"]
draft: false
---
---

A single 4K video from a weekend trip can be larger than hundreds of photos. So can one downloaded Netflix episode, one forgotten game data folder, or one ZIP file you opened months ago.

That is why random cleanup feels so disappointing. Deleting 40 tiny screenshots won't help much if three videos are using 6 GB.

## Start with the storage breakdown

Open **Settings > Storage** and look at the largest category first. On Samsung, use **Settings > Device care > Storage**. On Xiaomi, check **Settings > About phone > Storage** and the Security app's cleaner.

Don't delete yet. Just identify the enemy: videos, apps, downloads, audio, documents, or "Other", which usually means app data, cached files, or files Android can't neatly classify.

If videos are the biggest category, go after videos. If apps are largest, open app storage screens. If downloads are huge, sort Downloads by size. Simple. Boring. Effective.

## Use Google's file app for the first pass

Files by Google is the safest starting point on most Android phones. It is pre-installed on many devices and available from Google Play.

Open the app and look for **Clean**. Depending on the version, it may be in the bottom navigation or under the menu. Review the cards for large files, duplicate files, old downloads, and backed-up media.

The duplicate-file tool is useful because it lets you review before deleting. Google says selected duplicate files can be moved to Trash, which means you usually have a recovery window before they are permanently removed.

Still, don't blindly select everything. A duplicate file can be intentional. A copy of an ID document in Downloads and another in Documents may have a reason to exist.

## Sort manually in your file manager

Your built-in file manager can do the same basic job. Open internal storage, choose a folder, and sort by size from the three-dot menu or sort control.

Start here:

- `DCIM/Camera` holds recorded videos, burst shots, slow-motion clips, and edited copies.
- `Downloads` is where PDFs, APK installers, ZIP files, documents, and browser saves pile up.
- `Documents` often contains exported reports, work files, invoices, and old attachments.
- `Movies` or `Videos` is worth checking for screen recordings and edited clips.

4K video is the obvious storage hog. The exact size depends on bitrate, codec, frame rate, HDR, and the camera app, but a few hundred MB per minute is normal on many phones. Ten minutes can become several gigabytes before you think about it.

APK installers are another easy win. If you sideloaded an app and it is already installed, the APK file in Downloads is usually just dead weight.

## Check app storage as well as files

Some of the largest items won't appear as friendly files. Streaming apps, games, messaging apps, podcast apps, and map apps often keep downloads inside app-specific storage.

Go to **Settings > Apps**, sort by size if your phone supports it, and open the biggest apps. Look for **Storage**, **Downloaded content**, **Manage downloads**, or an in-app storage tool.

Good places to check:

- Spotify downloaded playlists and cache.
- Netflix, Disney+, Prime Video, and YouTube downloads.
- Google Maps offline areas.
- Podcast and audiobook downloads.
- Mobile games with extra downloaded assets.
- WhatsApp **Settings > Storage and data > Manage storage**.
- Telegram **Settings > Data and storage > Storage usage**.

For WhatsApp, newer Android installs often store media under `Android/media/com.whatsapp/WhatsApp/Media`, but the in-app storage manager is easier and safer. Use that first.

## Be careful with Android/data and Android/obb

Older cleanup guides tell you to browse `Android/data/` and `Android/obb/` and delete leftover folders from uninstalled apps. That advice is only partly useful now.

Android 11 and later restrict access to those folders. Some file managers hide them, some show partial contents, and some require awkward permission flows. Don't fight the system just to delete something you don't understand.

If you know a removed game left 3 GB behind and your file manager clearly shows its old folder in `Android/obb/`, deleting that leftover is reasonable. If the folder belongs to an app you still use, leave it alone. The app may break or download everything again.

## Empty trash after big deletions

Deleting a large file does not always free space immediately. Google file tools, Samsung My Files, Google Photos, Samsung Gallery, and other media apps may move deleted files to Trash or Recycle Bin first.

Check the app you used to delete the file. Empty Trash only after you are sure you don't need the files back.

In Google's file app, deleted items can be recoverable from Trash for 30 days. Google Photos uses its own trash rules, especially for backed-up media, so don't assume every app behaves the same.

## What to delete first

The best first targets are files that are large, replaceable, and not personal.

Delete APK installers, duplicate downloads, watched offline videos, old podcast episodes, expired maps, cache from apps you understand, and media from apps you no longer use.

Back up personal videos, photos, and documents before deleting them locally. Cloud storage is fine if the upload has finished. A computer or external drive is better for anything you would be upset to lose.

Leave system-looking files alone. If a file is outside Downloads, DCIM, Pictures, Movies, Music, or Documents and you don't know what it is, don't use it as your experiment.

## How often to do this

There is no schedule. Check large files when free storage drops below 15-20%, before a major Android update, or before a trip where you expect to record a lot of video.

runcheck's Pro cleanup tools are built around this same idea: large files, old downloads, and APK files. The large-file filter lets you choose 10 MB, 50 MB, 100 MB, or 500 MB thresholds and shows a before-and-after projection before deletion, which is the right way to clean storage. Review first, delete second.
