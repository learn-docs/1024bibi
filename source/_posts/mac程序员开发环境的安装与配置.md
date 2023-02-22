---
title: mac程序员开发环境的安装与配置
abbrlink: 4787eb40
date: 2018-01-04 12:06:40
tags:
  - Mac
categories:
  - Mac
keywords: 程序员开发环境的安装与配置
description: 程序员开发环境的安装与配置
cover: >-
  https://camo.githubusercontent.com/0c01ea31f4d09521cfeb5e67c381964de2526ad15b2ac474e83a475d2ee2a982/68747470733a2f2f636e2e62696e672e636f6d2f74683f69643d4f48522e5379646e65794e59455f454e2d5553333830373532343932335f5548442e6a7067267069643d687026773d313030302672733d3126633d34
top_img:
---

```js
Example usage:
  brew search TEXT|/REGEX/
  brew info [FORMULA|CASK...]
  brew install FORMULA|CASK...
  brew update
  brew upgrade [FORMULA|CASK...]
  brew uninstall FORMULA|CASK...
  brew list [FORMULA|CASK...]

Troubleshooting:
  brew config 
  brew doctor
  brew install --verbose --debug FORMULA|CASK

Contributing:
  brew create URL [--no-fetch]
  brew edit [FORMULA|CASK...]

Further help:
  brew commands
  brew help [COMMAND]
  man brew
  https://docs.brew.sh
```

```js
.zshenv
.zshenv中存放的环境变量配置项在任何场景下都能被读取，这里通常把$PATH等变量写在这里，这样无论是在交互shell，或者运行程序都会读取此文件

.zshrc
.zshrc主要用在交互shell

zlogin
.zlogin则在login shell的时候读取，比如系统启动的时候会读取此文件

zprofile
.zprofile是.zlogin的替代品，如果使用了.zlogin就不必再关心此文件

.zshenv → [.zprofile if login] → [.zshrc if interactive] → [.zlogin if login] → [.zlogout sometimes].

git config --global user.name ""
git config --global user.email ""

```

```js
.ssh % ssh -T git@github.com
Hi webVueBlog! You've successfully authenticated, but GitHub does not provide shell access.
```

```js
1.open/vim /etc/profile (建议不修改这个文件)
全局（公有）配置，不管是哪个用户，登录时都会读取该文件。

2./etc/bashrc (一般在这个文件中添加系统环境变量)
全局（共有）配置，bash shell 执行时，不管是何种方式，都会读取此文件。

3.～/.bash_profile（一般在这个文件中添加用户级环境变化）
（注：Linux里面是 .bashrc而Mac是.bash_profile）
若bash shell是以login方式执行时，才会读取此文件。该文件仅仅执行一次！默认情况下，他设置一些环境变量。

vim ~/.bash_profile
i键编辑模式

手动生效
source ~/.bash_profile

export PATH="/opt/homebrew/opt/node@14/bin:$PATH"

brew install node

npm config set registry https://registry.npm.taobao.org

npm config get registry

sudo npm xxxx 权限
sudo npm install -g cnpm --registry=https://registry.npm.taobao.org

sudo npm install n -g


cd ~/development
unzip ~/Downloads/flutter_macos_arm64_3.7.0-stable.zip

export PATH="$PATH:`pwd`/flutter/bin"

export PATH="$PATH:/Users/jeskson/Downloads/flutter/bin"

flutter doctor

echo $PATH

which flutter

# export PATH="$PATH:/Users/jeskson/Downloads/flutter/bin"
# export PATH="$PATH:/usr/local/opt/android-sdk"
export ANDROID_HOME=/usr/local/share/android-sdk

# export LDFLAGS="-L/opt/homebrew/opt/node@12/lib"
# export CPPFLAGS="-I/opt/homebrew/opt/node@12/include"

/Users/jeskson/Downloads/flutter/bin

export PATH=/Users/jeskson/Downloads/flutter/bin:$PATH

export PUB_HOSTED_URL=https://pub.flutter-io.cn

export FLUTTER_STORAGE_BASE_UUL=https://storage.flutter-io.cn

```

```js
docker


{
  "builder": {
    "gc": {
      "defaultKeepStorage": "20GB",
      "enabled": true
    }
  },
  "experimental": false,
  "features": {
    "buildkit": true
  },
  "registry-mirrors": [
	  "https://0wg8f6sb.mirror.aliyuncs.com"
  ]
}
```

```js

lsof -i:8080

src/redis-cli
kill -9 

解压
tar -zxvf

编译
cd redis-
make

运行
src/redis-server

连接
src/redis-cli

直接kill掉这个进程
ps aux|grep redis
```

