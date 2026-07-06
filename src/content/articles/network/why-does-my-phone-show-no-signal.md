---
title: "Why does my phone show no signal, and how do you fix it?"
description: "Practical steps for fixing No Signal, No Service, and Emergency Calls Only messages on Android phones, including SIM, eSIM, carrier, APN, update, and hardware checks."
listSummary: "No-signal troubleshooting"
hub: "network"
sourceNumber: 102
order: 13
tags: ["network","connectivity","android","troubleshooting","guide"]
draft: false
---
Your phone says `No Signal`, `No Service`, or `Emergency Calls Only`, and suddenly the expensive little computer in your hand is just a camera with Wi-Fi. Annoying, but not always serious.

The trick is to separate three things: the phone, the SIM or eSIM, and the carrier network. Guessing wastes time. Testing them in order usually tells you where the fault is.

## Do these three things first

Turn Airplane mode on, wait about 15 seconds, then turn it off. This forces the phone to drop its network registration and try again.

Restart the phone. A reboot reloads the modem, SIM services, and carrier configuration. If the radio stack is stuck, this is often enough.

If you use a physical SIM, power the phone off, remove the SIM tray, check that the SIM is clean and flat, then reinsert it firmly. A slightly loose SIM can cause no service after a drop or after swapping cases.

If you use eSIM, don't delete the eSIM profile as a first step. Open `Settings > Network & internet > SIMs` and make sure the eSIM line is enabled. Deleting an eSIM can turn a small issue into a carrier support call.

## Check whether the carrier is down

This is the least satisfying answer, but it is common: the phone is fine and the carrier is having trouble.

Ask someone nearby using the same carrier whether their phone has service. Check the carrier's app, support page, or social accounts. Downdetector can be useful as a hint, but it is based on user reports, not carrier diagnostics.

If several people on the same carrier have no service in the same area, stop changing phone settings. Wait for the carrier or move to another location.

## Make sure the SIM line is active

A phone can show no service when the SIM line is disabled, the account is suspended, the prepaid plan ran out, the eSIM profile was moved to another device, or the phone is locked to a different carrier.

On Pixel and many stock Android phones, open `Settings > Network & internet > SIMs`, choose the SIM, then check that `Use SIM` and `Mobile data` are on.

On Samsung, check `Settings > Connections > SIM manager` and `Settings > Connections > Mobile networks`.

If the phone says `No SIM`, the SIM may be damaged, inactive, or not being read. If it says `Emergency Calls Only`, the phone can see a network but can't authenticate normally. That often points to a SIM, account, carrier lock, or roaming issue rather than a totally dead antenna.

## After Android 17 or another major update

Android 17 started rolling out to supported Pixel phones first in June 2026, while Samsung, OnePlus, Xiaomi, Motorola, and other brands follow their own update schedules. If signal problems started right after a major update, timing matters.

Don't factory reset immediately. Do this first:

- Restart the phone again after the update finishes.
- Check for another system update or carrier settings update.
- Toggle Airplane mode once.
- Reset only the mobile network settings if your Android build offers that option.
- If 5G is unstable, temporarily choose LTE or 4G as the preferred network type and test again.

Some early post-update problems are fixed by monthly patches or carrier configuration updates. A factory reset should be near the end of the list, not the beginning.

## Check preferred network type

Open the SIM settings and find `Preferred network type` or `Network mode`. Choose the automatic option with the highest supported generation, such as `5G/LTE/3G/2G` or `5G/4G/3G/2G`.

If the phone is forced to a network generation that no longer exists in your area, it may show no service. This happens with old 3G-only settings in countries where 3G has been shut down. It can also happen if you manually chose LTE-only or 5G-only while testing something and forgot to switch back.

On Samsung, the path is usually `Settings > Connections > Mobile networks > Network mode`.

On Xiaomi and POCO, check `Settings > SIM cards & mobile networks`.

Use the Settings search box if your phone maker moved it. They love moving it.

## Set network selection back to automatic

Manual carrier selection can strand your phone on the wrong network. This is common after travel.

In SIM settings, look for `Automatically select network` or `Network operators`. Turn automatic selection on. If automatic selection fails, scan manually and choose your carrier from the list.

If you are roaming, make sure roaming is allowed by your plan before turning data roaming on. Voice service and data roaming rules can differ by carrier.

## Check APN settings for data problems

APN settings tell Android how to connect to the carrier's data network. A bad APN usually causes mobile data or MMS problems rather than total no signal, but it can make a network issue look worse.

