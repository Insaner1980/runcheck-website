---
title: "Documented Android diagnostic codes for Samsung, Pixel, and Xiaomi"
description: "Diagnostic dialer paths documented here for Samsung, Pixel, and Xiaomi. Availability and behavior vary by model, region, carrier, software, and manufacturer; Android 17 does not provide a universal code set."
listSummary: "Documented Samsung, Pixel, and Xiaomi diagnostic paths with model and software limits."
hub: "hardware"
sourceNumber: 112
order: 9
tags: ["diagnostics", "sensors", "android", "hardware", "guide"]
draft: false
---
No reliable complete list exists. Diagnostic codes depend on manufacturer, model, dialer, firmware, carrier, and region. Only codes with direct current manufacturer evidence are retained below.

Direct evidence: [Samsung documents `*#0*#`](https://www.samsung.com/ch/support/mobile-devices/wie-kann-ich-einzelne-hard-oder-software-funktionen-testen/), [Google documents Pixel `*#*#7287#*#*`](https://support.google.com/pixelphone/answer/14257407?hl=en-GB), and [Xiaomi documents CIT access](https://www.mi.com/global/support/faq/details/KA-491482/) with `*#*#6484#*#*` or `*#*#64663#*#*` on applicable devices.

## Samsung Galaxy

Samsung still has one of the better diagnostic setups, partly because it offers both dialer codes and a supported app route.

`*#0*#` opens Samsung's hardware test screen on many Galaxy phones. The exact layout changes by model, but you can usually test the screen, touch input, cameras, speakers, vibration, sensors, and sometimes fingerprint hardware. On some carrier models or heavily locked-down firmware, the code won't open at all.

Samsung Members is the safer route for normal users. Open Samsung Members, go to Get help or Support, then Diagnostics. It walks you through the tests and gives clearer results than the service menu.

## Xiaomi, Redmi, and POCO

[Xiaomi's support page](https://www.mi.com/global/support/faq/details/KA-491482/) documents two dialer codes for a CIT touchscreen check on applicable devices: `*#*#6484#*#*` and `*#*#64663#*#*`.

In the documented test, slide a finger across the screen and watch for interrupted or extra lines. The source supports only this touchscreen troubleshooting. Availability and behavior vary by model, region, carrier, firmware, and software version.

## Google Pixel

Pixel documentation describes a Pixel-specific diagnostic route. Its availability can vary by model, region, carrier, and software version.

`*#*#7287#*#*` opens the Pixel Repair Diagnostics App on supported Pixel phones. Google documents it for Pixel repair checks, and it can help verify hardware before or after a repair. It requires an internet connection and walks you through the process on screen.

For battery-specific checks on Pixel 6 and later, use Settings > Battery > Battery Diagnostics. That's a normal Settings path, not a hidden code.

Older articles sometimes mention the Calculator `.12345+=` trick for Pixel engineering mode. I wouldn't rely on it in 2026. Use the official Pixel diagnostics code instead.

## Safety

If a documented code does not work, use the manufacturer's supported diagnostics app or service instructions. Do not disable security controls or enter reset, provisioning, radio-calibration, firmware, or service-programming codes from an unverified list.
