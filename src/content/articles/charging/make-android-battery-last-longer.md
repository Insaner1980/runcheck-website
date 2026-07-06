---
title: "How to make your Android battery last longer"
description: "Practical Android battery tips that actually matter, including display settings, weak signal, background apps, location permissions, Battery Saver, and charging habits."
listSummary: "Longer Android battery life"
hub: "charging"
sourceNumber: 37
order: 1
tags: ["charging","battery","android","guide","hardware"]
draft: false
---
Most Android battery advice is either too obvious or too extreme. Yes, turning the screen brightness down helps. No, you don't need to turn your phone into a silent brick just to make it through the day.

The useful approach is to fix the big drains first: display, cellular signal, background apps, location, and charging habits. Android 17 is now available first on most supported Pixel phones, while other Android makers will bring it to their own devices later. That means menu names vary, but the battery fundamentals haven't changed.

## Start with the display

The screen is still the biggest drain during active use. If your phone is in your hand, display settings matter more than almost anything else.

Use adaptive brightness if it behaves well on your device. If it runs too bright indoors, set brightness manually and keep it lower. Maximum brightness in a dim room is just wasted battery and extra heat.

High refresh rate is the next display setting to check. A 90Hz or 120Hz screen feels smoother, but it uses more power than 60Hz, especially on phones that don't switch refresh rate intelligently. Pixel calls this **Smooth Display**. Samsung calls it **Motion smoothness**. Other OEMs use similar names under **Settings > Display**.

If the phone offers an adaptive option, use that first. If it only gives you a simple 60Hz vs. 120Hz choice and battery life matters more than smooth scrolling, choose 60Hz.

Screen timeout is boring but useful. Set it to 30 seconds or 1 minute under **Settings > Display > Screen timeout**. A five-minute timeout wastes power every time you set the phone down and forget to lock it.

Dark mode helps only on OLED or AMOLED screens. On those panels, black pixels use little or no power. On LCD screens, the backlight is still on, so dark mode is mostly a comfort setting.

## Fix bad signal before blaming apps

Weak cellular signal is brutal on battery. In a concrete building, basement, train, rural area, or fringe 5G zone, the modem has to work harder to stay connected. Sometimes the mobile network becomes the biggest drain even if you barely touched the phone.

Use Wi-Fi when you trust the network. It is usually cheaper for the battery than cellular data, especially in weak 5G coverage.

If 5G is unstable where you live or work, forcing LTE/4G can help. Look under **Settings > Network & internet > SIMs > Preferred network type** on stock Android. Samsung and other brands put the same control under mobile network settings. Don't do this if you actually get strong, stable 5G and use the speed.

Bluetooth and NFC are not the battery villains they used to be. Modern Bluetooth Low Energy uses very little power when idle, and NFC is tiny in the background. Turning them off all day may save a little, but it usually isn't worth breaking watches, earbuds, car keys, payments, or trackers.

Wi-Fi scanning and Bluetooth scanning are different. Android can use them for location even when the main radios look off. Check **Settings > Location > Location services** and turn off scanning if you don't need better indoor location accuracy.

## Restrict apps that don't deserve background access

Android is much better at background control than it used to be, but it still can't read your mind. Some apps get more freedom than they deserve.

Go to **Settings > Battery > Battery usage** and look for apps with background use that doesn't match your day. Then open the app's battery page and choose **Restricted** if it doesn't need to run while you're not using it.

Good apps to restrict: shopping apps, games, food delivery apps, travel apps between trips, social apps you check manually, old utilities, coupon apps, and anything that sends mostly promotional notifications.

Bad apps to restrict: messaging, work chat, VPN, health tracking, navigation, family safety, calendar, and email if you need alerts immediately.

Adaptive Battery, available from Android 9 onward, should stay on. It uses app usage patterns to limit apps you rarely use. App Standby Buckets work in the same general direction by giving more resources to apps you use often and fewer to apps you ignore.

Manufacturer battery tools can be more aggressive. Samsung's **Deep sleeping apps** can nearly freeze an app until you open it. That is great for a shopping app. It is terrible for a messaging app.

## Clean up location permissions

GPS sitting unused doesn't drain much. Apps asking for location in the background do.

Open **Settings > Location > App location permissions** and check anything with **Allow all the time**. Most apps should be **Allow only while using the app**. Weather, photos, social media, shopping, and local recommendation apps often ask for more than they need.

