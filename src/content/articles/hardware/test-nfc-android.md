---
title: "How to test NFC on Android"
description: "Simple ways to check whether NFC works on your Android phone, using Settings, contactless cards, Google Wallet, Samsung diagnostics, Xiaomi CIT, and NFC test apps."
listSummary: "NFC testing steps"
hub: "hardware"
sourceNumber: 115
order: 12
tags: ["diagnostics","sensors","android","hardware","guide"]
draft: false
---
You tap your phone on a payment terminal and nothing happens. Now you have two problems: the payment didn't go through, and you don't know whether NFC, Google Wallet, the card, the case, or the terminal is to blame.

Start smaller. NFC is easy to test if you separate hardware reading from payments.

## Check whether the phone has NFC

Open Settings and search for NFC. On many Android phones, the path is Settings > Connected devices > Connection preferences > NFC. On Samsung, use Settings > Connections > NFC and contactless payments, then check the payment app below that page.

If the NFC option isn't there, the phone probably doesn't have an NFC chip. That's still common on cheaper Android phones, especially budget models sold in several regional variants. One version of a phone can have NFC while another version with nearly the same name does not.

Turn NFC on before testing. Also check the default payment app if you're testing Google Wallet, Samsung Pay, or Samsung Wallet, depending on what your region and phone model use.

## Test with a contactless card

This is the simplest hardware test. Use a contactless bank card, transit card, office badge, or NFC tag. Hold it flat against the back of the phone and move it slowly around the top half of the device.

If NFC is working, the phone usually vibrates, makes a sound, opens a wallet prompt, or shows an "unknown tag" style message. Any of those responses means the NFC reader and antenna are alive.

Nothing happens? Remove the case and try again. Metal plates, magnetic mounts, ring holders, and thick wallet cases can block or weaken NFC. The read range is short, so small changes in position matter.

## Test with a payment terminal

A successful contactless payment is a strong real-world test, because it checks more than simple tag reading. The phone needs NFC enabled, a supported wallet, a valid card, a screen lock, and the right default payment setup.

For Google Wallet, Google tells users to check NFC under Connected devices > Connection preferences > NFC, then select Google Wallet as the default contactless payment app. Samsung phones keep the equivalent controls under Connections in the NFC payment page.

If tag reading works but payments don't, the NFC chip probably isn't the problem. Look at wallet setup, bank support, screen lock, Play services, device integrity, or the default payment app.

## Use a diagnostic menu or app

Samsung's supported path is Samsung Members > Diagnostics. It doesn't always expose a dedicated NFC tile on every model, but it can check many phone components and guide you to service if a test fails.

Xiaomi, Redmi, and POCO phones often include NFC in the CIT test suite. Open the dialer and enter `*#*#6484#*#*`, or try `*#*#64663#*#*` if the first code doesn't work. In the NFC test, hold a card or tag near the phone and wait for the result.

Fairphone models have historically exposed a manual NFC test through a service menu, but menu codes vary by generation. Use the official support route for your exact model when possible.

For a quick app-based check, NFC Check tells you whether Android reports NFC hardware and whether it's enabled. NFC Tools is better if you want to read tags and see tag ID, technology type, and NDEF records.

## Find the antenna spot

The NFC antenna is not always in the same place.

On many Samsung Galaxy S phones, it's around the upper center of the back, near the camera area. On Pixels, it is usually in the upper back area. On Xiaomi and OnePlus phones, placement changes more by model.

Antenna placement is why one phone works when you tap the camera bump and another works only when the middle rear area touches the reader. If your phone has a user manual with an NFC diagram, trust that over generic advice.

## Common reasons NFC fails

The case is blocking it. This is boring, but it's common. Test with the bare phone before changing settings.

You're tapping the wrong spot. Move the card or phone slowly. Don't wave it around like you're scanning a barcode.

NFC is off, or the wrong wallet is selected. Search Settings for NFC and Contactless payments.

The phone is locked when the wallet requires unlock. Some Android builds let tags read with the screen on, while payments require authentication. Payments should be treated separately from basic tag reading.

A recent update changed behavior. Android 17 landed on supported Pixel devices first, while other Android brands will ship their Android 17 builds later. If an NFC issue appears right after a Pixel update, look for Pixel-specific support notes instead of assuming the same problem exists on Samsung, Xiaomi, or OnePlus.

The phone was repaired. NFC antennas are often part of the back cover, wireless charging coil, or a flex assembly. If NFC stopped after a battery or back-cover replacement, the antenna may not have been reconnected properly.

## When the hardware is probably dead

If the phone has NFC turned on, the case is removed, multiple cards and tags do nothing, Safe Mode doesn't change anything, and a diagnostic app still can't see NFC activity, hardware failure becomes likely.

The chip itself can fail, but antenna damage is more common. Drops, water exposure, back-cover repairs, and poorly seated flex cables are all suspects.

For most people, the practical question is whether NFC is worth repairing. If you rely on tap-to-pay every day, repair might make sense. If the phone is older and everything else works, a contactless smartwatch can be a cheaper workaround.
