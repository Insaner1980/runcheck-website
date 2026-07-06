---
title: "How to test network latency on Android"
description: "You're in a video call, everyone can hear you, the picture looks fine, and still the conversation feels half a second out of sync. That's latency. Download speed gets most of the attention, but latency is what decides whether a connection feels responsive."
listSummary: "Network latency testing"
hub: "network"
sourceNumber: 103
order: 14
tags: ["network","connectivity","android","troubleshooting","guide"]
draft: false
---
Latency is measured in milliseconds (ms). Lower is better. Three numbers matter most: ping, jitter, and packet loss. Ping is the round-trip time from your phone to a server and back. Jitter is how much that time jumps around between requests. Packet loss is the share of data that never arrives.

A connection with 100 Mbps download and 150 ms ping can feel worse than a 20 Mbps connection with 15 ms ping. That sounds backwards until you try gaming, video calling, or remote desktop. Speed moves data. Latency controls reaction time.

## What the numbers mean

These ranges are practical guidelines, not laws of physics. The server you test against, the network you're on, and even the time of day can move the result.

For ping:

- 0 to 20 ms: Excellent. Competitive games, video calls, and remote work feel immediate.
- 20 to 50 ms: Good. This is fine for almost everything, including casual gaming and voice calls.
- 50 to 100 ms: Usable. Browsing and streaming still work, but fast online games start to feel delayed.
- Over 100 ms: Noticeable lag. Calls can get awkward pauses, and real-time games become frustrating.

For jitter, lower than 30 ms is usually fine. Between 30 and 50 ms, calls and live video can start to stutter. Above 50 ms, the connection may feel unstable even when speed looks high.

Packet loss is less forgiving. Anything above 1 to 2 percent can cause dropped audio, frozen video, or rubber-banding in games. No, a faster plan doesn't automatically fix packet loss.

## Start with a speed test

The easiest first check is a speed test that reports latency. Run the same test twice: once on Wi-Fi and once on mobile data. If only one connection looks bad, you've already narrowed the problem down.

### Google's speed test and M-Lab

Search for "speed test" in Chrome on the phone. Google's built-in test is powered by Measurement Lab, better known as M-Lab. M-Lab's NDT test reports upload speed, download speed, and latency metrics.

runcheck uses M-Lab's NDT7 protocol for its built-in speed test. The useful part is context: the result is stored with connection type, signal strength, ping, jitter, upload, and download speed, so you're not trying to remember whether that bad result happened on Wi-Fi, LTE, or 5G.

### Speedtest by Ookla

Speedtest by Ookla is still the familiar option for quick testing. It reports ping, jitter, download, and upload, and it lets you choose a nearby server. For a baseline latency reading, pick a server close to you. For gaming or work troubleshooting, test against a server near the service you actually use if the app lets you choose one.

### Fast.com

Fast.com is Netflix's speed test. It starts with download speed, but tapping "Show more info" reveals upload speed and latency. Pay attention to loaded latency. Unloaded latency measures the connection when it is quiet. Loaded latency measures it while traffic is active, which is closer to what happens when someone is streaming, syncing photos, or downloading a game update on the same network.

## Use a ping tool for longer testing

Speed tests are snapshots. A ping test over a few minutes tells you whether latency is stable.

PingTools Network Utilities can run ping, traceroute, DNS lookup, and other network checks from one app. For a simple latency check, ping a stable target such as `1.1.1.1` or `8.8.8.8`. If you are troubleshooting a specific game or work service, ping that service's host if it publishes one.

Termux is useful if you're comfortable with a terminal. Install Termux from an official source, then install the ping utility if needed:

```text
pkg update
pkg install iputils
ping -c 20 1.1.1.1
```

The summary shows minimum, average, maximum, and variation between replies. That variation is the part to watch. A connection that jumps from 20 ms to 250 ms and back again will feel worse than one that sits steadily at 60 ms.

## Test latency under load

Idle latency can lie. A router can show 12 ms when the network is quiet and then jump to 300 ms the moment a laptop starts uploading photos.

