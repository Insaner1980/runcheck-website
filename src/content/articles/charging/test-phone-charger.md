---
title: "How to test if your phone charger is good"
description: "Learn how to test whether your Android phone charger is delivering the right power with software tools, cable swaps, physical checks, and USB power meters."
listSummary: "Charger health testing"
hub: "charging"
sourceNumber: 44
order: 8
tags: ["charging","battery","android","guide","hardware"]
draft: false
---
A charger can pass the fit test and still fail the charging test. USB-C only tells you the plug fits. It doesn't tell you whether the adapter, cable, and phone agreed on fast charging.

Android 17 doesn't change that basic problem. There still isn't one universal Android screen that says, "this charger is delivering 23.4W right now." You have to infer it, or measure it properly.

## Read the tiny output label first

Start with the boring part: look at the adapter. Flip it over and find the output line. It may say something like 5V/3A, 9V/2.22A, or 20V/3.25A. Multiply volts by amps to get watts. A 9V/2.22A profile is about 20W. A 20V/3.25A profile is 65W.

A basic USB-A adapter might only list 5V/1A or 5V/2A. That's 5W or 10W, which is slow for a modern phone. A USB-C PD charger usually lists several voltage levels and a maximum wattage, such as 25W, 45W, 65W, or higher.

If the charger has no markings, treat it with suspicion. Good adapters from known brands print their output ratings somewhere, even if you need a flashlight to read them.

## Use an app for a quick check

Android exposes battery current and related battery properties through system APIs, so apps can estimate what's reaching the battery. Ampere and AccuBattery are common options for this kind of quick test.

Plug in the charger, open the app, and wait 20 to 30 seconds for the reading to settle. Keep the screen brightness low, close heavy apps, and test with the battery somewhere between 20% and 70%. Phones slow charging near the top, so testing at 94% will make a good charger look worse than it is.

Be careful with the number. App readings show net battery current, not the exact wattage coming out of the wall adapter. The phone is using power at the same time, the charging circuit loses some energy as heat, and some devices report battery current differently. On a few phones, the reading can be oddly capped, delayed, or just not very useful.

Use app readings for comparisons, not courtroom evidence. If one cable shows 400 mA and another shows 2,400 mA on the same adapter, you learned something. If an app says your 30W charger is only delivering 18W, that doesn't automatically mean the charger is bad.

## Swap the cable before blaming the brick

Cables fail quietly. They still transfer power, so you assume they're fine, but the phone drops to a slow charging mode because the cable can't carry the expected current or doesn't negotiate the right profile.

Test with a known-good cable. The cable that came with the phone is a good first choice. A certified USB-C cable from a reputable accessory brand is another. Don't use a thin old cable from a drawer and expect it to prove anything.

Connector damage is common near the ends. If the phone connects and disconnects when you move the cable, or the plug feels loose in multiple devices, replace the cable. It isn't worth troubleshooting for another hour.

## Use a USB power meter when you want real numbers

A USB-C inline power meter is the cleanest test. It sits between the charger and the phone, then shows voltage, current, and wattage on its own display. Better meters also show USB Power Delivery details, including the negotiated voltage profile and whether PPS is active.

This matters because a phone might not ask for the charger's maximum wattage. A 65W adapter connected to a phone that tops out at 25W should deliver about 25W at peak, not 65W. That's normal.

Use the same cable when testing multiple adapters. Use the same adapter when testing multiple cables. Change one thing at a time or the result turns into noise.

A power meter also catches cable problems that apps can't see well. If the adapter is ready to provide 9V but the phone keeps falling back to 5V, you're looking at a negotiation problem rather than a simple low battery-current reading.

## Watch for physical warning signs

A charger that gets warm during fast charging is normal. A charger that gets too hot to hold is not.

Also look for buzzing, a burnt smell, cracked plastic, bent prongs, scorch marks, loose USB ports, or a cable end that wiggles in the phone. Intermittent charging is another bad sign. If the charging icon flickers on and off, stop using that cable or adapter until you've isolated the cause.

Cheap counterfeit chargers are the one place where I wouldn't gamble. Modern phones have protection circuits, but unstable voltage and poor insulation are still bad news. Saving a few euros on a no-name adapter isn't worth it.

## Match the fast charging protocol

A charger can be good and still not be good for your phone. Google Pixel and many Samsung models rely on USB-C Power Delivery, with PPS support needed for the best Samsung Super Fast Charging behavior. OnePlus and OPPO phones often need SUPERVOOC-compatible chargers and cables for their highest speeds. Xiaomi HyperCharge has its own requirements too.

When protocols don't match, the phone usually falls back to a slower USB mode. It won't break. It just won't be fast.

A 65W laptop charger can safely charge a phone that only supports 25W because the phone requests what it can use. The higher rating only means the charger has more headroom for laptops, tablets, and other devices.

## When to replace it

Replace the charger if it overheats, smells wrong, buzzes loudly, has damaged plastic, or gives unstable results with multiple good cables and multiple devices. Replace the cable if the problem follows the cable.

If both work normally with other devices, your phone may be limiting charging because the battery is hot, the port is dirty, the battery is nearly full, or the phone doesn't support that charger's fast charging protocol.
