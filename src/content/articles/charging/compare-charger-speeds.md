---
title: "How to compare charger speeds on Android"
description: "Practical methods for comparing Android charger speeds using apps, USB power meters, built-in phone tools, and controlled tests."
listSummary: "Charger speed comparison"
hub: "charging"
sourceNumber: 45
order: 9
tags: ["charging","battery","android","guide","hardware"]
draft: false
---
You plug in the bedside charger and your phone says Fast charging. You plug in the desk charger and it says the same thing. One gets you to 80% before coffee is done, the other doesn't.

The label isn't enough. You need to compare what the phone actually accepts.

## Why two chargers can feel so different

Charging speed is a negotiation between three things: the charger, the cable, and the phone. The charger advertises what it can supply. The cable may limit current. The phone decides what it wants based on protocol support, battery level, temperature, and its own charging rules.

If the phone and charger both support USB Power Delivery at 9V/3A, they can settle around 27W. If the charger only supports basic 5V/1A USB output, the same phone gets 5W. A fancy adapter can't override what the phone asks for.

Cables matter more than people expect. A standard 3A USB-C cable is fine for many phones, but it won't unlock every high-power mode. Proprietary systems like OnePlus SUPERVOOC, OPPO VOOC, and some Xiaomi HyperCharge setups often need the matching charger and cable. A generic USB-C cable may still charge the phone, just at a much lower speed.

Temperature is the silent variable. A phone that just finished gaming, recording video, or sitting in sunlight may throttle charging even with the best charger you own. Test a hot phone and you'll get a bad comparison.

## The fast app test

For a quick comparison, use an app such as Ampere or AccuBattery. Plug in charger A, wait for the reading to settle, then note the current and voltage. Plug in charger B with the same cable and repeat.

Keep the battery level in the same range for each test. Between 20% and 50% is a good window because most phones charge aggressively there. Testing one charger at 25% and another at 78% is unfair. The second one will usually look slower because the phone is already tapering power.

App readings are useful, but they aren't perfect. They measure what the battery side reports, not the exact wall output. The screen, processor, radios, and charging electronics all affect the number. That's why this method is best for spotting obvious differences, not proving exact wattage.

## The power meter test

A USB-C power meter gives you cleaner results. Plug the meter between the charger and the cable, then watch the live voltage, current, and wattage. Meters with USB PD decoding can show the negotiated profile too, which is often the missing clue.

Use one cable for all adapter tests. If you want to compare cables, use one adapter and swap only the cable. It sounds fussy, but it's the difference between a test and a guess.

A meter also explains weird results. Suppose a 45W charger only shows 15W. The charger may support 45W, but not the voltage or PPS range your phone prefers. Or the cable may be limiting the session. Or the phone may be too warm. The meter won't fix it, but it tells you where to look.

## Built-in phone clues

Some Android phones give useful hints without showing exact wattage.

Samsung phones show labels such as Charging, Fast charging, Super fast charging, and Super fast charging 2.0 depending on the charger and model. On recent One UI versions, battery settings are under Settings > Battery, and Samsung Members can run Battery status, Cable charging, and Wireless charging diagnostics.

Pixel phones show estimated time to full in Battery settings after you plug in. It isn't a wattage meter, but a charger that says 1 hour 20 minutes to full is clearly behaving differently from one that says 3 hours.

Xiaomi and OnePlus phones often show a branded charging animation or wattage label during fast charging. Those animations aren't lab instruments, but they're useful when one charger triggers the full-speed mode and another doesn't.

## A fair 30-minute comparison

For a comparison you can trust, do this:

1. Drain the phone to the same starting point each time, ideally around 20%.
2. Let the phone cool down for a few minutes.
3. Use the same cable.
4. Turn on airplane mode or at least leave the phone idle.
5. Charge for 30 minutes and record the ending percentage.

Repeat with the next charger from the same starting percentage. The charger that adds more battery in the same window is faster for that phone.

Don't run the test all the way to 100%. The final stretch is intentionally slower, and it hides the real difference between chargers. The 20% to 80% window is more useful.

## Wired versus wireless

You can compare wired and wireless charging the same way, but don't be surprised when wireless loses. Older Qi chargers and many phone combinations sit around 5W to 15W. Qi2 brought 15W magnetic charging, and Qi2 25W now exists, but both the phone and charger have to support it.

Wired USB-C is still the safer bet for speed. Wireless is about convenience, placement, and less cable wear. It isn't usually the fastest path, especially if the phone gets warm on the pad.

## How runcheck helps

runcheck includes a Charger Comparison feature in Pro. Plug in a charger, name it, and the app records the charge rate during the session. After testing a few chargers and cables, you can compare average mAh per hour and wattage side by side.

That matters because the best charger is not always the biggest one. A cool, steady 25W setup can be more useful than a charger that spikes high for two minutes and then throttles because the phone gets warm.

## A few common gotchas

Test order matters. A phone at 25% will usually charge faster than the same phone at 75%.

A 65W charger won't force a 25W phone to take 65W. The phone chooses.

If two chargers perform almost the same, use the one that runs cooler. Heat is the enemy, even when the charging time looks identical.
