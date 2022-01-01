---
title: '力扣 (LeetCode)-对称二叉树,树'
date: 2021-03-12 00:50:21
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

> 栈，队列，链表，集合，字典和散列表

### 树

树是一种分层数据的抽象模型，最常见的树的例子是**家谱**或是**公司的组织架构图**。

- 一个树结构包含一些列存在父子关系的节点
- 位于树顶部的节点叫做根节点，它没有父节点
- 树中的每个元素都叫作节点，节点分内部节点和外部节点
- 至少有一个子节点的节点称为内部节点
- 没有子元素的节点称为外部节点或叶节点
- 子树由节点和它的后代构成
- 节点的一个属性是深度，节点的深度取决于它的祖先节点的数量
- 树的高度取决于所有节点深度的最大值

> 二叉树和二叉搜索树

- 二叉树中的节点最多只能有两个子节点：一个是左侧子节点，另一个是右侧子节点
- 二叉搜索树是二叉树的一种，但是它只允许你在左侧节点**存储小的值**，在右侧节点**存储大的值**

二叉搜索树数据结构

> 创建`BinarySearchTree`类

```
function BinarySearchTree() {
 var Node = function(key){
 // 声明一个Node类来表示树中的每个节点
  this.key = key;
  this.left = null;
  this.right = null;二叉搜索树是二叉树的一种，但是它只允许你在左侧节点存储小的值，在右侧节点存储大的值
二叉搜索树数据结构

创建BinarySearchTree类

function BinarySearchTree() {
 var Node = function(key){
 // 声明一个Node类来表示树中的每个节点
  this.key = key;
  this.left = null;
  this.right = null;
 };

 };
 var root = null;
}
```

- 链表：将通过指针来表示节点之间的关系
- 双向链表：每个节点包含两个指针，一个指向下一个节点，另一个指向上一个节点
- 树，一个指向左侧子节点，另一个指向右侧子节点
- `insert(key)`，向树中插入一个新的键
- `search(key)`，在树中查找一个键，如果节点存在，则返回true；如果不存在，则返回false
- `inOrderTraverse`，通过中序遍历方式遍历所有节点
- `preOrderTraverse`，通过先序遍历方式遍历所有节点
- `postOrderTraverse`，通过后序遍历方式遍历所有节点
- `min`，返回树中最小的值/键
- `max`，返回树中最大的值/键
- `remove(key)`，从树中移除某个键

> 向树中插入一个键

示例：

```
// 向树插入一个新键的算法
// 要向树中插入一个新的节点
this.insert = function(key){ 
 var newNode = new Node(key); //创建用来表示新节点的Node类实例 
 // 只需要向构造函数传递我们想用来插入树的节点值，它的左指针和右指针的值会由构造函数自动设置为null
 if (root === null){ //第二步要验证这个插入操作是否为一种特殊情况。
 //这个特殊情况就是我们要插入的节点是树的第一个节点 
 root = newNode; 
 } else { 
 insertNode(root,newNode); //将节点加在非根节点的其他位置
 } 
};
```

```
// 将节点加在非根节点的其他位置
var insertNode = function(node, newNode){ 
//  传入树的根节点和要插入的节点
 if (newNode.key < node.key){ //如果新节点的键小于当前节点的键 
 if (node.left === null){ //需要检查当前节点的左侧子节点
 // 如果它没有左侧子节点
 node.left = newNode; //就在那里插入新的节点
 } else { 
 // 如果有左侧子节点，需要通过递归调用insertNode方法
 insertNode(node.left, newNode); //继续找到树的下一层
 // 下次将要比较的节点将会是当前节点的左侧子节点
 } 
 } else { 
 if (node.right === null){ 
 //如果节点的键比当前节点的键大，同时当前节点没有右侧子节点
 node.right = newNode; //就在那里插入新的节点
 } else { 
 insertNode(node.right, newNode); 
 //如果有右侧子节点，同样需要递归调用insertNode方法，但是要用来和新节点比较的节点将会是右侧子节点
 } 
 } 
};
```

示例：

```
var tree = new BinarySearchTree(); 
tree.insert(11);
```

> 树的遍历，遍历一棵树是指访问树的每个节点并对它们进行某种操作的过程（中序遍历的一种应用就是对树进行排序操作）

访问树的所有节点有三种方式：**中序、先序和后序**。

- 中序遍历是一种以上行顺序访问`BST`所有节点的遍历方式（就是以从最小到最大的顺序访
问所有节点）

```
// 中序遍历的一种应用就是对树进行排序操作
this.inOrderTraverse = function(callback){ 
// 接收一个回调函数作为参数
// 回调函数用来定义我们对遍历到的每个节点进行的操作
 inOrderTraverseNode(root, callback); //接收一个节点和对应的回调函数作为参数
};
```

```
var inOrderTraverseNode = function (node, callback) { 
 if (node !== null) {
 //要通过中序遍历的方法遍历一棵树，首先要检查以参数形式传入的节点是否为null
 inOrderTraverseNode(node.left, callback); //递归调用相同的函数来访问左侧子节点
 callback(node.key); //接着对这个节点进行一些操作
 inOrderTraverseNode(node.right, callback); //然后再访问右侧子节点
 } 
};
```

