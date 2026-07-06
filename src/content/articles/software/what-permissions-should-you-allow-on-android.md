---
title: "What permissions should you allow on Android?"
description: "The easiest Android permission rule is this: if the permission doesn't match the feature you just tried to use, deny it."
listSummary: "Android permission choices"
hub: "software"
sourceNumber: 127
order: 9
tags: ["android","permissions","privacy","security","guide"]
draft: false
---
A camera app asking for camera access makes sense. A flashlight asking for contacts doesn't. Most permission decisions are not more complicated than that.

The problem is timing. Apps ask when you're trying to get something done, so Allow becomes the fast button. That's how bad permissions pile up.

## The three kinds of permissions

Android permissions fall into three broad buckets.

Normal permissions are low-risk and usually granted automatically. Internet access is the obvious example. You don't see a pop-up every time an app needs the network.

Runtime permissions, often called dangerous permissions in Android documentation, protect data or hardware that can expose private information. Location, camera, microphone, contacts, calendar, phone, SMS, nearby devices, and media access live here. These are the prompts you see while using an app.

Special permissions are stronger and usually require a trip into Settings. Accessibility access, notification access, draw-over-screen access, device admin, usage access, install unknown apps, and full file access belong in this mental category. Treat them with more suspicion than a normal camera or location prompt.

Android 6 introduced runtime permissions. On Android 5.1 and older, apps received broad permissions at install time. If a phone is still stuck there, the permission model is only one of many reasons to retire it.

## Location

Location is useful, but it gets over-requested.

Maps, weather, ride-sharing, delivery, fitness, and navigation apps can make a fair case. A calculator, gallery filter, QR scanner, or wallpaper app usually can't.

Choose While using the app unless there is a real background feature. Turn-by-turn navigation, run tracking, family safety, and device tracking are examples where background location can make sense.

Use approximate location for weather, local content, store availability, and anything that doesn't need your exact GPS position. Android 17 also adds temporary precise location access, which is a better fit when an app needs exact location once but doesn't deserve permanent precise access.

## Camera, mic, and recording access

Access to the camera or mic should be boringly obvious.

Video calls need both. Messaging apps use them for photos, voice notes, and video messages. A banking app can need the camera for document capture or QR codes.

If there isn't a visible feature that uses the camera or microphone, deny the request. Android shows privacy indicators when apps use either sensor, and Android 12 added a Privacy Dashboard for recent location, camera, and microphone use.

Check that dashboard occasionally. It catches surprises.

## Contacts

Contacts access is one of those permissions people grant too casually.

Messaging and social apps ask for it to find people you know. That feature is convenient, but it may upload or compare your address book with the service's servers. Your contacts didn't necessarily agree to that.

Android 17 improves this with the option to share only specific contacts instead of the full address book. Use that when it appears. If an app can work without contacts access, I usually deny it and add people manually.

## SMS and phone

SMS is high risk. It can expose verification codes, private conversations, and account recovery messages. Only your actual messaging app should have broad SMS access.

Some banking apps ask to read one-time codes automatically. That is convenient, but manual entry is safer. If the app works without SMS access, deny it.

Phone permission can expose call state, phone number, or call-related data depending on the app and Android version. Dialer, call screening, voicemail, and carrier apps can have a reason to ask. Most other apps don't.

## Files, photos, and media

Storage permissions changed a lot across Android versions.

Older Android versions had broad storage access. Android 13 split shared media access into separate permissions for images, videos, and audio. Android 14 added Selected Photos Access, so you can grant an app only specific photos and videos instead of the whole library.

Use the narrowest option. Give a photo editor selected photos, not your entire media library. Give a music app audio access, not all files. Be especially careful with broad file access, because that special permission is meant for apps such as file managers and backup tools.

## Nearby devices and Wi-Fi

Bluetooth and nearby-device permissions can be legitimate. Headphone apps, smart home apps, watches, speakers, and printers often need them.

Android 13 also added a nearby Wi-Fi devices permission for apps that manage Wi-Fi connections without needing location for that job. That is better than giving location access just so an app can find a printer or connect to a local device.

Still, don't grant nearby access to apps that have no nearby-device feature.

## Accessibility, overlays, and admin access

This is the danger zone.

Accessibility access can read screen content, observe interactions, and perform actions for the user. It is necessary for real accessibility tools, some password managers, automation tools, and a few assistive apps. It is also abused by malware.

Display over other apps lets an app draw on top of the screen. Chat heads and screen filters use it. Scam overlays use it too.

Device admin access can make an app harder to remove. Enterprise management, parental control, and anti-theft apps can have a reason to use it. A game does not.

If a random cleaner app asks for any of these, uninstall it.

## Review permissions you already granted

Permissions aren't permanent.

Go to Settings > Security & privacy > Permission manager, or Settings > Apps > Permission manager on some phones. Tap Location, Camera, Microphone, Contacts, SMS, Phone, or Files and media, then remove access from apps that don't need it.

Also search Settings for Special app access. Review accessibility, notification access, display over other apps, device admin apps, install unknown apps, usage access, and all files access.

Android 11 and later can automatically reset permissions for apps you haven't used in a few months. Google Play Protect can also reset permissions for rarely used apps on Android 6 through Android 10. That helps, but it isn't a substitute for checking the list yourself.

## A practical permission checklist

When a prompt appears, ask three questions.

Does this permission match the feature I just opened?

Can I choose a narrower option, such as While using the app, approximate location, selected photos, or one-time access?

Will the app still work if I deny it?

When in doubt, deny. The app can ask again when you use a feature that truly needs the permission.
