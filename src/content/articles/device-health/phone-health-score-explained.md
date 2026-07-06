---
title: "What does a phone health score mean and how is it calculated"
description: "Open any Android phone's Settings and battery information lives in one place, storage data in another, network details somewhere else. A phone health score takes all of that (battery, thermal state, network, storage) and collapses it into one number, typically 0 to 100. One reading instead of four."
listSummary: "Health score signals explained"
hub: "device-health"
sourceNumber: 10
order: 6
tags: ["temperature","thermal","android","troubleshooting","hardware"]
draft: false
---
Android itself doesn't define one universal phone health score. There is no cross-device Android Settings screen where "82/100" means the same thing on every brand. Samsung Battery and device care does show an optimization score out of 100, and Pixel Device health and support shows overall status and feature status, but those are manufacturer tools rather than a shared Android standard. Diagnostic apps use their own scoring models. What goes into these scores, and where they fall short, matters more than the number itself.

## What a health score measures

A useful health score usually pulls from four categories, weighted by how much each one affects day-to-day experience. The exact weights are not standardized.

**Battery** should carry the heaviest weight. In runcheck's scoring model, it carries 40% of the total score. This makes sense: a degraded battery is the most noticeable problem on an aging phone. The battery component factors in current charge level, estimated remaining capacity compared to design capacity, temperature during charging and discharging, voltage stability, and the health status from Android's BatteryManager API (which returns values like "Good," "Overheat," "Dead," or "Cold"). Android 14 added more detailed battery-health APIs, but devices only expose cycle count or health percentage when the manufacturer and battery HAL provide that data. A battery at 92% health running at 31°C earns a high score. A battery at 74% health running warm at 39°C pulls it down hard.

**Thermal state** accounts for 25% in runcheck's model. Android reports thermal status through `PowerManager.getCurrentThermalStatus()` on Android 10 and newer, and thermal headroom through `getThermalHeadroom()` on Android 11 and newer. These tell diagnostic apps whether the phone is cool, warm, throttling, or approaching shutdown. High temperatures reduce CPU performance through thermal throttling and accelerate long-term battery degradation. A phone at "Normal" thermal status with 28°C battery temperature scores well. A phone in "Moderate" throttling above 40°C does not.

**Network connectivity** contributes 25% in runcheck's model. Signal strength in dBm for cellular and Wi-Fi, link speed, latency, and whether the connection is stable. On Wi-Fi, -50 to -70 dBm is excellent, -70 to -80 dBm is acceptable, below -80 dBm performance drops. For cellular, above -85 dBm is strong, below -110 dBm is poor. Latency matters too. A 15ms ping versus 200ms is a bigger practical difference than most signal strength variations.

**Storage** is the smallest component, 10% in runcheck's model. Below 50% usage, no penalty. Between 50% and 80%, small impact. Above 85%, the score drops because Android performance often degrades when NAND flash runs low, since the storage controller has less room for garbage collection and wear leveling.

## Why the weights matter

Battery health affects the phone every day. Storage only becomes a problem past a threshold. Network quality fluctuates constantly based on factors the phone can't control. Thermal state is transient: a phone that's hot right now might be fine in ten minutes.

Weighting isn't standardized across apps. Some give equal weight to all four categories (which is wrong, frankly: it treats a full storage drive as equal to a failing battery). runcheck weights battery at 40%, thermal and network at 25% each, and storage at 10%, which better matches how people actually experience phone problems. A phone with excellent battery health and full storage is less impaired than one with poor battery health and plenty of free space.

## The reliability problem

Not every reading that feeds into the score is equally trustworthy, and this is where the whole concept gets shaky.

Battery health percentage is accurate on phones that implement the HAL correctly: recent Pixel devices, Samsung Galaxy S25 and newer in supported regions, a few others. On phones that don't expose this data, apps estimate it by tracking charging patterns over time. These estimates improve with use but start rough. A health score built on a battery estimate of unknown accuracy inherits that uncertainty.