```
function printNode(value){ //需要创建一个回调函数 
 console.log(value); 
} 
tree.inOrderTraverse(printNode); 
//调用inOrderTraverse方法并将回调函数作为参数传入
```

- 先序遍历是以优先于后代节点的顺序访问每个节点的。（先序遍历的一种应用是打印一个结构化的文档）

示例:

```
this.preOrderTraverse = function(callback){ 
 preOrderTraverseNode(root, callback); 
}; 

preOrderTraverseNode方法的实现如下：

var preOrderTraverseNode = function (node, callback) { 
 if (node !== null) { 
 callback(node.key); //先序遍历和中序遍历的不同点是，先序遍历会先访问节点本身 
 preOrderTraverseNode(node.left, callback); 
 //然后再访问它的左侧子节点 
 preOrderTraverseNode(node.right, callback); //最后是右侧子节点 
 } 
};
```

- 后序遍历则是先访问节点的后代节点，再访问节点本身。（后序遍历的一种应用是计算一个目录和它的子目录中所有文件所占空间的大小。）

示例：

```
this.postOrderTraverse = function(callback){ 
 postOrderTraverseNode(root, callback); 
}; 

postOrderTraverseNode方法的实现如下：

var postOrderTraverseNode = function (node, callback) { 
 if (node !== null) { 
 postOrderTraverseNode(node.left, callback); //后序遍历会先访问左侧子节点 
 postOrderTraverseNode(node.right, callback); //然后是右侧子节点
 callback(node.key); //最后是父节点本身 
 } 
};
```

> 搜索树中的值

有三种执行的搜索类型：搜索最小值,搜索最大值,搜索特定的值

示例：

```
// 寻找树的最小键的方法
this.min = function() { 
 return minNode(root); //调用了minNode方法
 // 传入树的根节点
};
```

```
var minNode = function (node) { 
// 允许我们从树中任意一个节点开始寻找最小的键
 if (node){ 
 while (node && node.left !== null) { //遍历树的左边
 node = node.left; //遍历树的左边 
 } 
 return node.key; 
 } 
 return null; //直到找到树的最下层
};
```

```
// 实现max方法
this.max = function() { 
 return maxNode(root); 
}; 

var maxNode = function (node) { 
 if (node){ 
 while (node && node.right !== null) { //沿着树的右边进行遍历
 node = node.right; // 直到找到最右端的节点
 } 
 return node.key; 
 } 
 return null; 
};
```

> 搜索一个特定的值

```
// find、search或get方法来查找数据结构中的一个特定的值
this.search = function(key){ 
 return searchNode(root, key); 
 //searchNode方法可以用来寻找一棵树或它的任意子树中的一个特定的值
}; 

var searchNode = function(node, key){ 
 if (node === null){ 
 //先要验证作为参数传入的node是否合法（不是null）。
 //如果是null的话，说明要找的键没有找到，返回false。 
 return false; 
 } 
 if (key < node.key){ //如果要找的键比当前的节点小
 return searchNode(node.left, key); 
 //那么继续在左侧的子树上搜索 
 
 } else if (key > node.key){ 
 //如果要找的键比当前的节点大，那么就从右侧子节点开始继续搜索
 return searchNode(node.right, key); 
 } else { 
 return true; //否则就说明要找的键和当前节点的键相等
 // 就返回true来表示找到了这个键
 } 
};
```

> 移除一个节点

示例：

```
this.remove = function(key){ 
 root = removeNode(root, key); //传入root和要移除的键作为参数
 // root被赋值为removeNode方法的返回值
};
```

```
// removeNode方法的实现

var removeNode = function(node, key){ 

 if (node === null){ 
 //如果正在检测的节点是null，那么说明键不存在于树中，所以返回null
 return null; 
 } 
 
 if (key < node.key) { 
 //如果要找的键比当前节点的值小
  node.left = removeNode(node.left, key); 
  //就沿着树的左边找到下一个节点
  return node; //
 } else if (key > node.key){ 
 //如果要找的键比当前节点的值大 
  node.right = removeNode(node.right, key); 
  //那么就沿着树的右边找到下一个节点
  return node; //
 } else { //键等于node.key 
  //第一种情况——一个叶节点 移除一个叶节点
     if (node.left === null && node.right === null){ 
     //第一种情况是该节点是一个没有左侧或右侧子节点的叶节点
     // 给这个节点赋予null值来移除它
     // 还需要处理指针
       node = null; //  需要通过返回null来将对应的父节点指针赋予null值
       return node; //  值已经是null了，父节点指向它的指针也会接收到这个值
       // 要在函数中返回节点的值的原因
     } 
 
     //第二种情况——一个只有一个子节点的节点
    // 移除有一个左侧或右侧子节点的节点
    
     if (node.left === null){ //如果这个节点没有左侧子节点
      node = node.right; //也就是说它有一个右侧子节点
      // 把对它的引用改为对它右侧子节点的引用
      return node; //并返回更新后的节点
     } else if (node.right === null){ 
     //如果这个节点没有右侧子节点 
      node = node.left; //把对它的引用改为对它左侧子节点的引用 
      return node; //并返回更新后的值 
     } 
 
     //第三种情况——一个有两个子节点的节点
     // 移除有两个子节点的节点
     var aux = findMinNode(node.right); //  

     node.key = aux.key; // 

     node.right = removeNode(node.right, aux.key); // 

     return node; // 
 } 
};
```

