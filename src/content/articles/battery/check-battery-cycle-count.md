---
title: "How to check battery cycle count on Android"
description: "The cycle count tells you how many full charge-discharge cycles the battery has completed since the phone was manufactured. One cycle equals using 100% of the battery's capacity. It doesn't have to happen in one session. Charging from 20% to 70% and then from 40% to 90% adds up to one full cycle across those partial charges."
listSummary: "Cycle count lookup options"
hub: "battery"
sourceNumber: 12
order: 2
subgroup: "Health"
tags: ["battery","health","diagnostics","android","guide"]
draft: false
---
This number matters because lithium-ion batteries have a finite lifespan measured in cycles. Most modern phone batteries retain about 80% of their original capacity after 800 to 1,000 cycles, depending on chemistry and manufacturer. After that, daily battery life shortens noticeably.

Android has supported reporting cycle count since Android 14 through the BatteryManager API, but whether the number actually appears depends entirely on the manufacturer. A handful of recent phones show it in Settings. Most don't. The methods below are ordered by how many devices they work on, starting with approaches that cover the widest range, including older models.

## Tracking apps: works on virtually any Android phone

For the majority of phones, especially anything older than 2024, a tracking app is the most practical starting point.

AccuBattery estimates cycle count by tracking charge input over time. Install it, let it run for a week or more through several charging sessions, and it calculates an approximate figure based on cumulative milliamp-hours charged divided by the battery's design capacity. The longer it runs, the more accurate the estimate. A freshly installed AccuBattery showing a cycle count is extrapolating from very limited data; give it at least two weeks before treating the number seriously. Works on Android 5.0 and above, which covers practically every phone still in use.

aBattery takes a different approach. On devices running Android 14 or newer where the manufacturer implemented the battery health HAL, it reads cycle count and health percentage directly from the system. On older devices or those with incomplete HAL implementations, the numbers are either missing or unreliable. There's no way to tell from the app alone whether the data is hardware-reported or a placeholder.

The limitation of all tracking apps: they estimate from charging patterns, not hardware counters. The estimates improve over time but aren't exact. Two apps on the same phone can show different cycle counts because their calculation methods differ.

## Dialer codes: quick check, hit or miss

On some phones, dialer codes reveal battery data hidden from the Settings interface. Many of these codes date back to Android 4 or earlier, but availability depends on manufacturer and carrier.

`*#*#4636#*#*` on stock Android, Pixel, and many phones from Motorola, Nokia, Sony, and others using near-stock Android. If it works, a testing menu opens with "Battery information" showing charge level, voltage, temperature, and health status. Cycle count doesn't appear here on most devices, but worth checking, since some manufacturers include extra fields. This code has been around for over a decade and still works on many older phones where newer built-in battery pages don't exist.

`*#*#6485#*#*` on Xiaomi, POCO, and Redmi phones sometimes shows battery data including cycle-related information under manufacturer-specific field names like `MB_06`. Works on models going back to MIUI 10 and earlier on some devices.

`*#0228#` on Samsung Galaxy phones shows voltage, current, and battery status. Typically doesn't include cycle count.

If a code triggers nothing, the phone doesn't support it. Carriers can disable these menus, and manufacturers occasionally remove them in updates.

## ADB: the deepest non-root method

Android Debug Bridge gives the most consistent access to battery data across Android versions, working on phones as old as Android 4.1. Requires a computer and about five minutes of setup, but it often surfaces data that no app or Settings screen shows.

Enable **Developer options**: **Settings > About phone**, tap **Build number** seven times. Enable **USB debugging** in Developer options. Connect via USB and authorize the connection when prompted.

Run:

`adb shell dumpsys battery`

The output includes CHARGE_COUNTER, voltage, temperature, status, and health. On devices that report it, a CYCLE_COUNT field appears with the actual number. Some Samsung, Pixel, and Xiaomi devices report this through ADB even when it's hidden from Settings. On older phones (pre-Android 14), this field is less common, but still worth checking. Some manufacturers reported cycle data through vendor-specific properties long before Google standardized the API.

If CYCLE_COUNT doesn't appear, the manufacturer probably hasn't exposed it through that interface. No software tool can retrieve the true count from hardware or firmware that doesn't expose it.