That problem is usually bufferbloat, which means network equipment is letting queues fill up instead of managing traffic cleanly. You see it most clearly during uploads, video backups, cloud sync, and big downloads.

Try this simple test:

1. Run a latency test while nobody else is using the network.
2. Start a large download or upload on another device.
3. Run the same latency test again.

If ping climbs hard under load, the phone probably isn't the main problem. The router, modem, or carrier connection is struggling with queue management. Router settings such as QoS can help, but SQM (Smart Queue Management) is the better fix when the router supports it.

The Waveform Bufferbloat Test is also worth using from the phone's browser. It grades how much latency increases during download and upload load. A or B is usually fine. D or F means real-time apps will suffer when the network is busy.

## Compare Wi-Fi and mobile data

Testing both networks is the fastest way to avoid guessing.

Wi-Fi latency depends on distance from the router, interference, router quality, channel congestion, and the frequency band. The 5 GHz band usually has lower interference and better latency than 2.4 GHz at short range, but it doesn't travel as far. Wi-Fi 6 and Wi-Fi 6E can help in busy networks, but only when both the phone and router support them.

Mobile latency depends on signal quality, tower load, carrier routing, and whether the phone is on LTE, 5G sub-6, or 5G mmWave. Rough real-world ranges look like this:

- 4G LTE: often around 30 to 60 ms, higher when the tower is busy.
- 5G sub-6: often around 15 to 40 ms.
- 5G mmWave: can be lower, but coverage is limited and easily blocked.
- 3G: too slow and inconsistent for modern real-time use.

Those are not guarantees. A clean LTE connection can beat a congested 5G connection, and a weak Wi-Fi signal through two walls can lose badly to mobile data.

On Android, check the active mobile type in the status bar or under the SIM status area in Settings. The exact path varies by brand. After major OS updates, including Android 17 on supported Pixel devices, recheck this before blaming the hardware because carrier settings and network behavior can change with software updates.

## What pushes latency up

Server distance is the boring answer, but it matters. A server in your city might respond in under 10 ms. A server across an ocean can take 120 ms or more even on a perfect connection.

Network congestion is next. Too many devices on the same Wi-Fi network, a busy apartment building channel, or a crowded mobile tower can all add delay. Evening tests often look worse than morning tests.

VPNs add another hop. A nearby VPN server might add only 10 to 20 ms. A faraway one can add much more. Disconnect the VPN and test again before assuming the phone is slow.

Background traffic matters too. Cloud backup, app updates, photo sync, and streaming can all push latency up, especially on upload-limited home connections.

## What to do with the result

If latency is bad only on Wi-Fi, restart the router, move closer, switch to 5 GHz, and test a less crowded channel. If it gets bad only when the network is busy, look at router QoS or SQM.

If latency is bad only on mobile data, compare signal strength in different locations. Try toggling airplane mode to force a fresh tower connection. If the issue started right after a system update, check whether your carrier has a pending carrier services or system update.

If latency is bad everywhere, test another phone on the same networks. When two phones show the same delay, it's the network. When only one phone does, then you can start looking at VPN settings, background apps, overheating, or a possible radio issue.

## FAQ

### Is ping the same as latency?

Technically, latency is one-way delay and ping is round-trip delay. In normal phone troubleshooting, people use the words almost interchangeably because apps report round-trip ping.

### Can I lower ping on Android?

You can't change the distance to a server, but you can remove avoidable delay. Disconnect from a slow VPN, close bandwidth-heavy background apps, use 5 GHz Wi-Fi when close to the router, and fix bufferbloat at the router if latency spikes under load.

### Why is my speed high but gaming still lags?

Because download speed and latency are different problems. A high-speed connection can still have bad jitter, packet loss, or loaded latency. Games care more about timing consistency than raw Mbps.

### How often should I test latency?

Test at different times of day over a few days. One result is a snapshot. Three or four results on Wi-Fi and mobile data tell you whether the problem is consistent.
