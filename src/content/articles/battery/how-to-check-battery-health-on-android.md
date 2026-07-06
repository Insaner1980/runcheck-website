---
title: "How to check battery health on Android and detect a failing battery"
description: "A failing phone battery rarely announces itself with a dramatic shutdown. The signs creep in gradually: shorter screen-on time, an unexpected restart, the phone feeling warm during light use. Rapid charge loss, shutting down with 20% or more remaining, longer charging times, persistent warmth during routine tasks, visible swelling of the back panel. Any combination of these points to a degrading battery."
listSummary: "Battery health checks and failure signs"
hub: "battery"
sourceNumber: 11
order: 1
subgroup: "Health"
tags: ["battery","health","diagnostics","android","guide"]
draft: false
---
Unlike iPhones, which have displayed a battery health percentage on supported models since iOS 11.3, Android has historically made this harder to find. There's no universal "battery health" screen. The picture comes from manufacturer tools, hidden menus, usage patterns, and diagnostic apps.


## Quick answer: how to check battery health

Three methods, from fastest to most detailed.

**Built-in manufacturer tools.** Go to Settings > Battery and look for a health indicator. **Samsung** users should open the Samsung Members app and navigate to Support > Phone diagnostics > Battery. **Google Pixel 8a and newer** can find battery health directly under Settings > Battery > Battery Health, and cycle count under Settings > About phone > Battery information. **OnePlus, OPPO, and Realme** devices may show battery health in Settings on recent models, but availability varies by model, region, and OS version. **Xiaomi and POCO** devices may display health percentages under Settings > Battery > Battery Protection > Battery Information, depending on the HyperOS version and model.

**Hidden diagnostic menu.** Open the Phone dialer and type `*#*#4636#*#*`. On supported devices, a Testing menu appears with Battery Information showing status, temperature, and voltage. This code doesn't work on all phones. Many newer Samsung and Pixel models have disabled it.

**Diagnostic app.** Third-party apps estimate battery health by tracking charge and discharge patterns over multiple days. This is the most detailed option when the phone lacks a built-in health indicator.

A health reading below 80% of original design capacity, or anything other than "Good" / "Normal," means replacement is worth considering.


## Why batteries fail

Every Android phone uses a lithium-ion or lithium-polymer battery: lightweight, energy-dense, rechargeable, but with a finite lifespan built into the chemistry.

**Charge cycles are one of the primary aging mechanisms.** One full cycle means using 100% of the battery's capacity, whether in one go or across multiple partial charges (using 50% today and 50% tomorrow equals one cycle). Older phones were often discussed around a 500-cycle threshold, but many current models are rated closer to 800 to 1,000 full cycles before dropping to about 80% of original capacity. EU-market phones placed on the market from 20 June 2025 must meet at least 800 charge and discharge cycles while retaining at least 80% capacity.

**Calendar aging happens regardless of usage.** Lithium-ion cells undergo unavoidable chemical side reactions from time and thermodynamics alone. The solid electrolyte interface layer on the anode gradually thickens, increasing internal resistance. A phone sitting unused in a drawer for a year will still have a measurably weaker battery than when it was new.

**Heat does the most damage.** Temperatures above 30°C (86°F) are considered elevated for lithium-ion cells. Charging while gaming, leaving the phone in a hot car, using it in direct sunlight. All of these speed up chemical breakdown. A single prolonged overheating event can cause permanent damage that never recovers. And it compounds: high temperatures combined with a full state of charge are the worst combination, which is why many modern phones offer options to cap charging at 80% or slow down overnight charging. A phone on a car dashboard in direct sun can reach damaging temperatures in under an hour, even in moderate climates.

**Charging habits matter, but less than people think.** Consistently charging to 100% and draining to 0% stresses the battery more than staying in the 20-80% range, and fast charging generates more heat than standard charging. But the difference between always fast-charging to 100% and gently charging to 80% over a year is smaller than most advice online suggests. Heat and time are the bigger factors. Uncertified chargers are the real risk: inconsistent power delivery can damage cells permanently.

The end result: a 5,000 mAh battery slowly becomes 4,000 mAh, then 3,500 mAh, until what's left doesn't get through a normal day.


## Manual diagnostic steps

Android's built-in settings offer useful clues even without a dedicated health percentage. None of these require installing anything.

**Check battery usage by app.** Go to Settings > Battery > Battery Usage (the exact path varies; some phones label it "Battery and Device Care" or similar). Look for apps consuming disproportionate power, especially ones that haven't been actively used. A background app eating 15% or more of the battery is often the actual problem rather than a degraded cell.

**Compare screen-on time.** Note how many hours of screen-on time a full charge delivers and compare this to the phone's original spec or early experience. A 30-40% decline from what it used to deliver points to real degradation.

**Watch for sudden percentage drops.** A healthy battery loses charge roughly linearly. Jumping from 45% to 20% in minutes during light use, or dying at 15%, means the battery's internal voltage curve no longer matches the software's charge estimation, a classic aging symptom.

**Time the charge speed.** Measure how long 20% to 80% takes with the same charger. Noticeably longer than before means internal resistance has increased. The reverse is telling too: a phone that charges fast but drains equally fast may be reporting inaccurate remaining capacity.

**Note shutdowns under load.** A degraded battery can't sustain voltage when demand spikes. Launching a demanding game and having the phone shut off despite showing reasonable charge is one of the clearest end-of-life signs.

**Feel the temperature.** Browsing, messaging, and light social media should produce mild warmth at most. If the back of the phone feels distinctly hot during these activities, increased internal resistance is generating excess heat.

**Look for physical signs.** A back panel that's lifting, a screen slightly separating from the frame, or a phone that wobbles on a flat surface. All of these suggest battery swelling. A swollen battery is a safety hazard. Stop using the phone, don't charge it, and take it to a repair center immediately. This isn't something to "monitor." Swelling only gets worse.