```js
brew list 软件名 来显示路径
1、通过brew install安装应用最先是放在/usr/local/Cellar/目录下。
2、有些应用会自动创建链接放在/usr/bin或者/usr/sbin，同时也会将整个文件夹放在/usr/local
3、可以使用 brew list 软件名 (比如 brew list oclint)确定安装位置。

路径查询
brew --prefix nvm
/opt/homebrew/opt/nvm

brew list nvm
/opt/homebrew/Cellar/nvm/0.39.1/etc/bash_completion.d/nvm
/opt/homebrew/Cellar/nvm/0.39.1/nvm-exec
/opt/homebrew/Cellar/nvm/0.39.1/nvm.sh

官方说明中建议将英特尔版本安装在/usr/local路径，arm版本安装在/opt/homebrew路径。

which brew
/opt/homebrew/bin/brew

当执行brew install xxxx应用时，会将在目录/usr/local/Cellar下，创建名为xxxx的目录，然后把所有下载的资源文件存放在这个目录下。

当执行brew uninstall xxxx应用时，会删除/usr/local/Cellar/xxxx目录。

当执行brew cleanup时，会将存放在/usr/local/Cellar目录下的同一个应用的所有低版本的程序包全部删除，只保留最新安装的程序包。

brew cleanup
Removing: /Users/jeskson/Library/Logs/Homebrew/macos-term-size... (64B)
Removing: /Users/jeskson/Library/Logs/Homebrew/n... (64B)
Removing: /Users/jeskson/Library/Logs/Homebrew/node@14... (64B)
Removing: /Users/jeskson/Library/Logs/Homebrew/node@12... (64B)

brew 还会创建自己的缓存目录/Users/<用户名>/Library/Caches/Homebrew，brew会将其作为资源下载的缓存目录。

其他应用也与Homebrew应用类似，都会在/Users/<用户名>/Library/Caches目录下，建立自己的缓存目录，并在自己的缓存目录下存放自己的缓存文件。

/Users/jeskson/Library

可以通过删除/Users/<用户名>/Libray/Caches这个目录下的全部缓存文件，以此释放一些被占用的存储空间，增加可用存储空间。可以在访达工具窗口下进行删除操作，也可在系统终端下输入sudo rm -rf Users/<用户名>/Library/Caches指令进行删除，但删除前要确认删除这些文件所带来的影响，如果不合适，就尽量不要删除。

.bash_profile
.zshrc

查看全局配置
brew config

HOMEBREW_VERSION: 3.6.11
ORIGIN: https://mirrors.ustc.edu.cn/brew.git
Core tap ORIGIN: https://github.com/Homebrew/homebrew-core
Core tap branch: master
HOMEBREW_PREFIX: /opt/homebrew
HOMEBREW_BOTTLE_DOMAIN: https://mirrors.ustc.edu.cn/homebrew-bottles/bottles
HOMEBREW_CASK_OPTS: []
HOMEBREW_MAKE_JOBS: 8
Homebrew Ruby: 2.6.8 => /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/bin/ruby
CPU: octa-core 64-bit arm_firestorm_icestorm
Clang: 13.1.6 build 1316
Git: 2.32.0 => /Applications/Xcode.app/Contents/Developer/usr/bin/git
Curl: 7.77.0 => /usr/bin/curl
macOS: 12.0.1-arm64
CLT: N/A
Xcode: 13.3.1
Rosetta 2: false

检查一下brew所安装的全部应用资源是否有问题

brew doctor

更新全部已安装应用程序包

brew update

升级全部已安装的应用程序包

brew upgrade



```

