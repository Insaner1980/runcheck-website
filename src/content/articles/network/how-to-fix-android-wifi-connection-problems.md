---
title: "How to fix Android WiFi connection problems"
description: "Step-by-step fixes for Android WiFi issues, including connection drops, slow Wi-Fi, saved network problems, DNS settings, router checks, and Android 17 update notes."
listSummary: "Wi-Fi connection troubleshooting"
hub: "network"
sourceNumber: 96
order: 7
tags: ["performance","speed","android","optimization","troubleshooting"]
draft: false
---
What should you try first when Android Wi-Fi breaks? Don't start with a factory reset, and don't waste half an hour changing router settings before testing the simple stuff. Most Wi-Fi problems fall into one of three buckets: the phone won't connect, it connects but keeps dropping, or it stays connected but the internet feels dead.

Work through the fixes in this order. It saves time.

## 1. Toggle Wi-Fi, then airplane mode

Pull down Quick Settings and turn Wi-Fi off. Wait five seconds. Turn it back on.

If that doesn't help, turn airplane mode on, wait ten seconds, then turn it off. This restarts the phone's wireless radios without rebooting the whole device. On Pixel and stock-style Android, you'll also find airplane mode under Settings > Network & internet. On Samsung, use Settings > Connections.

This is a small fix, but it catches a surprising number of temporary radio state problems.

## 2. Forget the network and reconnect

A saved Wi-Fi profile can go stale after a router firmware update, password change, security-mode change, or mesh system reconfiguration.

On Pixel and many Android 17-style builds, go to Settings > Network & internet > Internet. Tap the gear next to the network, then tap Forget. On Samsung, go to Settings > Connections > Wi-Fi, tap the gear next to the network, then Forget.

Reconnect by selecting the network again and entering the password. If the router has both a main and guest network, make sure you're joining the right one.

## 3. Restart the phone and router

Restart the phone. Then restart the router by unplugging it from power for 30 seconds.

Do both, not one or the other. The phone may have a bad temporary network state, and the router may have a stale DHCP lease or overloaded connection table. Restarting both sides forces a clean negotiation.

If several devices are having Wi-Fi problems, the router restart matters more than the phone restart.

## 4. Check whether the problem is Wi-Fi or internet

Android can be connected to Wi-Fi while the internet connection behind the router is down. The Wi-Fi icon only tells you that the phone has a local wireless link.

Try another device on the same network. If every device is slow or offline, check the modem, router, and ISP. If only the Android phone has trouble, keep going with phone-side fixes.

Also try loading your router's admin page. Many routers use 192.168.1.1 or 192.168.0.1. If that page loads but websites don't, Wi-Fi itself is working and the issue is upstream internet, DNS, or router configuration.

## 5. Update Android, Google Play system components, and router firmware

Go to Settings > System > System update and install pending updates. On Samsung, use Settings > Software update > Download and install.

Also check Settings > Security & privacy > System & updates on Pixel-style Android builds for Google Play system updates. The exact wording moves around, but the idea is the same: phone firmware and system components both matter.

Router firmware is easy to forget. Open the router app or admin panel and look for firmware, system, or administration updates. Router vendors fix Wi-Fi stability bugs all the time, but many routers don't update themselves reliably.

## 6. Disable automatic Wi-Fi to mobile switching

If the phone randomly abandons Wi-Fi even though the router is working, automatic switching may be the reason.

On Pixel, check Settings > Network & internet > Adaptive Connectivity. On Samsung, open Settings > Connections > Wi-Fi > Intelligent Wi-Fi and turn off Switch to mobile data for testing.

Leave it off for a day. If Wi-Fi becomes stable, the feature was reacting too aggressively to a network it considered weak or low quality.

## 7. Check 2.4 GHz vs 5 GHz

The 2.4 GHz band has longer range and better wall penetration. The 5 GHz band is faster near the router but drops sooner through walls. A phone connected to 5 GHz in the next room may work perfectly, then struggle at the far end of the house.

If your router combines both bands under one network name, temporarily split them into separate names such as HomeWiFi-2G and HomeWiFi-5G. Connect the phone to 2.4 GHz for range or 5 GHz for speed.

You can usually see the current band by opening the connected Wi-Fi network details. Stock Android may show frequency or link speed. Samsung shows similar details under the Wi-Fi network settings screen.

## 8. Check Private DNS before changing static DNS

DNS problems can make Wi-Fi look broken. The phone says connected, chat apps may partly work, but websites stall or fail to resolve.

On Android 9 and later, check Settings > Network & internet > Private DNS. If it's set to a custom provider and Wi-Fi is failing, temporarily set it to Automatic or Off and test again.

