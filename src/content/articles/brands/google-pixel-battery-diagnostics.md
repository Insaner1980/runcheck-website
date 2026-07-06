---
title: "Google Pixel battery diagnostics explained"
description: "How do you tell whether a Pixel battery is actually worn out, instead of just being punished by a bad app or a hot day? On newer Pixels, Google finally gives you decent tools. On older ones, the answer is still more awkward than it should be."
listSummary: "Pixel battery diagnostics"
hub: "brands"
sourceNumber: 154
order: 2
tags: ["battery","health","diagnostics","android","guide"]
draft: false
---
The timing matters too. Android 17 is already available on most supported Pixel devices, while other Android brands will receive their own Android 17-based updates later. That doesn't mean every Pixel suddenly gets the same battery screen. Google's battery diagnostics are still split by model.

## Battery health and capacity

The main screen is here:

Settings > Battery > Battery health

On supported phones, this shows whether the battery is Normal, Reduced, or Unavailable. It can also show Battery capacity, an estimated percentage of how much charge the battery can hold compared with when it was new.

The important limit: Google says Battery health is only available on Pixel 8a and later. Pixel 6a, Pixel 7, Pixel 7 Pro, Pixel 7a, Pixel 8, and Pixel 8 Pro don't show battery health status, even though some of those phones still receive new Android versions.

Reduced means the estimated remaining capacity is below 80%. At that point, Google recommends considering a replacement. That threshold isn't arbitrary. Below 80%, runtime drops enough that many people notice it in normal use, especially in cold weather or under camera, gaming, navigation, and hotspot load.

Treat the capacity number as an estimate, not a lab measurement. Google's own wording is careful because the phone is reading fuel-gauge data and modeling the result. If your phone says 92%, don't obsess over whether the real number is 91.4% or 93%. The trend matters more.

## Cycle count

Cycle count is not the same as how many times you plugged in the charger. A full 100% discharge and recharge equals one cycle. Two days where you use 50% and recharge both times also add up to one cycle.

On Pixel 8a and later, Google puts cycle count under:

Settings > About phone > Battery information

That same page may also show the battery manufacture date and the date of first use.

The old version of this article said cycle count was available on Pixel 6a and later. Google's current support page doesn't say that. It gives the Pixel 8a-and-later path for cycle count, so the article has been corrected.

Google's replacement guidance is now split by generation:

- Pixel 3 through Pixel 8 Pro and Pixel Fold should retain up to 80% capacity for about 800 cycles.
- Pixel 8a and later should retain up to 80% capacity for about 1000 cycles.

So a Pixel 9 Pro at 650 cycles is not automatically in trouble. A Pixel 7 Pro at 850 cycles with much shorter runtime is a better replacement candidate.

## Battery health assistance

Battery health assistance is Google's long-term wear management feature. It runs on Pixel 6a and later, except Pixel Tablet.

The feature adjusts the battery's maximum voltage in stages. It starts at 200 charge cycles and continues gradually until 1000 cycles. The goal is to slow chemical aging and keep the battery more stable over the life of the phone.

There is a tradeoff. As the phone ages, you may see slightly shorter runtime or slower charging because the software is deliberately reducing stress on the battery. That's not a bug. It's the policy.

There is one important model split:

- Pixel 6a through Pixel 9 Pro Fold can turn Battery health assistance on or off.
- Pixel 9a and later have it on by default, and Google says it can't be turned off.

That second point annoyed some users, understandably. I think the feature is defensible from a battery-life standpoint, but Google should be clearer in the UI about what is happening and why. People notice when a phone's runtime changes after months of ownership, even if the engineering reason is reasonable.

## Charging optimization

Pixel charging settings live here on supported builds:

Settings > Battery > Battery health > Charging optimization

There are two main choices.

Adaptive Charging learns your charging habits and tries to finish charging to 100% shortly before you unplug. On Pixel 4, it depends on charging overnight with a suitable alarm set. On Pixel 4a and later, it learns from your charging behavior instead. Google says it needs about 14 days to learn your habits, so don't judge it after one night.

Limit to 80% caps charging at 80% most of the time. This is available on Pixel 6a and later. It gives the battery an easier life, but you give up 20% of daily capacity.

