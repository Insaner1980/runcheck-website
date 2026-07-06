---
title: "How to run a speed test on Android"
description: "You tap Run, watch the needle jump, and get a number that looks official. Useful, yes. Final answer, no."
listSummary: "Android speed test basics"
hub: "network"
sourceNumber: 92
order: 3
tags: ["network","connectivity","android","troubleshooting","guide"]
draft: false
---
The test tells you what happened at that moment, on that server, under those network conditions. It is a snapshot, not a diagnosis by itself. Still, it is the best first number to get when your phone feels slow.

## What the test measures

A normal test reports download speed, upload speed, and latency.

Download speed is how fast data reaches your phone. It affects browsing, streaming, app downloads, cloud photo viewing, and most everyday internet use.

Upload speed is how fast data leaves your phone. It matters for sending videos, backing up photos, uploading files, video calls, and screen sharing.

Latency, often called ping, is round-trip delay in milliseconds. Low latency makes a connection feel responsive. High latency makes taps, calls, games, and remote work feel laggy even when download speed looks fine.

Some apps also show jitter. Jitter is how much latency varies from moment to moment. A 30 ms ping with low jitter feels stable. A 30 ms ping that jumps all over the place can still cause choppy calls.

## Use Google's built-in test for a quick check

Open a browser, search for **speed test** on Google, and tap **Run Speed Test** when the card appears. It uses Measurement Lab, or M-Lab, and reports the main numbers without installing an app.

This is good for a quick sanity check. It doesn't give you much history, and it isn't the best tool for comparing multiple networks over time. But when someone says "the internet is slow," this is a fast way to see whether the phone is getting 2 Mbps or 200 Mbps.

## Use an app when you need history

Speedtest by Ookla is the familiar option. It lets you test download, upload, latency, and usually jitter, choose servers, and keep a result history. It is useful when you want to compare WiFi, LTE, 5G, and different locations.

FAST by Netflix is simpler. It focuses on download speed first because it was built around streaming performance. Tap **Show more info** to see upload and latency details.

Meteor by OpenSignal is helpful for non-technical users because it explains whether the measured connection is good enough for common app types like streaming, gaming, browsing, or video calls.

runcheck uses M-Lab NDT7 for its built-in speed test and stores results with connection type and signal context. That matters because speed alone can be misleading. A bad result with weak signal means something different from a bad result with strong signal and high latency.

## Watch mobile data use

Every test transfers real data. On WiFi, that usually doesn't matter. On cellular, it can.

Small web-based tests may use only tens of MB. App-based tests on fast LTE or 5G can use much more because they try to measure how much data the connection can move during the test window. Running several tests in a row can burn hundreds of MB.

So test mobile data deliberately. Turn WiFi off, run the test once or twice, save the results, and stop.

## How to get a cleaner result

Stand still. Moving around during a cellular test can make the phone adjust towers, bands, or signal conditions while the test is running.

Close obvious bandwidth hogs first. Cloud backups, app updates, video streams, and downloads compete with the test.

Test WiFi and mobile data separately. If WiFi is on, you're testing WiFi. To test cellular, turn WiFi off.

Run three tests only when you need a better average. If one result is wildly different from the other two, throw it out. It probably caught a short congestion spike, a bad server choice, or a background transfer.

Use a nearby server for normal troubleshooting. A faraway server adds latency and may show lower speed for reasons unrelated to your local connection. Testing faraway servers is useful only when you specifically care about reaching services in that region.

## What the numbers mean in real life

For browsing and messaging, even 5 Mbps can feel fine if latency is low. For HD video, 5 to 10 Mbps is usually enough. For 4K streaming, aim for at least 25 Mbps per stream.

Video calls care about upload and latency more than people think. A 200 Mbps download result won't save a call if upload is 0.5 Mbps or jitter is high.

For gaming, latency and jitter matter more than download speed once the game is installed. A stable 40 Mbps connection can feel better than a 400 Mbps connection with random latency spikes.

For cloud backup, upload speed decides how painful the process is. Upload is often much lower than download on home broadband and mobile networks, so don't assume a fast download result means fast backups.

## Compare against the right promise

For home WiFi, compare the result against your broadband plan, but leave room for WiFi overhead. If your plan is 100 Mbps and your phone gets 80 or 90 Mbps near the router, that is not a problem. If it gets 25 Mbps next to the router, start looking at the router, channel congestion, ISP, or another device using bandwidth.

For cellular, don't expect the advertised 5G headline. Real speed depends on carrier, band, tower load, plan priority, indoor signal, and device modem. Test in a few places before judging the phone.

Also compare against the task. If Netflix works, calls are clean, and app downloads are fine, chasing a prettier speed test number may be a waste of time.

## Keep results only when they tell a story

A single result is enough to confirm that something is wrong. A few tests over time are better for finding a pattern.

Run a test when the connection feels bad, then run another when it feels normal. Note the network, location, time, signal strength, and whether a VPN was connected.

That is where history helps. If speeds drop every evening on WiFi, suspect household load or ISP congestion. If cellular slows only in one building, suspect coverage. If every network is slow only on one phone, look at the phone.
