---
id: 9fa3501b6089
title: Unable to boot simulator
slug: unable-to-boot-simulator
date: '2024-09-22'
description: >-
  If you’re like me, trying to open the iOS simulator for your React Native
  project and facing issues, here’s how you can get it working.
original: 'https://akshaymattoo.medium.com/unable-to-boot-simulator-9fa3501b6089'
---
![](/articles/unable-to-boot-simulator/473a669d2245.png)

If you’re like me, trying to open the iOS simulator for your React Native project and facing issues, here’s how you can get it working.

1.  Click the **Apple icon** on the top navigation bar.
2.  Select **System Settings**.
3.  Go to **General**.
4.  Click on **Storage**.
5.  Wait for the **Developer** option to appear with the correct storage information.
6.  Click the **i** icon next to the Developer option.
7.  You’ll see **Xcode caches** listed. Right-click and delete it.

![](/articles/unable-to-boot-simulator/699743c60249.png)

To launch the simulator from your React Native project, run the command: npm run ios

*   Alternatively, you can manually open it via **Xcode** -> **Open Developer Tools** -> **Simulator**.
