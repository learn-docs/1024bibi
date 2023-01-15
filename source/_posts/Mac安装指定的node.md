---
title: Mac安装指定的node
tags:
  - Mac
categories:
  - Mac
keywords: Mac安装指定的node
description: Mac安装指定的node
cover: >-
  https://camo.githubusercontent.com/0c01ea31f4d09521cfeb5e67c381964de2526ad15b2ac474e83a475d2ee2a982/68747470733a2f2f636e2e62696e672e636f6d2f74683f69643d4f48522e5379646e65794e59455f454e2d5553333830373532343932335f5548442e6a7067267069643d687026773d313030302672733d3126633d34
abbrlink: 38bf9a9f
date: 2018-01-03 15:22:33
top_img:
---

<div align=center class="aspect-ratio">
    <iframe src="https://player.bilibili.com/player.html?aid=733096988&bvid=BV1wD4y1v7yc&cid=904066493&page=1" 
    scrolling="no" 
    border="0" 
    frameborder="no" 
    framespacing="0" 
    high_quality=1
    danmaku=1 
    allowfullscreen="true"> 
    </iframe>
</div>

安装Homebrew
Homebrew是一款Mac OS平台下的软件包管理工具，拥有安装、卸载、更新、查看、搜索等很多实用的功能。简单的一条指令，就可以实现包管理，而不用你关心各种依赖和文件路径的情况，十分方便快捷。

在终端上运行，过程可能会有点慢
`$ /usr/bin/ruby -e “$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)”`

安装完成后运行
`$ brew -v`

出现版本号则说明安装成功

```js
Homebrew 3.6.11
Homebrew/homebrew-core (git revision 3e77e639f54; last commit 2021-12-29)
Homebrew/homebrew-cask (git revision d7ab4145f0; last commit 2021-12-29)
```

`npm does not support Node.js v15.0.1`

安装nvm
nvm是node版本管理工具，为了解决node各种版本存在不兼容现象，nvm是让你在同一台机器上安装和切换不同版本的node的工具。

安装nvm
`$ brew install nvm`

安装完成后，修改环境变量

进入当前用户的Home目录
`$ cd ~`

编辑.bash_profile文件
`$ vim .bash_profile`

按 i 进入编辑模式
在文件里添加以下内容（安装nvm成功后终端的最后3行代码）

```js
export NVM_DIR="$HOME/.nvm"
# This loads nvm
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  
# This loads nvm bash_completion
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  

```

然后按 esc 退出编辑模式
按 :wq 保存并退出

输入以下命令，更新配置过的环境变量
`$ source .bash_profile`

查看nvm版本
`$ nvm --version`

如果出现版本号，则说明安装成功

nvm 常用语法
安装node指定版本
`$ nvm install` 版本号

查看本地node的所有版本
`$ nvm list`

切换到指定的node版本
`$ nvm use 10.19`

卸载指定的node版本
`$ nvm uninstall 版本号`

安装最新的node稳定版本
`$ nvm install --lts`

查看node的所有的版本
`$ nvm ls-remote`

使用node指定版本执行指定文件
`$ nvm exec 版本号 node 要执行的文件路径`

例如：`nvm exec 4.8.3 node app.js`
表示使用4.8.3 版本的node，执行app.js文件

设置默认版本的Node，每次启动终端都使用该版本的node
`$nvm alias default` 版本号

```js
brew search node

node@14 is keg-only, which means it was not symlinked into /opt/homebrew,
because this is an alternate version of another formula.

If you need to have node@14 first in your PATH, run:
  echo 'export PATH="/opt/homebrew/opt/node@14/bin:$PATH"' >> ~/.zshrc

For compilers to find node@14 you may need to set:
  export LDFLAGS="-L/opt/homebrew/opt/node@14/lib"
  export CPPFLAGS="-I/opt/homebrew/opt/node@14/include"

If you need to have node@12 first in your PATH, run:
  echo 'export PATH="/opt/homebrew/opt/node@12/bin:$PATH"' >> ~/.zshrc

For compilers to find node@12 you may need to set:
  export LDFLAGS="-L/opt/homebrew/opt/node@12/lib"
  export CPPFLAGS="-I/opt/homebrew/opt/node@12/include"
```

