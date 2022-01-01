---
title: '力扣 (LeetCode)-栈,括号生成'
date: 2021-03-06 00:44:24
tags:
	- LeetCode
	- 算法
categories:
	- LeetCode
	- 前端
keywords: "LeetCode"
description: "栈,括号生成"
cover: https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe22fe0d371945a6b707aade6e8ce07e~tplv-k3u1fbpfcp-watermark.image
top_img:
---

## 前言

❤️笔芯❤️~

### 栈

栈是一种 **后进先出** 的有序集合。新添加或待删除的元素都保存在栈的同一端，叫做栈顶，另外一端叫栈底。

> 创建栈

创建一个类来表示栈：(如何使用Stack类)

```
function Stack() {
 // 各种属性和方法的声明
}
```

声明数组，保存栈里的元素：

```
let items = []
```

- `push()`，添加一个或几个新元素到栈顶
- `pop()`，移除栈顶的元素，同时返回被移除的元素
- `peek()`，返回栈顶的元素，不对栈做任何修改
- `isEmpty()`，如果栈里没有任何元素就返回true，否则返回false
- `clear()`，移除栈里的所有元素
- `size()`，返回栈里的元素个数

> 向栈添加元素（往栈里添加新元素）

示例：

```
// 只添加元素到栈顶，也就是栈的末尾
this.push = function(element) {
 items.push(element);
});
```

> 从栈移除元素（移出的是最后添加进去的元素）

示例：

```
this.pop = function() {
 return items.pop();
};
```

> 查看栈顶元素（用于想找到栈里面最后添加的元素是什么）

示例，返回栈顶的元素：

```
this.peek = function() {
 return items[items.length-1];
};
```

> 检查栈是否为空

如果栈为空的话将返回true，否则就返回false。

示例：

```
this.isEmpty = function() {
 return items.length == 0;
};
```

返回栈的长度：

```
this.size = function() {
 return items.length;
};
```

> 清空和打印栈元素

`clear`方法用来移除栈里所有的元素，把栈清空。

```
this.clear = function() {
 items = [];
};
```

把栈里的元素都输出来：

```
this.print = function() {
 console.log(item.toString());
};
```

### 使用Stack类

初始化Stack类：

```
let stack = new Stack(); 
console.log(stack.isEmpty()); //输出为true
```

往栈里添加一些元素

```
stack.push(1); 
stack.push(2);
```

如果调用peek方法，将会输出2

```
console.log(stack.peek()); //输出2
```

### 如何用ES6声明Stack类

代码：

```
// 在类的构造函数constructor里声明, ES6的类是基于原型的。
class Stack {
 constructor() {
  this.items = [];
 }
 push(element) {
  this.items.push(element);
 }
}
```

> 基于原型的类比基于函数的类更节省内存，也更适合创建多个实例，却不能够声明私有属性或方法。

- 用`ES6`的限定作用域`Symbol`实现类

`ES6`新增了一种叫做`Symbol`的基本类型，它是不可变的，可以用作对象的属性。

示例：

```
// 声明了Symbol类型的变量_items，在类的constructor函数中初始化它的值
let _items = Symbol();

class Stack {
 constructor() {
  this[_items] = [];
 }
}
```

使用`ES6`新增的`Object.getOwnPropertySymbols`方法能够取到类里面声明的所有`Symbols`属性。

```
let stack = new Stack(); 
stack.push(2); 
stack.push(3); 
let objectSymbols = Object.getOwnPropertySymbols(stack); 
console.log(objectSymbols.length); // 1 
console.log(objectSymbols); // [Symbol()]  数组Symbols属性
console.log(objectSymbols[0]); // Symbol() 
stack[objectSymbols[0]].push(1); 
stack.print(); //输出 2, 3, 1
```

> 访问`stack[objectSymbols[0]]`获得`_items`的，`_items`属性是一个数组，可以进行任意的数组操作。所以不该使用这种方法。

- `ES6`中的`WeakMap`实现类

使用`WeakMap`确保属性是私有的，`WeakMap`可以存储键值对，其中键是对象，值可以是任意数据类型。

示例：

```
// 声明了一个WeakMap类型的变量items
const items = new WeakMap(); // 谁都可以改动它

class Stack { 
 constructor () { 
 // 在constructor中，以this为键，把代表栈的数组存入items
 items.set(this, []);
 } 
 push(element) { 
 // 从WeakMap中取出值，即以this为键从items中取值
 let s = items.get(this);
 s.push(element); 
 } 
 pop() { 
 let s = items.get(this); 
 let r = s.pop(); 
 return r; 
 } 
 //其他方法
}
```

> `itmes`在`Stack`类里是真正的所有属性了。

使用闭包：

```
// 当Stack函数里的构造函数被调用时，会返回Stack类的一个实例
let Stack = (function () { 
 const items = new WeakMap(); 
 class Stack { 
   constructor () { 
   	items.set(this, []); 
   } 
   //其他方法
  }
  return Stack; //当被调用时，会返回Stack类的一个实例
})();
// 使用这种方法，扩展类无法继承私有属性
```

### 十进制转二进制问题算法

示例：

```
function divideBy2(decNumber){ 
 var remStack = new Stack(), 
 rem, 
 binaryString = ''; 
 while (decNumber > 0){ 
   rem = Math.floor(decNumber % 2);  
   remStack.push(rem); 
   decNumber = Math.floor(decNumber / 2); 
 } 
 while (!remStack.isEmpty()){ 
   binaryString += remStack.pop().toString(); 
 } 
 return binaryString; 
}
```

