---
title: "Xiaomi and POCO battery health and protection settings"
description: "Xiaomi battery health is still inconsistent. That's the honest version. A recent Xiaomi 15 can show useful battery protection behavior, some HyperOS builds show cycle count or health information, and plenty of Redmi and POCO phones still give you almost nothing beyond temperature and basic charge status."
listSummary: "Xiaomi and POCO battery settings"
hub: "brands"
sourceNumber: 155
order: 3
tags: ["battery","health","diagnostics","android","guide"]
draft: false
---
Android 17 doesn't clean this up by itself. Google released Android 17 first for most supported Pixel phones, while Xiaomi, Redmi, and POCO devices will receive Android 17-based HyperOS builds later. Even then, Xiaomi decides what appears in Settings on each model and region.

So don't read this as one universal Xiaomi path. Read it as a checklist.

## Check Battery protection first

On current HyperOS builds, start here:

Settings > Battery > Battery protection

Depending on the phone and firmware, this page can include battery protection controls, Smart charging, temperature, daily charging information, and sometimes health or cycle data.

On supported models, you may see battery health percentage or cycle count under Battery protection, Battery health, or a similarly named page. Xiaomi doesn't expose this consistently across the full product line. Flagships and newer performance models tend to get better data first. Budget Redmi models often don't.

If the screen isn't there, updating HyperOS and Xiaomi system apps may help, but don't expect miracles. Xiaomi can simply withhold the feature on that model.

## Smart charging and the 80% behavior

Xiaomi's official support pages describe Smart charging as a battery-life feature. The phone learns how you charge, stops charging when the battery reaches 80% in applicable situations, then slowly charges to 100% later so the battery doesn't sit full for hours.

The path is:

Settings > Battery > Battery protection > Smart charging

On the Xiaomi 15, Xiaomi also documents that if the phone only charges to 80% or won't fully charge, Battery protection or Smart charging is probably enabled. That is expected behavior, not necessarily a fault.

This is Xiaomi's version of adaptive charging. It makes the most sense if you charge overnight or leave the phone plugged in for long stretches. If your schedule is messy, it may behave inconsistently. That isn't unique to Xiaomi. Adaptive charging systems are all guessing from habits.

Some models also have a stricter Battery protection mode that stops at 80%. The wording varies by build. If your phone keeps stopping at 80% and you need a full charge, check Battery protection before blaming the charger.

## MIUI battery health was never dependable

On older MIUI versions, battery health information often lived in the Security app rather than Settings:

Security > Battery > Battery Health

On some phones, this showed a cycle count, a vague status label, or a battery performance message. On others, the option disappeared after updates. That was normal MIUI chaos.

If you still run MIUI 12, 13, or 14, update the Security app first. Open Security, tap the settings gear, go to About, and check for updates. If Battery Health still doesn't appear, the feature probably isn't available on that device or ROM.

Don't put too much trust in old MIUI labels like Good, Normal, Bad, or Awesome. They can be useful as a warning, but they don't give you a real remaining-capacity percentage.

## The Xiaomi hidden battery code

The code most people share is:

`*#*#6485#*#*`

On many Xiaomi, Redmi, and POCO phones, this opens a battery diagnostic screen. It may show values such as charging status, voltage, current, cycle-related fields, and factory or fuel-gauge data.

The problem is interpretation. Xiaomi doesn't publish a clean public guide that maps every field to a user-friendly battery health number. Some online guides claim specific formulas for MF values, but the fields can differ by model and software build. A formula that looks right on a Xiaomi 13 may be wrong on a Redmi Note.

Use the code as a raw diagnostic view, not as the final answer. If the phone gives you a built-in Battery health page, trust that more than a decoded hidden field.

## Charge speed and heat

Xiaomi and POCO phones are known for aggressive charging. 67W, 90W, 120W, and higher charging can be convenient. It also creates heat, and heat is the main thing you should care about for long-term battery wear.

Fast charging once in a while is fine. Fast charging every night under a pillow or in a hot room is a bad plan.

