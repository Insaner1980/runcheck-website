---
title: "Why your phone dies at 20% and how to fix it"
description: "You're at 22%, you open the camera, and the screen goes black. Then you plug the phone in and it suddenly says 18% or 24%. It feels like the percentage is lying to you."
listSummary: "Sudden shutdown battery issues"
hub: "battery"
sourceNumber: 22
order: 12
subgroup: "Drain"
tags: ["battery","calibration","troubleshooting","android","guide"]
draft: false
---
It is, in a way. The number on screen is an estimate, and old batteries are harder to estimate.

## The first thing to check

Check battery health before chasing calibration tricks.

On Pixel 8a and later, go to Settings > Battery > Battery health. Pixel shows Normal at 80% or higher and Reduced below that line. Cycle count is under Settings > About phone > Battery information on Pixel 8a and later.

On Samsung, open Samsung Members > Support > Phone diagnostics > Battery status. Samsung labels the result Normal, Weak, or Bad. The exact menu names can vary, but Samsung Members is the official diagnostic path.

On other Android phones, check Settings > Battery first. If there is no native battery health page, use a diagnostic app such as AccuBattery and let it collect data over several charging sessions. One reading after one charge is not enough.

A sub-80% reading plus a 20% shutdown points straight at the cell.

## Why the number lies

Android estimates battery percentage from voltage, current, temperature and a model of how the battery should behave. Some phones also track current flowing in and out over time.

That model works best when the cell is healthy. As the battery ages, capacity drops and internal resistance rises. The voltage curve shifts. The phone may still think 20% means a comfortable reserve, while the cell has much less usable energy left.

The low end is where errors show up first. Through the middle of the charge range, the voltage curve is fairly flat. Near empty, it gets steep. A small voltage drop under load can suddenly look like the battery fell off a cliff.

That is why the camera, GPS, gaming, video calls and 5G can trigger shutdowns. They create short power spikes. A healthy battery absorbs the spike. A worn battery sags below the phone's minimum operating voltage, and Android shuts the device down to protect it.

## Why old batteries shut off early

A degraded battery has two problems at once.

First, it holds less charge. A 5,000 mAh battery at 80% health holds about 4,000 mAh. At 70%, it holds about 3,500 mAh. The percentage display may still feel normal, but each percentage point is backed by less real capacity.

Second, internal resistance is higher. That means voltage drops more when the phone asks for current. This is why an old phone can sit calmly at 25% on the home screen, then shut off the moment you open the camera.

Cold weather makes the whole thing worse. Lithium-ion chemistry slows down in the cold, so the battery can't deliver current as easily. A phone that survives at 20% indoors may shut down at the same percentage outside.

Heat is different. It usually doesn't cause the instant 20% shutdown on its own, but it speeds up the aging that creates the problem.

## Calibration: what it can and can't fix

Battery calibration is widely misunderstood. It does not restore battery capacity. It only helps the phone's software estimate the remaining charge more accurately.

If battery health looks decent and the shutdowns started after a software update, battery replacement, or long period of weird charging behavior, one calibration cycle is reasonable. That includes the current Android 17 rollout on supported Pixels: don't assume the battery failed just because the timing lines up with a major update. Use the phone until it shuts down by itself. Charge it uninterrupted to 100%, then leave it plugged in for another 30 to 60 minutes. After that, use it normally.

Do not make full discharges a habit. Draining to zero repeatedly is harder on lithium-ion batteries than shallow charging.

If calibration helps, the displayed percentage should become less dramatic over the next few cycles. If shutdowns continue at 20%, or move up to 30%, the cell is probably too worn for software to hide.

## When software is the cause

Sometimes hardware wear is not the whole story. A rogue app can hold wake locks, keep the CPU active, or trigger network and location activity at bad times. That extra load can push a weak battery over the edge.

Check Settings > Battery > Battery usage. If one app shows high background use, restrict it or uninstall it for a day and test again.

Safe Mode is useful if the phone is fairly new and the battery health reading looks normal. Safe Mode disables third-party apps. Shutdowns stopping there point to an installed app.

A factory reset can fix broken battery estimation or software loops, but it is the heavy option. Back up first. After resetting, test the phone before restoring every app and setting from backup. Restoring everything immediately can bring the same problem back.

## Common questions

Why does the phone turn back on at a higher percentage after plugging in? Under load, a weak battery's voltage drops sharply. Once plugged in, the charger supplies current and the battery voltage rebounds. The phone did not gain a lot of charge in one second. The voltage reading stabilized.

Should you keep the phone plugged in to avoid dying at 20%? For a one-off emergency, sure. As a daily workaround, no. If the phone can't be trusted below 25%, the battery needs attention.

Can a battery app fix it? No app can repair chemical wear. A good app can help estimate battery health and show patterns. It can't rebuild the cell.

When a phone shuts off with plenty of charge showing, you are usually looking at an old cell, a wrong fuel gauge, or both. Check health first, calibrate only when it makes sense, and replace the battery when the evidence points there.
