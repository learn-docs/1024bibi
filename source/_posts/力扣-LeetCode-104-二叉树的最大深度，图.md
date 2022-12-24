---
title: 力扣 (LeetCode)-104. 二叉树的最大深度，图
date: 2021-03-13 00:50:49
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

> 栈，队列，链表，集合，字典和散列表，树

### 图

- 图是网络结构的抽象模型。
- 图是一组由边连接的节点（或顶点）
- 一个图`G=(V,E)`由`V:一组顶点，E:一组边，连接V中的顶点`
- 由一条边连接在一起的顶点称为相邻顶点
- 一个顶点的度是其相邻顶点的数量
- 路径是顶点`v1, v2,…,vk`的一个连续序列，其中`vi和vi+1`是相邻的
- 简单路径要求不包含重复的顶点（环也是一个简单路径）
- 如果图中不存在环，则称图为无环的，如果图中每两个顶点间都存在路径，则该图是连通的
- 图可以是无向的（边没有方向）或是有向的（有向图）
- 如果图中每两个顶点间在双向上都存在路径，则该图是强连通的
- 图还可以是未加权的或是加权的

> 邻接矩阵

每个节点都和一个整数相关联，该整数将作为数组的索引。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8a4a6c3a6a7f437c9e3d1d3b48a57005~tplv-k3u1fbpfcp-watermark.image)

如果索引为i的节点和索引为j的节点相邻，则`array[i][j] === 1，否则array[i][j] === 0`

> 邻接表

- 邻接表的动态数据结构来表示图
- 邻接表由图中每个顶点的相邻顶点列表所组成

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7c75be5048e3479f89ff50517dba7b98~tplv-k3u1fbpfcp-watermark.image)

> 关联矩阵

- 使用关联矩阵来表示图
- 在关联矩阵中，矩阵的行表示顶点，列表示边
- 关联矩阵用于边的数量比顶点多的情况下，以节省空间和内存

> 创建`Graph`类

```
function Graph(){
// 使用一个数组来存储图中所有顶点的名字
 var vertices = [];
 // 一个字典来存储邻接表
 var adjList = new Dictionary();
}
```

- 字典将会使用顶点的名字作为键，邻接顶点列表作为值

1. 一个用来向图中添加一个新的顶点
2. 一个方法用来添加顶点之间的边

```
this.addVertex = function(v){ 
// 将该顶点添加到顶点列表中
 vertices.push(v); //法接受顶点v作为参数
 adjList.set(v, []); 
 //在邻接表中，设置顶点v作为键对应的字典值为一个空数组 
};
```

```
this.addEdge = function(v, w){ 
// 接受两个顶点作为参数
 adjList.get(v).push(w); 
 //通过将w加入到v的邻接表中，我们添加了一条自顶点v到顶点w的边 
 adjList.get(w).push(v); //添加一条自w向v的边 
};
```

```
var graph = new Graph(); 
var myVertices = ['A','B','C','D','E','F','G','H','I']; 
//创建了一个数组，包含所有我们想添加到图中的顶点 

for (var i=0; i<myVertices.length; i++){ 
//遍历vertices数组并将其中的值逐一添加到我们的图中

 graph.addVertex(myVertices[i]); 
} 

graph.addEdge('A', 'B'); 
//添加想要的边
graph.addEdge('A', 'C'); 
graph.addEdge('A', 'D'); 
graph.addEdge('C', 'D');
```

实现一下`Graph`类的`toString`方法

```
this.toString = function(){ 
 var s = ''; // 构建了一个字符串
 
 for (var i=0; i<vertices.length; i++){ //迭代vertices数组列表
 
 s += vertices[i] + ' -> '; 
 //将顶点的名字加入字符串中
 var neighbors = adjList.get(vertices[i]); //取得该顶点的邻接表
 
 for (var j=0; j<neighbors.length; j++){ //迭代该邻接表
 //将相邻顶点加入我们的字符串
 s += neighbors[j] + ' '; 
 } 
 // 邻接表迭代完成后，给我们的字符串添加一个换行符
 s += '\n'; //{13} 
 } 
 return s; 
};
```

