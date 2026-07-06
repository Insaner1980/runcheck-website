---
title: "USB-C charging explained: watts, amps, and volts"
description: "What watts, amps, and volts mean for Android phone charging, how USB Power Delivery works, and why not all USB-C chargers deliver the same speed."
listSummary: "USB-C charging basics"
hub: "charging"
sourceNumber: 46
order: 10
tags: ["charging","battery","android","guide","hardware"]
draft: false
---
Watts are the number to care about. Volts and amps explain how the charger gets there, but wattage tells you how much power is available.

A charger that outputs 9V at 2A delivers 18W. A charger that outputs 20V at 3A delivers 60W. The math is simple: volts times amps equals watts.

Simple. Until USB-C negotiation gets involved.

## What the charger label means

Most USB-C chargers list several output combinations. You might see something like:

- 5V/3A = 15W
- 9V/3A = 27W
- 15V/3A = 45W
- 20V/3.25A = 65W

Those are the power profiles the charger can offer. The phone doesn't automatically take the highest one. It asks for the profile it supports and the charger switches to that level.

This is why a 100W laptop charger doesn't fry an 18W phone. The phone won't request 100W. It will pick a lower profile, or fall back to basic charging if the charger and phone can't agree on a better one.

## How USB Power Delivery negotiation works

USB Power Delivery, usually shortened to USB PD, is the main open fast charging standard used by many Android phones, tablets, laptops, and accessories.

When you plug in a USB-C cable, the charger and phone talk over the Configuration Channel pins. The charger advertises its supported Power Data Objects, or PDOs. The phone chooses one. The charger then supplies that voltage and current within the agreed limits.

A 45W USB PD charger might offer 5V/3A, 9V/3A, 15V/3A, and 20V/2.25A. A phone that supports 25W charging may choose something near 9V. A laptop may choose 20V from the same adapter.

The charger is not pushing power into the phone. The phone is pulling what it can use.

## Why PPS matters

Standard USB PD uses fixed voltage steps, such as 5V, 9V, 15V, and 20V. PPS, which stands for Programmable Power Supply, lets the phone request smaller voltage and current changes inside the charger's advertised range.

That matters because a lithium-ion battery doesn't want the same voltage for the whole session. As the battery fills, the ideal charging conditions change. With fixed-voltage charging, more conversion happens inside the phone, and that conversion makes heat. With PPS, the charger can move closer to what the phone needs at that moment.

Samsung's Super Fast Charging relies on USB PD with PPS. Pixel phones also support PPS. A normal USB PD charger without PPS may still work, but it may not hit the best charging mode on those phones.

## Quick Charge, VOOC, SUPERVOOC, and HyperCharge

USB PD is the closest thing Android has to a shared charging language. It is not the only language.

Qualcomm Quick Charge was common on Android phones for years. Newer Quick Charge versions overlap more with USB PD, but older adapters and phones can still behave differently from a pure USB PD setup.

OPPO VOOC and OnePlus SUPERVOOC use a different strategy. They often push high current through a compatible charger and cable so less heat is generated inside the phone. That's why those systems can be very fast, but also picky. OnePlus says SUPERVOOC fast charging requires a SUPERVOOC-compliant phone and data cable.

Xiaomi HyperCharge has similar brand-specific behavior on many models. A standard USB-C PD charger will usually charge these phones, but the headline wattage often needs the original or protocol-compatible charger and cable.

Samsung's naming is its own small trap. Adaptive Fast Charging on older Samsung phones is not the same thing as Super Fast Charging on newer ones. The newer mode is USB PD with PPS.

## Cable ratings are part of the speed limit

The cable is part of the negotiation, and treating it like a plain wire causes a lot of charging confusion.

Many USB-C cables are rated for 3A. At 20V, that is enough for 60W. Power above that needs a 5A cable with an e-marker chip, so the charger and device know the cable can handle the current safely.

USB-IF certification labels are getting better about this. Certified USB-C cables are marked with power ratings such as 60W or 240W, and faster data cables may also show a data rate logo. That's much easier than trying to decode a long USB version name.

For phones, a good 60W USB-C cable is enough most of the time. For laptops, tablets, and high-wattage chargers, a 240W cable can be useful. For proprietary phone systems, the matching cable may still matter more than the printed wattage.

## What charger should you buy?

For many Android phones that use USB PD or PPS, a 25W to 30W USB-C PD PPS charger is enough. It will cover most Pixels and many Samsung models at their normal fast charging speeds.

If you have a Samsung model that supports 45W charging, buy a PPS charger that specifically supports the right 45W profile. If you have OnePlus, OPPO, or Xiaomi and want the advertised maximum speed, use the charger and cable designed for that protocol.

Buying more wattage than your phone supports is fine. It won't hurt the phone, and it can be useful if the same adapter charges a laptop or tablet. Just don't expect a 100W charger to make a 25W phone charge four times faster.

The least glamorous advice is also the best one: buy the right protocol instead of chasing the biggest number.
