---
title: 力扣 (LeetCode)-13. 罗马数字转整数
date: 2021-03-13 00:51:07
tags:
	- LeetCode
	- 算法
categories:
	- LeetCode
	- 前端
keywords: "LeetCode"
description:
cover: https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe22fe0d371945a6b707aade6e8ce07e~tplv-k3u1fbpfcp-watermark.image
top_img:
---

## 前言

❤️笔芯❤️~

> 栈，队列，链表，集合，字典和散列表，树，图

### 13. 罗马数字转整数

一、题目描述

罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1966e648b2d040bf9aa5032b65abf335~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e809c0b846aa4e4b9c996e25268c1189~tplv-k3u1fbpfcp-watermark.image)

二、思路分析

1. 罗马数字由`I,V,X,L,C,D,M` 构成；
2. 当小值在大值的左边，则减小值，如 `IV=5-1=4`
3. 当小值在大值的右边，则加小值，如 `VI=5+1=6`
4. 由上可知，右值永远为正，因此最后一位必然为正

把一个小值放在大值的左边，就是做减法，否则为加法。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/70f5144e26c64f088beb057e7be4ad9f~tplv-k3u1fbpfcp-watermark.image)

- 首先将所有的组合可能性列出并添加到哈希表中
- 然后对字符串进行遍历，由于组合只有两种，一种是 `1` 个字符，一种是 `2` 个字符，其中 `2` 个字符优先于 `1` 个字符
- 先判断两个字符的组合在哈希表中是否存在，存在则将值取出加到结果 `ans` 中，并向后移`2`个字符。不存在则将判断当前 `1` 个字符是否存在，存在则将值取出加到结果 `ans` 中，并向后移 `1` 个字符
- 遍历结束返回结果 `ans`

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eb4a4a2d453d453196ee25ed133489e3~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/197c912bb7e842ca9bdd35160773cb47~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/46d79cbb1c1e4ef99647145480ae6c8f~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6d247c07bdf3489d8f0e3a9fc79195e9~tplv-k3u1fbpfcp-watermark.image)

三、答案代码

```
var romanToInt = function(s) {
 let map = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000
 }
 let ans = 0;
 for(let i=0; i<s.length;){
  if( i+1 < s.length && map[s.substring(i,i+2)] ){
   // 2个一组
   ans += map[s.substring(i,i+2)];
   i += 2;
  }else{
   // 单一个
   ans += map[s.substring(i,i+1)];
   i++;
  }
 }
 return ans;
};
```

四、总结

> 13. 罗马数字转整数题解

### 回看笔者往期高赞文章，也许能收获更多喔！

- [一个合格的初级前端工程师需要掌握的模块笔记](https://juejin.cn/post/6925197705832562696)
- [Vue.js笔试题解决业务中常见问题](https://juejin.cn/post/6916664414422695949)
- [【初级】个人分享Vue前端开发教程笔记](https://juejin.cn/post/6923946134025191432)
- [长篇总结之JavaScript，巩固前端基础](https://juejin.cn/post/6844904078934278158)
- [前端面试必备ES6全方位总结](https://juejin.cn/post/6844904067764846600)
- [达达前端个人web分享92道JavaScript面试题附加回答](https://juejin.cn/post/6913480482638266382)
- [【图文并茂，点赞收藏哦！】重学巩固你的Vuejs知识体系](https://juejin.cn/post/6844904117337341959)
- [【思维导图】前端开发-巩固你的JavaScript知识体系](https://juejin.cn/post/6844904106243391495)
- [14期-连肝7个晚上，总结了计算机网络的知识点！（共66条）](https://juejin.cn/post/6850037263116533773)
- [这是我的第一次JavaScript初级技巧](https://juejin.cn/post/6929701436276097032)
- [localStorage和sessionStorage本地存储](https://juejin.cn/post/6923331849708109838)
- [HTML5中的拖放功能](https://juejin.cn/post/6922602775947771911)
- [挑战前端知识点HTTP/ECMAScript](https://juejin.cn/post/6918735942710722574)
- [必学必会-音频和视频](https://juejin.cn/post/6918011549231775751)
- [前端170面试题+答案学习整理（良心制作）](https://juejin.cn/post/6917635279423537165)
- [前端HTML5面试官和应试者一问一答](https://juejin.cn/post/6917044041863397383)
- [哪吒闹海，席卷图文学习前端Flex布局](https://juejin.cn/post/6916162359765663752)
- [腾讯位置服务开发应用](https://juejin.cn/post/6909784318856396808)
- [【进阶】面试官问我Chrome浏览器的渲染原理（6000字长文）](https://juejin.cn/post/6905946191193325582)
- [面试官一上来就问我Chrome底层原理和HTTP协议（万字长文）](https://juejin.cn/post/6900724539833516040)
- [熬夜总结了 “HTML5画布” 的知识点](https://juejin.cn/post/6855448306517344263)
- [this/call/apply/bind（万字长文）](https://juejin.cn/post/6844904186069401607)
- [HTTP/HTTPS/HTTP2/DNS/TCP/经典题](https://juejin.cn/post/6844904163453714445)
- [执行上下文/作用域链/闭包/一等公民](https://juejin.cn/post/6844904161532706823)
- [Web页面制作基础](https://juejin.cn/post/6844904104712470535)
- [学习总结之HTML5剑指前端（建议收藏，图文并茂）](https://juejin.cn/post/6844904082629459975)

❤️关注+点赞+收藏+评论+转发❤️，原创不易，鼓励笔者创作更好的文章