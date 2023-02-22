---
title: flutter
abbrlink: 2a2a7e8a
date: 2018-01-05 09:32:20
tags:
  - flutter
categories:
  - flutter
keywords: flutter
description: flutter
cover: >-
  https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe22fe0d371945a6b707aade6e8ce07e~tplv-k3u1fbpfcp-watermark.image
top_img:
---

Unable to access Android SDK add-on list

## 解决方案

主动设置SDK
如果本机有Android SDK的话，可以点击cancel跳过，在下一个界面手动选择本地SDK目录就可以了。

跳过检测
在Android Studio的安装目录下，找到\bin\idea.properties
在尾行添加disable.android.first.run=true，表示初次启动不检测SDK

上面两个解决方案都可以解决启动开篇报错的问题，但是都是治标不治本，做Android开发，Android SDK是必须的
可以在进入AS主界面后，再进行SDK相关的下载

## 解决方案

1.配置Proxy

选择Manual proxy configuration

设置 Host name 为：mirrors.neusoft.edu.cn 设置 Port number 为：80

2.跳过检测

在Android Studio的安装目录下，找到\bin\idea.properties

在尾行添加disable.android.first.run=true，表示初次启动不检测SDK

```js
Setup Type: Standard
SDK Folder: /Users/jeskson/Library/Android/sdk
JDK Location: /Applications/Android Studio.app/Contents/jbr/Contents/Home
Total Download Size: 399 MB
SDK Components to Download: 

Android Emulator
  
265 MB

Android SDK Build-Tools 33.0.1
  
57.2 MB

Android SDK Platform 33
  
64.4 MB

Android SDK Platform-Tools
  
12.2 MB
```

```js
android sdk platform 33

android sdk build-tools 

android sdk platform-tools

android emulator

Android SDK Platform 33, Android SDK Build-Tools 
33.0.1 and 2 more SDK components were not 
installed

/Users/jeskson/Library/Android/sdk

The following components will be installed: 
- Sources for Android 33: revision 1
- Android SDK Platform 33: revision 2
Disk usage: 
- Estimated download size: 111.1 MB
- Estimated disk space to be additionally occupied on SDK partition after installation: 444.6 MB
- Currently available disk space in SDK root (/Users/jeskson/Library/Android/sdk): 13.3 GB
```

```js
flutter config --android-sdk /path/to/android/sdk
flutter config --android-studio-dir /path/to/android/studio

flutter config --android-sdk /Users/jeskson/Library/Android/sdk
flutter config --android-studio-dir /path/to/android/studio


Doctor summary (to see all details, run flutter doctor -v):
[✓] Flutter (Channel stable, 3.7.0, on macOS 12.0.1 21A559 darwin-arm64 (Rosetta), locale zh-Hans-CN)
[!] Android toolchain - develop for Android devices (Android SDK version 33.0.1)
    ✗ cmdline-tools component is missing
      Run `path/to/sdkmanager --install "cmdline-tools;latest"`
      See https://developer.android.com/studio/command-line for more details.
    ✗ Android license status unknown.
      Run `flutter doctor --android-licenses` to accept the SDK licenses.
      See https://flutter.dev/docs/get-started/install/macos#android-setup for more details.
[✓] Xcode - develop for iOS and macOS (Xcode 13.3.1)
[✓] Chrome - develop for the web
[!] Android Studio (version 2022.1)
    ✗ Unable to find bundled Java version.
[✓] VS Code (version 1.74.3)
Scanning for devices is taking a long time...[✓] Connected device (2 available)
```

```js
flutter config --android-sdk /Users/jeskson/Library/Android/sdk        
Setting "android-sdk" value to "/Users/jeskson/Library/Android/sdk".

path/to/sdkmanager --install "cmdline-tools;latest"
flutter doctor --android-licenses

android-studio-2022.1.1.20-mac_arm.dmg
```

```js
export ANDROID_HOME=/Users/lag/Library/Android/sdk
export PATH=${PATH}:${ANDROID_HOME}/tools:${ANDROID_HOME}/platform-tools
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
export PATH=/Volumes/ServerDevelop/flutter/bin:${PATH}
```

其中~/Library/Android/sdk为安卓SDK路径，/Volumes/ServerDevelop/flutter/bin为flutter的bin路径。注意Android SDK目录务必安装到/Users/lag/Library/Android/sdk目录，其中lag为当前登录用户名。
配置完之后在终端输入命令：

adb version