You can use providers such as `dns.google` or `one.one.one.one`, but type them exactly. A bad Private DNS hostname can break name resolution across both Wi-Fi and mobile data.

Avoid switching a Wi-Fi network from DHCP to Static unless you know the correct IP address, gateway, and subnet values. Static DNS can help in specific cases, but entering the wrong IP details creates a new problem that looks worse than the original one.

## 9. Reset network settings

Use this when individual fixes haven't worked. A network reset clears Wi-Fi, Bluetooth, and mobile network settings without deleting photos, apps, or files.

Pixel and stock Android: Settings > System > Reset options > Reset Wi-Fi, mobile & Bluetooth.

Samsung: Settings > General management > Reset > Reset network settings.

Xiaomi: Settings > Connection & sharing > Reset Wi-Fi, mobile networks, and Bluetooth.

OnePlus: Settings > System > Reset options > Reset Wi-Fi, mobile & Bluetooth.

You'll need to reconnect to Wi-Fi networks and pair Bluetooth devices again.

## 10. Check date and time

Wrong date and time can break certificate checks, captive portals, and some authentication flows. It sounds too simple, but it catches real cases after travel, dead batteries, manual time-zone changes, or device setup problems.

Go to Settings > System > Date & time and turn on automatic time and time zone. On Samsung, use Settings > General management > Date and time.

## 11. Review MAC randomization for trusted networks

Android 10 and later use randomized MAC addresses for Wi-Fi privacy. That's good on public networks. At home or work, it can confuse routers that use MAC filtering, reserved IP addresses, parental controls, or device limits.

Open the Wi-Fi network details and look for Privacy or MAC address type. For a trusted home network that keeps rejecting the phone, try Phone MAC or Device MAC for that network only. Leave randomized MAC enabled elsewhere.

## 12. Fix router-side causes

If multiple devices have problems, focus on the router.

Use channels 1, 6, or 11 on 2.4 GHz and pick the least crowded one. Avoid placing the router behind a TV, inside a cabinet, next to a microwave, near metal shelving, or on the floor.

If your router uses band steering, try disabling it or splitting 2.4 GHz and 5 GHz into separate network names. If it uses WPA3-only security and an older phone struggles, try WPA2/WPA3 mixed mode. If the router has a device limit, raise it or remove old devices.

For larger homes, a mesh system is usually better than a cheap extender. Extenders can work, but they often reduce speed and create roaming weirdness.

## 13. After Android 17 or another major update

Android 17 rolled out first to supported Pixel devices in June 2026, with other manufacturers following on their own schedules. If Wi-Fi trouble started immediately after the update, don't assume your router suddenly failed.

Install any follow-up security patch, update carrier and connectivity-related apps through the Play Store, restart the phone and router, then forget and rejoin the network. If the bug is widespread for your exact model and build, a monthly patch may be the real fix.

Older advice often says to wipe the system cache partition. I wouldn't lead with that on modern Android phones. Some Samsung models still expose recovery cache options, but many recent Android devices don't use that old troubleshooting path in a way users can depend on.

## 14. Test Safe Mode

Safe Mode starts Android without most third-party apps. If Wi-Fi works normally in Safe Mode, an installed app is interfering.

VPN apps, firewall apps, ad blockers, device management tools, and "Wi-Fi booster" apps are the usual suspects. Uninstall or disable the most recent network-related apps first.

## When to consider hardware repair

If the phone drops Wi-Fi on multiple routers, fails after a network reset, fails in Safe Mode, and other devices work normally, hardware becomes likely. Antenna damage and Wi-Fi chipset faults are uncommon, but not rare after drops or water exposure.

At that point, factory reset only after backing up your data. If the reset doesn't help, repair is the honest next step.

## Quick answers

Should you turn Wi-Fi off when leaving the house? Usually no. Modern Android handles scanning efficiently, and leaving Wi-Fi on helps with known networks and location accuracy.

Can a case interfere with Wi-Fi? Normal cases won't. Metal cases, thick battery cases, or magnetic plates can hurt reception when the signal is already weak.

How do you check Wi-Fi signal strength in dBm? Some Android builds show it in Wi-Fi details. If yours doesn't, a Wi-Fi analyzer app can show it. Around -30 to -50 dBm is excellent, -50 to -70 dBm is usable to good, and weaker than -70 dBm can become unstable depending on interference.

runcheck tracks Wi-Fi signal quality over time on the Network detail screen, including connection details such as frequency band, link speed, and signal history when Android exposes them.
