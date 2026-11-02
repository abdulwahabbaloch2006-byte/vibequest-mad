# Assignment 03 - submission and demo

Student: Abdul Wahab  
App: VibeQuest  
Existing repository: https://github.com/abdulwahabbaloch2006-byte/vibequest-mad

The supplied file is named `MAD assigment 3.pdf`, although its cover says Assignment 02. Follow the CRUD, local storage, search/filter, Axios GET and submission requirements in that file.

## 1. Features in the project

| Requirement | Location |
| --- | --- |
| Create, read, update, delete records | Tasks tab: `app/(tabs)/quests.tsx` |
| Array of objects, filter and map methods | Tasks screen state and handlers |
| Local persistence | AsyncStorage, key `vibequest.records.v1` |
| Search and category filter | Tasks search box and category buttons |
| Axios GET, loading, error and retry | Discover tab: `app/(tabs)/discover.tsx` |
| Public JSON endpoint | `https://jsonplaceholder.typicode.com/posts?_limit=12` |
| Bottom tabs | `app/(tabs)/_layout.tsx` |
| Shared themed components | `components/Themed.tsx` |
| Custom app icon and splash screen | `app.json` and `assets/images/` |
| Android APK configuration | `eas.json`, production profile |

JSONPlaceholder serves sample posts. The app fetches those posts over the network; they are not hardcoded in the source. No API key is needed. Task records remain on the device and are not uploaded to this API.

## 2. Generate and install the updated APK

From this project folder:

```powershell
npx eas-cli@latest login
npx eas-cli@latest build --platform android --profile production
```

Use your Expo account. Keep passwords and verification codes out of project files and chat. Follow the Expo project and Android signing prompts. When the build finishes, download the `.apk` from its build page and install it on your Android phone. An `.aab` is not the installer requested by this assignment.

Open the installed app and check the icon, splash screen, bottom tabs, and the demo below. An APK configuration file by itself is not a completed APK.

## 3. Take the required evidence on your phone

The PDF asks for mobile app screenshots. Browser preview images are useful for review but do not replace evidence from the installed Android app.

| Suggested filename | What to show |
| --- | --- |
| `01-task-list.png` | The Tasks screen with stored records |
| `02-add-task.png` | Add form containing `Revise React Native`, a note, and Focus category |
| `03-task-added.png` | The new task in the list |
| `04-edit-task.png` | Edit the title to `Revise React Native for 30 minutes` |
| `05-task-updated.png` | The updated title in the list |
| `06-search.png` | Search for `React Native` and show the matching task |
| `07-filter.png` | Select Focus and show matching records |
| `08-persistence.png` | Close the app fully, reopen it, and show that the edited record remains |
| `09-delete-confirmation.png` | Delete confirmation for your demo task |
| `10-task-deleted.png` | List after deleting the demo task; clear search and filters if needed |
| `11-api-data.png` | Discover with API posts loaded while online |
| `12-project-structure.png` | Expanded project folders in VS Code on the computer |

For the VS Code screenshot, expand `app/(tabs)`, `components`, `constants`, and `assets/images`; show `app.json`, `eas.json`, and `package.json`. Keep `node_modules`, `.expo`, and `.git` collapsed. Do not show account tokens or passwords.

## 4. Upload the APK and submit in Google Classroom

1. Use the completed EAS APK artifact download link if it is accessible without signing in. Alternatively, upload the downloaded `.apk` to a file-hosting service such as your Google Drive.
2. For that APK file only, choose General access > Anyone with the link > Viewer.
3. Copy its download/access link. Open it in a private browser window to check that the teacher can access it without requesting permission.
4. Open https://classroom.google.com/ and choose your Mobile App Development class.
5. Go to Classwork and open the assignment matching this CRUD/API brief. The actual Classroom title may differ from the PDF filename.
6. Under Your work > Add or create, attach the APK access link, the existing GitHub repository link, and the required screenshots. Use a screenshots ZIP only if your teacher accepts that format.
7. Check all attachments, then press Turn in and complete the confirmation yourself.

The PDF requires the updated GitHub repository, APK link, expanded VS Code screenshot, and mobile feature screenshots. It does not request a public website deployment or Play Store publishing.

Use this text for the submission if needed:

```text
Name: Abdul Wahab
App: VibeQuest
Assignment: CRUD Operations, Local Storage & API Integration
GitHub: https://github.com/abdulwahabbaloch2006-byte/vibequest-mad
Updated APK: https://expo.dev/artifacts/eas/0citWAZVTYd7egGJSO8k7J0etYYOcoSTUTMz5b5XzI4.apk
Attached: mobile feature screenshots and expanded VS Code project structure.
```

## 5. Suggested explanation to the teacher

The PDF requests screenshots, not a specific spoken demo. If your teacher asks for a live demonstration, use this order:

1. Open the installed app and show its icon, splash screen, and bottom tabs.
2. Add a task, show it in the list, then edit its title.
3. Search for the task and select its category filter.
4. Close and reopen the app to demonstrate local persistence.
5. Delete only the demo task and show the updated list.
6. Open Discover with the internet enabled and show the public API posts.
7. Explain: "Records are an array of objects. I use map and filter for updates, deletion and search. AsyncStorage saves the list locally. Axios GET fetches JSON posts, with loading, error and retry states."

For a nontechnical explanation: "This app keeps everyday tasks in one place. You can add, change, search, categorize and complete tasks, and the list stays saved on this device."

## 6. Submission status

Do not mark the submission complete until all of these are actually done:

- [x] Updated source visible in the existing GitHub repository.
- [x] Android APK build completed and downloaded.
- [ ] Installed APK tested on the phone, including icon and splash.
- [ ] Required mobile screenshots captured.
- [x] Expanded VS Code folder screenshot captured.
- [x] APK uploaded and its access link checked.
- [x] GitHub link, APK download link, and three VS Code screenshots attached to the correct Classroom assignment.
- [ ] Mobile feature screenshots attached to the assignment.
- [ ] Classroom shows the assignment as Turned in.

The GitHub repository link, APK download link, and three VS Code screenshots have been attached to Assignment 03 in the MAD 4 A Google Classroom. The assignment still shows Assigned. Mobile screenshots and final Turn in remain pending.

## Verified APK build

- EAS build ID: `fee530fb-5dab-4f49-b0c2-17672e4b4f85`.
- Status: finished successfully, Android APK, version 1.0.0 (build 2).
- Build page: https://expo.dev/accounts/abdulwahabbaloch2006/projects/vibequest-mad/builds/fee530fb-5dab-4f49-b0c2-17672e4b4f85
- Download link: https://expo.dev/artifacts/eas/0citWAZVTYd7egGJSO8k7J0etYYOcoSTUTMz5b5XzI4.apk
- Anonymous download returned HTTP 200. Downloaded size: 92,635,728 bytes. The archive contains AndroidManifest.xml and classes.dex.
- Local installer: `D:\Mobile app deveolpment\VibeQuest-Assignment03.apk`.
- Native device installation, splash/icon checks, and mobile feature screenshots are still pending. A successful build does not prove those device checks.