Open `Settings > Network & internet > SIMs > Access Point Names` on Pixel or stock Android. Samsung usually puts this under `Settings > Connections > Mobile networks > Access Point Names`.

Use `Reset to default` if the APN list looks wrong or empty. For MVNOs and smaller carriers, use the APN values from the carrier's own support page. Don't copy random APN settings from forums unless you like troubleshooting twice.

## Reset network settings

If the SIM is active and the settings look normal, reset network settings. This clears saved Wi-Fi networks, Bluetooth pairings, VPN settings, and mobile network configuration. It does not delete apps, photos, messages, or files.

On Pixel and recent stock Android builds, go to `Settings > System > Reset options`. You may see one combined option called `Reset Wi-Fi, mobile & Bluetooth`, or newer separate options such as `Reset mobile network settings` and `Reset Bluetooth & Wi-Fi`.

Samsung: `Settings > General management > Reset > Reset network settings`.

Xiaomi and POCO: search Settings for `reset network` because the path changes between MIUI and HyperOS builds.

Restart after the reset and give the phone a minute to register with the carrier.

## Test the SIM in another phone

This is the cleanest way to stop guessing.

Put your SIM in another unlocked phone that supports your carrier's bands. If it works there, the SIM and account are probably fine, and the original phone is the problem. If it still shows no service, the SIM, account, or carrier provisioning is the problem.

Also test a known-working SIM in your phone if you can. If that SIM gets service, your phone hardware is probably okay.

For eSIM, the equivalent test is harder because moving an eSIM may require carrier activation. In that case, carrier support can check whether the eSIM profile is still active and assigned to your device.

## Check the IMEI on secondhand phones

If the phone was bought used, check the IMEI. Dial `*#06#` to display it.

A phone can lose normal service if it is blacklisted after being reported lost or stolen, if it has unpaid financing tied to the original carrier, or if it is locked to a carrier you are not using. Use the carrier's own checker when possible. Third-party IMEI checkers can be helpful, but the carrier has the final say on its network.

## Location and building materials matter

Signal strength changes fast. A phone can have full bars outside and no service in a basement, elevator, metal-roofed warehouse, underground car park, or concrete apartment.

Move near a window or step outside. If service returns, the phone is doing its job. The building is blocking the signal.

Thick cases can also hurt reception if they include metal plates, magnets, or poorly placed accessories. Remove the case for a minute if the signal problem started after adding a mount, wallet case, or magnetic ring.

Wi-Fi calling is the normal workaround when indoor cellular signal is weak but Wi-Fi is good.

## Signal strength numbers are better than bars

Bars are rough. dBm is better.

On many Android phones, open `Settings > About phone > SIM status > Signal strength`. You may see a number such as `-85 dBm` or `-110 dBm`. Closer to zero is stronger.

As a rough guide, around `-50 to -90 dBm` is usable, below `-100 dBm` is weak, and around `-120 dBm` is close to unusable. The exact experience depends on network type, congestion, and carrier configuration, so don't treat the number like a perfect pass/fail test.

The dialer code `*#*#4636#*#*` opens a testing menu on some Android phones, but many carriers and manufacturers disable it. If it does nothing, your phone is not broken.

runcheck can show signal strength and network details over time, which is more useful than staring at bars for ten seconds. Signal problems often depend on location, time of day, and whether the phone is switching between LTE and 5G.

## When hardware is likely

Hardware becomes more likely when all of these are true:

- Your SIM works in another phone.
- A known-working SIM fails in your phone.
- Network settings have been reset.
- The account is active.
- Other people on the same carrier have service nearby.
- The phone still shows no service in several locations.

Common hardware causes include a damaged antenna, a bad SIM reader, corrosion near the SIM tray, or a failing RF component. Drops and moisture are the usual suspects.

Look for dents near antenna lines, a SIM tray that doesn't sit flat, liquid indicators, corrosion, or recent impact damage. If the phone is under warranty, contact the manufacturer or carrier. If it is out of warranty, compare the repair cost with the phone's current value before approving the repair.

## Should you buy a signal booster?

Only for a fixed location, and only if there is at least some usable outdoor signal. A booster amplifies existing signal. It doesn't create a carrier network out of nothing.

In the U.S., consumer signal boosters must be carrier-approved and registered with the carrier. Other countries have their own rules. Don't buy a random high-power booster from a marketplace and hope for the best. Bad boosters can interfere with carrier networks, and that is not a problem you want to own.