There is one behavior that looks broken but isn't. Even with Limit to 80% enabled, a Pixel needs to charge fully every 10th cycle to keep battery capacity readings accurate. Google says to leave it plugged in for at least 30 minutes after it reaches 100% so calibration can finish.

For most people, Adaptive Charging is the better default. Use the 80% limit if you routinely end the day with plenty of battery left, work near a charger, or care more about long-term battery health than maximum daily runtime.

## Battery diagnostics and Device health and support

Pixel has two layers of troubleshooting now.

The older path is:

Settings > Battery > Battery Diagnostics

Google says Battery diagnostics are available on Pixel 6 and later, including Pixel Fold. The tool checks battery performance and can help decide whether the issue is poor battery life, charging behavior, or a replacement case.

The newer dashboard is:

Settings > Device health and support

Google says Device health and support is available on Pixel 6 and later, including Fold. It summarizes device status, battery health, phone temperature, charging diagnostics, touch diagnostics, warranty, support, and repair options. On Pixel 9 and later, it also includes conversational support in English.

This is cleaner than the old split between hidden troubleshooting screens and scattered Settings entries. It still doesn't make old Pixels show a battery health percentage, but it gives you a better first stop when the phone feels wrong.

## Temperature diagnostics

Pixel phones run warm more often than many people would like. Tensor models in particular can heat up during camera use, 5G, navigation, restore-from-backup, gaming, hotspot use, and Android Auto.

On Pixel 6a and later, you can check the phone's current temperature state here:

Settings > Battery > Battery diagnostics > Phone is very warm

Google labels the state as Cold, Normal, Warm, or Elevated. Elevated doesn't just mean the phone feels warm in your hand. It means the system may reduce screen brightness, network speed, performance, or pause features to cool down.

Heat matters because it accelerates battery aging. If your Pixel repeatedly charges while hot, sits in a car mount under sunlight, or runs navigation and fast charging at the same time every day, battery health will suffer faster.

## The old Android testing code

The dialer code `*#*#4636#*#*` still works on many Pixels. It opens a Testing menu with basic battery information such as status, level, health, temperature, voltage, and battery technology.

The health field here is not the same as Battery health percentage. Good means the phone hasn't detected a major battery fault. A battery can say Good and still have lost a lot of capacity.

Use this code for quick temperature and voltage checks, not for a final replacement decision.

## Pixel 6a battery performance program

Pixel 6a deserves its own note because Google launched a formal Battery Performance Program for affected units.

Starting July 8, 2025, impacted Pixel 6a devices received a mandatory Android 16 update to address a potential battery overheating risk. The battery management changes activate only if the device is affected and the battery has completed 400 charge cycles.

If you own a Pixel 6a and see reduced capacity or charging performance after that update, don't assume normal aging first. Check Google's eligibility tool. Affected owners may qualify for support options such as repair at no cost, cash payment, or store credit, depending on region and eligibility.

## What runcheck can add

Pixel phones usually report cleaner battery current data than many Android devices, so third-party tools have a better starting point. Still, not every value is guaranteed.

runcheck reads the Android battery data the phone exposes and pairs it with confidence labels. That matters because a number without context can mislead you. A drain rate based on solid current readings is useful. A drain rate based on missing or unstable current readings should be treated as an estimate.

The app also tracks temperature alongside battery data, which is important on Pixels. A battery that looks fine on paper can age quickly if the phone spends too much time hot.

## The bottom line for older Pixels

The main mistake is expecting Android 17 to backfill every battery screen to every supported Pixel. It doesn't. Android 17 arrived on supported Pixels first, but Google's battery health page is still model-limited.

If you have a Pixel 7, you don't get battery health percentage in Settings. If you have a Pixel 8a or newer, you get the useful stuff: Battery health, Battery capacity, and cycle count under Google's documented paths.

The 80% replacement threshold is a good rule, but it isn't the only signal. A phone above 80% can still have terrible runtime because of heat, weak signal, a bad app, or a recent update. A phone below 80% can still limp along if your use is light. Use the number as evidence, not a command.

The same goes for the 80% charging limit. If your Pixel occasionally charges to 100%, it may be doing the every-10th-cycle calibration pass. Let it sit plugged in for about 30 minutes after reaching 100% if you want that calibration to complete.