```js
Packages to install: - Android SDK Command-line Tools (latest) (cmdline-tools;latest)


Preparing "Install Android SDK Command-line Tools (latest) (revision: 9.0)".
Downloading https://dl.google.com/android/repository/commandlinetools-mac-9477386_latest.zip
"Install Android SDK Command-line Tools (latest) (revision: 9.0)" ready.
Installing Android SDK Command-line Tools (latest) in /Users/jeskson/Library/Android/sdk/cmdline-tools/latest
"Install Android SDK Command-line Tools (latest) (revision: 9.0)" complete.
"Install Android SDK Command-line Tools (latest) (revision: 9.0)" finished.

/Users/jeskson/Library/Android/sdk

flutter 报错: Android sdkmanager not found. Update to the latest Android SDK and ensure that the cmdline-tools are installed to
resolve this.

[✓] Flutter (Channel stable, 3.7.0, on macOS 12.0.1 21A559 darwin-arm64 (Rosetta), locale zh-Hans-CN)
[!] Android toolchain - develop for Android devices (Android SDK version 33.0.1)
    ! Some Android licenses not accepted. To resolve this, run: flutter doctor --android-licenses
[✓] Xcode - develop for iOS and macOS (Xcode 13.3.1)
[✓] Chrome - develop for the web
[!] Android Studio (version 2022.1)
    ✗ Unable to find bundled Java version.
[✓] VS Code (version 1.74.3)
[✓] Connected device (3 available)
[✓] HTTP Host Availability
```

```js
检查未被接受的许可证
Review licenses that have not been accepted

[✓] Flutter (Channel stable, 3.7.0, on macOS 12.0.1 21A559 darwin-arm64 (Rosetta), locale zh-Hans-CN)
[✓] Android toolchain - develop for Android devices (Android SDK version 33.0.1)
[✓] Xcode - develop for iOS and macOS (Xcode 13.3.1)
[✓] Chrome - develop for the web
[!] Android Studio (version 2022.1)
    ✗ Unable to find bundled Java version.
[✓] VS Code (version 1.74.3)
[✓] Connected device (3 available)
[✓] HTTP Host Availability
```

```js
[✓] Flutter (Channel stable, 3.7.0, on macOS 12.0.1 21A559 darwin-arm64 (Rosetta), locale zh-Hans-CN)
    • Flutter version 3.7.0 on channel stable at /Users/jeskson/Downloads/flutter
    • Upstream repository https://github.com/flutter/flutter.git
    • Framework revision b06b8b2710 (2 weeks ago), 2023-01-23 16:55:55 -0800
    • Engine revision b24591ed32
    • Dart version 2.19.0
    • DevTools version 2.20.1
    • Pub download mirror https://pub.flutter-io.cn
    • Flutter download mirror https://storage.flutter-io.cn

[✓] Android toolchain - develop for Android devices (Android SDK version 33.0.1)
    • Android SDK at /Users/jeskson/Library/Android/sdk
    • Platform android-33, build-tools 33.0.1
    • ANDROID_HOME = /Users/jeskson/Library/Android/sdk
    • Java binary at: /Users/jeskson/Library/Java/JavaVirtualMachines/openjdk-17.0.2/Contents/Home/bin/java
    • Java version OpenJDK Runtime Environment (build 17.0.2+8-86)
    • All Android licenses accepted.

[✓] Xcode - develop for iOS and macOS (Xcode 13.3.1)
    • Xcode at /Applications/Xcode.app/Contents/Developer
    • Build 13E500a
    • CocoaPods version 1.11.3

[✓] Chrome - develop for the web
    • Chrome at /Applications/Google Chrome.app/Contents/MacOS/Google Chrome

[!] Android Studio (version 2022.1)
    • Android Studio at /Applications/Android Studio.app/Contents
    • Flutter plugin can be installed from:
      🔨 https://plugins.jetbrains.com/plugin/9212-flutter
    • Dart plugin can be installed from:
      🔨 https://plugins.jetbrains.com/plugin/6351-dart
    ✗ Unable to find bundled Java version.
    • Try updating or re-installing Android Studio.

[✓] VS Code (version 1.74.3)
    • VS Code at /Applications/Visual Studio Code.app/Contents
    • Flutter extension version 3.58.0

[✓] Connected device (3 available)
    • sdk gphone64 arm64 (mobile) • emulator-5554 • android-arm64  • Android 13 (API 33) (emulator)
    • macOS (desktop)             • macos         • darwin-arm64   • macOS 12.0.1 21A559 darwin-arm64 (Rosetta)
    • Chrome (web)                • chrome        • web-javascript • Google Chrome 109.0.5414.119

[✓] HTTP Host Availability
    • All required HTTP hosts are available

! Doctor found issues in 1 category.
```

