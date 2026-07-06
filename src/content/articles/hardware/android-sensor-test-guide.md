---
title: "Android sensor test guide: how to check, diagnose, and fix phone sensors"
metaTitle: "Android sensor test guide"
description: "How do you know whether auto-rotate is broken, the compass is confused, or an app is just behaving badly? That's the annoying part of sensor problems. They look small until you need navigation, calls, camera stabilization, step tracking, or auto-brightness to work."
listSummary: "Sensor testing and fixes"
hub: "hardware"
sourceNumber: 105
order: 2
tags: ["hardware","testing","diagnostics","android","guide"]
draft: false
---
Android phones use a mix of motion, environmental, position, and proximity sensors. Some are physical chips. Some are "virtual" sensors calculated from several chips at once. When one source gets noisy, blocked, or disabled, the symptom can show up somewhere completely different.

Start simple. You don't need root, ADB, or a lab bench for the first round of tests.

## Quick sensor checks

Try these everyday tests before installing anything:

- Rotate the phone from portrait to landscape with rotation lock off. That checks basic accelerometer behavior.
- Take a panorama photo. If the phone can't track movement smoothly, the gyroscope may be involved.
- Make a call and cover the top of the screen near the earpiece. The display should turn off, then wake when uncovered. That checks the proximity sensor.
- Turn on auto-brightness and move from a bright room to a dark one. The screen should adjust within a few seconds.
- Open Maps and check the blue direction beam. A wide or wrong beam usually means the magnetometer needs calibration or is seeing interference.

For Samsung Galaxy devices, Samsung Members is the cleanest route: open Samsung Members, tap Support, then View tests. The older `*#0*#` diagnostic menu also works on many Galaxy phones and includes a Sensor section.

For Pixel phones, dial `*#*#7287#*#*` to open Pixel Diagnostics where supported. For Xiaomi, Redmi, and POCO devices, `*#*#6484#*#*` opens the CIT menu on many models. For Motorola, use Device Help > Device diagnosis > Hardware test.

Avoid treating `*#*#4636#*#*` as a sensor test. On many phones it opens a testing or information screen for network, usage, Wi-Fi, and sometimes battery details. It is not a universal sensor diagnostics menu.

## Why sensor problems happen

Calibration drift is the most common boring cause. Accelerometers, gyroscopes, and magnetometers all rely on calibration. The magnetometer is especially fussy because magnets, metal cases, car mounts, laptops, speakers, and even some wallet cases can throw it off.

Physical damage is next. A drop can shift a sensor module, bend the frame near the top bezel, or damage a flex cable. Water exposure can be slower. The phone may seem fine for a week, then the proximity sensor or barometer starts acting strange as corrosion develops.

Blocked sensor windows are easy to miss. The proximity and ambient light sensors usually sit near the earpiece or under the display area. A thick screen protector, case lip, dust, skin oil, or misaligned privacy glass can block or scatter the sensor's light.

Software can break sensors too. Major Android updates, OEM firmware changes, custom ROMs, app permissions, and aggressive battery management can all change what apps receive. Android 17 is currently first available on supported Pixel devices, while other brands follow later, so update-related sensor bugs won't appear on every phone at the same time.

Power settings also matter. Android 9 restricted background access to continuous sensors such as the accelerometer and gyroscope. Android 10 added the Sensors off developer tile, which can disable the camera, microphone, and sensors managed by Android's SensorManager. If every sensor suddenly looks dead, check that tile before assuming the motherboard failed.

## Test the accelerometer and gyroscope

Turn off rotation lock and rotate the phone slowly. The screen should change orientation without long delays or repeated flipping. If it refuses to rotate in every app, the accelerometer may not be reporting correctly.

Now open a bubble level app or any app that shows tilt. Place the phone flat on a table. The values should settle instead of drifting endlessly. A small offset is normal. A large fixed tilt on a flat surface suggests calibration trouble.

For the gyroscope, use panorama mode in the camera or an AR app. The view should track your movement smoothly. If panorama shots fail repeatedly or AR objects slide around when you're standing still, the gyroscope may be noisy.

