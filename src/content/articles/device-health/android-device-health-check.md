---
title: "Android device health check: how to check if your phone is in good condition"
metaTitle: "Android device health check"
description: "Phones don't break overnight. A battery slowly loses capacity. Storage fills up in the background. Temperatures creep higher under the same workloads. By the time the symptoms become obvious (random shutdowns, sluggish apps, overheating during basic tasks), the underlying issue has usually been building for months."
listSummary: "Overall phone health checks"
hub: "device-health"
sourceNumber: 1
order: 1
tags: []
draft: false
---
A device health check catches these trends early. It's useful when troubleshooting a specific problem, preparing to sell a phone, or just figuring out whether that "slow" feeling is real or imagined.

---

## What a device health check covers

A proper health check goes beyond battery percentage. Several areas together reveal how a phone is actually holding up.

Battery health measures how much of the original capacity remains. A phone that shipped with 5,000 mAh might only hold 4,000 mAh after two years of daily charging. But raw capacity isn't the whole picture. Voltage stability, discharge rates, and temperature under load all affect how that remaining capacity translates to actual screen time.

Storage health goes beyond free space. Internal storage has read and write speeds that degrade over time, and a nearly full drive forces Android to work harder managing temporary files and swap memory.

Thermal status, network connectivity, sensor functionality, and processor performance round out the picture. Persistent heat accelerates battery wear and triggers CPU throttling. Wi-Fi and cellular diagnostics measure how well a connection actually performs, not just whether one exists. A drifting gyroscope or unresponsive proximity sensor can quietly break features. And memory pressure shows whether the phone still handles multitasking without choking.

---

## Why Android phones slow down over time

That feeling of a phone getting slower isn't imagined. Several things contribute, and they stack on top of each other.

### Battery degradation

Lithium-ion batteries wear down chemically with every charge cycle. Older phones were often discussed around a 500-cycle threshold, but that is no longer a useful blanket rule. Many recent phones are rated closer to 800 to 1,000 full cycles before dropping to about 80% of original capacity, depending on model, chemistry, and charging conditions. After that, screen-on time gets noticeably shorter and unexpected shutdowns become more likely under heavy load.

Heat makes this worse. Charging in hot environments, gaming while plugged in, leaving a phone on a car dashboard in summer. All of it accelerates the chemical wear.

### Storage pressure

Apps, cached data, photos, system updates. It all accumulates. Android needs breathing room to manage temporary files and run updates. Once available storage drops below about 10-15% of total capacity, things often start to feel sluggish. That is a practical rule of thumb rather than a hard Android limit. Apps launch slower, the camera hesitates before saving, animations stutter.

### Background process creep

Every installed app potentially runs background services, syncs data, and pushes notifications. Over a year or two, the cumulative drain grows. Combine that with Android updates that demand slightly more from hardware each generation, and older devices start struggling to keep up.

### Physical wear

Charging ports get loose. Speakers lose clarity. Touchscreen responsiveness can degrade in specific spots. Sensors drift out of calibration. These changes happen so gradually that they're easy to miss until they start interfering with daily use.

---

## Manual checks you can do right now

Android has built-in tools for a basic health assessment, no extra apps required.

### Battery health in Settings

The path varies by manufacturer:

**Samsung:** Open the Samsung Members app, tap Support, then Phone diagnostics, and run the Battery test. Depending on model, region, and One UI version, this may show a simple condition label rather than an exact percentage.

**Google Pixel** (Pixel 8a and newer): Settings > Battery > Battery Health shows battery health status and estimated remaining capacity. Settings > About phone > Battery information shows cycle count, manufacturing date, and first-use date. Battery Health Assistance, which adjusts charging behavior to preserve long-term capacity, is available on Pixel 6a and later.

**Xiaomi/POCO** (HyperOS): Check under Settings > Battery for health or cycle count information. The exact path varies by model, region, and HyperOS version.

For phones that don't surface this in Settings, there's a diagnostic code: open the Phone dialer and type `*#*#4636#*#*`. On supported devices, this opens a testing menu with battery voltage, temperature, and a coarse health status. It usually does not show a true capacity percentage or cycle count.

