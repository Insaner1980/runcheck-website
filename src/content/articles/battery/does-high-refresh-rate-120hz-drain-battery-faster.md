---
title: "Does a high refresh rate drain battery faster?"
description: "A 120Hz display can use more battery than 60Hz, especially on fixed-refresh panels. Adaptive-display phones reduce the cost by lowering the screen rate when motion is not needed."
listSummary: "High refresh rate battery impact"
hub: "battery"
sourceNumber: 30
order: 20
subgroup: "Drain"
tags: ["battery","myths","android","testing","facts"]
draft: false
---
The common advice is to turn 120Hz off if you care about battery. That's half right.

A high refresh rate can drain more battery than 60Hz, but every 120Hz phone does not pay the same price. On an older or cheaper phone with a fixed high-refresh panel, 120Hz can make a clear dent in battery life. On a newer phone with a variable refresh panel, the cost is often much smaller because the screen doesn't sit at 120Hz all day. It ramps up for scrolling and animation, then drops when the image is static.

That difference matters more than the spec sheet.

## What 120Hz actually changes

A 60Hz display refreshes 60 times per second. A 120Hz display refreshes 120 times per second. Twice as many refreshes means more work for the display pipeline, and when the app is actually rendering at high frame rates, more work for the GPU too.

You feel the benefit when scrolling, swiping between screens, opening menus, and playing supported games. The phone feels more responsive because the display updates more often and motion looks less choppy.

The downside is simple: the screen and display controller need more power. In fixed 120Hz mode, battery tests on older high-refresh phones often show around a 10% hit to overall battery life, sometimes more depending on brightness, panel type, and workload. For display-heavy use, that is enough to notice.

## Variable refresh is the important part

Modern Android phones don't all run 120Hz the same way.

Some panels are fixed. You choose 60Hz or 120Hz, and the phone stays close to that rate whenever the screen is on. These phones get the biggest battery penalty because the screen keeps refreshing quickly even when you're reading a static page.

Better panels vary the refresh rate automatically. Many flagship phones use LTPO OLED, which can drop refresh rate far below 60Hz for static content and climb back to 120Hz when you touch the screen. Some panels can go as low as 1Hz. Others have a narrower range, such as 10Hz, 24Hz, 30Hz, 60Hz, and 120Hz. The exact behavior depends on the display, Android version, app, and manufacturer tuning.

That last part is messy. A phone may advertise adaptive 120Hz but still behave differently in Chrome, YouTube, games, the launcher, and always-on display. You don't need to micromanage it, but you should understand why one 120Hz phone can last longer than another.

## Fixed 120Hz is where battery loss shows up

If your phone doesn't have a good adaptive panel, 120Hz costs more.

Static content is the obvious waste case. Reading an article, looking at photos, checking a map, or keeping a recipe open doesn't need 120 refreshes every second. A fixed panel still redraws anyway. You get little visual benefit and pay the battery cost the whole time.

That is why mid-range phones with fixed 120Hz can feel surprisingly hungry compared with flagships. The experience is smooth, but the panel isn't smart enough to back off as aggressively.

On a phone that normally gets 7 hours of screen-on time at 60Hz, forcing 120Hz all day could cut a meaningful chunk from that. I wouldn't promise an exact hour count because devices vary too much, but losing an hour or more on a fixed-refresh phone is completely believable.

## Gaming changes the equation

Gaming is the worst-case scenario for 120Hz battery drain.

If a game runs at 120fps, the display is refreshing fast and the GPU is drawing more frames. That is a double hit. Add high brightness, mobile data, Bluetooth audio, and a warm room, and the battery graph will look ugly fast.

Some games cap at 30fps or 60fps even on a 120Hz phone. In those cases, the refresh-rate setting matters less. The phone may still show the game through a higher refresh panel, but the GPU isn't producing 120 unique frames every second.

For long gaming sessions away from a charger, 60Hz is still the boring but sensible choice.

## How to change the setting on Android

On Pixel phones, the setting is usually Settings > Display & touch > Smooth Display. Google still lists turning off Smooth Display as one of its battery-saving tips for Pixel 4 and later, including Fold models.

On Samsung Galaxy phones, go to Settings > Display > Motion smoothness. Standard means 60Hz. Adaptive allows up to 120Hz on supported models and apps. Samsung's wording can vary slightly by One UI version and region.

On OnePlus, Xiaomi, Motorola, Nothing, and other Android phones, look under Settings > Display for names like Refresh rate, Screen refresh rate, Motion smoothness, or Smooth display.

If you see an Adaptive option, use it for normal life. If the only choices are fixed 60Hz and fixed 120Hz, pick 120Hz when smoothness matters and 60Hz when battery matters.

## Should you turn 120Hz off?

Turn it off when you're traveling, low on battery, gaming for a long time, or reading static content for hours. You won't break the phone by using 60Hz. It just feels less fluid once your eyes are used to 120Hz.

For daily use on a recent flagship with adaptive refresh, I would leave 120Hz on. The phone already drops the rate when it can, and the smoother scrolling is one of the few modern phone upgrades you can feel every time you use it.

For an older high-refresh phone or a budget model with fixed 120Hz, be more practical. Smoothness is nice. Battery at 7 p.m. is nicer.
