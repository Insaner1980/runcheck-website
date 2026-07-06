---
title: "OnePlus battery health and optimized charging"
description: "You plug in a recent OnePlus phone, look away for a few minutes, and the battery has jumped from 20% to 60%. That's the charm of SUPERVOOC. It's also why battery protection matters more on OnePlus than it does on a slow-charging budget phone."
listSummary: "OnePlus battery settings"
hub: "brands"
sourceNumber: 156
order: 4
tags: ["battery","health","diagnostics","android","guide"]
draft: false
---
Fast charging is not automatically bad. Heat is the real enemy. A OnePlus phone that charges at 80W or 100W while you're gaming, navigating, or streaming can create a lot of battery stress unless the software manages it well.

One more timing note: Android 17 is now out first on most supported Pixel phones. OnePlus devices will get Android 17-based OxygenOS updates later, and battery features can still differ by model, region, and OTA build. Don't assume a setting exists until you see it on your own phone.

## Check battery health in Settings

Start with the Settings search. It's the least annoying route because OnePlus has moved battery pages around between OxygenOS versions.

Open Settings and search for:

- battery health
- battery capacity
- charging limit

On supported models, you should find a Battery health page that shows Maximum Capacity. This is the percentage of charge the battery can hold compared with when it was new. A phone at 96% has lost about 4% of its original usable capacity.

Recent phones such as the OnePlus 12, OnePlus 12R, OnePlus 13, OnePlus 13R, and OnePlus 13s are the models where you're most likely to see this in normal Settings on OxygenOS 14, OxygenOS 15, or OxygenOS 16. Older OnePlus 8 and OnePlus 9 models may not show a proper percentage even after later Android updates.

If the page isn't there, that doesn't prove the battery is healthy or unhealthy. It just means OxygenOS isn't exposing the number on that device. That's annoying, but it's common across Android brands.

## Charge limits are getting better

OnePlus used to be simple here. Some builds gave you Optimized Charging and, later, a fixed 80% limit. Newer OxygenOS builds have started adding more flexible charging limits on supported phones, usually in the Battery health or charging settings area.

Depending on model and software, you may see a fixed 80% cap or selectable limits such as 80%, 85%, 90%, and 95%. Some Android 16 beta builds on the OnePlus 13 showed this more flexible charging limit before it reached wider builds.

Use the setting that fits your life:

- 80% is best if you're near a charger most of the day.
- 90% is the sweet spot for a lot of people.
- 95% is a small compromise that still avoids sitting at 100% for hours.
- 100% is fine when you're travelling or need maximum runtime.

Don't turn battery care into a hobby. If the limit makes you anxious by 5 p.m., raise it. The goal is less wear over hundreds of cycles, not a perfect spreadsheet.

## Optimized Charging handles overnight charging

Optimized Charging is OnePlus's older battery-care feature, introduced around the OnePlus 7 era and still useful today.

When it's active, the phone charges to about 80% first, pauses there, then finishes to 100% before your expected wake-up time. OnePlus has described this as sleep-cycle based charging. It uses your charging routine, alarms, calendar signals, and learned behavior to decide when to resume.

The usual path is:

Settings > Battery > Optimized Charging

On some newer builds, it may sit inside Battery health or charging settings instead. Again, use Settings search if the menu path doesn't match your phone.

Optimized Charging works best if your nights are boring. That's not a criticism. It's just how prediction works. If you plug in at roughly the same time and unplug in the morning, it can keep the battery away from 100% for hours. If your schedule changes constantly, it may charge normally because it doesn't have a pattern to trust.

You can usually override it from the charging notification when you need a full charge sooner.

## Bypass charging is the big OnePlus advantage

Bypass charging is different from a charge limit. Instead of charging the battery while the phone is under load, the charger powers the phone directly and leaves the battery mostly out of the loop.

That's useful. No, really.

The worst charging scenario is heavy use while plugged in: gaming, video calls, Android Auto, livestreaming, navigation, or long video playback. The phone is drawing power, the battery is charging, and heat builds up. Bypass charging reduces that heat because the battery isn't being pushed as hard.

OnePlus first treated bypass charging mostly as a gaming feature. With OxygenOS 16 updates in early 2026, it expanded to more high-load situations on models such as the OnePlus 13, OnePlus 13R, OnePlus 13s, OnePlus 12, and OnePlus Pad Go 2. Update availability still rolls out in batches, so two people with the same model can see it at different times.