This is one of those cases where comparison helps. Test the same app on another phone in the same room. If both behave badly, the app or environment is the problem.

## Test the proximity sensor

Make a call, then move your hand about two centimeters above the top part of the screen. The display should turn off. Move your hand away and it should turn back on.

Most phone proximity sensors are not precise distance meters. They often report a near or far state, not a smooth centimeter-by-centimeter reading. In a diagnostic app, that may look like 0 cm and 5 cm with nothing in between. That's normal.

If the reading is stuck, remove the case and screen protector. Clean the top bezel or sensor area with a soft cloth. Test again before blaming hardware. Tempered glass protectors are a classic culprit here.

## Test the ambient light sensor

Turn on auto-brightness. Shine a flashlight near the top of the screen, then cover the same area with your hand. The brightness should react clearly, although Android may smooth the change instead of jumping instantly.

A light sensor reading is usually shown in lux. A dark room might be under 50 lux. A typical office can be a few hundred lux. Direct sunlight can exceed 10,000 lux. The exact number is less important than whether the value moves sensibly when lighting changes.

If auto-brightness is weird but the lux value responds correctly, the sensor is probably fine. The problem is more likely adaptive brightness learning, display settings, or OEM software.

## Test the magnetometer and compass

Go outside or stand away from metal objects. Open Maps and tap the location arrow. If the blue beam is very wide or points the wrong way, recalibrate.

Use the figure-eight motion: hold the phone in front of you and move it through a large sideways eight while rotating your wrist through different angles. Do it for 15 to 20 seconds. It looks silly. It works surprisingly often.

If the compass is still wrong, remove magnetic accessories and try again. Car mounts, wallet cases, MagSafe-style rings, laptop lids, and metal desks can all distort readings. Indoors, the compass is often worse than people expect.

## Test the barometer

Not every Android phone has a barometer. Budget phones often skip it.

If your phone has one, a sensor app should show atmospheric pressure in hPa or millibars. Compare it with a nearby weather station. Don't expect a perfect match because weather apps often show sea-level adjusted pressure, while the phone senses local pressure at your elevation.

A wildly stuck reading can mean the sensor is blocked or failed. The vent hole is tiny, so pocket lint and dust matter.

## Read raw sensor data without overthinking it

Raw readings are useful, but don't chase perfection.

An accelerometer reports acceleration across X, Y, and Z axes in m/s². A phone lying flat should show roughly 9.8 m/s² on one axis because of gravity and near zero on the others, depending on orientation.

A gyroscope reports rotation in radians per second. When the phone is still, values should sit close to zero. Tiny movement and sensor noise are normal.

A magnetometer reports magnetic field strength in microteslas. Earth's magnetic field is often somewhere around 25 to 65 microteslas depending on location. Values far outside that range usually mean interference.

A light sensor reports lux. You're looking for sensible movement, not laboratory accuracy.

## Fixes to try before repair

Restart the phone first. Boring, but worth doing.

Then remove the case and screen protector, clean the top sensor area, disable Battery Saver, and check whether the Sensors off tile is enabled in Developer Options. If the issue affects one app only, check that app's permissions and battery restrictions.

For compass issues, recalibrate and move away from magnets. For auto-rotate, test in multiple apps because some apps lock orientation. For proximity problems, test during a real call with the protector removed.

If a sensor stopped working right after an OS update, install pending system and Google Play system updates, then test again. If the phone is on a beta build, don't treat one broken sensor behavior as confirmed hardware failure until you've tested on stable software.

A diagnostic app like runcheck is useful when symptoms overlap. Battery stress, heat, and network issues can make the phone feel broken even when the sensor itself is only one part of the story.

## When it's probably hardware

Suspect hardware when the same sensor fails in every app, fails in the manufacturer's diagnostic tool, survives Safe Mode, and still fails after a reset.

Individual phone sensors are usually tiny surface-mounted components or part of a larger module. Repair shops rarely replace just one sensor chip. In practice, repair often means replacing a display assembly, camera module, bottom board, or main board section depending on where the sensor lives.

If the phone was dropped, bent, or exposed to water, mention that when getting repair quotes. It changes what the technician should inspect.
