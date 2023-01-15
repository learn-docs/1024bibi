---
title: Mac关闭指定端口的方法
tags:
  - Mac
categories:
  - Mac
keywords: Mac关闭指定端口的方法
description: Mac关闭指定端口的方法
cover: >-
  https://camo.githubusercontent.com/0c01ea31f4d09521cfeb5e67c381964de2526ad15b2ac474e83a475d2ee2a982/68747470733a2f2f636e2e62696e672e636f6d2f74683f69643d4f48522e5379646e65794e59455f454e2d5553333830373532343932335f5548442e6a7067267069643d687026773d313030302672733d3126633d34
abbrlink: 352e2b26
date: 2018-01-02 15:22:33
top_img:
---

在mac电脑中，运行一个web项目后，关闭项目，重新运行的时候，就运行不了了，表示这个端口被占用，在苹果中，命令行输出：

`lsof -i:8080`

lsof(list open file)列出当前系统打开文件的工具，linux中如何事物都以文件的形式存在

返回结果中有 PID 如665

此时执行

`kill -9 665`

命令即可关掉8080端口执行的程序。