> 图的遍历

- 广度优先搜索`（Breadth-First Search，BFS）`
- 深度优先搜索`（Depth-First Search，DFS）`

广度优先搜索算法和深度优先搜索算法，**只有一点不同**，那就是**待访问顶点列表的数据结构。**

> 图遍历的思想方法（指出第一个被访问的顶点）

必须追踪每个第一次访问的节点，并且追踪有哪些节点还没有被完全探索

**深度优先搜索**算法，数据结构是**栈**，通过**将顶点存入栈中**，**顶点是沿着路径被探索的**，**存在新的相邻顶点就去访问**

**广度优先搜索**算法，数据结构是**队列**，通过**将顶点存入队列中**，最先入队列的**顶点先被探索**

- **白色**，表示该顶点还没有被访问
- **灰色**，表示该顶点被访问过，但并未被探索过
- **黑色**，表示该顶点被访问过且被完全探索过

> 务必访问每个顶点最多两次

> 广度优先搜索算法会从指定的第一个顶点开始遍历图，先访问其所有的相邻点，就像一次访
问图的一层（就是先宽后深地访问顶点）

示例：

```
// 执行此初始化操作
var initializeColor = function(){ 
// 都需要标注被访问过的顶点
 var color = []; 
 // 使用一个辅助数组color
 
 for (var i=0; i<vertices.length; i++){ 
 color[vertices[i]] = 'white'; //开始执行时，所有的顶点颜色都是白色
 } 
 return color; 
};

// 接受一个顶点作为算法的起始点 接受一个回调
this.bfs = function(v, callback){ 
 var color = initializeColor(), 
 //用initializeColor函数来将color数组初始化为white 
 
 queue = new Queue(); //还需要声明和创建一个Queue实例
 
 queue.enqueue(v); //将会存储待访问和待探索的顶点
 
 while (!queue.isEmpty()){ //如果队列非空 
 var u = queue.dequeue(), //将通过出队列 
 // 操作从队列中移除一个顶点
 neighbors = adjList.get(u); 
 //取得一个包含其所有邻点的邻接表
 
 color[u] = 'grey'; //该顶点将被标注为grey
 // 表示我们发现了它，但未完成对其搜索
 
 for (var i=0; i<neighbors.length; i++){ //每个邻点 
 var w = neighbors[i]; //取得其值
 
 if (color[w] === 'white'){ 
 //如果它还未被访问过
 color[w] = 'grey'; //则将其标注为我们已经发现了它 
 queue.enqueue(w); //将这个顶点加入队列中 
 } 
 } 
 color[u] = 'black'; 
 // 当完成探索该顶点和其相邻顶点后，我们将该顶点标注为已探索过的 
 if (callback) { //如果我们传递了回调函数
 callback(u); // 会用到它
 } 
 } 
};
```

- 使用`BFS`寻找最短路径

题：给定一个图`G`和源顶点`v`，找出对每个顶点`u`，`u和v`之间最短路径的距离（以边的数量计）。

思路：对于给定顶点`v`，广度优先算法会访问所有与其距离为`1`的顶点，接着是距离为`2`的顶点，以此类推。

- 从`v`到`u`的距离`d[u]`；
- 前溯点`pred[u]`，用来推导出从`v`到其他每个顶点`u`的最短路径。