```js
Mac下彻底删除IDEA

cd ~/Library/Caches

cd Library/Application Support/ 

删除 /Users/用户/Library/Logs/

删除 /Users/用户/Library/Preferences/

rm -rf /Users/xxx/Library/Preferences/jetbrains.jetprofile.asset.plist
rm -rf /Users/xxx/Library/Caches/JetBrains
rm -rf /Users/xxx/Library/Application\ Support/JetBrains
rm -rf /Users/xxx/Library/Logs/JetBrains
rm -rf /Users/xxx/Library/Saved Application State/JetBrains

chmod u+x *.sh

scripts % ./install.sh
done. the "kill Dock" command can fix the crash issue.

33MEHOB8W0-eyJsaWNlbnNlSWQiOiIzM01FSE9COFcwIiwibGljZW5zZWVOYW1lIjoiUG9saXRla25payBNZXJsaW1hdSBNZWxha2EiLCJhc3NpZ25lZU5hbWUiOiJtYWdnaWUgc2VyIiwiYXNzaWduZWVFbWFpbCI6Im1hZ2dpZXNlckB5ZWFoLm5ldCIsImxpY2Vuc2VSZXN0cmljdGlvbiI6IkZvciBlZHVjYXRpb25hbCB1c2Ugb25seSIsImNoZWNrQ29uY3VycmVudFVzZSI6ZmFsc2UsInByb2R1Y3RzIjpbeyJjb2RlIjoiRFBOIiwicGFpZFVwVG8iOiIyMDIzLTA3LTI2IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJEQiIsInBhaWRVcFRvIjoiMjAyMy0wNy0yNiIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiUFMiLCJwYWlkVXBUbyI6IjIwMjMtMDctMjYiLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IklJIiwicGFpZFVwVG8iOiIyMDIzLTA3LTI2IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJSU0MiLCJwYWlkVXBUbyI6IjIwMjMtMDctMjYiLCJleHRlbmRlZCI6dHJ1ZX0seyJjb2RlIjoiR08iLCJwYWlkVXBUbyI6IjIwMjMtMDctMjYiLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IkRNIiwicGFpZFVwVG8iOiIyMDIzLTA3LTI2IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJSU0YiLCJwYWlkVXBUbyI6IjIwMjMtMDctMjYiLCJleHRlbmRlZCI6dHJ1ZX0seyJjb2RlIjoiRFMiLCJwYWlkVXBUbyI6IjIwMjMtMDctMjYiLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IlBDIiwicGFpZFVwVG8iOiIyMDIzLTA3LTI2IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJSQyIsInBhaWRVcFRvIjoiMjAyMy0wNy0yNiIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiQ0wiLCJwYWlkVXBUbyI6IjIwMjMtMDctMjYiLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IldTIiwicGFpZFVwVG8iOiIyMDIzLTA3LTI2IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJSRCIsInBhaWRVcFRvIjoiMjAyMy0wNy0yNiIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiUlMwIiwicGFpZFVwVG8iOiIyMDIzLTA3LTI2IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJSTSIsInBhaWRVcFRvIjoiMjAyMy0wNy0yNiIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiQUMiLCJwYWlkVXBUbyI6IjIwMjMtMDctMjYiLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IlJTViIsInBhaWRVcFRvIjoiMjAyMy0wNy0yNiIsImV4dGVuZGVkIjp0cnVlfSx7ImNvZGUiOiJEQyIsInBhaWRVcFRvIjoiMjAyMy0wNy0yNiIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiUlNVIiwicGFpZFVwVG8iOiIyMDIzLTA3LTI2IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJEUCIsInBhaWRVcFRvIjoiMjAyMy0wNy0yNiIsImV4dGVuZGVkIjp0cnVlfSx7ImNvZGUiOiJQREIiLCJwYWlkVXBUbyI6IjIwMjMtMDctMjYiLCJleHRlbmRlZCI6dHJ1ZX0seyJjb2RlIjoiUFdTIiwicGFpZFVwVG8iOiIyMDIzLTA3LTI2IiwiZXh0ZW5kZWQiOnRydWV9LHsiY29kZSI6IlBTSSIsInBhaWRVcFRvIjoiMjAyMy0wNy0yNiIsImV4dGVuZGVkIjp0cnVlfSx7ImNvZGUiOiJQUFMiLCJwYWlkVXBUbyI6IjIwMjMtMDctMjYiLCJleHRlbmRlZCI6dHJ1ZX0seyJjb2RlIjoiUENXTVAiLCJwYWlkVXBUbyI6IjIwMjMtMDctMjYiLCJleHRlbmRlZCI6dHJ1ZX0seyJjb2RlIjoiUEdPIiwicGFpZFVwVG8iOiIyMDIzLTA3LTI2IiwiZXh0ZW5kZWQiOnRydWV9LHsiY29kZSI6IlBQQyIsInBhaWRVcFRvIjoiMjAyMy0wNy0yNiIsImV4dGVuZGVkIjp0cnVlfSx7ImNvZGUiOiJQUkIiLCJwYWlkVXBUbyI6IjIwMjMtMDctMjYiLCJleHRlbmRlZCI6dHJ1ZX0seyJjb2RlIjoiUFNXIiwicGFpZFVwVG8iOiIyMDIzLTA3LTI2IiwiZXh0ZW5kZWQiOnRydWV9LHsiY29kZSI6IlJTIiwicGFpZFVwVG8iOiIyMDIzLTA3LTI2IiwiZXh0ZW5kZWQiOnRydWV9XSwibWV0YWRhdGEiOiIwMTIwMjIwODA3TFBBQTAwNDAwOCIsImhhc2giOiIzNjE3MDA1OC8xNzI4NTUyNDotNDgxNDg2NDI3IiwiZ3JhY2VQZXJpb2REYXlzIjo3LCJhdXRvUHJvbG9uZ2F0ZWQiOmZhbHNlLCJpc0F1dG9Qcm9sb25nYXRlZCI6ZmFsc2V9-KgT7Aup6xVz89IAUiblqz3L1MhZRucjmvakY1XhQegglFthXYXNDSF0n8PSZO9eQMEcXYpAMdSbLBsM3I/GJ6ykW/MZfcX1mLSnN8UgrIGIJKhRJJ3OxRWHhE5pA3JXMHR9gnqdU2Hcb4/0gop7xEsadRA3bk4RQSWQF6xpOBisPYjN21equhyxZ5W3c5wG8ziDdcIyqLFgFxG4cdBIrKVkfQT+eX1Xr/ONDgQALXgKOJqZiSirfP/BVRTCZ2xqTf2uHHtv9/AUc/JbGxJlSHQag0doBRFZ+vLaxFxyci1P2AZSfGnPQ+zMHEoGevKnJ8xR7L5mmCVAeiCG2js5hzA==-MIIETDCCAjSgAwIBAgIBDTANBgkqhkiG9w0BAQsFADAYMRYwFAYDVQQDDA1KZXRQcm9maWxlIENBMB4XDTIwMTAxOTA5MDU1M1oXDTIyMTAyMTA5MDU1M1owHzEdMBsGA1UEAwwUcHJvZDJ5LWZyb20tMjAyMDEwMTkwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDCP4uk4SlVdA5nuA3DQC+NsEnZS9npFnO0zrmMWcz1++q2UWJNuGTh0rwi+3fUJIArfvVh7gNtIp93rxjtrQAuf4/Fa6sySp4c32MeFACfC0q+oUoWebhOIaYTYUxm4LAZ355vzt8YeDPmvWKxA81udqEk4gU9NNAOz1Um5/8LyR8SGsSc4EDBRSjcMWMwMkYSauGqGcEUK8WhfplsyF61lKSOFA6VmfUmeDK15rUWWLbOMKgn2cxFA98A+s74T9Oo96CU7rp/umDXvhnyhAXSukw/qCGOVhwKR8B6aeDtoBWQgjnvMtPgOUPRTPkPGbwPwwDkvAHYiuKJ7Bd2wH7rAgMBAAGjgZkwgZYwCQYDVR0TBAIwADAdBgNVHQ4EFgQUJNoRIpb1hUHAk0foMSNM9MCEAv8wSAYDVR0jBEEwP4AUo562SGdCEjZBvW3gubSgUouX8bOhHKQaMBgxFjAUBgNVBAMMDUpldFByb2ZpbGUgQ0GCCQDSbLGDsoN54TATBgNVHSUEDDAKBggrBgEFBQcDATALBgNVHQ8EBAMCBaAwDQYJKoZIhvcNAQELBQADggIBAB2J1ysRudbkqmkUFK8xqhiZaYPd30TlmCmSAaGJ0eBpvkVeqA2jGYhAQRqFiAlFC63JKvWvRZO1iRuWCEfUMkdqQ9VQPXziE/BlsOIgrL6RlJfuFcEZ8TK3syIfIGQZNCxYhLLUuet2HE6LJYPQ5c0jH4kDooRpcVZ4rBxNwddpctUO2te9UU5/FjhioZQsPvd92qOTsV+8Cyl2fvNhNKD1Uu9ff5AkVIQn4JU23ozdB/R5oUlebwaTE6WZNBs+TA/qPj+5/wi9NH71WRB0hqUoLI2AKKyiPw++FtN4Su1vsdDlrAzDj9ILjpjJKA1ImuVcG329/WTYIKysZ1CWK3zATg9BeCUPAV1pQy8ToXOq+RSYen6winZ2OO93eyHv2Iw5kbn1dqfBw1BuTE29V2FJKicJSu8iEOpfoafwJISXmz1wnnWL3V/0NxTulfWsXugOoLfv0ZIBP1xH9kmf22jjQ2JiHhQZP7ZDsreRrOeIQ/c4yR8IQvMLfC0WKQqrHu5ZzXTH4NO3CwGWSlTY74kE91zXB5mwWAx1jig+UXYc2w4RkVhy0//lOmVya/PEepuuTTI4+UJwC7qbVlh5zfhj8oTNUXgN0AOc+Q0/WFPl1aw5VV/VrO8FCoB15lFVlpKaQ1Yh+DVU8ke+rt9Th0BCHXe0uZOEmH0nOnH/0onD
```