Thermal readings depend on which sensors the phone exposes. `getCurrentThermalStatus()` provides a general status level (Normal through Shutdown), but it's coarse. `getThermalHeadroom()` returns a float indicating how close the device is to throttling, but interpretation varies by SoC. Battery temperature is consistently available across devices, but it measures the battery, not the CPU or skin temperature, and those can differ by 5-10°C.

Network signal strength in dBm is reliable when reported. But Android's signal bars aren't standardized. Three bars on a Samsung and three bars on a Pixel at the same location can represent different dBm values. The bars are cosmetic. The dBm reading is what matters.

Storage usage is the only metric that's consistently accurate across all devices. Simple calculation, no hardware abstraction layer complications.

An honest health score acknowledges these limitations rather than hiding them. If the battery health reading comes from an estimate rather than hardware, that uncertainty should be visible. Showing a confident "87/100" when the inputs include a battery estimate with a 5% margin of error is misleading, and most apps do exactly this.

## Health scores on older phones

The quality of a health score depends on how much data the phone exposes. Older devices expose less.

Phones on Android 10 (API 29) and above can report thermal status, so the thermal component works reasonably well on devices from 2019 onward when the manufacturer exposes usable data. Android 11 (API 30) adds thermal headroom, making that reading more granular. Below Android 10, thermal information is often limited to battery temperature alone.

Battery health is where the gap is widest. Android 14 added more detailed battery-health APIs, but most phones released before 2024 don't report full health percentage or cycle count. On those devices, the battery component relies on indirect indicators: the coarse Good/Overheat/Dead status classification, temperature, voltage, and long-term charge tracking. A phone running Android 10 can still produce a meaningful battery score from these signals, but with less precision than a supported Pixel 8a or later reporting health and cycle information directly.

Storage and network work consistently on anything from Android 8 onward.

The practical result: a health score on Android 9-13 is useful but leans more on estimates. It catches clear problems (a badly degraded battery, critically low storage, persistent overheating) but the confidence margin is wider. That's still valuable. It's just less precise.

## How to interpret the number

**75-100:** Phone is in good shape. Normal battery degradation, no thermal issues, adequate storage, working connectivity.

**50-74:** Something needs attention. Usually a battery that's lost enough capacity to shorten the day, or storage filled to the point of affecting performance. Targeted maintenance fixes it.

**25-49:** Real problem. Battery significantly degraded, persistent thermal throttling, or critically low storage. Repair or replacement territory.

**Below 25:** Something is actively failing.

These thresholds aren't official. No governing body defines "healthy" for a phone. They're conventions that diagnostic tools use, and they roughly match what people experience as good, okay, declining, or broken.

## What a health score can't tell you

It can't detect hardware damage. A cracked screen, failing speaker, loose charging port, or water damage won't appear in any software-based metric.

It can't predict how much longer the phone will last. A score of 78 doesn't mean "78% of the way through its life." It means right now, across the metrics it checks, the phone is in decent shape.

It can't compare across phone models. A 90/100 on a budget phone with 3 GB RAM and 32 GB storage is not equivalent to 90/100 on a flagship with 12 GB RAM and 256 GB storage.

The score is a snapshot. Useful for spotting trends (is the phone declining?) and quick assessments (is this used phone worth buying?). A starting point, not a diagnosis.

## FAQ

**Do manufacturers publish official health scores?**
No universal one. Samsung Battery and device care shows an optimization score out of 100, but it reflects Samsung's own battery, storage, memory, and security checks rather than a cross-Android health standard. Pixel Device health and support shows overall status and feature status instead of a generic 0-100 phone score. Manufacturer tools are useful, but their numbers do not compare cleanly across brands.

**Can a low score be improved?**
Depends entirely on the cause. Full storage dragging the score down? Free space, and it recovers immediately. Degraded battery? Replacement is the only fix. Thermal issues often resolve by closing a misbehaving app or removing a case that traps heat.

**Is a higher score always better?**
On the same phone over time, yes. A dropping score means degradation. Across different phones, not really. A three-year-old phone at 72 might work fine for its owner, while a new phone at 95 could have poor signal in the owner's location that the score partially reflects.
