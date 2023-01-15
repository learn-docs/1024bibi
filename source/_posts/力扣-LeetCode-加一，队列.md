---
title: 力扣 (LeetCode)-加一，队列
tags:
  - LeetCode
  - 算法
categories:
  - 掘金
keywords: LeetCode
cover: >-
  https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe22fe0d371945a6b707aade6e8ce07e~tplv-k3u1fbpfcp-watermark.image
abbrlink: 781ada2f
date: 2021-03-08 00:48:38
description:
top_img:
---

## 前言

❤️笔芯❤️~

### 队列

> 队列数据结构，队列是遵循**FIFO**，先进先出，也有叫**先来先服务**，原则的一组有序的项。很像现实中的排队（最常见的队列的例子），排在第一位的人会先接受到服务。

创建队列：

```
// 声明类
function Queue() {
 // 这里是属性和方法
}

// 一个用于存储队列中元素的数据结构：数组
let items = [];

// 向队列尾部添加一个或多个新的项
enqueue(element(s))

// 移除队列的第一项，并返回被移除的元素
dequeue()

// 返回队列中第一个元素，最先被添加，也将是最先被移除的元素，队列不做任何变动
front()

// 如果队列中不包含任何元素，返回true，不然返回false
isEmpty()

// 返回队列包含的元素个数，与数组的length属性类似
size()
```

> 向队列添加元素，新的项只能添加到队列末尾

实现的是`enqueue`方法

```
this.enqueue = function(element) {
 items.push(element);
};
```

> 从队列移除元素

实现`dequeue`方法，使用`shift`方法会从数组中移除存储在索引0（第一个位置）
的元素

```
this.dequeue = function() {
 return items.shift();
}
```

> 查看队列头元素,使用`front`方法，该方法返回队列最前面的项

```
this.font = function() {
 return item[0];
};
```

> 检查队列是否为空，使用`isEmpty`方法

```
this.isEmpty = function() {
 return item.length == 0;
};
```

```
this.size = function() {
 return items.length;
}
```

> 打印队列元素，使用`print`方法

```
this.print = function() {
 console.log(items.toSring());
};
```

> 队列和栈，唯一的区别是`dequeue`方法和`front`方法，这是由于先进先出和后进先出原则的不同所造成的

实例化：

```
let queue = new Queue();
console.log(queue.isEmpty()); // 输出true

queue.enqueue("jeskson");
queue.enqueue("魔王哪吒");
```

> 使用ES6实现Queue类

使用`WeakMap`来保存私有属性`items`，并用外层函数（闭包）来封装Queue类。

```
let Queue2 = (function () { 
 const items = new WeakMap(); 
 class Queue2 { 
 constructor () { 
 items.set(this, []); 
 } 
 enqueue(element) { 
 let q = items.get(this); 
 q.push(element); 
 } 
 dequeue() { 
 let q = items.get(this); 
 let r = q.shift(); 
 return r; 
 } 
 //其他方法
 } 
 return Queue2; 
})();
```

实现一个优先队列:

```
function PriorityQueue() { 
 let items = []; 
 function QueueElement (element, priority){ 
 // 要添加到队列的元素
 // 在队列中的优先级
 this.element = element; 
 this.priority = priority; 
 } 
 this.enqueue = function(element, priority){ 
 let queueElement = new QueueElement(element, priority); 
 let added = false; 
 
 for (let i=0; i<items.length; i++){ 
 if (queueElement.priority < items[i].priority){ 
 items.splice(i,0,queueElement); 
 added = true; 
 
 break; 
 } 
 } 
 if (!added){ 
 
 items.push(queueElement); 
 } 
 }; 
 this.print = function(){ 
 for (let i=0; i<items.length; i++){ 
 console.log(`${items[i].element} - 
 ${items[i].priority}`); 
 } 
 }; 
 //其他方法和默认的Queue实现相同
}
```

> 循环队列

```
function hotPotato (nameList, num){ 
// 实现的Queue类
 let queue = new Queue(); 
 for (let i=0; i<nameList.length; i++){ 
 // 把里面的名字全都加入队列
 queue.enqueue(nameList[i]); 
 } 
 // 给定一个数字，然后迭代队列
 let eliminated = ''; 
 while (queue.size() > 1){
 // 从队列开头移除一项，再将其添加到队列末尾
 for (let i=0; i<num; i++){ 
 queue.enqueue(queue.dequeue()); 
 } 
 // 从队列中移除
 eliminated = queue.dequeue(); 
 
 } 
 return queue.dequeue();// {5} 
}
```

当我们在浏览器中打开新标签时，就会创建一个任务队列，每个标签都是单线程处理所有任务，被称为事件循环。

浏览器负责多个任务，如渲染HTML，执行JavaScript代码，处理用户交互，执行和处理异步请求等。

### 66. 加一

一、题目描述

给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

```
示例 1：

输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。

示例 2：

输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。

示例 3：

输入：digits = [0]
输出：[1]
```

二、思路分析

如果数组末位（个位）小于 9 ，直接个位加 1 返回即可

如果数组末位（个位）等于 9，将该位（个位）设置为 0 ，并且产生了进位，接下来观察前一位（十位）

如果前一位（十位）小于 9 ，直接十位加 1 返回即可

如果前一位（十位）等于 9，将该位（十位）设置为 0 ，并且产生了进位，接下来观察前一位（百位）

```
// 最后一位计算得出新的sum
sum = arr[arr.length - 1] + 1
// 判断sum是否>9
sum > 9 ?
// >9
carry = 1
arr[i] = 0
// <9
arr[arr.length - 1] = sum
return arr
//倒数第二位重复进行上一步的操作

// 当我们完成以后，如果数组第一位时的sum大于0，那么我们就要给数组的首位增添一个1
result = new array with size of arr.length + 1
result[0] = 1
result[1] ...... result[result.length - 1]  = 0
```

三、答案代码

```
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    //先遍历从右向左
    for(let i = digits.length-1;i>=0;i--){
        if(digits[i] !==9){
            digits[i]++
            return digits;
        }else{
            // 是 9
            digits[i] = 0
        }
    }

    let result = [1,...digits];
    return result;
};
```

```
var plusOne = function (digits) {
  var carry = 1; // 我们将初始的 +1 也当做是一个在个位的 carry
  for (var i = digits.length - 1; i > -1; i--) {
    if (carry) {
      var sum = carry + digits[i];
      digits[i] = sum % 10;
      carry = sum > 9 ? 1 : 0; // 每次计算都会更新下一步需要用到的 carry
    }
  }
  if (carry === 1) {
    digits.unshift(1); // 如果carry最后停留在1，说明有需要额外的一个长度 所以我们就在首位增添一个 1
  }
  return digits;
};
```

四、总结

> 加一，队列题解

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