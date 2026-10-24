# VibeQuest — Mobile App Development

A playful Expo / React Native mini-quest app for collecting small everyday wins.

## What is included

- **Vibe**: daily mood, quest shuffle animation, streak and XP cards.
- **Quests**: six tap-to-complete missions, progress bar, XP totals and haptic feedback.
- **Playbook**: quick ideas for making a regular day more fun.
- Custom VibeQuest icon, adaptive Android icon and splash screen.
- Shared themed components throughout the screens.

## Preview on Android

1. Install **Expo Go** from Google Play.
2. Install Node.js LTS on the computer and run `npm install` in this folder.
3. Run `npx expo start --lan` and scan the terminal QR from Expo Go. Keep both devices on the same Wi-Fi.

## Build an installable APK

Install EAS CLI with `npm install -g eas-cli`, sign in with `eas login`, then run:

```sh
eas build --platform android --profile production
```

The `production` profile is configured to produce an APK for direct installation.

## Assignment context

The supplied Assignment 01 and Assignment 02 PDFs did not include the original Expo source project. This app was reconstructed from the available assignment requirements, so it is a complete demo app but cannot be represented as a verified extension of the missing Assignment 01 source.
