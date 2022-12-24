---
title: '力扣 (LeetCode)-合并两个有序数组,字典,散列表'
date: 2021-03-11 00:48:15
tags:
	- LeetCode
	- 算法
categories:
	- 掘金
keywords: "LeetCode"
description:
cover: https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe22fe0d371945a6b707aade6e8ce07e~tplv-k3u1fbpfcp-watermark.image
top_img:
---

## 前言

❤️笔芯❤️~

> 栈，队列，链表，集合

### 字典和散列表

- 集合，字典，散列表可以存储不重复的值
- 在字典中，使用`[键，值]`的形式来存储数据
- 散列表中也是以`[键，值]`对的形式来存储数据
- 字典中键名是用来查询特定元素的
- 字典数据结构的例子，一个实际的字典，以及一个地址簿

> 创建字典

```
function Dictionary() {
 var items = {};
}
```

使用到的方法：

- `set(key,value)`，向字典中添加新元素
- `delete(key)`，通过使用键值来从字典中移除键值对应的数据值
- `has(key)`，如果某个键值存在于这个字典中，则返回true，反之则返回false
- `get(key)`，通过键值查找特定的数值并返回
- `clear()`，将这个字典中的所有元素全部删除
- `size()`，返回字典所包含元素的数量
- `keys()`，将字典所包含的所有键名以数组形式返回
- `values()`，将字典所包含的所有数值以数组形式返回

> `has`和`set`方法

示例：

```
this.has = function(key) {
 return key in items;
);
```

`set`方法的实现：

```
// 将value设为items对象的key属性的值
this.set = function(key, value) { 
 items[key] = value; 
};
```

> `delete`方法

使用`JavaScript`的`remove`操作符来从`items`对象中移除`key`属性

```
this.delete= function(key) { 
 if (this.has(key)) { 
 delete items[key]; 
 return true; 
 } 
 return false; 
};
```

> `get`和`values`方法

在字典中查找一个特定的项，并检索它的值

```
this.get = function(key) { 
// 通过查找key值
 return this.has(key) ? items[key] : undefined; 
};
```

以数组的形式返回字典中所有`values`实例的值

```
this.values = function() { 
 var values = []; 
 
 for (var k in items) { //遍历items对象的所有属性值
     if (this.has(k)) { 
     // 使用has函数来验证key确实存在
         values.push(items[k]); //将它的值加入values数组
     } 
 } 

 return values; 
};
```

> `clear,size,keys,getItems`方法

示例：

```
this.keys = function() { 
 return Object.keys(items); 
};
```

```
this.getItems = function() { 
 return items; 
}
```

> 使用`Dictionary`类

实现一个电子邮件地址簿：

```
var dictionary = new Dictionary(); 
dictionary.set('da1', 'da1@email.com'); 
dictionary.set('da2', 'da2@email.com'); 
dictionary.set('da3', 'da3@email.com');

console.log(dictionary.has('da1'));
console.log(dictionary.size());
console.log(dictionary.keys()); 
console.log(dictionary.values()); 
console.log(dictionary.get('da2'));

dictionary.delete('da1');
```

### 散列表

- `HashTable`类(`HashMap`类)，它是`Dictionary`类的一种散列表实现方式
- 如果使用散列函数，就知道值的具体位置，因此能够快速检索到该值
- 散列函数的作用是给定一个键值，然后返回值在表中的地址

> 创建散列表

```
// 使用数组来表示我们的数据结构
function HashTable() { 
 var table = []; 
}
```

- `put(key,value)`，向散列表增加一个新的项
- `remove(key)`，根据键值从散列表中移除值
- `get(key)`，返回根据键值检索到的特定的值

示例：

```
// HashTable类中的一个私有方法
var loseloseHashCode = function (key) { 
// 给定一个key参数，我们就能根据组成key的每个字符的ASCII码值的和得到一个数字
// 需要一个变量来存储这个总和
 var hash = 0; 
 
 for (var i = 0; i < key.length; i++) { //遍历key 
 hash += key.charCodeAt(i); 
 //使用JavaScript的String类中的charCodeAt方法 
 } 

 return hash % 37; 
 //为了得到比较小的数值，我们会使用hash值和一个任意数做除法的余数
};
```

实现`put`方法

```
this.put = function(key, value) { 

 var position = loseloseHashCode(key); 
 //根据所创建的散列函数计算出它在表中的位置
 
 console.log(position + ' - ' + key); 
 table[position] = value; 
 //将value参数添加到用散列函数计算出的对应的位置上

};
```

实现一个`get`方法

```
this.get = function (key) { 
// 使用所创建的散列函数来求出给定key所对应的位置
// 根据这个位置从数组table中获得这个值
 return table[loseloseHashCode(key)]; 
};
```

实现一个`remove`方法

```
this.remove = function(key) { 
// 求出元素的位置
 table[loseloseHashCode(key)] = undefined; 
};
```

> 散列表和散列集合

- 可以使用散列集合来存储所有的英语单词
- 散列集合只存储唯一的不重复的值
- 散列集合由一个集合构成，但是插入、移除或获取元素时，使用的是散列函数

示例：

```
// 实现print的方法
this.print = function() { 

 for (var i = 0; i < table.length; ++i) { //遍历数组中的所有元素 
     if (table[i] !== undefined) { //当某个位置上有值的时候
         console.log(i + ": " + table[i]);//输出位置和对应的值
     } 
 } 
};
```

有时候，一些键会有相同的散列值。不同的值在散列表中对应相同位置的时候，我们称其为
冲突。**处理冲突**有几种方法：**分离链接**、**线性探查**和**双散列法**

示例说明一个：分离链接

分离链接法包括为散列表的每一个位置创建一个链表并将元素存储在里面。