There may not be a big manual switch. On many builds, OxygenOS activates bypass charging when it detects the right conditions: plugged in, enough charge already in the battery, and sustained load. If you use navigation for hours in a car, this is exactly the sort of feature you want running quietly in the background.

## SUPERVOOC speed and heat

OnePlus charging speeds vary by model. The OnePlus 12 and OnePlus 13 support up to 100W wired charging in many regions, with 50W wireless charging on compatible hardware. The OnePlus 13R still charges quickly over wire, but it does not match the flagship wireless charging setup. Nord models are usually slower, often in the 33W to 80W range depending on the exact phone.

The region matters because chargers and wattage support differ. A phone that supports 100W on paper may charge at a lower rate if you're using a non-SUPERVOOC charger, a USB-PD charger, the wrong cable, or a regional variant with a different adapter.

Heat is the useful number to watch. If the phone gets warm while fast charging, take the case off, stop gaming for a few minutes, or use a slower charger when you aren't in a hurry. A 100W charger is great when you're leaving in 20 minutes. It doesn't need to be your bedtime charger.

## The old OnePlus Diagnostic app

OnePlus used to have an official diagnostic app, often shared as com.oneplus.healthcheck. It could read battery capacity, temperature, charging state, and wear information on some older models.

I wouldn't make it the main recommendation now. The app isn't in the Play Store, it hasn't been promoted much in recent years, and APK mirrors are a poor place to get a battery answer. On some phones, including parts of the OnePlus 8 series, it returned no useful health data anyway.

If you already have the official app from a trusted OnePlus source, fine. For most people, Settings is safer. If Settings doesn't show battery health, use a reputable third-party monitoring app and treat the result as an estimate.

## The Android testing code

The standard Android code is:

`*#*#4636#*#*`

On many OnePlus phones, it opens a Testing menu with battery status, level, health, temperature, voltage, and technology. The Health field usually says things like Good, Overheat, Dead, Over Voltage, Cold, or Unknown.

That field is not Maximum Capacity. Good only means the system hasn't detected a hard battery fault. A battery can be worn down and still report Good here.

Some carrier or regional builds block the code. If nothing happens, your phone isn't broken. The menu is just disabled.

## What OnePlus reports to apps

Through Android's BatteryManager API, OnePlus phones usually expose charge level, status, temperature, voltage, current, and the kernel health flag. Newer Android versions also support cycle count and state-of-health style reporting, but the phone still has to expose it.

OnePlus flagships tend to have better current readings than many budget Android phones because fast charging needs close control of current and temperature. That helps apps estimate drain rate and charging speed with less guesswork.

Still, an app can't invent missing hardware data. If the system reports unstable current or hides cycle count, the app has to work around it.

runcheck separates the reading from its confidence. On a OnePlus phone with usable current data, it can show live drain and charging estimates with higher confidence. If the device only exposes partial data, runcheck marks the value as estimated or unavailable rather than dressing up a weak reading as precise.

## What I'd actually turn on

For a recent OnePlus phone, I'd start with three settings.

Turn on Optimized Charging if you charge overnight. Use a charge limit around 90% if your phone supports it and your daily battery use allows it. Let bypass charging run during gaming, navigation, streaming, or other plugged-in heavy use.

That's enough. You don't need to micromanage every charge session. OnePlus gives you fast charging for a reason. Use it when it helps, and avoid the obvious heat traps when it doesn't.

## Quick answers

Can OnePlus show battery health as a percentage?

On many newer models, yes. Look for Maximum Capacity under Battery health or search Settings for battery health. Older models may not expose the number.

Is bypass charging better than an 80% charge limit?

They solve different problems. A charge limit reduces time spent near full charge. Bypass charging reduces heat and cycling while you're using the phone plugged in.

Can I manually slow down SUPERVOOC charging?

Usually not with a simple official speed slider. You can use a lower-wattage charger, enable charge limits where available, and avoid fast charging while the phone is already hot.

Is the OnePlus Diagnostic APK worth using?

Not for most people. It was useful on some older phones, but it's not a clean current recommendation because availability and compatibility are messy.
