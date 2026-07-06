---
title: "How to check if your phone supports 5G"
description: "How to tell whether an Android phone supports 5G, why a 5G icon may still not appear, and what bands, plans, and carrier support have to do with it."
listSummary: "5G support checks"
hub: "network"
sourceNumber: 101
order: 12
tags: ["network","connectivity","android","troubleshooting","guide"]
draft: false
---
A phone either has 5G hardware or it doesn't. Android 17, a carrier settings update, or a new SIM can't turn a 4G-only modem into a 5G modem.

That sounds obvious, but it is the source of a lot of confusion. Plenty of recent budget Android phones are still 4G-only, while many older flagships already support 5G. The model number matters more than the year printed on the receipt.

## Check the network settings first

The fastest check is inside Android settings.

On Pixel and many stock Android phones, go to `Settings > Network & internet > SIMs`, choose your SIM, then open `Preferred network type`. If you see an option with `5G`, `NR`, or `5G/LTE`, the phone supports 5G on that software build and carrier profile.

On Samsung, check `Settings > Connections > Mobile networks > Network mode`.

On Xiaomi and POCO, check `Settings > SIM cards & mobile networks > Preferred network type`.

On OnePlus, look under `Settings > Mobile network`, then the SIM or preferred network type menu.

If the highest option is LTE, 4G, 3G, or 2G, the phone may be 4G-only. I say `may` because some carriers hide 5G settings when the plan, SIM, or region doesn't support it. The phone's exact specs will settle the question.

## Look up the exact model number

Open `Settings > About phone` and note the model number, not just the marketing name. A `Galaxy A55 5G` and a regional variant of another A-series phone can have different network support. The same is true for many Xiaomi, Motorola, OPPO, and Vivo phones.

Search the model number on the manufacturer's product page first. GSMArena is also useful for a quick check, but the manufacturer page is the better source when there is a conflict.

In the network section, look for `5G NR` bands. Common sub-6 GHz 5G bands include n28, n41, n71, n77, and n78, depending on country and carrier. mmWave bands such as n260 and n261 are used in fewer places and usually only on specific phone variants.

If the spec sheet lists only GSM, WCDMA, LTE, or 4G bands, it doesn't support 5G.

## A 5G phone still needs three other things

Hardware is only step one.

You also need a carrier plan with 5G access. Some plans include it automatically. Some prepaid or older plans don't. Business and MVNO plans can be especially uneven here.

You need 5G coverage where you are. A carrier map is a starting point, not a guarantee. Indoor coverage can be much worse than outdoor coverage, especially on higher-frequency 5G.

You need band compatibility. This is the one people miss. A phone imported from another region may support 5G in one country but miss the bands used by your carrier. It can be `5G capable` and still behave like a 4G phone on your network.

## Check the status bar, but don't trust it too much

When the phone is connected to 5G, the status bar usually shows `5G`. Depending on carrier and country, it may show labels such as `5G+`, `5G UW`, or `5G UC`.

No 5G icon does not automatically mean no 5G support. You might be outside coverage, inside a building that blocks the signal, using a 4G-only plan, using the wrong SIM profile, or connected to a carrier that disables 5G on one SIM slot.

If you ever see `5G E`, treat it as LTE branding, not real 5G. AT&T used that label for upgraded 4G LTE service, and it has confused people for years.

## Check the processor, but don't stop there

The SoC usually tells you whether 5G is even possible. Qualcomm Snapdragon 480 and newer 5G-branded chips, many Snapdragon 6, 7, and 8 Gen chips, MediaTek Dimensity chips, Samsung Exynos 1280 and newer mid-range or flagship 5G chips, and all Google Tensor chips are common 5G examples.

But processor names are messy. Some Snapdragon 600-series chips are 4G-only. Some phones use a 5G-capable platform but ship in a 4G variant. MediaTek Helio G-series phones are usually 4G-only, while MediaTek Dimensity phones are the 5G line.

Use the processor as a clue, then verify the full phone model and bands.

## Android 17 does not change the hardware answer

Android 17 started rolling out to supported Pixel phones first in June 2026, with new devices and other manufacturers following later. The update can improve modem firmware, carrier behavior, and network stability on supported phones.

It cannot add 5G to a 4G modem. If your phone didn't support 5G before Android 17, it won't support 5G after Android 17.

## SA and NSA 5G

There are two broad 5G deployment modes.

NSA, or Non-Standalone 5G, uses 5G radio together with a 4G core network. This helped carriers roll out 5G faster.

SA, or Standalone 5G, uses a 5G core network. It can improve latency, network efficiency, and future features, but carrier rollout is still uneven.

Most users don't need to obsess over SA and NSA for normal browsing, maps, messaging, or video. It matters more if your carrier is moving features to SA, if you use an early 5G phone, or if you rely on the lowest possible latency.

## Why your 5G phone always shows LTE

Work through this in order:

- Confirm `Preferred network type` includes 5G or NR.
- Check that your plan includes 5G.
- Check the carrier coverage map for the exact location.
- Step outside or near a window to rule out indoor signal loss.
- Make sure the SIM or eSIM line is active and set as the data SIM.
- Check whether dual-SIM mode disables 5G on your model.
- Compare your phone's 5G NR bands with the carrier's bands.
- Install available system and carrier updates.

If all of that checks out and the phone still never sees 5G, test another SIM from the same carrier or ask the carrier to refresh the line provisioning.

## Is 5G worth upgrading for?

Sometimes. That is the honest answer.

In a city with good mid-band or mmWave 5G, the speed difference can be obvious. Downloads finish faster, hotspot use feels better, and latency can improve. In a rural area with weak or patchy 5G, a good 4G connection may feel better than a phone that keeps hunting between LTE and 5G.

If your current phone works well and your area has weak 5G coverage, don't upgrade just for the icon. Upgrade for the whole phone: battery, camera, update support, storage, RAM, and modem quality.
