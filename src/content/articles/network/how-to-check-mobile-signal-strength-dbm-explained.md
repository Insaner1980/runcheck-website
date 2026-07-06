---
title: "How to check mobile signal strength (dBm explained)"
description: "Signal bars are useful for a quick glance, but they're not a measurement. One phone can show four bars where another shows two, even when both are connected to the same carrier in the same room. If you want the real number, look for signal strength in dBm."
listSummary: "dBm signal strength explained"
hub: "network"
sourceNumber: 93
order: 4
tags: ["network","connectivity","android","troubleshooting","guide"]
draft: false
---
That sounds more technical than it is. dBm is just the power level your phone sees from the cellular network. The closer the number is to zero, the stronger the signal. A reading of -75 dBm is stronger than -95 dBm. Simple enough.

## The fast way to read dBm

Cell signal strength is shown as a negative number because phones are measuring very small amounts of radio power. In normal use, you'll usually see something between about -50 dBm and -120 dBm. Standing close to a tower might get you near -50 dBm. Deep inside a concrete building, a basement, or the edge of coverage, you can drift toward -110 dBm or worse.

The scale is logarithmic. Every 3 dBm is roughly a doubling or halving of received power. So -80 dBm isn't just a little better than -86 dBm. It's about four times stronger in power terms. No, really.

For LTE and most sub-6 GHz 5G connections, these ranges are a useful rule of thumb:

| Reading | What it usually means |
|---|---|
| -50 to -70 dBm | Excellent. Calls and data should be stable, assuming the tower isn't overloaded. |
| -70 to -85 dBm | Good. This is normal for decent outdoor or near-window coverage. |
| -85 to -100 dBm | Usable, but not great. Browsing works, streaming may buffer, and upload speeds can fall first. |
| -100 to -110 dBm | Weak. Calls can drop, texts may delay, and the modem uses more power to hold the link. |
| Below -110 dBm | Marginal. Expect timeouts, no-service moments, or forced fallback to another network layer. |

These are not universal pass or fail lines. A phone at -95 dBm can still feel fine if the signal is clean and the tower has spare capacity. Another phone at -75 dBm can crawl if the cell is congested or interference is high.

## How to check signal strength on Android

The exact menu changes by manufacturer, Android version, and carrier build. The fastest trick is to open Settings and search for "SIM status" or "signal strength."

On Pixel and many stock-style Android phones, including supported Pixels that now run Android 17, try Settings > About phone > SIM status. Some builds also expose SIM details under Settings > Network & internet > SIMs. Look for Signal strength. It usually shows a dBm value and an ASU value.

On Samsung Galaxy phones, check Settings > About phone > Status information > SIM card status. Some One UI versions shorten that to SIM status. If the menu name isn't there, use Settings search.

One catch: Android usually shows the reading for the network layer you're currently using. If the phone is camped on LTE, the displayed number is LTE. If it's on 5G NR, the value may be based on 5G reference signal measurements, depending on what the modem and carrier expose. It won't always show LTE and 5G values side by side.

## Hidden testing menus

Many Android phones still respond to this dialer code:

`*#*#4636#*#*`

Open the Phone app, enter the code, and a Testing menu may appear. Tap Phone information to see network type, signal strength, data connection state, and other radio details. Don't change preferred network settings in this menu unless you know exactly what you're doing. It's a diagnostic screen, not a friendly settings page.

Samsung often blocks that generic code. On many Galaxy phones, `*#0011#` opens Service Mode instead. It can show serving cell details, band information, and signal readings. Carrier models can disable either code, so don't treat the codes as guaranteed.

## Apps that make this easier

Apps such as Network Cell Info Lite, CellularZ, and Signal Strength put the dBm value on the main screen and update it continuously. They're useful when you're walking around a house, office, or parking lot trying to find the spot where the phone actually has a better connection.

A good signal app should show more than one number. RSRP tells you strength, but RSRQ and SINR tell you whether that signal is usable or buried in noise.

runcheck shows network quality alongside other device health metrics and keeps history over time. That matters because a single dBm reading is a snapshot. A history view makes it easier to spot whether your phone is always weak in one room, only bad at rush hour, or suddenly worse after an update.

## RSRP, RSSI, RSRQ, and SINR without the headache

Diagnostic screens throw around several similar-looking abbreviations. They don't all mean the same thing.

RSSI means Received Signal Strength Indicator. It was commonly used with older 2G and 3G connections, and it can also appear in Wi-Fi tools. RSSI measures total received power, including useful signal, noise, and interference. That makes it less clean as a cellular troubleshooting metric.

RSRP means Reference Signal Received Power. For LTE and 5G, this is usually the strength number you care about first. It measures the reference signal from the serving cell, not every bit of radio energy in the channel.

RSRQ means Reference Signal Received Quality. It combines strength and interference into a quality number. A less negative value is better. For LTE, something around -3 dB is excellent, while values closer to -15 dB or -20 dB point to poor quality.

SINR means Signal to Interference plus Noise Ratio. Higher is better. Above 20 dB is excellent, 10 to 20 dB is good, and below 0 dB means the noise and interference are stronger than the useful signal.

Here's the practical version: check RSRP first. If RSRP is good but data is still slow, look at RSRQ and SINR next. Strong signal with bad quality is common in busy cities, apartment buildings, stadiums, and anywhere many cells overlap.

## Why full bars can still be slow

Bars mostly describe signal level. They don't tell you how much bandwidth the tower has left, how many people are using it, whether your carrier is deprioritizing your plan, or whether the phone is on a low-band 5G layer that behaves more like good LTE than the fast 5G shown in ads.

This is why two tests in the same place can look contradictory. Your phone may show -68 dBm and still download slowly at a concert because hundreds or thousands of devices are competing for the same cell. At 2 AM, the same phone in the same seat may feel fast.

## Why signal readings jump around

Signal strength changes even when you're standing still. Radio waves bounce off buildings, cars, walls, people, and terrain. Some reflections help. Others cancel part of the signal. Move the phone a few centimeters and the reading can shift.

Indoor movement makes the swings larger. A window, elevator shaft, concrete wall, metal roof, or low-emissivity glass can change the reading by 10 dB or more. Basements and interior rooms are usually the worst spots because the signal has to pass through more material before reaching the phone.

Time of day can matter too, but not always because the signal itself changed. During busy hours the cell may be overloaded, so the connection feels worse even if the dBm number is similar.

## What counts as a good 5G reading?

For sub-6 GHz 5G, a rough RSRP reading near -80 dBm is good, and around -100 dBm is getting weak. For mmWave, stable coverage is much more location-sensitive. You can have a fast mmWave connection outdoors with clear line of sight, then lose it by turning a corner or stepping inside.

Don't judge 5G only by the icon. Judge it by signal strength, quality, speed, latency, and whether the phone keeps falling back to LTE.

## Quick answers

Can you improve signal without a booster? Sometimes. Move near a window, go upstairs, step outside, or try a different side of the building. If 5G is weak indoors, LTE can be the better practical connection because lower-frequency LTE bands often travel through walls more easily.

Is cellular dBm the same as Wi-Fi dBm? The unit is the same, but the useful ranges are different. Wi-Fi at -50 dBm is strong, and -70 dBm is often where stability starts to suffer. Cellular networks are built for longer distances, so they can remain usable at much lower numbers.

Should you trust bars or dBm? Use bars for a glance. Use dBm when you're troubleshooting.