Most Xiaomi phones don't give you a simple manual charge-speed limiter. The system will throttle charging automatically when the battery gets warm, but that isn't the same as letting you choose a gentle 20W cap.

Practical habits work better than hacks:

- Use Smart charging overnight.
- Avoid fast charging when the phone is already hot.
- Don't game while charging if the device is heating up.
- Take the case off during very fast charging if temperatures climb.
- Use slower charging when you don't need speed.

No, you don't need to baby the phone every day. But if you bought a 120W POCO and want to keep it for four years, heat management matters.

## Battery modes in HyperOS

Battery modes are separate from battery health. They change how the phone spends power right now, not how much original capacity the battery has left.

Settings > Battery usually includes modes such as Balanced, Battery Saver, Ultra Battery Saver, and sometimes Performance Mode. The exact names vary.

Balanced is the default and is usually the right choice. Battery Saver limits background activity, sync, refresh rate, and some visual effects. Ultra Battery Saver is an emergency mode for calls, messages, and a few chosen apps. Performance Mode keeps the phone faster for games and heavy apps, but it costs battery and heat.

If your battery drain suddenly got worse after switching on Performance Mode, that isn't battery degradation. That's the phone doing exactly what you asked.

## What apps can read on Xiaomi phones

Through Android's battery APIs, Xiaomi phones usually expose charge level, charging status, plug type, voltage, temperature, health status, and sometimes current.

The current field is where things get messy. Some models report useful current readings. Others report zero, stale values, or numbers that don't match real drain. Flagship Xiaomi and POCO F-series phones are usually better than low-cost Redmi models, but there are exceptions.

Cycle count and state-of-health reporting are improving in Android and HyperOS, but Xiaomi support is not uniform. Android has framework hooks for richer battery data, yet the hardware, fuel gauge, firmware, permissions, and vendor UI all have to cooperate.

runcheck deals with this by attaching a confidence level to the reading. If a Xiaomi phone reports usable current data, runcheck can show drain and charging behavior with higher confidence. If the readings are missing or suspicious, the app marks them as estimated or unavailable instead of dressing up weak data as a precise number.

## Battery drain after HyperOS updates

A major update can make battery life worse for a couple of days. Android reindexes files, recompiles apps, updates caches, and lets apps restart background work. The phone can run warmer during that window.

Give it 48 to 72 hours before judging. That's boring advice, but it is usually right.

If drain is still high after three days, check per-app battery usage. Look for one app using an unusual amount in the background. Messaging apps, social apps, VPNs, cloud photo backups, and wearables can all get noisy after a big update.

Also check whether permissions were reset. If an app lost background restrictions during an update, it can quietly burn through battery without looking suspicious at first glance.

## When to trust the number

A built-in HyperOS battery health percentage on a recent model is useful, but don't panic over a one-point change. Battery estimates can move up and down after updates or calibration. Xiaomi users have reported health and cycle values changing after patches, which tells you the software model is not perfect.

Look for patterns:

- Capacity keeps falling month after month.
- Runtime is clearly shorter than before.
- The phone shuts down early.
- Charging gets unusually hot.
- Battery percentage drops sharply under load.

One weird reading is noise. A repeated pattern is evidence.

## A simple way to decide

Start with Battery protection. If your Xiaomi or POCO stops at 80%, assume Battery protection or Smart charging is active before you blame the charger. Xiaomi documents that behavior on the Xiaomi 15, and the same idea appears across newer HyperOS builds.

If your phone shows battery health percentage, track the trend over weeks. If it doesn't, use temperature, runtime, charge behavior, and a few app-based estimates instead. That is less satisfying, but it is more honest than pretending every Xiaomi device exposes the same data.

Fast charging is fine when you need it. Heat is the part to manage. Use 67W, 120W, or faster charging when the speed matters, and use Smart charging or a slower charger when the phone is just sitting there overnight.

Android 17 won't fix this by itself. Google shipped it first to supported Pixels, and Xiaomi's Android 17-based HyperOS rollout will decide what each Xiaomi, Redmi, and POCO model actually shows.
