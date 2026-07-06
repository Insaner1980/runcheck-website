---
title: "What does battery health percentage actually mean?"
description: "Battery health percentage shows your phone's current maximum capacity compared to new. Learn what the number means, why 80% matters, and how Android phones report it."
listSummary: "Battery health percentage meaning"
hub: "battery"
sourceNumber: 13
order: 3
subgroup: "Health"
tags: ["battery","health","diagnostics","android","guide"]
draft: false
---
The battery-health number is a wear number. It is not the same thing as the battery percentage in your status bar.

If your phone reports 87% health, its cell can hold about 87% of the charge it held when it was new. It still works. The tank is just smaller now.

## The number behind the number

Every phone battery starts with a design capacity. It is the amount of charge the cell was built to store, usually listed in mAh. A phone with a large 5,000 mAh pack is supposed to hold about that much charge when the battery is fresh.

Then chemistry gets involved. Each charge and discharge cycle ages the cell a little. Heat, high voltage, deep discharge, fast charging, and simple time all add up. The solid electrolyte interface layer inside the battery thickens, internal resistance rises, and less active lithium remains available for moving charge between electrodes.

The health percentage compares current full-charge capacity with the original rating. If the pack now tops out around 4,350 mAh, its health is roughly 87%.

This is the useful part of the number. It shows how much "full" has shrunk.

## Health percentage is not charge percentage

This is where people get tripped up. Charge percentage tells you how full the battery is right now. Battery health shows how much energy the battery can hold when it is full.

A phone at 100% charge and 85% battery health is not carrying the same amount of energy it carried at 100% charge when it was new. It is full relative to its aged capacity. That is why two phones can both show 100% in the status bar and still last very different amounts of time.

A bigger battery also changes the feel of the number. A 5,500 mAh phone at 82% health may still last longer than a compact phone at 95% health. The percentage is useful, but it is not the whole story.

## How Android shows battery health

Android has never handled battery health as cleanly as iOS. For years, the public Android battery information most users could see was a simple health status such as Good, Overheat, Dead, Cold, Over Voltage, Unknown, or Unspecified failure. That status is about obvious battery condition flags, not a precise capacity percentage.

Some phones still only show that basic status. On stock or near-stock Android devices, the `*#*#4636#*#*` testing menu may show battery information if the manufacturer left that screen enabled. Many phones hide it. Some show temperature and voltage but not battery health.

Android 17 does not make this universal. It rolled out first to supported Pixel devices, but battery health still depends on the model and the data the hardware exposes.

Pixel is the clearest current example of a real user-facing battery health page. On Pixel 8a and later, Google shows Battery health under **Settings > Battery > Battery health**. The status can be Normal, Reduced, or Unavailable, and the Battery capacity page gives an estimated capacity percentage compared with the original battery. Older supported Pixels such as Pixel 6a, Pixel 7, Pixel 7 Pro, Pixel 7a, Pixel 8, and Pixel 8 Pro do not show the Battery health status, even though they may support other battery management features.

Samsung takes a different route. The Samsung Members app can run Phone diagnostics and report battery status. Newer One UI builds also expose more battery information in Settings on some models, but Samsung's exact wording and available details vary by device and region.

Other Android brands are uneven. Some Xiaomi, HONOR, OnePlus, OPPO, and realme phones show maximum capacity in their battery settings. Older devices, budget models, and phones with limited fuel gauge data often do not. In theory, Android has more framework support for battery data than it used to. In practice, the hardware and OEM software decide what you actually see.

That messiness is why runcheck treats battery health as one signal, not a single verdict. When the phone exposes health status, voltage, temperature, current, cycle count, or capacity data, runcheck can show those indicators with confidence labels instead of pretending every Android device reports the same quality of data.

## Why 80% is the line everyone talks about

The 80% number is not magic. It is just a common service-life threshold.

Below 80% of original capacity, runtime is shorter enough that many users start noticing it. Internal resistance is also usually higher, which makes voltage sag more likely under load. At that point, a phone can shut down during a camera burst, a game, or a cold walk outside even though the battery percentage did not look empty a moment earlier.

Modern phone makers now publish different cycle targets, so old advice about "300-500 cycles" is too simplistic. Google says Pixel 8a and later should retain up to 80% capacity for about 1,000 charge cycles. Pixel 3 through Pixel 8 Pro and Pixel Fold are rated at about 800 cycles. In the EU, smartphones and tablets placed on the market must meet an ecodesign requirement of at least 800 charge and discharge cycles while retaining at least 80% of initial capacity.

For daily use, I would read the numbers like this:

- Above 85% is usually fine unless the phone had a small battery to begin with.
- Around 80% is the point where heavy users often start planning a replacement.
- Below 75% is where battery complaints stop being surprising.
- Below 70%, replacement is usually the practical answer if you plan to keep the phone.

Those are not laws. They are decision points.

## Why the number can be wrong

Battery health is an estimate. The phone is not taking the battery into a lab and measuring it under controlled conditions.

A fuel gauge chip estimates capacity by tracking charge flowing in and out of the battery, reading voltage, watching temperature, and comparing all of that against a model of how the cell should behave. That model can drift. Long periods of shallow charging, a battery replacement, a system update, or a run of unusual temperatures can make the reported number move around.

Small jumps are normal. If battery health goes from 88% to 90% after a few fuller charge cycles, the battery did not heal. The estimate improved.

Third-party apps have the same limitation, just with a different method. AccuBattery, for example, estimates capacity by measuring charge current during charging sessions and averaging results over time. That can be useful after a week or two of normal charging, but one session is not enough. A cheap cable, heat, a partial charge, or a phone that slows charging near 80% can skew the result.

The hardware matters too. Flagship phones often have better fuel gauge hardware than cheap phones. Some devices report stable, useful values. Others return 100% forever because they do not expose real aging data.

## What to do with the number

Use the health reading as a trend. One reading is interesting. A six-month decline is more useful.

If your phone says 89% and still lasts through your day, do nothing. If it says 78% and you are charging twice a day, a battery replacement is probably worth pricing. If the phone shuts down at 25%, gets warm during light use, or the percentage jumps around, treat those symptoms as more important than the number itself.

And if swelling appears, stop using the phone. Health percentage no longer matters at that point.

runcheck is useful here because it lets you look at battery health next to temperature, voltage, current reliability, drain rate, and history. Battery aging rarely shows up as one clean number. It shows up as a pattern.

## Common questions

### Is 85% battery health bad?

No. At 85%, the cell has lost capacity, but most phones are still usable. For example, a large phone battery originally rated at that capacity still holds about 4,250 mAh at 85% health. That may be enough for a full day depending on the phone and your habits.

### Can battery health go back up?

The real chemical capacity does not come back. Lithium-ion aging is permanent. The reported number can move upward if the phone was underestimating capacity and later recalculates it more accurately.

### Why does my phone show "Good" instead of a percentage?

Because many Android phones expose only a basic battery health status. "Good" means Android is not seeing a fault condition. It does not mean the cell still has 100% of its original capacity.

### Should I replace the battery at exactly 80%?

Not automatically. Replace it when the phone no longer fits your day, when it shuts down unexpectedly, or when the health status says Reduced and runtime has become a problem. The 80% line is a planning signal, not a countdown timer.
