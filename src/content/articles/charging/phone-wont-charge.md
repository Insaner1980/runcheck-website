---
title: "Phone won't charge: how to diagnose charging problems"
description: "A practical Android charging checklist covering the outlet, charger, cable, USB-C port, moisture warnings, dead batteries, software freezes, and repair signs."
listSummary: "Charging failure diagnosis"
hub: "charging"
sourceNumber: 48
order: 12
tags: ["charging","battery","android","guide","hardware"]
draft: false
---
You're at 2%, you plug the phone in, and nothing happens. No charging icon. No vibration. No tiny sign that the cable did anything.

A phone that won't charge is usually a chain problem. Power has to move from the wall outlet, through the adapter, through the cable, through the USB-C port, and into the charging hardware inside the phone. One weak link is enough to make the whole thing look dead. Work through the chain in order and you'll usually find the bad part in 10-15 minutes.

## Start with the boring checks

Try a different wall outlet first. It sounds too simple, but outlets fail, power strips trip, and hotel or office outlets can be switched off without looking obvious. Plug in a lamp or another charger if you want a fast confirmation.

Then test the charger. Use the same cable with a different USB-C power adapter. If the phone starts charging, the original adapter is the problem. Adapters can fail without smoke, smell, or visible damage. They just stop delivering stable power.

If you don't have another wall adapter, plug the cable into a power bank or computer. A computer USB port may charge slowly, but a slow charge is still useful information. It tells you the phone and cable can at least make an electrical connection.

## Swap the cable before blaming the phone

Cables fail constantly. The break is often inside the connector housing, right where the cable bends, so the outside can look fine while one internal wire is gone.

Try a different USB-C cable, preferably USB-C to USB-C. If the phone charges with the second cable, stop troubleshooting. The cable was the problem. That's it.

If you only have one cable nearby, flip the USB-C plug over and try again. USB-C is reversible, but a damaged plug or worn contact can sometimes work in one orientation and fail in the other. Treat that as a diagnostic clue, not a fix.

Be suspicious of very cheap USB-A to USB-C cables. Some are charge-only, some are built badly, and some don't behave well with newer phones that expect proper USB-C power negotiation. They may still provide basic 5V charging, but they're not the cable I would use for a serious test.

## Check the USB-C port

Pocket lint is boring until it stops your phone from charging. It gets packed into the back of the USB-C port a little at a time, and the cable may still feel like it fits even though it isn't reaching the contacts properly.

Power the phone off if you can. Look into the port under a bright light. If you see loose dust, use a dry soft brush. Keep the port facing downward so debris falls out instead of deeper in.

Don't use a paperclip, SIM tool, knife tip, or anything metal. If lint is compacted at the back of the port, a wooden or plastic pick can sometimes loosen it, but use almost no pressure and stay away from the center tongue inside the USB-C port. If you're not comfortable doing that, let a repair shop clean it. A five-minute cleaning is cheaper than a broken port.

After cleaning, plug the cable in again. A firmer click than before usually means lint was holding the plug out.

## Take moisture warnings seriously

Samsung, Pixel, and several other Android phones can block charging when they detect liquid or debris in the USB-C port. Samsung often shows a water drop icon. Pixels may show a message such as "Liquid or debris in USB port" or "Unplug charger."

Don't try to force a wired charge through the warning. The phone is trying to prevent corrosion or a short.

Unplug the cable, power the phone off if possible, and let the port dry at room temperature with the port facing down. A fan with cool air is fine. Heat is not. Don't put the phone in an oven, don't use a hair dryer on hot, and don't pack it in rice. Rice is mostly a way to add dust.

A moisture alert can also appear after high humidity or condensation. If the port is completely dry and the warning stays, restart the phone. On Samsung devices, clearing the USB Settings cache can also help when the alert is stuck after the port has dried. If the warning returns every time you connect a cable, the port may be damaged or contaminated.

Wireless charging is a decent temporary workaround if your phone supports it. It also helps separate the problem: if wireless charging works and wired charging doesn't, the issue is probably in the USB-C port, cable, or charge-board path.

## Give a deeply discharged battery time

A fully drained lithium-ion battery doesn't always wake up immediately. The charging controller may need to trickle-charge the cell at a very low current before the phone has enough voltage to show anything on screen.

Use a known-good wall charger and cable. Leave the phone connected for at least 30 minutes. Don't keep pressing the power button every minute, because that can interrupt the recovery attempt on some devices.

After 30 minutes, try a forced restart using the button combination for your phone. On many Samsung phones, hold Side key and Volume down. On newer Pixels, Google lists Power and Volume up for restart behavior. Other brands vary, so use the model-specific combination if you know it.

If the phone shows a battery icon, leave it alone until it has charged further. A phone that was deeply discharged can take several minutes before it behaves normally.

## Don't overcomplicate the software side

Software can make a phone look dead, but it rarely stops a healthy phone from charging altogether. A frozen operating system is the common case. A forced restart is worth trying once you've tested the charger and cable.

Safe Mode is useful when the phone charges sometimes but not normally. It disables third-party apps. If charging works in Safe Mode, uninstall recently added battery, automation, cleaner, or charging-monitor apps first. Those are the apps most likely to interfere with power behavior or notifications.

Skip old advice about wiping the cache partition unless your specific model still exposes that option. Many modern Android phones don't have a user-facing cache partition wipe anymore. A factory reset is the last software test, and only after your data is backed up. If the phone still won't charge after a reset with known-good accessories, you're looking at hardware.

## When it's probably hardware

If the outlet, charger, cable, port cleaning, moisture check, and forced restart all fail, the likely causes are inside the phone.

The USB-C port is the first suspect. On many Android phones, the port sits on a small daughterboard rather than the main motherboard. That usually makes it one of the more practical repairs, although cost and difficulty depend heavily on the model.

The battery is next. A battery that has been stored empty for months can fall below the voltage where it can recover safely. A swollen battery is different. If the screen or back panel is lifting, stop charging the phone and get it inspected. Don't press the panel back down.

The expensive case is power-management hardware on the motherboard. If both wired and wireless charging fail with known-good chargers, and the phone never responds, the battery or charging circuitry needs professional diagnosis.

Before booking repair, try wireless charging for 30 minutes if your phone supports Qi or Qi2. Wired failure with wireless success points toward the USB-C path. Failure on both paths points deeper.

## Quick answers

If the phone vibrates when you plug it in but doesn't show charging, it has detected a cable connection but may not be receiving enough usable power. Try another cable and adapter. If that doesn't change anything, the port pins may be worn or dirty.

Wireless charging can get you through a broken port, but it's not a great permanent fix. It's slower on many phones, it runs warmer, and you lose USB file transfer and wired Android Auto.

If one charger works and another doesn't, the phone probably isn't broken. Charger protocol support varies. A Pixel, Galaxy, Xiaomi, and OnePlus phone may all prefer different fast-charging combinations, especially when proprietary charging is involved.
