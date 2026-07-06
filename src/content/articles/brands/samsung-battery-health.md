---
title: "Samsung battery health: how to check it on a Galaxy phone"
description: "Samsung still makes battery health more complicated than it needs to be. On many Galaxy phones, you don't get the neat iPhone-style number that says 94% or 81%. You get a basic diagnostic result, a few protection settings, and, on newer models, maybe a proper Battery information page."
listSummary: "Galaxy battery health checks"
hub: "brands"
sourceNumber: 153
order: 1
tags: ["battery","health","diagnostics","android","guide"]
draft: false
---
That uncertainty is the point. A Galaxy S25 running a recent One UI build may show battery health percentage and cycle count in Settings. A Galaxy S23 on what looks like a similar update may not. Android 17 is now out on most supported Pixel phones first, but Galaxy phones will get Samsung's Android 17-based One UI update later, and Samsung can still decide which battery fields it exposes.

Here are the checks that are worth using, and the ones that look useful but don't tell you much.

## Start with Samsung Members

The official route is Samsung Members. It's installed on most Galaxy phones, and Samsung's own battery support pages point users there for battery self-diagnosis.

Open Samsung Members, tap Support, then open Phone diagnostics. Choose Battery status, or run the full diagnostics set and include the battery test.

The result is simple. You usually get a condition label rather than a percentage. It can tell you whether the battery looks serviceable, weak, or bad, but it won't tell you whether the cell is still holding 96% of its original capacity or has slipped to 83%.

That's frustrating, but it has one advantage: it's the result Samsung will understand if you talk to support or visit a service center. If Samsung Members says the battery needs attention and you're also seeing random shutdowns, fast drain, or sharp percentage drops, don't waste days trying five different apps. Get the battery checked.

## Look for Battery information in Settings

On newer Galaxy phones, especially recent flagships on One UI 7 or later, check this path:

Settings > Battery > Battery information

When available, this page can show more useful details such as battery health percentage, cycle count, manufacturing date, or first use date. This is the closest Samsung has come to proper battery transparency on Galaxy phones.

The catch is availability. Samsung hasn't made this screen universal across every model and region. Some Galaxy S25 users have it. Some updated older flagships do too. Other phones running a recent One UI build still don't show it.

If the page isn't there, you probably can't force it on through a normal setting. That doesn't automatically mean your phone lacks the underlying hardware data. It means Samsung isn't exposing that data to you in Settings on that model, region, or firmware build.

This is where Android version numbers get a little misleading. Android has added more battery hooks over time, including cycle count and state-of-health related reporting in the framework. But a phone running Android 14, Android 16, or eventually Android 17 doesn't guarantee a visible Samsung battery health screen. The OEM still controls the user-facing UI.

## Use battery protection before the battery is worn

Battery protection is the setting that actually helps slow future wear. It won't repair an old battery. It just reduces the time the cell spends at high voltage.

On One UI 7 and later, go to:

Settings > Battery > Battery protection

Depending on region and software build, you'll see names such as Basic, Maximum, Adaptive, or Sleep time protection. The labels vary, but the behavior is familiar:

- Basic charges to 100%, then stops charging and starts again when the battery drops to about 95%.
- Sleep time protection or Adaptive charging pauses around 80% while you sleep, then finishes near 100% before you usually wake up.
- Maximum lets you set a hard charging limit. On One UI 7, Samsung documents selectable limits of 80%, 85%, 90%, or 95% on supported devices.

For most people, 90% or 95% is the practical middle ground. It reduces long hours at 100% without making the phone feel artificially small. If you're near a charger all day, 80% makes sense. If you travel or often end the day low, don't be heroic. A battery protection setting that makes you anxious is the wrong setting.

On One UI 6 and older builds, the protection option may be simpler, often a single limit around 85% rather than multiple choices.

## Hidden Samsung codes are not battery health tools

Samsung dialer codes get passed around because they feel like secret service menus. Some are useful. Most are not a real battery health check.

