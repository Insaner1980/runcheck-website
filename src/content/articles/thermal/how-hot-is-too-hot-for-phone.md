---
title: "How hot is too hot for a phone?"
description: "Android has no universal phone-temperature cutoff. Readings and thermal responses vary by sensor, device, workload, charging, and environment; the Pixel 7 and 7 Pro 0–35°C guidance is a model-specific ambient example."
listSummary: "Safe phone temperature ranges"
hub: "thermal"
sourceNumber: 59
order: 7
tags: ["temperature", "thermal", "android", "troubleshooting", "hardware"]
draft: false
---
There is no single Celsius number that means “too hot” for every phone. Ambient air, the phone's surface, the battery, the processor, and Android's thermal status are different measurements. A threshold for one must not be presented as a threshold for another.

## Use the manufacturer's operating range

The correct numerical range is the one published for your exact model. For example, Google's [Pixel 7 and Pixel 7 Pro safety guide](https://support.google.com/pixelphone/answer/12164747?hl=en) says not to use or charge those models below 0°C or above 35°C ambient temperature. That is an ambient limit for named Pixel models, not a universal Android battery or internal-component threshold.

Other manufacturers and models can publish different operating and storage ranges. Check the safety guide or technical specifications for your exact model, region, and battery.

## Android thermal status is not a thermometer

Android's [Thermal API](https://developer.android.com/games/optimize/adpf/thermal) reports levels of thermal pressure so software can reduce workload. It does not define one Celsius boundary for all hardware. Throttling, dimming, slower charging, a warning, or shutdown may be the device responding to its own sensors and limits.

A battery-temperature value from an app is not the same as surface temperature or ambient air. Sensor availability and accuracy also vary by device.

## Heat and long-term wear

A [peer-reviewed lithium-ion degradation review](https://pubs.rsc.org/en/content/articlehtml/2021/cp/d1cp00359c) identifies temperature as a factor in battery aging. That supports avoiding repeated heat, but it does not justify the former universal warning bands or a repair decision at a particular Android temperature reading.

Short workload spikes and hours of sustained heat are not equivalent. The phone's behavior and the manufacturer's warnings matter more than a generic chart.

## What to do

Stop demanding work and disconnect charging when the phone displays a temperature warning, stops charging, shuts down, or becomes unusually uncomfortable to handle. Move it to a shaded, ventilated place and let it cool naturally. Do not use water, ice, a refrigerator, or a freezer.

If warnings recur during light use, or the battery swells, the enclosure lifts, there is smell, smoke, liquid damage, or visible damage, stop using the phone and seek professional or manufacturer guidance.

## Practical answer

“Too hot” means outside the exact model's documented conditions or hot enough that its own protections intervene. Do not turn Pixel ambient limits, battery-app readings, surface warmth, and Android thermal status into one universal temperature scale.
