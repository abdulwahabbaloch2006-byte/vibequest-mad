# VibeQuest — Assignment 03

A simple Expo and React Native app with four bottom tabs:

- **Home:** a daily positive activity.
- **Tasks:** quests that can be added, edited, deleted, searched, filtered, and marked complete.
- **Discover:** live ideas loaded from a public API.
- **About:** a short description of the app.

The app continues the same Assignment 01/02 project and includes the original bottom tabs, custom app icon, and splash screen. Assignment 03 adds:

- **My quests:** Create, read, edit, delete, mark complete, search, and filter quests by category.
- **Local persistence:** Quest records are stored on-device with AsyncStorage and restored on launch.
- **Discover:** Loads live JSON data with Axios GET from the free JSONPlaceholder public API. Loading, error, and retry states are included.

Records are intentionally simple: title, optional note, category, and completion status. Starter quests appear only on first launch; later changes are saved locally.

## Run on Android

1. Install Expo Go on your Android phone.
2. Install Node.js LTS on the computer.
3. In this folder run `npm install`, then `npx expo start --lan`.
4. Scan the QR code with Expo Go. Keep the computer and phone on the same Wi-Fi.

## APK

An APK can be built with `eas build --platform android --profile production` after signing in to an Expo account.

## Assignment submission checklist

After creating an APK, upload it to a file-hosting service and submit its accessible download link with your existing GitHub repository link. Capture screenshots of quest add/edit/delete, search/filter, saved data after reopening the app, the Discover API screen, and the expanded project tree in VS Code. These screenshots and hosted links require your device, GitHub, Expo, and LMS accounts.

## Source note

The project starts from the original VibeQuest Assignment 02 ZIP. Its Home, Tasks, and About tabs, themed components, app icon, and splash screen are retained; this assignment adds quest management and the Discover API tab. The provided assignment brief is titled “Assignment 02”; this README calls it Assignment 03 to match the user's sequence.

## Submission and demo

See [SUBMISSION.md](SUBMISSION.md) for the required evidence, APK build steps, Google Classroom submission, and teacher demo sequence.