`*#0*#` opens a hardware test menu on many Galaxy phones. It's good for checking the display, touch panel, sensors, vibration, speakers, and cameras. It doesn't give you a battery health percentage. On some newer or carrier-locked models, the code does nothing.

`*#0228#` opens a battery status screen on some Samsung phones. It can show voltage, temperature, charge level, and a Level Block value. Don't treat Level Block as battery health. It changes with the current charge level, and Samsung doesn't publish it as a remaining-capacity metric.

Be careful with the Quick Start button in that screen. It can reset the fuel gauge calibration, and that can make the battery percentage behave strangely afterward. Viewing the screen is one thing. Pressing calibration buttons because a forum post told you to is another.

`*#*#4636#*#*` is the standard Android testing menu. When it works, the battery section shows status, level, health, temperature, voltage, and technology. The health field here means things like Good, Overheat, Dead, Over Voltage, Cold, or Unknown. It does not mean the battery is still at 100% of its original capacity.

That's the trap. Good means the system hasn't detected a hard battery fault. A two-year-old phone with a clearly aged battery can still say Good.

## Third-party apps can estimate, not magically know

If your Galaxy doesn't expose health percentage in Settings, third-party apps are still useful, but you need to understand the limits.

AccuBattery estimates capacity by watching how much charge enters the battery over multiple sessions. It gets better after several charge cycles. It can be helpful for trends, especially if you always charge in a similar way.

DevCheck and similar hardware apps show raw system values such as temperature, voltage, current, and sometimes capacity fields. They don't fix missing or bad hardware reporting. If the phone reports nonsense, the app can only display nonsense.

This matters on Samsung phones because current readings vary by model. Flagships tend to report more usable data. Some A-series and older models report unstable current, zero current, or values that don't match real draw.

runcheck handles this by treating the number and the confidence separately. If a Galaxy phone exposes usable current and capacity data, the app can show richer battery readings. If the model doesn't report reliable values, runcheck marks the reading as estimated or unavailable instead of pretending a weak signal is precise.

## What different Galaxy phones can usually show

The split is messy, but this is a realistic way to think about it.

Recent Galaxy flagships on One UI 7 or later may expose Battery information in Settings, including health percentage and cycle count. The Galaxy S25 series is the clearest example, but availability still depends on region and build.

Galaxy S21 through S24 models usually give you basic Android battery fields, including charge status, level, health status, voltage, temperature, and often current. Some builds may add richer battery information, but you shouldn't assume it just because the phone has a recent security patch.

Galaxy A-series phones and older models are less predictable. Samsung Members remains the best official check. Third-party apps can still track trends, but current and capacity readings are more likely to be missing or noisy.

Galaxy phones that eventually receive Android 17 won't automatically become more transparent overnight. Android 17 landed first on supported Pixel devices, and Samsung's rollout will come through its own One UI schedule. Even then, Samsung decides which Settings pages and battery values are enabled on each model.

## When the battery probably needs replacing

Don't rely on one number. Look at the behavior.

A battery replacement is worth considering if the phone shuts down with plenty of charge left, drops from 30% to 5% in a few minutes, gets unusually warm during normal use, or can't last through a day it used to handle easily. Samsung also notes that battery deterioration can show up as drastic battery life decrease, unexpected shutdowns, and slower response under demanding apps.

If Samsung Members reports a weak or bad battery and the phone behaves badly, that's enough evidence. If Samsung Members says Normal but the phone still dies early, check battery usage for a rogue app first. A broken social app running in the background can look a lot like a tired battery for a day or two.

## Quick answers

Samsung Members doesn't usually show a battery health percentage. It gives a diagnostic condition result. For a percentage, look for Settings > Battery > Battery information on supported One UI builds, or use a third-party estimate.

The `*#0228#` screen is safe to view, but don't press Quick Start unless you have a real reason. It can disturb battery gauge calibration.

If Battery information is missing, your phone may still be perfectly normal. Samsung rolls out that page by model, region, and software build.

A Samsung Members result of Weak or Bad is more useful than a random app estimate. Use it as the official signal to check replacement options.

Battery protection is worth turning on early. Once a battery has already degraded, limiting charge won't bring capacity back.