```
this.BFS = function(v){ 
 var color = initializeColor(), 
 queue = new Queue(), 
 d = [], //声明数组d
 // 表示距离
 
 pred = []; //及pred数组来表示前溯点
 
 queue.enqueue(v); 
 for (var i=0; i<vertices.length; i++){
 d[vertices[i]] = 0; //图中的每一个顶点，用0来初始化数组d 
 pred[vertices[i]] = null; //用null来初始化数组pred 
 } 
 
 while (!queue.isEmpty()){ 
 var u = queue.dequeue(), 
 neighbors = adjList.get(u); 
 color[u] = 'grey'; 
 
 for (i=0; i<neighbors.length; i++){ 
 var w = neighbors[i]; 
 if (color[w] === 'white'){ 
 color[w] = 'grey'; 
 d[w] = d[u] + 1; 
 //通过给d[u]加1来设置v和w之间的距离
 
 pred[w] = u; //发现顶点u的邻点w时，则设置w的前溯点值为u
 queue.enqueue(w); 
 } 
 
 } 
 color[u] = 'black'; 
 } 
 return { //返回了一个包含d和pred的对象 
 distances: d, 
 predecessors: pred 
 }; 
};
```

> 深度优先搜索，将会从第一个指定的顶点开始遍历图，沿着路径直到这条路径最后一个顶
点被访问了，接着原路回退并探索下一条路径（它是先深度后广度地访问顶点）

- 访问顶点`v`

1. 标注`v`为被发现的（灰色）。
2. 对于`v`的所有未访问的邻点`w`，访问顶点`w`，标注`v`为已被探索的（黑色）。

示例：

```
// 实现一下深度优先算法
this.dfs = function(callback){ 
 var color = initializeColor(); //创建颜色数组
 
 for (var i=0; i<vertices.length; i++){ 
 //用值white为图中的每个顶点对其做初始化 
 if (color[vertices[i]] === 'white'){ 
 //调用私有的递归函数dfsVisit，传递的参数为顶点、颜色数组以及回调函数 
 dfsVisit(vertices[i], color, callback);
 } 
 } 
}; 

var dfsVisit = function(u, color, callback){ 
 color[u] = 'grey'; //标注其为被发现的
 
 if (callback) { //则执行该函数输出已访问过的顶点
 callback(u); 
 } 
 var neighbors = adjList.get(u); //取得包含顶点u所有邻点的列表
 for (var i=0; i<neighbors.length; i++){ 
 //对于顶点u的每一个未被访问过 的邻点w
 var w = neighbors[i];  
 if (color[w] === 'white'){   
 dfsVisit(w, color, callback); //将调用dfsVisit函数，传递w和其他参数
 // 添加顶点w入栈
 } 
 } 
 color[u] = 'black'; //在该顶点和邻点按深度访问之后，我们回退
 // 该顶点已被完全探索，并将其标注为black
};
```

-  探索深度优先算法

1. 顶点`u`的发现时间`d[u]`；
2. 当顶点`u`被标注为黑色时，`u`的完成探索时间`f[u]`；
3. 顶点`u`的前溯点`p[u]`

> 最短路径算法

- `Dijkstra` 算法，是一种计算从单个源到所有其他源的最短路径的贪心算法

题图：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d5e9dd389eb34fdbb2f86793e6f00ff0~tplv-k3u1fbpfcp-watermark.image)

示例：

```
// 看Dijkstra算法
this.dijkstra = function(src) { 
 var dist = [], visited = [], 
 
 length = this.graph.length; 
 
 for (var i = 0; i < length; i++) { //把所有的距离（dist）初始化为无限大
 dist[i] = INF; 
 visited[i] = false; 
 // 将visited[]初始化为false
 } 
 
 dist[src] = 0; //把源顶点到自己的距离设为0
 
 for (var i = 0; i < length-1; i++) { //要找出到其余顶点的最短路径
 
 var u = minDistance(dist, visited); //需要从尚未处理的顶点中选出距离最近的顶点
 
 visited[u] = true; //选出的顶点标为visited，以免重复计算
 
 for (var v = 0; v < length; v++) { 
 if (!visited[v] && 
 this.graph[u][v] != 0 && dist[u] != INF && 
 dist[u] + this.graph[u][v] < dist[v]) { 
 //如果找到更短的路径，则更新最短路径的值
 
 dist[v] = dist[u] + this.graph[u][v]; 
 } 
 } 
 } 
 return dist; //处理完所有顶点后，返回从源顶点（src）到图中其他顶点最短路径的结果
};
```

