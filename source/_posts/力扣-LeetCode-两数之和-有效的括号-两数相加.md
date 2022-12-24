---
title: '力扣 (LeetCode)-两数之和,有效的括号,两数相加'
date: 2021-03-02 00:32:52
tags:
	- LeetCode
	- 算法
categories:
	- 掘金
keywords: "LeetCode"
description: "两数之和,有效的括号,两数相加"
cover: https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe22fe0d371945a6b707aade6e8ce07e~tplv-k3u1fbpfcp-watermark.image
top_img:
---

## 前言

❤️笔芯❤️~

### 1. 两数之和

一、题目描述：

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

你可以按任意顺序返回答案。

示例 1：
```
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```
示例 2：
```
输入：nums = [3,2,4], target = 6
输出：[1,2]
```
示例 3：
```
输入：nums = [3,3], target = 6
输出：[0,1]
```

二、思路分析：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/360b41b1fd474de6a801a0c4aa1f0495~tplv-k3u1fbpfcp-watermark.image)

1. 可以遍历所有数字对，双重循环遍历当前值和另一个当前值与目标值是否相等，如果相等返回结果。

三、答案 代码：

输入数组，目标值

```
// 暴力搜索
/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSum = function(nums, target) {
 // 暴力枚举
 for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
   if (nums[i] + nums[j] === target) {
    return [i,j];
   }
  }
 }
};
```

```
// 借助Object对象存储
var twoSum = function(nums, target) {
 let maps = {};
 for(let i = 0; i < nums.length; i++) {
  var index = nums.indexOf(target-nums[i]
  if(index !== -1 && index !== i) {
   return [i,index]
  }
 }
};
```

```
const twoSum = function(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
   const diff = target - nums[i];
   if (map.has(diff)) {
    return [map.get(diff), i];
   }
   map.set(num[i], i);
  }
}
```

### 20. 有效的括号

一、题目描述:

给定一个只包括 `'('，')'，'{'，'}'，'['，']'` 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。

```
示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
示例 4：

输入：s = "([)]"
输出：false
```

二、思路分析

1. 遍历输入字符串
2. 如果当前字符为左半边括号时，则将其压入栈中
3. 如果遇到右半边括号时，分类讨论：
- 如栈不为空且为对应的左半边括号，则取出栈顶元素，继续循环
- 若此时栈为空，则直接返回false
- 若不为对应的左半边括号，反之返回false

使用数组来模拟，入为`push`，出为`pop`，即是栈。

入为`push`，出为`shift`，即是队列。

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/232be8df3a644b77bbf1a09b4a870a75~tplv-k3u1fbpfcp-watermark.image)

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/51f28212e60441529793626b3abf26b1~tplv-k3u1fbpfcp-watermark.image)

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2eab46d429134dc4b8ef0019ffbbaf26~tplv-k3u1fbpfcp-watermark.image)

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d60a5279b0d84b88b9a71d4e032d6a75~tplv-k3u1fbpfcp-watermark.image)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b8c5afd7bfc04ad4a1bd858bf68a2ea4~tplv-k3u1fbpfcp-watermark.image)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dfb11f75093f4c8190a0d82214f99252~tplv-k3u1fbpfcp-watermark.image)

三、答案代码

```
var isValid = function (s) {
  while (s.includes("[]") || s.includes("()") || s.includes("{}")) {
    s = s.replace("[]", "").replace("()", "").replace("{}", "");
  }
  s = s.replace("[]", "").replace("()", "").replace("{}", "");
  return s.length === 0;
};
```

```
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let valid = true;
  const stack = [];
  const mapper = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let i in s) {
    const v = s[i];
    if (["(", "[", "{"].indexOf(v) > -1) {
      stack.push(v);
    } else {
      const peak = stack.pop();
      if (v !== mapper[peak]) {
        return false;
      }
    }
  }

  if (stack.length > 0) return false;

  return valid;
};
```

> 匹配的过程，就是出栈的过程

### 2. 两数相加

一、题目描述

给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
```
示例 1：
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.

示例 2：
输入：l1 = [0], l2 = [0]
输出：[0]

示例 3：
输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
```

二、思路分析

设立一个表示进位的变量 carried，建立一个新链表，把输入的两个链表从头往后同时处理，每两个相加，将结果加上 carried 后的值作为一个新节点到新链表后面，并更新 carried 值即可。

- 链表这种数据结构的特点和使用
- 用一个 carried 变量来实现进位的功能，每次相加之后计算 carried，并用于下一位的计算

使用变量跟踪进位，并从包含最低有效位的表头开始模拟逐位相加的过程。每个结点都包含一个数字，并且数字按位逆序存储。

首先取出`“+”`左右两边两个数的最低位，其次求出他们的和并作为输出结果的最低位，并考虑将进位加入代码中，如果值不存在时，将其设置为0，然后再进行相加即可。

```
let val1 = l1.val
let val2 = l2.val
```

三、答案代码

```
var addTwoNumbers = function (l1, l2) {
  if (l1 === null || l2 === null) return null;

  // 使用dummyHead可以简化对链表的处理，dummyHead.next指向新链表
  let dummyHead = new ListNode(0);
  let cur1 = l1;
  let cur2 = l2;
  let cur = dummyHead; // cur用于计算新链表
  let carry = 0; // 进位标志

  while (cur1 !== null || cur2 !== null) {
    let val1 = cur1 !== null ? cur1.val : 0;
    let val2 = cur2 !== null ? cur2.val : 0;
    let sum = val1 + val2 + carry;
    let newNode = new ListNode(sum % 10); // sum%10取模结果范围为0~9，即为当前节点的值
    carry = sum >= 10 ? 1 : 0; // sum>=10，carry=1，表示有进位
    cur.next = newNode;
    cur = cur.next;

    if (cur1 !== null) {
      cur1 = cur1.next;
    }

    if (cur2 !== null) {
      cur2 = cur2.next;
    }
  }

  if (carry > 0) {
    // 如果最后还有进位，新加一个节点
    cur.next = new ListNode(carry);
  }

  return dummyHead.next;
};
```

```
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let addOne = 0
    let sum = new ListNode('0')
    let head = sum
    while (addOne || l1 || l2) {
        let val1 = l1 !== null ? l1.val : 0
        let val2 = l2 !== null ? l2.val : 0
        let r1 = val1 + val2 + addOne
        addOne = r1 >= 10 ? 1 : 0
        sum.next = new ListNode(r1 % 10)
        sum = sum.next 
        if (l1) l1 = l1.next 
        if (l2) l2 = l2.next 
    }
    return head.next
};
```

四、总结：

> 两数之和,有效的括号,两数相加-题解！

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

❤️关注+点赞+收藏+评论+转发❤️，原创不易，鼓励笔者创作更好的文章