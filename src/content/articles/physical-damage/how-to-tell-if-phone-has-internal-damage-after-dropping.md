---
title: "How to tell if your phone has internal damage after dropping"
description: "A phone can hit the floor, look completely normal, and still have something wrong inside. That's the irritating part. Modern phones are rigid little sandwiches of glass, adhesive, flex cables, camera modules, antennas, battery cells, and circuit boards. A drop doesn't have to crack the screen to loosen a connector or stress a solder joint."
listSummary: "Internal drop damage signs"
hub: "physical-damage"
sourceNumber: 132
order: 2
tags: ["temperature","thermal","android","troubleshooting","hardware"]
draft: false
---
Most drops do nothing serious. Still, if the phone starts behaving differently afterward, don't talk yourself out of checking it.

## Check the battery first

Battery symptoms matter more than almost anything else because they're both practical and safety-related.

Right after the drop, note the battery percentage and temperature. Use the phone normally for 30 to 60 minutes. If it suddenly drains much faster than it did before, warms up while idle, shuts down at a high percentage, or jumps from one battery percentage to another, something may have shifted or been damaged.

A warm phone during gaming or navigation is normal. A warm phone sitting locked on a table is not.

Look at the body of the phone too. If the back panel bulges, the screen lifts from the frame, the phone rocks on a flat surface when it didn't before, or you smell something unusual, stop using it and don't charge it. A damaged lithium-ion battery is not a DIY experiment. Put the phone somewhere safe, away from flammable materials, and get professional help.

## Test charging and the USB-C port

Plug the phone in with a cable and charger you trust. It should start charging without needing the cable to sit at a magic angle.

Move the connector gently. Don't bend it hard. If charging cuts in and out, the USB-C port, internal flex cable, or solder connection may be damaged. Also test wireless charging if your phone supports it. If wired charging fails but wireless charging works, the port side becomes more suspicious.

Watch charging speed over the next few cycles. A phone that used to fast-charge but now stays slow, gets hot, or stops charging randomly needs attention. Sometimes lint in the port causes the same symptom, so inspect the port with a light before assuming the drop did it.

## Test the cameras

Open the camera and switch between every lens and the front camera. Take photos of text, a flat wall, and something far away. Record a short video while walking slowly.

Look for blurry focus, wavering video, rattling, haze, or a camera that refuses to switch lenses. Optical image stabilization and autofocus modules are small mechanical systems. A drop can knock them slightly out of alignment even when the camera glass is intact.

Compare this to how the phone behaved before. A budget phone may always hunt for focus in low light. A flagship that suddenly can't focus on a receipt in daylight has a different problem.

## Test speakers, microphones, and vibration

Play audio through the speakers and listen for crackling, buzzing, or one speaker being much quieter than the other. Then record a voice memo. Speak normally, whisper, and tap near the microphone area. Play it back through the speakers and headphones or earbuds if available.

Make a phone call too. Voice memo tests don't always use the same microphone path as calls, speakerphone, or video recording.

Test vibration by toggling haptics or receiving a call. A weak or rattly vibration motor after a drop can be a loose part, not a software setting.

## Test Wi-Fi, Bluetooth, cellular, and GPS

Drops can affect antennas or the tiny connectors that link them to the board. The symptom is usually not "no signal forever." It's more annoying than that: weaker signal in familiar places, Bluetooth dropouts, GPS taking longer to lock, or mobile data falling back from 5G to LTE where it used to hold 5G.

Check Wi-Fi near your router, then one room away. Pair Bluetooth with a device you already use. Open a maps app outdoors and see whether location locks quickly and tracks your movement smoothly.

Be fair here. Network behavior changes for reasons that have nothing to do with the drop. Carrier outages, router problems, VPNs, and fresh OS updates can all imitate hardware trouble. Android 17, for example, launched first on most supported Pixel phones, with other devices following later, so early Pixel-specific network bugs can overlap with normal troubleshooting timing.

## Check sensors

Rotate the phone and confirm auto-rotate works. Open a compass, level app, or maps app and watch whether movement is smooth. Jerky readings, drifting direction, or no rotation at all can point to accelerometer or gyroscope trouble.

During a phone call, bring the phone to your ear. The screen should turn off, then wake again when you pull it away. If it stays on against your face or stays black afterward, the proximity sensor may be blocked, dirty, misaligned, or damaged.

Test fingerprint and face unlock. Under-display fingerprint sensors can be affected by screen damage that isn't obvious. Side-mounted and rear sensors can suffer if the frame flexed at the impact point.

Samsung Galaxy owners have a supported diagnostic path through Samsung Members. Open the app, go to Support or Diagnostics, then run tests for battery, NFC, SIM, mobile network, sensors, speaker, camera, touch screen, Bluetooth, and other hardware. Xiaomi, Redmi, and POCO phones often include a hardware detection menu through Settings > About phone or My device > All parameters, then tapping Kernel version four times, and some models also support dialer codes such as `*#*#6484#*#*`.

## Watch for delayed symptoms

Some damage appears later. That is not superstition. Heat cycles, charging, vibration, and daily flexing can make a weakened connection fail after the phone seemed fine at first.

Random restarts are one of the stronger warning signs, especially if they started after the drop and happen during charging, camera use, gaming, or when the phone warms up. A cracked solder joint or loose connector can work for hours and then fail for a second.

Charging inconsistency can also show up late. So can worsening camera focus, intermittent speaker crackle, random SIM disconnects, or a phone that gets warmer than it used to during normal use.

Keep notes for a week. You don't need a spreadsheet, just enough detail to see a pattern: time, battery percentage, temperature feel, app in use, charging state, and what happened.

## Separate software from hardware

Restart first. Then boot into safe mode. Safe mode disables downloaded apps, which helps you see whether a recent app is causing crashes, heat, battery drain, or network weirdness.

If the problem disappears in safe mode, start with software. Remove recent apps, update the phone, update apps, reset app preferences, and check storage.

If the problem remains in safe mode, appears before you unlock the phone, happens during charging while the phone is idle, or survives a factory reset, hardware becomes much more likely. A factory reset can clean up corrupted settings and bad app data. It can't reseat a flex cable, repair a battery cell, or fix a cracked board.

## When to get it inspected

Get professional help if you see battery swelling, smoke, unusual smell, hissing, extreme heat, repeated shutdowns, charging cutouts, liquid exposure after the drop, or multiple symptoms at once.

A repair shop can open the phone, check connectors, inspect the board under magnification, test the battery, and verify cameras, antennas, speakers, and ports with tools you don't have at home. Sometimes the fix is just reseating a connector. Sometimes it's a screen, battery, port, or board-level repair.

Either way, guessing wastes time once the symptoms stack up.

## Use runcheck for monitoring

If the first tests look clean, monitor the phone for a week or two. runcheck can help by tracking battery behavior, thermal state, network quality, storage pressure, and overall device health over time.

It won't tell you "the camera ribbon cable is loose." No app can promise that. But it can show patterns you might miss, like higher idle drain, warmer normal use, weaker network readings, or changes that started after the drop.

A phone that keeps normal battery, thermal, charging, camera, audio, sensor, and connectivity behavior after a drop probably survived. A phone that looks fine but starts stacking small failures didn't.