> 要移除有两个子节点的节点，需要执行四个步骤

- 当找到了需要移除的节点后，需要找到它右边子树中最小的节点
- 然后，用它右侧子树中最小节点的键去更新这个节点的值
- 继续把右侧子树中的最小节点移除，毕竟它已经被移至要移除的节点的位置了
- 向它的父节点返回更新后节点的引用

```
// 找到了要找的键（键和node.key相等）
var findMinNode = function(node){ 
 while (node && node.left !== null) { 
 node = node.left; 
 } 
 return node; // 在findMinNode中返回了节点
};
```

- 二叉搜索树

> 自平衡树

`BST`存在一个问题：树的一条分支会有很多层，而其他的分支却只有几层的情况。

- `Adelson-Velskii-Landi 树（AVL 树）`
- `AVL`树是一种自平衡二叉搜索树(任何一个节点左右两侧子树的高度之差最多为1)
- `AVL`树的不同之处在于我们需要**检验它的平衡因子**，如果有需要，则将其逻辑应用于树的自平衡
- 计算平衡因子
- 需要对每个节点计算右子树高度`（hr）`和左子树高度`（hl）`的差值，该值`（hr－hl）`应为`0、1或1`
- 如果结果不是这三个值之一，则需要平衡该`AVL`树-这就是平衡因子的概念。

```
// 计算节点高度
var heightNode = function(node) { 
 if (node === null) { 
 return -1;
 } else { 
 return Math.max(heightNode(node.left), 
 heightNode(node.right)) + 1; 
 } 
};

// 替换insertNode方法的行 
if ((heightNode(node.left) - heightNode(node.right)) > 1) { 
 // 旋转 
} 

向右子树插入新节点时，应用同样的逻辑

// 替换insertNode方法的行 
if ((heightNode(node.right) - heightNode(node.left)) > 1) { 
 // 旋转 
}
```
- `AVL`旋转:可以执行单旋转或双旋转两种平衡操作

1. 向左的单旋转
2. 向右的单旋转
3. 向右的双旋转
4. 向左的双旋转

示例：

```
var insertNode = function(node, element) { 

 if (node === null) { 
  node = new Node(element); 
 } else if (element < node.key) { 
  node.left = insertNode(node.left, element); 
     if (node.left !== null) { 
      // 确认是否需要平衡
     } 
 } else if (element > node.key) { 
     node.right = insertNode(node.right, element); 
     if (node.right !== null) { 
      // 确认是否需要平衡
     } 
 } 
 
 return node; 
};
```

### 101. 对称二叉树

一、题目描述

给定一个二叉树，检查它是否是镜像对称的。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cc7dbe6dedca4e7bb0e8aac5f363a143~tplv-k3u1fbpfcp-watermark.image)

二、思路分析

- 用递归：一棵树是对称的 等价于 它的左子树和右子树两棵树是对称的，问题就转变为判断两棵树是否对称。

- 遍历每一个节点的时候，如果我都可以通过某种方法知道它对应的对称节点是谁，这样的话我直接比较两者是否一致就行了。

- 第一次遍历的同时将遍历结果存储到哈希表中，然后第二次遍历去哈希表取。

如果同时满足下面的条件，两个树互为镜像：

- 它们的两个根结点具有相同的值
- 每个树的右子树都与另一个树的左子树镜像对称

我们将根节点的左子树记做 `left`，右子树记做 `right`。比较 `left` 是否等于 `right`，不等的话直接返回就可以了。

如果相当，比较 `left` 的左节点和 `right` 的右节点，再比较 `left` 的右节点和 `right` 的左节点。

终止条件：

- `left 和 right` 不等，或者 `left 和 right` 都为空
- 递归的比较 `left，left` 和 `right.right`，递归比较 `left，right 和 right.left`

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ebf3fea752a14166a6ad86307fdf76ba~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8bbc6109c5a94e0e965717c088976eeb~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cac97e4440134a89aa3717d46932161a~tplv-k3u1fbpfcp-watermark.image)

三、答案代码

```
var isSymmetric = function(root) {
    if(!root) return true;
    var stack = [root.left,root.right];
    while(stack.length){
        var p = stack.pop();
        var q = stack.pop();
        if (p === q) continue;
        if (p && q && p.val === q.val) {
            stack.push(p.left, q.right, p.right, q.left);
        } else {
            return false;
        }
    }
    return true;

};
```

四、总结

> 对称二叉树,树

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