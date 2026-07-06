---
title: "How to test your phone screen for dead pixels and touch issues"
description: "You're checking a used phone, the seller says the screen is perfect, and at first glance it is. Then you open a white screen and notice one black dot near the corner. Or worse, you start typing and one strip of the keyboard ignores your finger."
listSummary: "Screen pixel and touch tests"
hub: "hardware"
sourceNumber: 106
order: 3
tags: ["hardware","testing","diagnostics","android","guide"]
draft: false
---
Screen problems hide well during normal use. Wallpapers, icons, dark mode, and motion all cover up defects. A few solid-color and touch tests make them much easier to catch.

## Dead pixels and stuck pixels

A dead pixel stays black no matter what the screen shows. It has stopped working.

A stuck pixel is different. It stays on one color, usually red, green, blue, or white, even when the surrounding area changes. Stuck pixels sometimes respond to pixel-cycling tools. Dead pixels usually don't.

Both are easiest to see on solid backgrounds. Don't inspect a phone screen on the home screen and call it done. That misses too much.

## Check for dead and stuck pixels

Set brightness high, clean the glass, and show full-screen solid colors. Use white, black, red, green, blue, and gray.

A browser-based test such as deadpixeltest.org works fine. A screen test app from the Play Store can be better because it can hide the status and navigation bars, cycle colors automatically, and include gradient tests.

Some phones have built-in tests:

- Samsung Galaxy: dial `*#0*#` on many models, then use the Red, Green, Blue, Black, and Touch tests. Samsung Members also has display diagnostics through Support > View tests.
- Google Pixel: dial `*#*#7287#*#*` to open Pixel Diagnostics where supported.
- Xiaomi, Redmi, and POCO: try `*#*#6484#*#*` for the CIT menu.
- Motorola: open Device Help > Device diagnosis > Hardware test.

On a white background, dead pixels look like tiny black dots. On a black background, stuck pixels show up as bright colored dots. Red, green, and blue screens help reveal which subpixel is stuck.

Take your time. One slow pass around the edges and corners catches more defects than tapping through colors as fast as possible.

## Check brightness uniformity and burn-in

A solid black screen in a dim room is useful for LCD phones because backlight bleed shows as cloudy brighter patches near the edges. OLED phones don't have a backlight, so they won't have backlight bleed in the same way.

OLED has its own problem: burn-in. AMOLED, Super AMOLED, and Dynamic AMOLED panels can age unevenly when the same elements sit on screen for long periods. Navigation bars, status icons, keyboards, and social app controls are the usual shapes.

Use a solid gray screen at medium brightness to check for burn-in. Look for faint shadows of the keyboard, navigation buttons, clock, or app bars. A red screen can also make some burn-in easier to see because different subpixels age at different rates.

Burn-in is permanent. Apps that claim to fix it usually try to age the rest of the display to make the old pattern less obvious. That's not really a fix.

## Test touch responsiveness

A display can look perfect and still have a bad digitizer. The digitizer is the layer that detects touch.

Open a drawing app and choose a thin brush. Draw horizontal lines from the top to the bottom of the screen, then vertical lines from left to right. Keep the lines close together. If the line breaks in the same area every time, that part of the digitizer isn't registering.

A touch test app with a grid makes this easier. Each square should highlight as your finger passes over it. Dead zones stay blank.

Samsung's `*#0*#` menu includes a Touch test on many Galaxy phones. Some Android phones also respond to `*#*#2664#*#*`, but that code is far less consistent than manufacturer tools. If it doesn't work, don't worry. The drawing test is enough.

Pay close attention to screen edges. Curved displays and very thin bezels can make edge input harder to judge, especially if palm rejection is active.

## Test multitouch

Most modern phones support at least five simultaneous touch points, and many support ten. A multitouch test app shows numbered circles for each finger.

Place several fingers on the screen, then move them slowly. The circles should stay attached to your fingers without jumping or disappearing. If the phone loses one finger every time in the same area, that's useful evidence.

This matters for gaming, pinch-to-zoom, keyboard use, and accessibility gestures.

## Watch for ghost touches

Ghost touches are phantom inputs. The phone opens apps, types letters, scrolls, or taps buttons when nobody is touching the screen.

First, remove the screen protector and case. Cheap protectors, trapped moisture, and pressure near the edges can confuse the digitizer. Clean the screen and test while charging and unplugged, because bad chargers can sometimes introduce touch noise.

Then boot into Safe Mode. If ghost touches continue in Safe Mode, hardware is more likely. If they stop, a third-party app or overlay may be involved.

If touch problems started immediately after a major OS update, treat software as a real possibility. Android 17 rolled out first to supported Pixel phones, with other manufacturers following later, so update-related touch bugs can appear on one brand before others. Install pending patches and test again before paying for a screen replacement.

## What to do if you find a defect

For a used phone, any dead pixel, touch dead zone, ghost touch, or visible burn-in should affect the price. Don't let anyone tell you a touch issue is "just software" unless you can test Safe Mode or diagnostics yourself.

For a new phone, contact the retailer or manufacturer quickly. Pixel policies, Samsung policies, carrier rules, and local consumer law don't all handle pixel defects the same way. The safest move is to report it during the return or exchange window instead of waiting.

Stuck pixels are worth trying to fix with a pixel-cycling tool, but keep expectations low. Run it for a short session, not overnight at maximum brightness. Dead pixels, ghost touches, and dead touch zones usually need a screen assembly replacement.

Screen repair pricing varies too much to quote cleanly. A budget LCD phone can be cheap. A curved flagship OLED can cost enough that replacing the phone starts to make more sense. Get the exact model quoted before deciding.

## Quick answers

### Can a screen protector cause dead pixels?

No. Dead pixels are inside the display panel. A protector can cause touch issues, false touches, bad edge response, or proximity sensor problems, but it doesn't kill pixels.

### Do dead pixels spread?

A single dead pixel usually stays a single dead pixel. If more appear over time, the underlying issue may be panel damage, pressure damage, or a failing connection.

### Is burn-in covered under warranty?

Sometimes, but don't assume it. Many manufacturers treat burn-in as wear, especially on older OLED phones. Early severe burn-in is worth reporting, but coverage depends on the warranty and local consumer law.

### Is one dead pixel acceptable on a new phone?

For the buyer, no. A new phone should have a clean screen. Whether the manufacturer agrees is a policy question, which is why the return window matters.