`adb shell dumpsys batteryproperties` sometimes reveals additional fields, particularly on Android 14+ where the HAL specification expanded. On older versions, the output may be empty.

## Built-in Settings: only on recent phones

A growing number of phones now show cycle count directly in Settings. If yours is one of them, this is the easiest path. If not, the methods above are the way.

**Google Pixel 8a and newer** show cycle count at **Settings > About phone > Battery information**, along with manufacturing date and first use date. Pixel 6 through Pixel 8 Pro don't have this screen. Google added it with the Pixel 8a and continued with the Pixel 9 and Pixel 10 series. Older Pixels need ADB or a tracking app.

**Samsung Galaxy S25 series and newer** may show battery health percentage and cycle count at **Settings > Battery > Battery info** on supported One UI builds and in supported regions. Samsung's rollout has been model and market dependent, so do not assume the page exists just because the phone received a new One UI version. On many older Galaxy phones, Samsung Members shows a general condition label such as Normal, Weak, or Bad, but not a precise count or percentage.

**OnePlus and Oppo phones** on recent OxygenOS or ColorOS versions may show battery health at **Settings > Battery > Battery health**, but cycle count availability varies by model and region. OnePlus 7 and earlier don't expose this.

The core problem remains fragmentation. Apple standardized battery health reporting on supported iPhones starting with iOS 11.3, covering iPhone 6 and later models. Android made it available in the API and left each manufacturer to decide whether to actually report it. More phones show the data each year, but the majority of Android devices in use today still don't.

## What the cycle count means in practice

The number alone is just a counter. What matters is the battery's rated cycle life.

Google rates Pixel 3 through Pixel 8 Pro batteries for about 800 cycles to 80% capacity. Pixel 8a and later are rated for 1,000 cycles, an improvement from updated battery chemistry and software features like Battery Health Assistance that gradually reduce maximum charge voltage as the battery ages.

Recent EU-market phones must meet at least 800 charge and discharge cycles while retaining at least 80% capacity. Some recent high-end models are rated around 1,000 cycles. Older or non-EU budget phones may have lower-rated batteries.

A phone at 400 cycles has used roughly half its battery's expected lifespan. At 800 cycles on a battery rated for 800, capacity should still be around 80%. A 5,000 mAh battery behaving like 4,000 mAh. At 1,200 cycles, daily battery life may be half of what it was when new.

These figures assume normal charging: room temperature, standard chargers, avoiding prolonged time at 100% or 0%. Fast charging in hot conditions accelerates degradation, and the cycle count alone won't reflect that. Two phones at 500 cycles can have very different battery health if one was charged overnight with adaptive charging and the other was fast-charged in a hot car.

## When the count isn't available

If none of the methods above work for your phone, practical indicators still help. Screen-on time declining compared to six months ago, unexpected shutdowns at 15-20%, battery percentage jumping erratically (30% to 12% moments later), or warmth during light use. All of these point to a battery past its prime.

Combined with an estimated health reading from AccuBattery after a few weeks of monitoring, these behavioral signs give a reasonable picture even without a precise cycle number.

## FAQ

**Does limiting charging to 80% reduce the cycle count?**
No. Partial charges still add up. Charging from 20% to 80% is 0.6 of a cycle. The benefit of the 80% limit isn't fewer cycles but reduced stress on cells at high charge levels, which slows chemical degradation independently of cycle count.

**Is 500 cycles a lot?**
Depends on the phone. At one full cycle per day, that's about 18 months. At 0.7 cycles per day (charging 30% to 100%), it takes over two years to reach 500. Whether that's "a lot" depends on the battery's rated lifespan for the specific device.

**Why doesn't my Samsung show cycle count after the One UI 7 update?**
Samsung limited this to certain regions and models. The Galaxy S25 series shows it most consistently, but even on supported devices, availability depends on firmware version and market. Samsung hasn't confirmed a timeline for wider rollout.

**Can the cycle count be reset?**
A real hardware cycle counter is not reset by a factory reset, battery calibration, or new ROM. Replacing the battery physically is the only way to start fresh when the counter is tied to the battery pack or fuel gauge. On phones that only show app-estimated cycle count, uninstalling the app or clearing its data can reset the estimate, which is one more reason not to treat app estimates as hardware truth.
