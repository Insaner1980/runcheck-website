---
title: "Wi-Fi calling explained: what it is and when to use it"
description: "How Wi-Fi calling works on Android, when to turn it on, what it costs, and how it differs from WhatsApp, Signal, and other internet calling apps."
listSummary: "Wi-Fi calling use cases"
hub: "network"
sourceNumber: 100
order: 11
tags: ["network","connectivity","android","troubleshooting","guide"]
draft: false
---
Wi-Fi calling is regular phone calling over Wi-Fi. You use the normal dialer, your normal phone number, and your carrier account. The person you call doesn't need WhatsApp, Signal, Telegram, or any other app.

That is the main appeal. You can be in a basement with one flickering cellular bar, connect to good Wi-Fi, and still make a normal phone call.

## How Wi-Fi calling works

When Wi-Fi calling is active, your phone sends voice traffic over the Wi-Fi network to your carrier, and the carrier routes the call from there. To the other person, it looks like a normal call from your number.

The phone, carrier, SIM or eSIM profile, and plan all need to support it. Android has supported carrier Wi-Fi calling for years, but the switch appears only when the carrier enables it for that device and account. In practice, that means two people can have the same Android version and different Wi-Fi calling menus because they use different carriers.

When Wi-Fi calling is being used, Android usually shows `Wi-Fi Calling`, `WiFi Call`, or a small Wi-Fi phone icon near the carrier name or during the call. The label varies by brand and carrier.

## How to turn it on

On Pixel and many stock Android phones, open `Settings > Network & internet > SIMs`, choose your carrier SIM, then open `Wi-Fi calling`.

On Samsung, open the Phone app, tap the three-dot menu, then `Settings > Wi-Fi Calling`. You may also find it under `Settings > Connections > Wi-Fi Calling`.

On Xiaomi and POCO, check `Settings > SIM cards & mobile networks`, select the SIM, then look for `Wi-Fi calling`.

On OnePlus, the path is usually under `Settings > Mobile network`, then the SIM settings.

If you can't find the option, search Settings for `Wi-Fi calling`. If it still doesn't appear, the carrier probably doesn't support Wi-Fi calling on that phone, plan, or SIM profile. Some carriers also require VoLTE to be active before Wi-Fi calling appears.

## When it is worth using

Wi-Fi calling is best when cellular signal is poor but Wi-Fi is good. Think concrete apartment buildings, rural homes, offices with thick walls, basements, underground shops, and hotels where mobile reception barely works.

It can also help battery life in bad-signal areas. A phone burns power when it keeps reaching for a weak tower. If calls move over Wi-Fi, the cellular radio has less work to do during those calls.

The setting is also useful while traveling, but this is where people get surprised by billing. Some carriers treat Wi-Fi calls back to your home country as domestic calls. Others charge international rates for calls to foreign numbers. Verizon, for example, treats Wi-Fi calls to U.S. numbers as domestic no matter where the call starts, while calls to non-U.S. numbers follow international calling rules. T-Mobile has similar carrier-specific rules for calls and messages over Wi-Fi.

So yes, Wi-Fi calling can reduce roaming costs. No, you should not assume every international Wi-Fi call is free.

## Airplane mode trick for travel

If you want to avoid accidental roaming, turn on Airplane mode, then turn Wi-Fi back on manually. Once connected to Wi-Fi, check that the status bar shows Wi-Fi calling before placing the call.

This prevents the phone from quietly using a foreign cellular network in the background. It is not magic billing protection, because the carrier still decides how the Wi-Fi call is rated, but it prevents normal cellular roaming from getting involved.

## Wi-Fi calling vs WhatsApp and Signal

Wi-Fi calling and app-based calls both use the internet, but they solve different problems.

Wi-Fi calling reaches normal phone numbers, including landlines and people who don't use messaging apps. It uses your carrier account and native dialer. That makes it good for banks, doctors, work contacts, delivery drivers, family members with basic phones, and anyone else who expects a normal call.

WhatsApp, Signal, Telegram, FaceTime, Google Meet, and similar apps bypass the carrier voice network. They are often better for international personal calls because both people use the same app and the call rides over data. They are worse when you need to call a regular number or someone who refuses to install another app.

Emergency calling is another difference. Carrier Wi-Fi calling is usually designed to support emergency calls, and in some countries the carrier asks for an emergency address during setup. Third-party calling apps are not a dependable replacement for emergency calls.

## Call quality depends more on latency than speed

Voice calls don't need much bandwidth. A basic Wi-Fi call uses a small amount of data, often around 1 MB per minute depending on codec and carrier setup. Raw speed is rarely the problem.

Latency, jitter, packet loss, and congestion matter more. A 500 Mbps hotel Wi-Fi network can still make calls choppy if hundreds of guests are on it and the router is overloaded. Satellite internet can also add noticeable delay because the signal path is long.

If calls sound robotic or delayed, move closer to the router, try a 5 GHz network instead of 2.4 GHz, or test another Wi-Fi network. If the call becomes clear somewhere else, the phone is not the issue.

## Handoff is not guaranteed

Some phones and carriers can move a call between Wi-Fi and cellular without dropping it. Others are less graceful. A call may survive when you walk out of the house, or it may drop right at the door.

This depends on the carrier, phone, network type, VoLTE support, and signal quality at the exact moment of the switch. Flagship phones often handle it better than budget phones, but there is no universal promise here.

If your calls drop during handoff, choose a preference if your phone offers one. Some Android builds have `Wi-Fi preferred` or `Mobile network preferred` inside Wi-Fi calling settings.

## Does it use mobile data?

A Wi-Fi call uses the Wi-Fi connection, not your mobile data bucket. If the call moves to cellular, the carrier treats it as a normal voice call or carrier voice service, not as app data like YouTube or Chrome.

On metered Wi-Fi, such as a travel hotspot, the data use is small but not zero. Very long calls can still add up.

## Troubleshooting Wi-Fi calling

If the switch is on but calls still use cellular, the phone may be choosing cellular because the signal is strong enough. Look for a Wi-Fi preferred setting.

If calls fail only on one network, that network may block or mishandle the traffic Wi-Fi calling needs. Corporate networks, hotel networks, school networks, and captive portals are common trouble spots. Test on home Wi-Fi or a different router before changing phone settings.

If the option disappeared after a SIM swap, eSIM transfer, carrier change, or Android update, contact the carrier and ask whether Wi-Fi calling is provisioned on the line. This is boring support work, but it is often the actual fix.

For dual-SIM phones, check each SIM separately. One line can support Wi-Fi calling while the other doesn't.

When Wi-Fi calling becomes part of your normal setup, connection quality matters. runcheck's Network screen can help you watch signal strength, connection type, and network behavior over time, which makes it easier to tell whether bad calls are caused by Wi-Fi instability or carrier-side issues.