### 十进制转换成任何进制

示例：

```
function baseConverter(decNumber, base){ 
 var remStack = new Stack(), 
 rem, 
 baseString = '', 
 // 多了digits
 digits = '0123456789ABCDEF'; 
 // 基数
 while (decNumber > 0){ 
 rem = Math.floor(decNumber % base); 
 remStack.push(rem); 
 decNumber = Math.floor(decNumber / base); 
 } 
 
 while (!remStack.isEmpty()){ 
 baseString += digits[remStack.pop()]; 
 } 
 return baseString; 
}
```

### 两数之和

解题思路：

- 暴力法
- 哈希表法

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b8898a51248a4c0ead8f999ef3f99420~tplv-k3u1fbpfcp-watermark.image)

示例伪代码：

```
func(nums,target) -> []
result = []; [0,1] 长度为2
for i in [0, len(nums)]; // 不动
for j in [i+1, len(nums)]; // 移动
sum = nums[i]+nums[j];
if sm == target;
result[0] = i
result[1] = j
result result
```

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0b940412e60842ce9bd4e81edcff0311~tplv-k3u1fbpfcp-watermark.image)

伪代码：

```
func(nums, target) -> [];
result = []
map = HashTable()

for i in [0, len(nums)];
 map.add(nums[i], i);

for j in [0, len(nums)];
 diff = target - nums[j]
 if(map.containskey(diff) and map.get(diff) != j)
  result[0] = j
  result[1] = map.get(diff)
  return result
```

### 两数相加

- 迭代法
- 递归法

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3405339a7b464903a92584889d2c97fc~tplv-k3u1fbpfcp-watermark.image)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4e65fd9d352c4a9da261a70c8f397fab~tplv-k3u1fbpfcp-watermark.image)

伪代码：

```
func (l1, l2) -> Listnode
total = 0 // 两个相加的和是多少
next1 = 0 // 下一个进位

result = ListNode()
cur = result

while (l1 != null and l2 != null);
total = l1.val + l2.vale + next1

cur.next = ListNode(total%10)
next1 = total / 10

l1 = l1.next
l2 = l2.next
cur = cur.next

while l1 != null
 total = l1.val + next1
 cur.next = ListNode(total%10)
 nextl = total / 10
 l1 = l1.next
 cur = cur.next
 
while l2 != null
 total = l2.val + next1
 cur.next = ListNode(total%10)
 next1 = total / 10
 l2 = l2.next
 cur = cur.next
 
if next1 ! = 0
 cur.next = ListNode(next1)
 return reult.next
```

递归法：

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8a9a3a8f1b0c498da63d22ca9b56fe7b~tplv-k3u1fbpfcp-watermark.image)

伪代码：

```
func (l1, l2) -> ListNode
 total = l1.val + l2.val
 next1 = total / 10
 res = ListNode(total % 10)
 if( l1.next != null or l2.next != null or next1 != 0 )
  if(l1.next ! = null)
   l1 = l1.next
  else
   l2 = ListNode(0)
   
  if(l2.next != null)
   l2 = l2.next
  else
   l2 = ListNode(0)
   
  l1.val = l1.val + next1
  res.next = fun(l1,l2)
 return res
```

### 有效的括号

栈的解法：

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/59ad696bbb224fdb8506e2a5ef835cbc~tplv-k3u1fbpfcp-watermark.image)

```
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

### 合并两个有序链表

- 迭代法
- 递归法

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dc99f9068b304c94890ceed680e0ce1a~tplv-k3u1fbpfcp-watermark.image)

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ac1fc18beaca4868a6ce46d013e5cc3f~tplv-k3u1fbpfcp-watermark.image)

```
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
```

### 22. 括号生成

一、题目描述

数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

```
示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]

示例 2：

输入：n = 1
输出：["()"]

提示：

1 <= n <= 8
```

二、思路分析

- 回溯法

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27b55b1514404374b68d72848b2a670f~tplv-k3u1fbpfcp-watermark.image)

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13681ae4c85240a2a0a648bb8c680fe4~tplv-k3u1fbpfcp-watermark.image)

伪代码：

```
fun(n) -> []
 result = []
 backtracking(n,result,0,0, "")
 return result
 backtracking(n,result,left,right,str) -> void
 
 if right > left
 return
 if left == right == n
 result.add(str)
 return
 
 if left<n
 backtracking(n,result,left+1,right,str+"(")
 if right<left
 backtracking(n,result,left,right+1,str+")")
```

三、答案代码

示例：

```
/**
 * @param {number} n
 * @return {string[]}
 * @param l 左括号已经用了几个
 * @param r 右括号已经用了几个
 * @param str 当前递归得到的拼接字符串结果
 * @param res 结果集
 */
const generateParenthesis = function (n) {
  const res = [];

  function dfs(l, r, str) {
    if (l == n && r == n) {
      return res.push(str);
    }
    // l 小于 r 时不满足条件 剪枝
    if (l < r) {
      return;
    }
    // l 小于 n 时可以插入左括号，最多可以插入 n 个
    if (l < n) {
      dfs(l + 1, r, str + "(");
    }
    // r < l 时 可以插入右括号
    if (r < l) {
      dfs(l, r + 1, str + ")");
    }
  }
  dfs(0, 0, "");
  return res;
};
```

四、总结

> 栈,括号生成分析

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