---
title: "What sensors does my phone have, and how do I check?"
description: "Why does one phone show your walking direction perfectly in Maps while another one only shows a vague blue circle? The answer is usually sensors. Android phones all have some, but the exact mix depends on the model, price range, and year."
listSummary: "Phone sensor inventory"
hub: "hardware"
sourceNumber: 118
order: 15
tags: ["diagnostics","sensors","android","hardware","guide"]
draft: false
---
A 2026 flagship can have a gyroscope, barometer, under-display fingerprint sensor, multiple wake-up sensors, and a pile of software-derived motion sensors. A cheap phone from a few years ago may only have the basics. That difference matters when screen rotation, auto-brightness, compass direction, AR apps, or lift-to-wake don't behave the way you expect.

## Start with a sensor app

Android's Settings app doesn't show a complete hardware sensor inventory. It will show basic device information, but not every sensor exposed through Android's sensor framework.

The simplest check is a third-party diagnostic app such as DevCheck, CPU-Z, Sensor Test, or Sensors Toolbox. Open the app and look for the hardware list. A good one will show each sensor registered with Android, including the sensor name, vendor, current readings, resolution, and power use.

This is the closest you can get to the truth from the phone itself. The list still has one catch: it shows sensors Android can access, not every physical component soldered to the board. A fingerprint reader, camera sensor, modem, or ultrasonic proximity system may not appear beside the accelerometer and gyroscope.

## Dialer codes can help, but don't trust them too much

Some Android phones have hidden test menus. Samsung phones often support `*#0*#`, which can open a hardware diagnostic screen with sensor tests. On some Android devices, `*#*#4636#*#*` opens a testing menu, but that menu is more about phone, battery, and network information than a complete inventory.

The annoying part is that these codes aren't universal. Manufacturers, carriers, regions, and newer software builds can disable them. If a code does nothing, that doesn't prove the phone lacks the sensor. It only proves the code didn't work on that device.

Spec databases are useful as a second check. GSMArena and manufacturer product pages often list the factory sensor package under the phone's features or specifications. That tells you what the model was supposed to ship with. It won't tell you whether your specific sensor is working correctly.

## The sensors you usually find

### Accelerometer

The accelerometer measures acceleration along three axes. Screen rotation, step counting, shake gestures, and basic motion detection all depend on it. Nearly every Android phone has one.

### Gyroscope

The gyroscope measures rotation. It makes orientation tracking much more precise, especially in AR, VR, camera stabilization, and map direction. Some budget phones skip it. That is why two phones can both run Google Maps but only one of them points cleanly in the direction you're facing.

### Magnetometer

The magnetometer detects magnetic fields and acts as the phone's compass. It helps mapping apps work out heading direction. Accuracy varies a lot because cases, car mounts, laptops, speakers, and other electronics can throw it off.

### Proximity sensor

The proximity sensor detects when something is close to the screen, usually your face during a call. The phone uses it to turn the display off and block accidental cheek taps.

Older phones usually use a small physical sensor near the earpiece. Newer phones may use virtual proximity detection based on software, audio, display, or ambient light data. That trend is real, but it also makes troubleshooting messier because the behavior may not map neatly to one visible sensor in a diagnostic app.

### Ambient light sensor

The ambient light sensor measures surrounding brightness in lux and feeds adaptive brightness. It is usually near the front camera area, though some modern phones place it beneath the display.

A bright office might read a few hundred lux. Direct sunlight can be far above 10,000 lux. Don't obsess over exact values. What matters is whether the number changes when you cover the top of the phone or move into brighter light.

### Barometer

The barometer measures air pressure, usually in hectopascals. Phones use it for faster altitude estimates and better location context. It is common on many mid-range and flagship phones, but far from guaranteed on cheaper models.

### Fingerprint sensor

A fingerprint reader is still a sensor, even if Android's normal sensor inventory doesn't show it. It can be optical below the glass, ultrasonic under the display, or capacitive on the side or back.

### Heart rate sensor

Dedicated heart rate sensors are rare on modern phones. Samsung included them on some older Galaxy S and Note models, but the feature mostly moved to watches. If your current phone doesn't list a heart sensor, that's normal.

## The sensors you may not notice

Step counter and step detector can appear as separate sensors. Android defines both `TYPE_STEP_COUNTER` and `TYPE_STEP_DETECTOR`. Some phones handle these with low-power hardware. Others derive steps from accelerometer data.

Rotation vector is usually a fused sensor. It combines motion and orientation data to estimate the phone's 3D position. You may see it in diagnostics even though there is no physical chip named "rotation vector".

Gravity and linear acceleration are also derived readings. Gravity isolates the pull of gravity. Linear acceleration removes gravity so apps can focus on actual movement.

Significant motion is a low-power trigger sensor that wakes the phone when meaningful movement is detected. Features such as lift-to-wake and background activity detection can depend on this kind of sensor behavior.

Foldables add another odd one: hinge angle. Android has a hinge angle sensor type for devices that expose the fold position to apps. A normal slab phone won't have it.

## Hardware sensors and software sensors aren't the same thing

Android splits sensors into physical hardware sensors and software-derived sensors. The accelerometer and gyroscope are hardware sensors. Gravity, linear acceleration, and rotation vector may be calculated from one or more hardware sensors.

That difference affects power use. A dedicated low-power step counter can track steps all day while the main CPU sleeps. A software step counter has to do more work, so it can use more battery.

Your sensor app may show a vendor name such as Bosch, STMicroelectronics, TDK InvenSense, AKM, or Sensortek. That usually points to a real hardware component. A generic Android or AOSP-looking name often points to a fused or software-derived sensor.

There isn't a clean rule for every phone. OEMs can expose vendor-specific sensors, hide some hardware behind system services, or replace one physical part with a software solution.

## When the sensor list matters

Most people only care about sensors after something breaks. The screen won't rotate. Auto-brightness jumps around. A compass app points north into your sofa. An AR app refuses to start because the phone lacks a gyroscope.

A sensor app helps you separate three cases:

- The sensor exists and its readings change normally. The problem is probably app settings, calibration, permissions, or software.
- The sensor exists but the readings are frozen or absurd. That can point to a bad sensor, firmware issue, or calibration problem.
- The sensor doesn't appear at all. The phone may not have it, and no setting will add it later.

You can't install a missing gyroscope through software. External Bluetooth sensors exist for fitness and specialist uses, but they don't become part of the phone's built-in Android sensor framework.

Multiple entries for the same sensor are also normal. A phone can expose wake-up and non-wake-up versions, calibrated and uncalibrated versions, or vendor-specific copies beside Android's standard sensor types.
