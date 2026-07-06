---
title: "Why does my phone keep losing WiFi connection?"
description: "The annoying version is when Wi-Fi works in the kitchen, drops in the bedroom, reconnects for ten seconds, then disappears again. Nothing looks obviously broken. The router is on, the password is right, and other apps keep blaming \"no internet.\""
listSummary: "Wi-Fi drop fixes"
hub: "network"
sourceNumber: 95
order: 6
tags: ["network","connectivity","android","troubleshooting","guide"]
draft: false
---
Start with one question: do other devices on the same Wi-Fi also disconnect? If yes, work on the router or internet connection first. If only your phone drops, the problem is probably the phone, its saved network profile, or how it moves between bands.

## If several devices disconnect, blame the router first

Restart the router before doing anything clever. Unplug it from power, wait 30 seconds, and plug it back in. This clears temporary state, refreshes DHCP leases, and forces connected devices to negotiate again.

Consumer routers do get weird after weeks of uptime. They can run out of memory, keep stale device entries, or handle roaming badly after a firmware update. A reboot is not a deep fix, but it's the quickest way to separate a temporary router problem from a real one.

If the problem comes back, check the router's admin page or app. Look for firmware updates, connected device count, and channel settings. Budget routers can struggle when a household has 20 or more active clients: phones, laptops, smart TVs, speakers, cameras, plugs, watches, and tablets all count.

The 2.4 GHz band is another common source of trouble. It travels farther than 5 GHz, but it has far fewer clean channels. In busy apartment buildings, several routers may be competing on the same or overlapping channels. If you manually choose a channel, stick to 1, 6, or 11 on 2.4 GHz and pick the least crowded of those.

## If only the phone disconnects

Forget the network and reconnect. On Pixel and stock-style Android, go to Settings > Network & internet > Internet, tap the gear next to the Wi-Fi network, then Forget. On Samsung, go to Settings > Connections > Wi-Fi, tap the gear next to the network, then Forget. Reconnect with the password.

This clears the saved profile. It helps after router changes, password changes, WPA2/WPA3 changes, and cases where Android keeps trying to reuse stale connection details.

Also check whether the phone is jumping to another saved network. This is less common than people think, but it does happen around open networks, range extenders, guest Wi-Fi, and old work or cafe networks. Remove networks you don't use anymore. You don't need a museum of every hotspot your phone has ever met.

## Battery settings can make apps look disconnected

Android's Doze and Battery Saver features can delay background network activity when the phone is idle. That doesn't usually mean Wi-Fi itself is being turned off, but it can make messaging, backup, VPN, or smart-home apps behave as if the connection vanished.

Some manufacturers are more aggressive than others. Xiaomi, OPPO, vivo, and some OnePlus builds may restrict background activity harder than Pixel. Samsung has Background usage limits and Wi-Fi power saving options that can also change how the phone behaves when idle.

If drops happen when the screen is off, check the affected app first. Set it to unrestricted battery use or remove it from sleeping-app lists. Don't disable every battery feature globally unless you like charging more often.

## Smart switching can be too smart

Modern Android phones can switch from Wi-Fi to mobile data when Wi-Fi looks weak or has no internet. Helpful in theory. In practice, it can make a slightly slow Wi-Fi network feel unstable because the phone keeps deciding it knows better.

On Pixel, check Settings > Network & internet > Adaptive Connectivity. Some builds also show an auto-switch option inside Internet settings. On Samsung, go to Settings > Connections > Wi-Fi > Intelligent Wi-Fi and look for Switch to mobile data.

Turn the feature off for a day if the phone drops Wi-Fi even though other devices stay connected. If the problem stops, you found the cause.

## Band steering and mesh roaming

Many routers use one network name for 2.4 GHz and 5 GHz. The router and phone then decide which band to use. This is called band steering. Good routers handle it quietly. Bad routers push the phone back and forth until the connection feels broken.

A quick test is to split the bands temporarily. Give 2.4 GHz and 5 GHz different names, then connect the phone to one of them. Use 2.4 GHz for distance and walls. Use 5 GHz for speed near the router.

Mesh systems add another layer. If the phone clings to a weak mesh node instead of moving to the closer one, you'll see drops while walking through the house. Router firmware updates often improve this, but placement matters too. A mesh node hidden behind a TV or inside a cabinet is asking for trouble.

## Signal strength and placement

Wi-Fi gets weaker with distance and obstacles. A phone that works near the router but drops two rooms away is probably not broken. It's just receiving a weak or noisy signal.

As a rough guide, Wi-Fi around -50 dBm is strong, -60 dBm is fine, and below -70 dBm is where stability can start to suffer. Below -80 dBm, intermittent drops are not surprising.

Move the router off the floor, away from thick walls, metal shelves, fish tanks, and microwaves. Put it near the center of the home if possible. For larger homes, a proper mesh system is usually better than a cheap extender, because extenders often cut throughput and add another roaming point.

## Security settings can cause one-device problems

WPA3 is the current Wi-Fi security standard, but older phones and older router firmware can be touchy with WPA3-only networks. If one Android phone disconnects from a WPA3 network while everything else works, try WPA2/WPA3 mixed mode.

Also check MAC filtering, parental-control rules, and router device limits. If your router uses a whitelist based on MAC addresses, Android's randomized MAC feature can look like a new device. For a trusted home network, you can switch that specific network to Phone MAC or Device MAC in the Wi-Fi network's privacy settings. Leave randomized MAC on for public networks.

## Software updates, including Android 17

Major Android updates can introduce connection bugs. They can also expose old router bugs that were already there. Android 17 was released to supported Pixel devices first in June 2026, while other manufacturers roll it out later through their own software versions. So a Pixel-specific Android 17 thread may not apply to a Samsung, Xiaomi, or OnePlus phone that hasn't received its Android 17 build yet.

If Wi-Fi started dropping right after an update, do the boring checks first: restart the phone, restart the router, install any pending Google Play system update or monthly security patch, and forget the network. Then reset network settings if needed.

On Pixel and many Android phones, the reset path is Settings > System > Reset options > Reset Wi-Fi, mobile & Bluetooth. On Samsung, use Settings > General management > Reset > Reset network settings. This erases saved Wi-Fi networks, Bluetooth pairings, and mobile network customizations, so keep your Wi-Fi passwords handy.

## When it might be hardware

Hardware is the last suspect, not the first. But it happens. Drops, water exposure, aging antennas, and board damage can cause Wi-Fi to fail while other radios still appear normal.

Test the phone on another Wi-Fi network. Then test in Safe Mode. If the phone stays connected in Safe Mode, a third-party app is likely interfering. VPNs, ad blockers, firewall apps, device management apps, and sketchy Wi-Fi optimizer apps are common suspects.

If the phone drops on multiple routers, still drops after a network settings reset, and still drops in Safe Mode, professional repair or replacement becomes a realistic answer.

## Quick answers

Why does Wi-Fi drop only when the screen is off? Usually app battery restrictions, VPN behavior, or manufacturer power saving. The Wi-Fi radio may still be connected, but the app can't keep working in the background.

Can a phone case cause Wi-Fi drops? A normal plastic, silicone, or leather case won't matter much. Metal cases or magnetic plates can reduce signal, especially when the connection is already weak.

Why does only one Wi-Fi network fail? That points to the router configuration or a corrupted saved profile. Forget the network, reconnect, and then check band steering, WPA mode, MAC filtering, and router firmware.
