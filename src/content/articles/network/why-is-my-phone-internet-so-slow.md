---
title: "Why is my phone internet so slow?"
description: "Why does one phone crawl while the laptop next to it loads fine? Usually because of weak signal, a crowded network, or an app on the phone using bandwidth in the background. The trick is figuring out which one you're dealing with before you start changing random settings."
listSummary: "Slow internet troubleshooting"
hub: "network"
sourceNumber: 91
order: 2
tags: ["performance","speed","android","optimization","troubleshooting"]
draft: false
---
Don't start with a factory reset. Start with evidence.

## First, separate the phone from the network

Use another device on the same WiFi. If a laptop or tablet is slow too, the issue is probably the router, ISP, or WiFi coverage. If every other device is fine and only your phone struggles, focus on the phone.

For mobile data, test in more than one location. A phone that is fast at home but slow at work is probably dealing with coverage, congestion, or building materials at that location. A phone that is slow everywhere points more toward the carrier plan, SIM/eSIM setup, radio settings, or the phone itself.

Run one speed test and write down download, upload, and ping. You don't need perfect lab conditions yet. You just need a baseline.

## WiFi problems that feel like slow internet

Distance is the obvious one. Walls, floors, mirrors, appliances, and furniture weaken WiFi. The 5 GHz band is faster when you're close to the router, but it fades faster through walls. The 2.4 GHz band reaches farther, but it is slower and more crowded.

Channel congestion is common in apartments. You can have strong signal and still get bad performance because ten nearby routers are shouting over the same channel. Android doesn't show this clearly in normal settings, so use a WiFi analyzer app if you suspect it.

Too many active devices can hurt cheaper routers. A phone, laptop, TV, tablet, game console, security camera, smart speaker, and a few smart plugs all count. The problem is not just the number of devices, but how many are active at once.

DNS can make websites feel slow even when raw speed is fine. On modern Android, the cleaner system-level option is **Settings > Network & internet > Private DNS**. Try **dns.google** or **one.one.one.one** if your current DNS feels sluggish. This can make site lookup faster, but it won't turn a bad 5 Mbps connection into a fast one.

## Mobile data has its own traps

Weak cellular signal is different from weak WiFi, but the symptom feels the same. A one-bar connection can stay online while still struggling to move data. On many Android phones, cellular signal details are under **Settings > About phone > SIM status** or a similar SIM menu. The exact path depends on the manufacturer.

Congestion is real. A tower has finite capacity, and everyone nearby shares it. Speeds can drop around commute hours, lunch breaks, stadium events, shopping centers, and evenings at home.

Your plan may also slow you down after a priority-data threshold. Many "unlimited" plans are unlimited in quantity, not unlimited in full-speed priority. Check your carrier app before you spend an hour blaming Android.

5G can be worse than LTE in the wrong place. If the device keeps chasing weak 5G, try forcing LTE when the phone and carrier expose that option. The setting is usually under a SIM or Mobile network menu, but some carriers hide it.

## If this started after an Android update

Updates can change modem firmware, carrier settings, WiFi behavior, and battery rules. Most of the time that is good. Sometimes it is messy.

Android 17 was released on June 16, 2026 and Google made it available first on supported Pixel devices. Other manufacturers ship their Android 17 builds later through their own update schedules. So if a Pixel suddenly slowed down right after the Android 17 update, include that timing in your diagnosis. If you use Samsung, OnePlus, Xiaomi, or another brand, don't assume the same Android 17-specific behavior applies until that device actually receives its own Android 17 build.

After a major update, restart once, update apps from the Play Store, and check for a second system update or carrier services update. If only one network is broken, forget and rejoin that WiFi network. If both WiFi and mobile data are broken, reset network settings after you have saved important WiFi passwords.

## Phone-side causes

Background apps can use bandwidth without making noise. Cloud backup, social apps, podcast apps, Play Store updates, photo sync, and messaging apps can all download or upload while you are trying to do something else.

On Pixel, check **Settings > Network & internet > SIMs > App data usage** for mobile data. For WiFi, the path varies more, but many Android builds show per-app network usage somewhere under Network, Apps, or Data usage. Look for an app using data when you weren't actively using it.

Battery Saver can also change network behavior. It may reduce background sync, delay notifications, or limit app activity. That saves battery, but it can make some apps feel slow or stale.

A VPN adds another possible bottleneck. It routes traffic through another server, which can add latency and reduce throughput. Disconnect it for one test. If the problem disappears, you found the cause.

Browser cache is a smaller issue, but it happens. Clearing the browser cache can fix pages that load halfway or keep timing out. It doesn't increase your connection speed. It just removes broken local data.

## A fast diagnostic sequence

Run a speed test on WiFi. Then turn WiFi off and run one on mobile data. Don't run ten tests in a row on cellular unless you want to burn through data.

Toggle airplane mode on, wait ten seconds, and turn it off. This forces the phone to reconnect to WiFi and the mobile network.

Restart the phone. It is basic, but it clears temporary network states and stuck background processes.

Forget and rejoin the problem WiFi network. If the issue is only at home, also restart the router.

Check app updates and system updates. This matters more right after a major Android release.

Boot into Safe Mode if speeds improve after a restart but fall apart again later. Safe Mode disables downloaded apps, so it is a good way to catch a third-party app causing trouble.

Reset network settings last. On many Android phones it is under **Settings > System > Reset options > Reset Wi-Fi, mobile & Bluetooth**. This removes saved WiFi networks, Bluetooth pairings, and mobile network settings, so it is not the first button to press.

## When the phone can't fix it

If mobile data is slow in the same area every day, the carrier may simply be weak there. Coverage maps are optimistic. Buildings, hills, tower load, and indoor materials decide what your phone actually gets.

For WiFi, old routers are often the limit. A WiFi 4 router from a decade ago can still connect a modern phone, but it won't handle a busy household the way a decent WiFi 6 or WiFi 7 system can.

Apps like runcheck help by logging signal strength, latency, connection type, and speed test history over time. One slow test is a clue. A pattern is better.
