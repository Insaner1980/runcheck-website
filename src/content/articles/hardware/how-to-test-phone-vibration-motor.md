---
title: "How to test your phone's vibration motor"
description: "Quick ways to test an Android phone vibration motor with settings checks, keyboard feedback, Safe mode, and manufacturer diagnostics."
listSummary: "Vibration motor tests"
hub: "hardware"
sourceNumber: 109
order: 6
tags: ["hardware","testing","diagnostics","android","guide"]
draft: false
---
---

A silent phone doesn't automatically mean the vibration motor is dead. Most vibration problems come from settings first, software second, and hardware last.

That order matters. Replacing a haptic motor because Do Not Disturb was muting vibration is a waste of money.

## Check vibration settings first

Open Settings and look for Sound and vibration, Sounds, or Haptics. The exact path depends on the phone maker.

On Samsung Galaxy phones, go to Settings > Sounds and vibration > Vibration intensity. Calls, notifications, system feedback, and touch feedback can have separate sliders. It's easy to turn one down and leave the others on.

Also check Do Not Disturb. On stock Android and Pixel phones, the controls are usually under Settings > Notifications > Do Not Disturb. On Samsung, look under Settings > Notifications > Do not disturb. DND can silence vibration depending on how you've configured calls, apps, and schedules.

One more small thing: check the keyboard. Gboard, Samsung Keyboard, and SwiftKey each have their own haptic settings. If keyboard vibration is off inside the keyboard app, typing won't buzz even when the motor is healthy.

## Use a direct vibration test

Samsung Galaxy phones have the cleanest built-in option. Open Samsung Members, tap Diagnostics, then Phone diagnostics, and run the Vibration test. Samsung's current diagnostics list includes Vibration as a separate phone test, so this is the safer route than relying on hidden codes.

The old Samsung dialer code `*#0*#` still opens a hardware test menu on many Galaxy models. Tap Vibration and the phone should vibrate until you exit the test. It needs Samsung's own Phone app. Carrier firmware, newer One UI security settings, or enterprise restrictions can block the menu.

Some Android phones also react to `*#*#0842#*#*`, which has long been used as a vibration and backlight test code. Don't treat it as universal. Pixels usually don't support it, and many modern dialer apps ignore it.

For Xiaomi, Redmi, and POCO phones, try the CIT menu with `*#*#6484#*#*`. The menu name and test list vary between MIUI and HyperOS builds, but vibration is commonly included.

## Test fine haptics with the keyboard

Open a notes app and type a few sentences. If touch vibration is enabled, every keypress should produce a small pulse.

This is a useful test because it checks subtle haptics and the stronger buzz used for incoming calls. A motor that can produce keyboard taps but won't vibrate for calls is probably dealing with a notification-channel problem.

On Android, apps can control vibration per notification channel. Open Settings > Apps, choose the app that should vibrate, then check its Notifications section. For the Phone app, Messages, WhatsApp, Telegram, or Gmail, make sure the specific channel has vibration enabled.

## Separate software from hardware

Restart the phone first. It sounds too simple, but haptics can fail after a software glitch and come back after a reboot.

If vibration works after restarting and then disappears later, boot into Safe mode. On most Android phones, hold the power button and long-press Power off until the Safe mode prompt appears. On many Samsung devices, restart and hold Volume Down during boot.

Safe mode disables third-party apps. If vibration works there, remove or disable recent automation apps, call-screening apps, battery savers, launchers, and accessibility tools one by one. Those are the usual suspects.

If vibration doesn't work in Safe mode, doesn't respond in Samsung Members or the OEM test menu, and all vibration settings are on, the motor or its connection is likely the problem.

## What can fail inside the phone

Android phones usually use one of two haptic motor types. Older and cheaper phones often use an eccentric rotating mass motor, or ERM. It feels like a small spinning buzz. Mid-range and flagship phones usually use a linear resonant actuator, or LRA, which feels sharper and more precise.

Both can fail. A drop can loosen a ribbon cable, damage solder joints, or crack the mount that holds the motor against the frame. Water damage can corrode the connector. Wear is possible too, although haptic motors usually last a long time unless the phone has been hit or opened before.

Intermittent vibration is the classic loose-connection symptom. Strong one day, weak the next, completely absent after a drop. That pattern is more suspicious than a motor that simply stopped forever.

## Repair expectations

Vibration motor replacement is usually one of the cheaper hardware repairs, but sealed phones still need heat, adhesive removal, and careful reassembly. On modular phones such as some Fairphone models, the part may be user-replaceable. On most mainstream Android phones, a technician has to open the back panel.

If the phone was dropped recently and vibration became inconsistent right after, ask the repair shop to check the connector before replacing the motor. Sometimes the motor is fine and the cable just isn't seated properly.

runcheck doesn't test the vibration motor directly, but it helps catch related warning signs such as overheating, battery drain changes, or charging instability after a drop or moisture event.