Android 12 and later also let you choose approximate location for many apps. Use it when exact location isn't necessary. A weather app does not need your exact doorway.

Location Accuracy is useful, especially indoors, because it can use Wi-Fi, cell towers, sensors, and other signals to improve the fix. Turning it off can reduce some background location activity, but it can also make active location slower or less useful. I would adjust app permissions before turning off Location Accuracy globally.

## Use Battery Saver earlier

Battery Saver works best when it has time to prevent drain. Turning it on at 15% is better than nothing. Turning it on at 50% before a long day away from power is smarter.

On Pixel and stock Android, open **Settings > Battery**, then choose **Battery Saver**. On Samsung, use **Settings > Battery > Power saving** or **Settings > Battery and device care > Battery > Power saving**. Set a schedule around 25% or 30%, then turn it on manually when the situation calls for it.

Standard Battery Saver usually keeps the phone usable. Extreme or maximum modes are for emergencies. They pause apps, simplify the phone, and limit background behavior much more harshly.

## Reduce sync and notification noise

Multiple accounts can quietly wake the phone all day. Google, Microsoft, Samsung, email, calendar, contacts, cloud storage, notes, and browser sync all add background work.

Check **Settings > Passwords, passkeys & accounts** or **Settings > Accounts**. Remove old accounts and disable sync categories you don't use. A dead work account or a cloud service you open once a month should not be syncing all day.

Notifications are similar. Push notifications themselves are designed to be battery-friendly, but the screen wakes, vibration, sounds, and background follow-up work add up. Turn off promotional notifications from apps that don't deserve your attention.

No, closing apps from the recent apps screen is not the fix. Android is designed to keep recently used apps in memory and manage them itself. Force-closing everything can make battery life worse because apps have to restart from scratch.

## Charge for long-term battery health

This part doesn't make today's charge last longer, but it helps the phone still feel usable two or three years from now.

Lithium-ion batteries age faster when they spend lots of time hot and full. Keeping daily charging closer to 20-80% helps long-term health if your routine allows it. Don't turn this into a religion. If you need 100% for a long day, charge to 100% and use the phone.

Pixel phones now expose more battery health controls than they used to. Pixel 6a and later can use **Limit to 80%** from Battery settings by opening **Battery health > Charging optimization**. Google also says Pixel 3 through Pixel 8 Pro and Pixel Fold batteries are designed to retain 80% capacity for about 800 cycles, while Pixel 8a and later are rated for about 1000 cycles.

Samsung has its own battery protection settings, including adaptive and maximum charge protection on newer Galaxy devices. Names vary by One UI version, but the idea is the same: spend less time sitting at 100%.

Temperature matters too. Heat is worse than ordinary fast charging. Don't leave the phone in a hot car, in direct sun, under a pillow, or running a heavy game while charging. Cold weather is different: it can make the battery report less available charge temporarily, and the phone may shut down earlier under load. Warm it up and the usable capacity usually comes back.

## Check what is actually draining the phone

Before changing twenty settings, look at the evidence. **Settings > Battery > Battery usage** shows which apps and system components used power since the last charge. Check both screen-on and background use.

A rough rule: 1-2% per hour with the screen off is normal on many phones. More than 3% per hour while idle deserves investigation. Screen-on drain varies too much for one perfect number, but 15-25% per hour is common depending on brightness, signal, app load, temperature, and battery age.

If drain is high with the screen off, think background apps, wake locks, weak signal, sync, or a recent system update. If drain is high only while you're using the phone, think brightness, refresh rate, 5G, gaming, camera, navigation, or heat.

runcheck helps by separating those patterns. Screen-on drain, screen-off drain, signal quality, thermal state, and storage pressure make battery problems easier to diagnose than a single percentage number.

## A few final checks

Update the phone and apps. After a major OS update, including Android 17 on Pixels, give the phone a short settling period because app optimization and indexing can temporarily raise drain.

Remove widgets you don't use. Weather, stocks, news, and calendar widgets all refresh on a schedule. One or two useful widgets are fine. A home screen full of live widgets is not free.

Keep storage from running completely full. Storage pressure can make a phone feel slower and increase background maintenance work. It is not usually the biggest battery drain, but a phone at 98% storage is never in its best state.
