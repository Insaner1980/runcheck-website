---
title: "Does 5G drain battery faster than 4G?"
description: "5G can use more battery than 4G LTE, but the gap depends on signal strength, network type, and your phone's modem. Here is when 5G matters and when LTE is the better battery choice."
listSummary: "5G battery impact explained"
hub: "battery"
sourceNumber: 28
order: 18
subgroup: "Drain"
tags: ["battery","drain","troubleshooting","android","performance"]
draft: false
---
Yes, 5G can drain your battery faster than 4G LTE. It just isn't the disaster it was on the first wave of 5G phones.

Ookla's Speedtest Intelligence analysis found 5G using about 6% to 11% more battery compared with LTE, depending on the phone's SoC. That's real. But on a recent phone with a decent signal, it usually isn't the difference between getting through the day and carrying a dead phone. On an older 5G phone, or in a place where it keeps bouncing between LTE and 5G, the hit can still be obvious.

Android 17 is now officially out for most supported Pixel devices first, with other Android phones following later through their manufacturers and carriers. That doesn't change the basic 5G battery story, but it does mean some settings may look a little different depending on whether your phone is still on Android 16, already on Android 17, or waiting for a Samsung, OnePlus, Xiaomi, Motorola, or other OEM update.

## Signal strength matters more than the logo

The battery problem usually isn't the little 5G icon. It's the modem working too hard.

A phone with a strong 5G signal can use less power than a phone clinging to weak LTE. The modem has to raise transmission power when signal strength is poor, and that extra effort shows up as heat and battery drain. If your phone sits at the edge of coverage, the network generation matters less than the fact that the connection is unstable.

This is why two people can have completely different experiences with the same phone. Someone living near strong mid-band 5G coverage may barely notice a battery difference. Someone commuting through patchy coverage may watch the phone jump from 5G to LTE, back to 5G, then down again. That hunting behavior wastes power because the modem keeps renegotiating the connection instead of settling into one stable state.

No magic here. Stable beats faster.

## Why some 5G networks use more power

Early 5G rollouts often used Non-Standalone 5G, usually shortened to NSA. In that setup, the phone uses LTE as the anchor connection while 5G handles extra data capacity. In plain English, the phone may be working with both 4G and 5G at the same time.

That dual-connection design helped carriers launch 5G faster, but it wasn't ideal for battery life. Running extra radio work costs power, especially when the 5G layer is weak or temporary.

Standalone 5G, or SA, removes the LTE anchor and lets the phone connect through a 5G core network. SA can be cleaner from a battery perspective, but coverage is still uneven. Some carriers have expanded it widely. Others are still rolling it out city by city, band by band, and device by device. Your phone normally doesn't show a simple NSA or SA label in regular settings, so the practical test is still the same: is the 5G connection strong and stable where you actually use the phone?

## Low-band, mid-band and mmWave don't behave the same

5G is not one thing. The band matters.

Low-band 5G reaches far and works better indoors, but speeds are often close to LTE. Battery impact is usually modest because the signal behaves more like older cellular bands.

Mid-band 5G is the useful sweet spot for many people. It is common in cities and suburbs, and it can be much faster than LTE without the fragility of mmWave. This is also where many real-world 5G battery comparisons land, so the extra drain is noticeable but usually manageable.

mmWave is the extreme case. It can be very fast, but the range is short and walls are a problem. Your phone may need more radio effort to hold the connection, and it may fall back to another band as soon as you move. Most people only hit mmWave in specific places like stadiums, airports, and dense city blocks, so it isn't the normal daily 5G experience.

## Newer modems have closed much of the gap

The age of the phone matters a lot. First-generation 5G phones often used separate modem hardware, which added power draw and heat. Newer Android flagships and many mid-range phones use more integrated modem designs and smarter network switching.

That is why old 5G advice can be misleading. A Galaxy S20-era phone and a 2025 or 2026 flagship are not doing the same job with the same hardware. If you're using a first- or second-generation 5G phone, forcing LTE can still save a useful amount of battery. If you're using a recent Pixel, Galaxy, OnePlus, Xiaomi, or Motorola phone in a strong coverage area, auto mode is usually the better default.

Older phones have another problem: smaller battery health margins. A phone that has already lost capacity after years of charging will make every network inefficiency feel worse.

## What to change on Android

Start with the simple rule: leave 5G on auto unless you have a reason not to.

On Pixel and many stock Android phones, look under Settings > Network & internet > SIMs > your SIM > Preferred network type. Depending on your carrier, you may see options such as 5G, LTE, or automatic modes. Some carriers hide or limit this menu, which is annoying but normal.

On Samsung Galaxy phones, the usual path is Settings > Connections > Mobile networks > Network mode. The exact options depend on region, carrier firmware, and One UI version.

Use LTE only when it keeps switching networks, when 5G is slower than LTE in your area, or when you need every bit of battery for travel. Turn 5G back on when you're back in a strong coverage area.

Pixel phones also have Adaptive Connectivity under Settings > Network & internet > Adaptive connectivity. Leave it on unless you're troubleshooting. It lets the phone make battery-aware network decisions instead of forcing you to babysit the radio manually.

After a major Android update, including Android 17 on supported Pixels, don't judge battery life from the first few hours. The phone may still be finishing app optimization, syncing, and carrier configuration. If 5G suddenly behaves badly after an update, check for carrier updates, restart the phone, and consider resetting mobile network settings before blaming 5G itself.

## When 5G is worth turning off

Turn off 5G when the phone is warm in your pocket, the signal keeps dropping, or the battery graph shows mobile network drain dominating the day. Also consider LTE when roaming internationally. A phone searching for 5G on unfamiliar networks can waste power for very little gain.

Don't turn off 5G just because someone online said it always kills battery. That advice is too blunt. On a modern phone with strong coverage, Wi-Fi use, screen brightness, background apps, and poor signal usually matter more.

## Common questions

### Does 5G damage the battery long term?

5G doesn't directly damage the battery. It uses charge. Battery aging comes mainly from charge cycles, heat, time, and high state-of-charge exposure. The indirect issue is heat: if weak 5G coverage keeps the modem active and the phone runs warm for hours, that heat can contribute to battery wear over time.

### Is Wi-Fi better for battery than 5G?

Usually, yes. A good Wi-Fi connection is almost always easier on the battery than cellular data. If you're at home, work, or a hotel with solid Wi-Fi, use it.

### Should I disable 5G when traveling?

Sometimes. If you're in a country with good 5G coverage and your roaming plan supports it properly, leave auto mode on. If the phone keeps hunting for 5G, gets hot, or drops service, switch to LTE until you're back on a stable network.