### Storage usage

Settings > Storage shows a breakdown by category: apps, photos, videos, system files, cached data. Anything above 85% usage is worth addressing. Clearing app caches and offloading old files can make a noticeable difference in responsiveness.

### Temperature

No built-in temperature monitor exists on most phones, but physical cues matter. A phone that feels warm during light browsing or sitting idle is worth investigating. The `*#*#4636#*#*` menu shows battery temperature on supported devices, which at least gives a number to work with.

### Basic hardware tests

A few quick checks: open a drawing app and drag across the entire screen to find dead touch zones. Play audio at different volumes to test speakers. Record a voice memo for the microphone. Try both cameras, the flashlight, and screen rotation.

---

## Advanced diagnostics

Manual checks cover the surface. For a more complete picture, deeper tools exist.

### Sensor testing

Phones have a lot of sensors: accelerometer, gyroscope, magnetometer, proximity sensor, ambient light sensor, barometer. When one fails, the symptoms are oddly specific. Auto-rotation stops working, the screen doesn't turn off during calls, compass navigation drifts, GPS accuracy tanks.

Testing individual sensors requires a diagnostic app or manufacturer codes. Samsung supports `*#0*#` for a hardware test menu. Other manufacturers have their own codes, though availability is inconsistent.

### Performance benchmarking

Benchmark tools stress the CPU, GPU, and memory with standardized tests and produce a score comparable against expected values for a specific device model. A score well below baseline suggests thermal throttling, excessive background load, or hardware degradation.

### Network diagnostics

Knowing that Wi-Fi is connected doesn't say much. Throughput speed, latency, packet loss, and signal stability determine real-world performance. Detailed network diagnostics help separate device-side issues from problems with the network itself.

### Battery analysis

The "Good" or "Poor" label in Android Settings is a rough indicator at best. Proper battery analysis tracks actual capacity versus design capacity, logs discharge rates under different conditions, monitors temperature patterns over time, and counts charge cycles when the device exposes that data. On phones that do not expose true hardware counters, apps can still estimate capacity from charging behavior, but the result needs more caution. This data makes it clear whether a battery replacement would meaningfully extend a phone's useful life.

Jumping between Settings menus, dialer codes, and manual tests covers a lot of ground, but the picture stays fragmented. A diagnostic app like **runcheck** pulls battery, thermal, network, and storage metrics into a single dashboard with a unified health score, useful for periodic checkups and particularly valuable when buying or selling a used phone where both parties benefit from an objective condition report.

---

## Frequently asked questions

### How often should I check?

Once a month works for most people. For phones older than two years, or when performance issues appear, every couple of weeks helps catch trends faster. A battery losing capacity, temperatures climbing, storage quietly filling up.

### Will a factory reset fix a slow phone?

Depends on the cause. A reset helps with software bloat, runaway background processes, and corrupted caches. It does nothing for a degraded battery, worn storage chips, or failing sensors. Running a diagnostic check first helps figure out which side of that line the problem falls on.

Back up everything before resetting.

### At what battery health percentage should I consider replacement?

The common threshold is around 80% of original design capacity. Below that, shorter screen-on time and more frequent charging become hard to ignore. Below 70%, the phone becomes difficult to use as a daily driver. The trend in the data is usually clear well before it becomes unbearable.

### Do diagnostic codes work on every Android phone?

No. `*#*#4636#*#*` works on many devices but not all. Samsung has its own codes, and manufacturers like Xiaomi, OnePlus, and Motorola each handle it differently. This fragmentation is one of the main reasons diagnostic apps exist: they standardize the testing regardless of manufacturer.

### Are third-party diagnostic apps safe?

As long as they come from reputable developers on the Google Play Store, yes. The safest options run everything on-device without requiring accounts, internet access, or permissions unrelated to diagnostics. An app asking for access to contacts or messages to "check device health" is a red flag.

---

Regular health checks turn vague feelings of "something's off" into actual data. A monthly check takes a few minutes and can surface problems (declining battery capacity, creeping temperatures, filling storage) before they start disrupting daily use.