**Check manufacturer diagnostics.** Beyond the health indicators listed in the Quick Answer section, some phones have dedicated diagnostics. On Pixel, look for Battery Diagnostics under Settings > Battery. Samsung's Members app has a full Diagnostics section that runs a battery test. Xiaomi devices often show detailed battery information under Settings > Battery > Battery Protection.


## Advanced diagnostics: voltage, temperature, and discharge patterns

Several metrics reveal what's happening inside the cell for those who want the technical picture.

**Voltage behavior.** A fully charged lithium-ion cell sits at around 4.2V, fully discharged at around 3.0-3.3V. A healthy battery maintains relatively stable voltage under moderate load. Warning signs: voltage that fluctuates erratically under light load, voltage that drops sharply during moderate use, or a reading well below 3.7V while the phone still shows a charge percentage. Any of these suggest a cell that's either miscalibrated or degraded past the point of reliable use.

**Temperature patterns.** Normal operation is 20°C to 35°C (68-95°F). Up to 40°C is acceptable during intensive tasks like gaming or navigation. Consistently exceeding 45°C triggers the phone's thermal management, throttling performance and slowing charging. A battery regularly hitting those temperatures enters a feedback loop: more heat drives more degradation, which produces more heat.

**Discharge curve shape.** In a healthy cell, the middle portion of discharge (roughly 30-70%) is relatively flat and slow. As degradation progresses, this flat region compresses: faster discharge in the upper percentages, a squeezed mid-range, unreliable readings below 30%. A battery that plummets through the 50-30% range has lost usable capacity. Tracking these patterns over days or weeks shows whether the battery is declining and how fast.

**Internal resistance effects.** Can't be measured directly with consumer tools, but the consequences are visible: warmth during charging, the charge level dropping quickly under load but recovering when idle, reduced maximum charging speed. All of this comes from the battery struggling to move ions through degraded internal structures.

Diagnostic apps add numbers to these observations. They work by monitoring charging and discharging patterns over multiple days to calculate estimated current capacity versus original design capacity. If a 5,000 mAh battery now holds only 3,800 mAh, that's 76% health, and replacement is overdue. Most apps need at least a few days and several full cycles before the estimate stabilizes, so don't draw conclusions from day one.

runcheck combines battery diagnostics with network, thermal, and storage analysis in a unified assessment. This matters because battery problems don't always exist in isolation. A thermal issue from a misbehaving component can mask itself as battery drain, and a storage bottleneck keeps the CPU working harder than necessary.

Avoid apps that claim to "boost," "calibrate," or "restore" battery health. No app can reverse chemical degradation. The useful ones show actual voltage and temperature readings, track data over time, and run on-device without requiring accounts or cloud uploads.


## Frequently asked questions

**How long should an Android phone battery last before replacement?**

Older phone batteries were often described around a 500-cycle threshold, but that is too low as a general rule for current models. Many recent phones are rated to retain about 80% capacity after roughly 800 to 1,000 full charge cycles, depending on model, chemistry, charging habits, heat exposure, and usage intensity. Some people get four years out of a battery. Others notice real degradation after 18 months.

**At what health percentage should the battery be replaced?**

Around 80% of original design capacity is where most people start feeling the difference. At that point, a 4,500 mAh battery effectively stores about 3,600 mAh. Below 70%, most people find the phone hard to live with day to day.

**Can battery health be restored?**

No. Degradation is a chemical process that doesn't reverse. What helps is slowing future decline: keep the phone cool, charge between 20% and 80% when practical, use the manufacturer's charger or a certified alternative, and enable smart charging features if the phone offers them.

**Can a software update cause battery drain that looks like hardware failure?**

Yes, and it happens more often than people expect. A poorly optimized update can spike background CPU usage, draining the battery and generating heat. Check Settings > Battery > Battery Usage for any app consuming abnormal power before assuming hardware failure. If a specific app or system process is responsible, updating it, clearing its cache, or waiting for a patch usually resolves it.

**Is it safe to keep using a phone with a swollen battery?**

No. Stop using it, don't charge it, take it to a repair center. Swelling means gas buildup from internal chemical breakdown. In extreme cases, a swollen lithium-ion battery can rupture or catch fire.

**Does fast charging damage the battery faster?**

Fast charging generates more heat, and heat drives degradation. But modern protocols manage this well, charging rapidly to about 70-80% and then slowing down. The impact is real but relatively small compared to ambient temperature and overall charging habits. Using the manufacturer's charger is generally safe. Reserving fast charging for when it's actually needed and using standard charging overnight is a reasonable compromise.

**Why does the phone die at 15-20% instead of reaching 0%?**

The battery's actual capacity no longer matches what the software expects. As degradation progresses, the voltage curve changes and the charge estimation algorithm loses accuracy. The phone thinks charge remains, but the battery can't sustain voltage under load. A full charge-then-discharge cycle can sometimes recalibrate the reading, but if it happens regularly, the battery needs replacement.

**How often should battery health be checked?**

Every few months. Degradation is gradual, and checking obsessively doesn't change the outcome. Good triggers for an unscheduled check: sudden changes in battery life, unexpected shutdowns, or the phone running hotter than usual.


## What to do with the results

Check the battery usage graph first and use the manufacturer's built-in health tools. Pay attention to how the phone behaves day to day, since the practical symptoms often matter more than any single number. For precise tracking, a diagnostic app that monitors voltage, temperature, and capacity over time catches trends you'd otherwise miss over weeks.

The 80% health threshold is where degradation hits daily use. Below that, replacing the battery is far cheaper than a new phone and can extend the device's useful life by two to three years.
