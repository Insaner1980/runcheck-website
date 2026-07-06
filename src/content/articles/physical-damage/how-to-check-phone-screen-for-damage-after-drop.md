---
title: "How to check a phone screen for damage after a drop"
description: "You pick the phone up, the glass looks fine, and for a second you think you got away with it. Maybe you did. But a screen can survive a drop visually and still have small problems hiding in the panel or digitizer."
listSummary: "Screen damage after drops"
hub: "physical-damage"
sourceNumber: 131
order: 1
tags: ["hardware","testing","diagnostics","android","guide"]
draft: false
---
The goal is not to panic-test every pixel like you're buying a used phone from a stranger. The goal is to catch the things that matter: cracks, dead pixels, touch dead zones, color shifts, flicker, and panel separation.

## Start with the glass and frame

Do the boring inspection first.

Wipe the screen clean, remove the case, and look at the phone under a bright light. Tilt it slowly. Hairline cracks often show only at an angle, especially near corners and curved edges. Check the exact corner that hit the floor, then follow the frame around the screen.

Look for a gap between the glass and the frame. A tiny lift near one corner can mean the screen assembly shifted or adhesive separated. That matters even if touch still works, because dust and moisture now have a path inside.

If you use a screen protector, inspect it separately. A cracked protector can make the display look damaged when it isn't. The reverse is also true: a thick protector can hide a crack underneath. If the impact was hard and the protector is badly cracked, remove it only if you can do it safely without pulling loose glass with it.

## Check for dead or stuck pixels

Dead pixels usually show up as tiny black dots on light backgrounds. Stuck pixels may stay red, green, blue, or white when they shouldn't.

Open a plain white screen first. A blank note, a browser page with a white background, or a display test app will work. Turn brightness up, clean the glass again, and scan slowly from top to bottom. Then use black, red, green, and blue screens. Each color catches a different failure.

A display test app from Google Play that shows full-screen solid colors is useful here. You don't need anything fancy. Avoid apps asking for strange permissions. A pixel test doesn't need contacts, location, call logs, or accessibility access.

One dead pixel after a drop doesn't guarantee the screen will fail tomorrow, but a cluster near the impact point is a bad sign. That's physical damage, not a software bug.

## Test touch response across the whole screen

The display and the touch layer are separate enough that one can fail while the other looks normal. This is why a phone can show a perfect image but ignore taps in one strip of the screen.

Open a drawing app and draw slow, continuous lines across the display. Go left to right, top to bottom, then diagonally. Don't just tap a few icons. A dead zone can be narrow, and a swipe test catches gaps that tapping misses.

Watch for breaks in the line, jagged jumps, delayed response, or areas where the line refuses to draw. Test the edges carefully. Edge damage is easy to miss because you don't always interact with the outer few millimeters in normal use.

Samsung users should start with the supported route: open Samsung Members, go to Support or Diagnostics, and run the touch screen and display tests. Some Galaxy phones also open a hardware test menu when you dial `*#0*#`, but that code can be disabled by region, carrier, model, or security settings, so don't rely on it as the only method.

On Pixel 9-series devices, Google lists Touch diagnostics under Settings > Display & touch > Touch diagnostics. Older Pixels may show Touch sensitivity settings instead, and Pixel repair diagnostics may be available on supported Pixel models. If your Pixel doesn't show the same menu, don't force the instructions. Use a drawing test.

## Check brightness, flicker, and color

Brightness problems often show up only when you move the slider.

Open Settings, then Display, and move brightness from minimum to maximum slowly. The screen should change smoothly. Flicker, sudden blackouts at low brightness, pulsing, or one area lagging behind the rest can point to panel or display-controller damage.

Next, use a dark gray image or a dark app screen in a dim room. OLED screens can show pressure marks or tinted patches after impact. LCD screens can show new backlight bleed around the edges. Some unevenness is normal on cheap LCD panels, so compare against what you remember from before the drop. New is the word that matters.

Open a photo you know well. Skin tones, white walls, and gray backgrounds are good for spotting a new green, pink, or yellow tint. If color changes when you press lightly near the impact area, stop pressing. That isn't a setting problem.

## Don't ignore update timing

A drop is a clean story: phone falls, screen acts weird, screen is damaged. Real life is messier.

If the screen started acting strangely after a system update that happened around the same time, test before blaming hardware. Android 17 has just begun rolling out to most supported Pixel phones first, with other manufacturers coming later, so early update issues will naturally show up on Pixels before they show up elsewhere. Restart the phone, check for a new patch, and boot into safe mode to rule out app interference.

That said, safe mode can't fix cracked glass, broken OLED layers, or a damaged digitizer. If the same dead zone appears in safe mode, in Settings, in a drawing app, and on the lock screen, it's hardware.

## When runcheck can help

A screen test only checks the screen. A drop can also disturb the battery connection, thermal sensors, antenna contacts, camera module, or charging port.

runcheck gives you a broader read on battery, thermal, network, and storage health in one place. It won't diagnose a cracked digitizer, but it can help you spot unusual battery drain, heat, or connection behavior after the drop. That's useful when the display looks fine but the phone starts acting different over the next few days.

## What the results mean

If the display passes the visual, pixel, touch, brightness, and color tests, it's probably fine. Keep an eye on it for a week or two anyway, especially if the phone landed on a corner.

If you find dead pixels, a touch dead zone, panel lifting, persistent flicker, or spreading discoloration, treat it as physical damage. Software resets won't repair a digitizer. Factory reset won't repair OLED pressure damage. A screen replacement or professional inspection is the real fix.

And if the screen is lifting because the battery underneath is swelling, stop using and charging the phone. That's no longer just a screen issue.