```
// 在HashTable类内部定义
var ValuePair = function(key, value){ 
 this.key = key; 
 this.value = value; 
 this.toString = function() { 
 return '[' + this.key + ' - ' + this.value + ']';
 } 
};
```

> `put`方法

```
this.put = function(key, value){ 

 var position = loseloseHashCode(key); 
 
 if (table[position] == undefined) { //将验证要加入新元素的位置是否已经被占据 
 table[position] = new LinkedList(); 
 // 会在这个位置上初始化一个LinkedList类的实例
 } 
 table[position].append(new ValuePair(key, value)); 
 //实现的append方法向LinkedList实例中添加一个ValuePair实例（键和值）
};
```

> `get`方法

```
this.get = function(key) { 

 var position = loseloseHashCode(key); 
 
 if (table[position] !== undefined){ 
 //确定在特定的位置上是否有元素存在 
 //遍历链表来寻找键/值
 var current = table[position].getHead(); //获取链表表头的引用 
 while(current.next){ //从链表的头部遍历到尾部
 // Node链表包含next指针和element属性
 if (current.element.key === key){ 
 //current.element.key来获得Node链表的key属性
 
 return current.element.value; 
 //如果key值相同，就返回Node的值
 } 
 current = current.next; //如果不相同，就继续遍历链表，访问下一个节点
 } 
 //检查元素在链表第一个或最后一个节点的情况
 if (current.element.key === key){
 return current.element.value; 
 } 
 } 
 return undefined;  
};
```

`WeakMap` 类和 `WeakSet` 类

- 弱化版本，`WeakSet和WeakMap`
- `Map和Set`与其弱化版本之间，`WeakSet或WeakMap类没有entries、keys和values`等方法
- 只能用对象作为键
- 除非你知道键，否则没有办法取出值

> 简单算法：0001两数之和 👍，0020. 有效的括号 👍,0021. 合并两个有序链表，0026. 删除排序数组中的重复项,0053. 最大子序和,0066. 加一 

### 88. 合并两个有序数组

一、题目描述

给你两个有序整数数组 `nums1 和 nums2`，请你将 `nums2` 合并到 `nums1` 中，使 `nums1` 成为一个有序数组。

初始化 `nums1 和 nums2` 的元素数量分别为 `m 和 n` 。你可以假设 `nums1` 的空间大小等于 `m + n`，这样它就有足够的空间保存来自 `nums2` 的元素。

```
输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]

输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
```

二、思路分析

其实这是一个归并的过程，也是归并排序中最核心的一步。对于两个有序的数组。我们可以新建一个数组`temp`，大小为（`m+n`）。使用两个指针`i和j分别指向nums1和nums2`，之后分别比较两个指针所指元素的大小，并把小的那一个放到`temp`中即可。待一个数组遍历完之后，只需将剩下的元素放到`temp`中即可。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5b44b63d2c43494c99d532de6b8007a5~tplv-k3u1fbpfcp-watermark.image)

- 标签：从后向前数组遍历
- 因为 `nums1` 的空间都集中在后面，所以从后向前处理排序的数据会更好，节省空间，一边遍历一边将值填充进去
- 设置指针 `len1 和 len2` 分别指向 `nums1 和 nums2` 的有数字尾部，从尾部值开始比较遍历，同时设置指针 `len` 指向 `nums1` 的最末尾，每次遍历比较值大小之后，则进行填充
- 当 `len1<0` 时遍历结束，此时 `nums2` 中获取数据未拷贝完全，将其直接拷贝到 `nums1` 的前面，最后得到结果数组
- 时间复杂度：`O(m+n)O(m+n)`

- 双指针

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0a0257a4ba8c48c7a359ad671125ecce~tplv-k3u1fbpfcp-watermark.image)

1. 写指针 current， 用于记录当前填补到那个位置了
2. m 用于记录 nums1 数组处理到哪个元素了
3. n 用于记录 nums2 数组处理到哪个元素了

- 灰色代表 num2 数组已经处理过的元素
- 红色代表当前正在进行比较的元素
- 绿色代表已经就位的元素

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0e0307d7c20447e09f3c6e592c51a562~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d3bc6e0693064c02b97f2d452b80d8d0~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ca5e212d9f1e4740810709587e763f16~tplv-k3u1fbpfcp-watermark.image)

三、答案代码

```
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let len1 = m - 1;
    let len2 = n - 1;
    let len = m + n - 1;
    while(len1 >= 0 && len2 >= 0) {
        // 注意--符号在后面，表示先进行计算再减1，这种缩写缩短了代码
        nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
    }
    function arrayCopy(src, srcIndex, dest, destIndex, length) {
        dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length));
    }
    // 表示将nums2数组从下标0位置开始，拷贝到nums1数组中，从下标0位置开始，长度为len2+1
    arrayCopy(nums2, 0, nums1, 0, len2 + 1);
};
```

```
var merge = function (nums1, m, nums2, n) {
  // 设置一个指针，指针初始化指向nums1的末尾（根据#62，应该是index为 m+n-1 的位置，因为nums1的长度有可能更长）
  // 然后不断左移指针更新元素
  let current = m + n - 1;

  while (current >= 0) {
    // 没必要继续了
    if (n === 0) return;

    // 为了方便大家理解，这里代码有点赘余
    if (m < 1) {
      nums1[current--] = nums2[--n];
      continue;
    }

    if (n < 1) {
      nums1[current--] = nums1[--m];
      continue;
    }
    // 取大的填充 nums1的末尾
    // 然后更新 m 或者 n
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[current--] = nums1[--m];
    } else {
      nums1[current--] = nums2[--n];
    }
  }
};
```


总结

> 合并两个有序数组,字典,散列表

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