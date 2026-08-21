---
title: "Does 5G drain battery faster than 4G?"
description: "5G can use more battery than 4G LTE, but the gap depends on signal strength, network type, and your phone's modem. Here is when 5G matters and when LTE is the better battery choice."
listSummary: "5G battery impact explained"
hub: "battery"
sourceNumber: 28
order: 18
subgroup: "Drain"
tags: ["battery", "drain", "troubleshooting", "android", "performance"]
draft: false
---
There is no universal percentage by which 5G drains a phone faster than 4G. The result changes with the phone, modem, network mode, radio band, signal, traffic, and workload. The earlier quantitative figure in this article could not be traced to a stable original Ookla report, so it has been removed.

## What direct measurements establish

A [2020 first-generation commercial 5G measurement study](https://www.cs.princeton.edu/courses/archive/spring21/cos563/papers/5G_measurement.pdf) measured substantially higher radio power than 4G in its tested devices and networks. That is direct evidence for those test conditions, not a current universal ratio for every Android phone.

Newer devices, network deployments, and firmware can behave differently. A result from one phone, carrier, place, or year should not be converted into a promise about another setup.

## Signal and network mode matter

Android's [SignalStrength documentation](https://developer.android.com/reference/android/telephony/SignalStrength) explains how software reports cellular signal levels. It does not measure battery consumption. Weak or unstable service can coincide with more radio work, but signal level alone cannot tell you how much battery 5G or LTE will use.

Non-Standalone and Standalone 5G, low-, mid-, and high-band spectrum, carrier aggregation, and modem implementation can all change behavior. None of those labels proves that 5G will always use more or less power on your phone.

## How to make the decision on your phone

Compare like with like. Use the same route or location, similar screen time and apps, and several normal days on automatic 5G and LTE-only mode if your carrier and phone expose that choice. Check Android's battery-use screen and note coverage changes, heat, and mobile-network activity.

Menu names and availability vary by manufacturer, model, carrier, region, and Android build. Pixel-specific options such as Adaptive Connectivity should be treated as Pixel features, not universal Android controls.

## Practical answer

5G can use more power than LTE in some conditions, and direct studies have measured that on specific hardware and networks. It can also make little practical difference in other conditions. Keep automatic mode when it works well. Try LTE-only temporarily when coverage is unstable or battery life matters more than peak network performance, then judge the result on your own device.