```
// 搜索dist数组中的最小值，返回它在数组中的索引
var minDistance = function(dist, visited) { 
 var min = INF, minIndex = -1; 
 for (var v = 0; v < dist.length; v++) { 
 if (visited[v] == false && dist[v] <= min) { 
 min = dist[v]; 
 minIndex = v; 
 } 
 } 
 return minIndex; 
};
```

- `Floyd-Warshall`算法是一种计算图中所有最短路径的动态规划算法

```
// 找出从所有源到所有顶点的最短路径

this.floydWarshall = function() { 
 var dist = [], 
 length = this.graph.length, 
 i, j, k; 
 
 for (i = 0; i < length; i++) { 
 //把dist数组初始化为每个顶点之间的权值，
 //因为i到j可能的最短距离就是这些顶点间的权值 
 
 dist[i] = []; 
 for (j = 0; j < length; j++) { 
 dist[i][j] = this.graph[i][j]; 
 } 
 } 
 for (k = 0; k < length; k++) { //通过k，得到i途径顶点0至k，到达j的最短路径
 for (i = 0; i < length; i++) { 
 for (j = 0; j < length; j++) { 
 if (dist[i][k] + dist[k][j] < dist[i][j]) { //核心
 //判断i经过顶点k到达j的路径是否比已有的最短路径更短 
 dist[i][j] = dist[i][k] + dist[k][j]; //如果是更短的路径，则更新最短路径的值
 } 
 } 
 } 
 } 
 return dist; 
};
```

> 最小生成树（要在n个岛屿之间建造桥梁，想用最低的成本实现所有岛屿相互连通）

最小生成树的算法：`Prim`算法和`Kruskal`算法

### 104. 二叉树的最大深度

一、题目描述

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/041513965a904b4fb297f96354f229ad~tplv-k3u1fbpfcp-watermark.image)

二、思路分析

- 递归（树是一种递归的数据结构）

二叉数的遍历主要有前中后遍历和层次遍历。 前中后属于 `DFS`，层次遍历属于 `BFS`

`DFS` 都可以使用栈来简化操作，并且其实树本身是一种递归的数据结构，因此递归和栈对于 `DFS` 来说是两个关键点

- 队列

- 队列中用 `Null`(一个特殊元素)来划分每层，或者在对每层进行迭代之前保存当前队列元素的个数

- 树的基本操作- 遍历 - 层次遍历（`BFS`）

- 标签：`DFS`

- 找出终止条件：当前节点为空

- 找出返回值：节点为空时说明高度为 0，所以返回 0；节点不为空时则分别求左右子树的高度的最大值，同时加1表示当前节点的高度，返回该数值

- 某层的执行过程：在返回值部分基本已经描述清楚

- 时间复杂度：`O(n)O(n)`

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4693b72d2a1641c3aecf9304f2941396~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/743f7eb7f3d34c8e898fbee0521f5d8f~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4b642bb3fee44337b752b13be6c82fde~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/59e27c339742480d958c0a424c4c145f~tplv-k3u1fbpfcp-watermark.image)


三、答案代码

```
/**
 * @param {TreeNode} root
 * @return {number}
 */
 
var maxDepth = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  // 层次遍历 BFS
  let cur = root;
  const queue = [root, null];
  let depth = 1;

  while ((cur = queue.shift()) !== undefined) {
    if (cur === null) {
      // 注意： 不处理会无限循环，进而堆栈溢出
      if (queue.length === 0) return depth;
      depth++;
      queue.push(null);
      continue;
    }
    const l = cur.left;
    const r = cur.right;

    if (l) queue.push(l);
    if (r) queue.push(r);
  }

  return depth;
```

```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) {
        return 0;
    } else {
        const left = maxDepth(root.left);
        const right = maxDepth(root.right);
        return Math.max(left, right) + 1;
    }
};
```

四、总结

> 二叉树的最大深度，图

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