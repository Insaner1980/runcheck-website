---
title: "How lithium-ion phone batteries work and why they degrade"
description: "Most battery advice online makes lithium-ion sound fragile, as if one overnight charge ruins your phone. That isn't true. Phone batteries are tougher than that, but they are also chemical parts, and chemical parts wear out."
listSummary: "Lithium-ion aging basics"
hub: "battery"
sourceNumber: 19
order: 9
subgroup: "Health"
tags: ["battery-tech","science","education","hardware","guide"]
draft: false
---
Understanding the basics makes the usual advice less mysterious. The 20% to 80% rule, the warning about heat, and the reason old phones die early all come from the same place: lithium ions moving through a cell that slowly changes every time you use it.

<figure class="not-prose my-10">
  <video class="aspect-video w-full rounded-2xl border border-run-border bg-black shadow-2xl" controls playsinline preload="metadata" poster="/videos/articles/how-lithium-ion-batteries-work-poster.webp" aria-label="How lithium-ion phone batteries work and why they degrade">
    <source src="/videos/articles/how-lithium-ion-batteries-work.mp4" type="video/mp4" />
    Your browser does not support embedded video. <a href="/videos/articles/how-lithium-ion-batteries-work.mp4">Open the video directly.</a>
  </video>
  <figcaption class="mt-3 text-sm leading-relaxed text-run-muted">A visual guide to lithium-ion charging, battery aging, voltage stress, and the practical 20% to 80% charging range.</figcaption>
</figure>

## The basic cell

A lithium-ion phone battery has four main parts: an anode, a cathode, an electrolyte, and a separator. The anode is usually graphite in conventional phone cells. The cathode is a lithium metal oxide, with the exact chemistry depending on the manufacturer. The electrolyte lets lithium ions move, while the separator keeps the two electrodes from touching.

During discharge, lithium ions move from the anode to the cathode through the electrolyte. Electrons travel through the phone's circuit instead, and that electron flow powers the screen, SoC, radios, cameras, storage and everything else.

During charging, the process reverses. The charger pushes lithium ions back into the anode so the cell can store energy again.

That is the core trick. It works. Until the materials stop behaving quite like they did when new.

## Why percentage is only an estimate

Your phone does not measure battery percentage like a fuel tank. There is no tiny dipstick inside the cell.

Android estimates remaining charge using voltage, current, temperature and a battery model. Some devices also use coulomb counting, which tracks current flowing in and out over time. The estimate is good when the cell is new and predictable. It gets harder when the battery ages.

A fully charged phone cell is often near 4.2 V, though the exact number depends on chemistry and charging design. Near empty, phones shut down before the cell reaches a damaging low voltage. The displayed percentage maps the cell's voltage curve to a user-friendly number.

The catch is that the voltage curve is not a straight line. It is fairly flat through the middle and steeper near full and empty. That is why 50% can feel steady, while the last 15% falls apart quickly on an older battery.

## Why batteries wear out

Battery aging is not one single failure. It is a stack of small chemical and mechanical changes.

### SEI growth

On the first charge cycles, a layer called the solid electrolyte interface, or SEI, forms on the anode. This layer is necessary. It lets lithium ions pass while reducing further reactions between the electrolyte and the anode.

The problem is that the SEI keeps changing. Each charge and discharge cycle expands and contracts the anode a little. Tiny cracks appear. The electrolyte reacts at those new surfaces, and the SEI thickens. Active lithium gets trapped in that layer instead of moving between electrodes.

Capacity drops, internal resistance rises, and the cell produces more heat under load.

### Lithium plating

Lithium plating happens when lithium deposits as metal on the anode surface instead of slipping neatly into the anode structure. It is more likely when charging is fast, the battery is cold, or the cell is already near full.

This is one reason phones charge fast from low percentages and slow down near the top. Charging a cold or nearly full battery hard is a bad trade.

In severe cases, plated lithium can grow into dendrites, which are tiny metallic structures that can damage the separator. Phone battery management is designed to avoid that scenario, but the underlying risk is real enough that manufacturers take it seriously.

### Cathode and electrolyte aging

The cathode ages too. Metal ions can dissolve from the cathode into the electrolyte, and the electrolyte itself breaks down faster at high temperature and high voltage. Those reactions reduce capacity and increase resistance.

When a battery swells, gas has formed inside the sealed pouch. That is no longer a calibration problem or a settings problem. Stop using the phone and get the battery replaced.

## What speeds it up

Heat is the big one. Warm batteries age faster, and a phone can get hot from charging, gaming, navigation, video recording, poor signal, or sitting in the sun. The worst pattern is heat combined with a high state of charge, such as leaving a fully charged phone on a dashboard or under a pillow while charging.

High voltage matters too. A cell held near 100% is under more stress than one sitting near the middle of its charge range. That is why charge limiters help. They reduce time spent at the top of the voltage curve.

Deep discharge is the other side of the same problem. Phones protect the cell by shutting down before truly dangerous voltage, but repeatedly draining to zero is still harder on the battery than shallow cycles.

This is where practical advice comes from. Keep the battery cool. Use 20% to 80% as a habit when it fits your day. Don't panic about occasional full charges. Do avoid treating 0% to 100% as the normal cycle.

## Why graphite has been hard to beat

Graphite has stayed in phone batteries for so long because it is boring in the best way. It is stable, affordable, and expands much less than silicon during charging.

The limit is capacity. Graphite stores about 372 mAh per gram. Silicon can store about 4,200 mAh per gram, which is why silicon-carbon batteries have become so interesting for Android phones. The problem is that silicon expands heavily as it absorbs lithium. Without careful engineering, it cracks itself apart.

That is the trade-off battery engineers keep wrestling with: more energy in the same space, without turning the anode into dust after a few dozen cycles.

## What this means for your phone

A well-managed battery can stay useful for years. A badly treated one can feel old after a year and a half. The exact numbers vary because phone size, cooling, charging speed, software, climate and user habits all matter.

The useful part is that you can connect symptoms to causes. If battery health is still high but the phone drains overnight, look for background apps, wake locks or signal issues. If health is below 80% and the phone shuts down at 20%, the cell itself is probably the main problem. If the phone gets hot during every charge, fix that before obsessing over small percentage differences.

This is also why Android version wording can be misleading. Android 17 is current on supported Pixels, but the useful battery-diagnostics pieces still depend on what the device reports. Cycle count became publicly readable for apps in Android 14 when the hardware exposes it. Battery health percentage is still more manufacturer-specific.

runcheck is built around that kind of diagnosis. Battery health is useful on its own, but it becomes more useful when you can compare it with temperature, charging behavior and network conditions.

Lithium-ion degradation is unavoidable. Bad habits just make it arrive earlier.
