---
title: "How to test phone speakers and microphone"
description: "Most phone audio problems are not dead speakers or dead microphones. They're lint, Bluetooth routing, app permissions, a bad case, water in a grille, or a network call that sounds like hardware failure."
listSummary: "Speaker and microphone tests"
hub: "hardware"
sourceNumber: 107
order: 4
tags: ["hardware","testing","diagnostics","android","guide"]
draft: false
---
That doesn't make the problem less annoying. If callers can't hear you or your speaker crackles at half volume, you still need to know which part is failing.

## Know which audio part you're testing

Most Android phones have more than one speaker and more than one microphone.

The earpiece speaker sits near the top of the phone and handles normal calls. The main loudspeaker is usually at the bottom and handles speakerphone, media, alarms, and ringtones. Many phones use both together for stereo playback.

The primary microphone is usually near the USB-C port. A secondary microphone near the top helps with noise cancellation during calls. Some phones have a third microphone for video recording or zoom audio.

These parts can fail separately. A phone can sound fine on speakerphone and terrible through the earpiece. It can record voice notes clearly but sound bad on calls because call processing, network quality, or the secondary microphone is involved.

## Test the loudspeaker

Open Settings > Sound and vibration, or the closest sound menu on your phone, and play a ringtone. Turn media volume up while audio is playing.

Listen for rattling, buzzing, crackling, or sudden volume drops. Then play music or a video you know well. A simple ringtone doesn't reveal much bass distortion or high-frequency harshness.

If the phone has stereo speakers, cover one speaker at a time with your finger. The goal isn't perfect balance. The earpiece side is often quieter than the bottom speaker. What you're looking for is one side being silent, badly distorted, or much weaker than usual.

Don't test only at maximum volume. Some damaged speakers distort at medium volume, while some blocked grilles sound acceptable loud but muffled at normal listening levels.

## Test the earpiece

Make a normal phone call and hold the phone to your ear. Turn call volume up during the call, not before it. Android separates media, ringtone, and in-call volume.

Listen for low volume, crackling, cutting in and out, or a sound that changes when you press lightly near the top of the phone. That last symptom can point to a loose earpiece connection after a drop.

If you don't want to bother someone, call voicemail or another line you control. The important part is that the phone uses the earpiece, not the bottom speaker.

## Test the microphone with a recording

Open the built-in Recorder, Voice Recorder, Sound Recorder, or any trusted recording app. Record 10 to 15 seconds at normal speaking volume from about an arm's length away.

Play it back. Your voice should be clear, steady, and loud enough without hiss, buzzing, or a "talking through a blanket" sound.

Now rotate the phone and record another clip while speaking toward the top edge. This doesn't always isolate the secondary microphone because recording apps choose microphones differently, but it can reveal blocked openings or major differences.

If the phone records clearly but callers say you sound robotic, don't jump to microphone repair. Robotic call audio is usually network latency, packet loss, Wi-Fi calling trouble, or carrier processing.

## Test the microphone during calls

Call someone who will give honest feedback. Ask three specific questions:

- Is my voice clear or muffled?
- Do you hear static, buzzing, or wind-like noise?
- Does my voice cut in and out?

Switch to speakerphone and ask again. Speakerphone uses microphones and noise cancellation differently. If normal calls fail but speakerphone sounds fine, the problem may be the primary microphone path, earpiece call mode, or noise cancellation.

Test on Wi-Fi calling and mobile data if both are available. If call quality changes dramatically between them while voice recordings remain clean, the microphone probably isn't the main issue.

## Use built-in diagnostics

Samsung Galaxy phones have two good options. Samsung Members is the safer one: open Samsung Members, tap Support, then View tests. Run Speaker and Microphone tests or run the full diagnostic set. Many Galaxy phones also support `*#0*#`, which includes Speaker and Receiver tests.

Google Pixel phones can open Pixel Diagnostics by dialing `*#*#7287#*#*` while connected to the internet, where supported. This is the current Pixel diagnostic route, not the older signal-related codes you may see copied around.

Motorola phones usually include Device Help. Go to Device Help > Device diagnosis > Hardware test > Microphone or the relevant speaker test.

Xiaomi, Redmi, and POCO phones often use the CIT menu through `*#*#6484#*#*`, with separate tests for speaker, receiver, and microphone.

If your brand tool passes but one app still has no microphone, check that app's permission before doing anything else.

## Rule out common non-hardware causes

Start with the physical stuff. Remove the case and test again. Some cases don't line up with microphone holes, especially cheap rugged cases and universal-fit cases.

Clean the openings with a dry, soft-bristled brush. Brush across the grille rather than jamming anything into it. Low-pressure air can help, but don't blast compressed air directly into speaker or microphone holes.

Disconnect Bluetooth. Phones love to route audio to earbuds, watches, cars, and speakers you forgot were connected. Turn Bluetooth off completely for one test.

Check microphone permissions under Settings > Apps > the app name > Permissions. Also check the Android microphone privacy toggle in Quick Settings if your phone has one. If Developer Options has a Sensors off tile enabled, turn it off because it can block microphone and sensor access.

Check Do Not Disturb and volume, but check the right volume. During a call, press volume up to adjust call volume. During media playback, volume buttons adjust media volume.

## What about water?

Water in a speaker chamber makes audio sound muffled, quiet, or buzzy. Let the phone dry in a ventilated place. Don't use heat, don't put it in rice, and don't push sharp tools into the grille.

Low-frequency tone apps can sometimes help move water out of a speaker, but use them carefully and at moderate volume. They are not magic, and they won't fix corrosion or a damaged microphone.

If the phone was exposed to salt water, pool water, or sugary liquid, drying alone may not be enough. Those leave residue behind.

## When repair makes sense

Repair is worth considering when the problem appears across multiple apps, continues with the case removed and Bluetooth off, fails the manufacturer diagnostic, and survives a restart or Safe Mode test.

Speaker replacement is often simpler than display repair. Microphone repair can be more involved because the primary mic may be part of the charging port flex or bottom board. The exact cost depends heavily on the model, waterproofing, parts availability, and whether the phone has been previously opened.

For a phone under warranty, contact the manufacturer or retailer before using an independent shop. Liquid damage and impact damage can change coverage, but ordinary audio hardware failure is worth reporting.

## Quick answers

### Why does speakerphone work but normal calls sound terrible?

The loudspeaker and earpiece are separate parts. Normal call mode also uses different microphone processing. Test the earpiece and call microphone separately.

### Can a software update fix audio problems?

Yes, if the problem is audio routing, driver behavior, permissions, or call processing. No, if the speaker cone is torn, the microphone opening is corroded, or a connector is loose.

### Why do I sound muffled only in one app?

That usually points to app permission, app noise suppression, Bluetooth routing, or the app choosing the wrong microphone. Test with the built-in recorder and a normal phone call.

### How do I test the noise cancellation microphone?

Make a call in a moderately noisy place and compare normal call mode with speakerphone. If the other person hears far more background noise than expected, the secondary mic or noise cancellation path may be involved. Manufacturer diagnostics can confirm more than a casual call can.
