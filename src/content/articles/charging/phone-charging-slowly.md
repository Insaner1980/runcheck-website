---
title: "Why is my phone charging slowly? Causes and fixes"
description: "Common reasons an Android phone charges slowly and how to diagnose each one, from bad cables and dirty ports to software issues and battery degradation."
listSummary: "Slow charging troubleshooting"
hub: "charging"
sourceNumber: 47
order: 11
tags: ["charging","battery","android","guide","hardware"]
draft: false
---
Your phone says it needs three hours to reach full. Yesterday it needed one. The charger looks the same, the cable looks the same, and nothing obvious changed.

Slow charging is annoying because the cause is often boring: a weak adapter, a damaged cable, pocket lint, heat, or an app burning power while the charger is trying to fill the battery. Start with those before assuming the battery is dying.

## Test the charger and cable first

Look at the power adapter. If the output label says 5V/1A, that's a 5W charger. It will charge a modern 5,000 mAh phone slowly because it was never built for today's battery sizes and charging speeds.

A decent USB-C PD charger should list higher profiles, often 9V, 15V, or 20V. The wattage depends on volts times amps. For example, 9V/3A is 27W.

Then swap the cable. Cables are the weak link more often than adapters. They bend near the connector, internal wires break, the plug gets loose, and the phone falls back to slow charging. Use the original cable if you still have it, or a certified USB-C cable you know works with another fast-charging device.

Charging from a laptop USB port or an old car USB-A port is usually slow by design. Those ports are often meant for data first and power second. Use a wall charger or a dedicated USB-C PD car charger for a fair test.

## Clean the USB-C port

Pocket lint packs into USB-C ports like felt. The cable still goes in, so you don't notice it, but it doesn't seat fully. That can cause slow charging, random disconnects, or a phone that only charges at certain cable angles.

Turn the phone off and look into the port with a flashlight. If you see debris, remove it carefully with a wooden or plastic toothpick. Don't use metal. The pins are small, and damaging the port turns a five-minute cleaning job into a repair.

Compressed air can help, but use short bursts and don't blast the port at close range. A soft anti-static brush is fine too.

No, really. Check the port.

## Watch for heat and thermal throttling

Phones slow charging when the battery gets too warm. That's protective behavior. It prevents heat from accelerating battery wear or creating a safety problem.

Heat builds up fast when the phone is in direct sun, under a pillow, inside a thick case, on a wireless charger, or running a game while plugged in. Navigation in a hot car is another classic example: GPS, mobile data, screen brightness, and charging all create heat at the same time.

If the phone feels warm, remove the case, put it on a hard surface, stop using it, and give it a few minutes. If charging speed improves after it cools down, heat was the bottleneck.

runcheck shows battery temperature and thermal status on the Battery detail screen, which is useful because "warm" is a vague feeling. Numbers are better.

## Stop using the phone while testing

Charging speed is net power. If the charger supplies 15W and the phone is using 8W for a game, screen brightness, mobile data, and background work, only the leftover power charges the battery.

That makes the charger look worse than it is.

For a clean test, turn the screen off and leave the phone alone for 10 minutes. If you want to be stricter, enable airplane mode and close navigation, games, camera, hotspot, and video apps. Then check whether the estimated time to full improves.

To find background drain, open Settings > Battery > Battery usage. The exact layout varies by brand, but look for apps with heavy screen-off use or a sudden spike after an update.

## Think about software, especially after updates

A system update can change charging behavior, battery reporting, or background app activity. Android 17 has just started with supported Pixel phones first, while Samsung, Xiaomi, OnePlus, and other brands follow their own rollout schedules. If slow charging starts right after a major OS update, treat that timing as a clue.

First, reboot. It sounds lazy, but it clears a surprising number of temporary charging and battery-reporting glitches.

Next, update apps from Google Play. If one app is stuck syncing or waking the phone constantly, it can make charging look slow even when the charger is fine.

Safe Mode is the next step. It temporarily disables third-party apps. If the phone charges normally in Safe Mode, one of your installed apps is the problem. Start with apps updated around the same time the issue appeared.

## Samsung moisture detection

Samsung Galaxy phones can block wired charging when moisture is detected in the USB-C port. You'll usually see a water drop icon or a moisture warning. This is a corrosion and short-circuit protection feature, even though it feels like an inconvenience when the port is already dry.

Sometimes the warning appears after real water exposure. Sometimes it appears after humidity, sweat, condensation, or debris in the port.

Power the phone off and let the port dry. Samsung's guidance is to wait for moisture to evaporate, which can take several hours. A fan or cool air is fine. Don't push metal into the port, and don't use hot air. If the port is dry but the icon stays, restart the phone. Samsung also documents clearing the USB settings cache on some models.

Samsung Members can run charging diagnostics under Support > Phone diagnostics, including Battery status, Cable charging, and Wireless charging.

## Battery aging can slow charging too

An older battery doesn't just hold less charge. It can also accept charge more slowly because internal resistance rises as the cell ages. A phone that charged from 20% to 70% quickly when new may take longer after a few years, even with the same charger.

Pixel 8a and later show battery health under Settings > Battery > Battery health, including Normal or Reduced status and estimated battery capacity. Pixel 6a through Pixel 8 Pro don't show that same health status. Samsung users can check battery status through Samsung Members, and some newer models or regions expose more battery information directly in Settings.

If battery health is below 80%, or the phone shuts down early, heats up easily, and charges slowly with multiple known-good chargers, the battery is a serious suspect. Software won't fix chemical aging. A battery replacement is the real fix, and the price depends heavily on model, region, and whether you use an official service channel.

## Quick answers

Does battery percentage affect charging speed? Yes. Most phones charge fastest in the lower and middle part of the battery range, then slow down near 80% and especially near 100%.

Can a case cause slow wired charging? Usually no. For wireless charging, yes. Thick cases, metal plates, card holders, and poor alignment can reduce charging speed or stop wireless charging entirely.

Should you use the charger that came with the phone? It's the safest baseline if the phone included one. For USB PD phones, any reputable USB-C PD charger with enough wattage should work. For SUPERVOOC, VOOC, HyperCharge, or other proprietary systems, the original or compatible charger and cable are often needed for top speed.

What does "Charging slowly" mean? The phone is getting less power than it expects for fast charging. The usual causes are a low-wattage charger, weak cable, dirty port, computer USB port, heat, or a protocol mismatch.
