---
title: "How to check WiFi signal strength on Android"
description: "Learn how to read WiFi strength on Android in dBm, not just bars. Includes built-in settings, analyzer apps, and what the numbers mean."
listSummary: "Wi-Fi signal strength checks"
hub: "network"
sourceNumber: 90
order: 1
tags: ["network","connectivity","android","troubleshooting","guide"]
draft: false
---
The WiFi bars in the status bar are a rough hint, not a measurement. Put two phones beside each other and they can still disagree because Android skins and manufacturers don't all map signal strength the same way.

For real troubleshooting, look for dBm. That number is the signal strength your phone is receiving from the router.

## Start in Android settings

Open **Settings > Network & internet > Internet** on a Pixel or near-stock Android phone. On Samsung Galaxy phones, open **Settings > Connections > Wi-Fi**. Tap the network you're connected to.

The network detail screen usually shows a signal label such as Excellent, Good, Fair, or Weak. It may also show link speed, frequency, security type, IP address, and other connection details. The exact screen changes by brand and Android version, so don't worry if your phone doesn't match a guide screenshot perfectly.

On many current phones, Android settings won't show the raw dBm number. That's annoying, but not unusual. Link speed still gives useful context. If link speed falls from several hundred Mbps near the router to 40 Mbps in the back bedroom, the connection is telling you something.

## Try Developer options, but don't depend on it

Some phones can show extra WiFi details after you enable Developer options.

Go to **Settings > About phone** and tap **Build number** seven times. Then open **Settings > System > Developer options** and look under Networking for **Enable Wi-Fi verbose logging**. Google's developer documentation says this increases WiFi logging for each SSID according to relative RSSI.

In practice, the visible result varies. Pixels and near-stock devices are more likely to expose useful extra details. Samsung and other OEM builds may hide the same information or show it differently. This is one of those Android tricks that works until it doesn't.

## Use a WiFi analyzer app for dBm

A WiFi analyzer app is the easiest way to get a dBm reading across different phones.

WiFiman from Ubiquiti shows WiFi details including signal strength, channel, SSID, BSSID, gateway, DNS, latency, and packet loss. It is a good first choice if you want one app that also has speed and network discovery tools.

NetSpot is better when you care about mapping a space. It can show signal strength and help build a rough coverage picture while you walk around a home or office.

Network Analyzer is useful when the problem may not be signal strength at all. It combines WiFi and cellular details with tools like ping, DNS lookup, and traceroute.

After installing one, find your network name and watch the dBm value while you move. That number matters more than the icon in the status bar.

## What dBm numbers mean

dBm values are negative. Closer to zero is stronger. A reading of -45 dBm is much stronger than -75 dBm.

Use these as practical home-network thresholds:

- -30 to -50 dBm: excellent. You're probably close to the router or access point.
- -50 to -60 dBm: strong. Streaming, video calls, and normal browsing should feel stable.
- -60 to -67 dBm: still good for most use, including HD video and calls if interference is low.
- -67 to -70 dBm: usable, but this is where real-time calls and gaming can start to suffer.
- -70 to -80 dBm: weak. Browsing may work, but video quality can drop and calls may freeze.
- Below -80 dBm: poor. The phone may stay connected while data transfer feels broken.

There is no perfect cutoff because noise and interference matter too. A clean -68 dBm signal can beat a noisy -60 dBm signal in an apartment building full of routers.

## Check the frequency band

Most routers use a lower 2.4 GHz band and a faster 5 GHz band. Newer routers may also use 6 GHz through WiFi 6E or WiFi 7.

The lowest band travels farther and handles walls better, but it is crowded. Bluetooth devices, neighboring routers, baby monitors, and microwaves can all add noise.

The 5 GHz band is faster at short and medium range. It loses strength faster through walls and floors. A phone can show weaker dBm there and still beat the lower band because it has more room for data.

The 6 GHz band is even cleaner when available, but range is shorter again. It is excellent in the same room or nearby rooms. It is not a magic whole-house fix.

If your router combines bands under one network name, your phone picks one automatically. That choice is usually fine, but not always. When testing a dead zone, check which band the phone is actually using before blaming the router.

## Walk the problem areas

Open your analyzer app and walk slowly through the rooms where WiFi feels bad. Watch for the point where your network drops below about -70 dBm.

Common weak spots are boring but real: concrete walls, brick, metal doors, mirrors with metallic backing, underfloor heating, and routers hidden in cabinets. A router in a closet is a classic self-inflicted problem.

runcheck shows the current WiFi reading on the Network detail screen with dBm, quality rating, link speed, frequency, and latency when Android exposes those values. The Network history view is useful when the problem is intermittent, for example speeds dropping every evening or signal quality falling only in one room.

## Improve a weak signal

Move the router first. Put it higher, closer to the center of the home, and away from metal objects. Don't hide it behind the TV or inside a cabinet.

Change the channel if nearby routers are crowding the same one. On 2.4 GHz, channels 1, 6, and 11 are the usual non-overlapping choices. On 5 GHz and 6 GHz, there is more channel space, but congestion can still happen in apartments.

Use mesh WiFi when one router can't cover the space. A mesh system with well-placed nodes is usually better than a cheap extender sitting at the edge of bad coverage. The extender needs a decent signal too. If it can barely hear the router, it can't create a good network out of nothing.

Update router firmware when updates are available. It won't fix bad physics, but it can fix bugs, roaming issues, and compatibility problems with newer phones.
