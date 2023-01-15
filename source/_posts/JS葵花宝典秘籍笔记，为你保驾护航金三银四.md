---
title: JS葵花宝典秘籍笔记，为你保驾护航金三银四
tags:
  - JavaScript
  - 面试
categories:
  - 掘金
keywords: JS葵花宝典秘籍笔记，为你保驾护航金三银四
description: JS葵花宝典秘籍笔记，为你保驾护航金三银四
cover: >-
  https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4a2df0d96e70426999600f22db443b2d~tplv-k3u1fbpfcp-watermark.image
abbrlink: 7d7073eb
date: 2021-04-16 08:34:59
top_img:
---

> 前端葵花宝典秘籍，为你保驾护航金三银四

[Github来源：](https://github.com/webVueBlog/WebFamily) | 求星星 ✨ | 给个❤️关注，❤️点赞，❤️鼓励一下作者

> 种草一句话：越努力，越幸运！以现在大多数人的努力程度之低，根本轮不到可以拼天赋。

分享一下前端面试秘籍，希望能够帮助更多的小伙伴。加我😚即可交流问题（不是大佬，互相学习，创造良好的学习环境）。以下哪些你不懂呢？

- 首先关注公众号：微信搜：程序员哆啦A梦
- QQ群1：711613774（已满）
- QQ群2：634382181
- 微信号：xiaoda0423(备注发送：已关注掘金魔王哪吒)

### 一面

一面的问题不是很难，但是要得到面试官比较高的评价，还是需要一定的表达能力和对技术比较本质的认识的，如果在回答问题的时候能够做一些适当的扩展，自然会让面试官对你有不一样的评价。

回答问题的步骤：先回答问题本质，在回答具体细节，最后做一些平时编程中的扩展。面试官会觉得你确实是在这个技术上面下过功夫的。

### 二面

问题都比较直接，答案也是知道就知道，不知道就不知道。这些问题一部分是基础，一部分是根据你的专业技能的来提问的。

在面试中有一些回答不出来很正常，但是如果能够做到出乎面试官的意料，也是面试官对你很重要的加分项。

### 三面

会问项目多一点，对自己做过的项目一定要深入，包括使用使用到的技术原理、为什么要使用这些技术。

项目中某个比较重要的点是如何实现的（需要深入技术的原理），遇到的最大困难是什么（有哪些），你怎么解决的？如果需要扩展某个功能，如何降低系统的耦合度，如果针对某个功能进行优化，你会怎么设计和优化。

### 四面

主要看你的潜力（就是有没有培养的价值），但是从你平时的学习中仍然是可以看得出来的。

### 五面

诚信至上，所以在简历中不要存在任何虚假信息，企图通过虚假信息得到面试机会的后果得不偿失。对自己的是否一个明确的职业规划，表达能力、与同事相处的能力以及对工作的态度。

### `arguments[]`函数参数数组

`arguments[]`数组只定义在函数体中。

在函数体中，**`arguments`指代该函数的`Arguments`对象**。该对象拥有数值属性，可当做数组来用，含有传入到该函数的所有参数。**`arguments`标识符本质上是一个局部变量**，在每个函数中会**自动声明并初始化该变量**。

`arguments`仅在函数体中时，才指代`Arguments`对象，在全局代码中为`undefined`。

`Arguments`函数的参数和其他属性。

`Arguments`对象只定义函数体中，从技术上来说，`Arguments`对象不是数组，但它拥有数值属性和`length`属性。

数值类型可当做是数组元素，`length`属性则表示数组元素的个数，这些数组元素是传递给该方法的参数值。元素0是第一个参数，元素1是第二个参数等等。

所有作为参数传入的值都会变成`Arguments`对象的数组元素，即使在函数声明中没有指定参数名。

`callee`和`length`属性。

1. callee属性 指代当前正在执行的函数
2. length属性 传递给函数的参数个数，以及Arguments对象中数组元素的个数

### `Arguments` 对象

`arguments` 是一个对应于传递给函数的参数的类数组对象。

示例：

```
function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3
}

func1(1, 2, 3);
```

可以被转换为一个真正的Array：

```
var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);

// ES2015
const args = Array.from(arguments);
const args = [...arguments];
```

`Arguments`对象的主要用途：

- 用来判断有多少个参数传入函数，还可以用来指代未命名的参数
- 除了数组元素和length属性，还可以通过callee属性来指代匿名函数本身。

> Arguments.callee当前正在执行的函数

`arguments.callee`，指代**当前正在执行的函数**，通过它可以**引用匿名函数自身**。该属性只定义在函数体中。

示例：

```
// 在匿名函数内使用callee属性来引用匿名函数自身
var fn = function(x) {
 if(x<2) return 1;
 else return x * arguments.callee(x-1)
}
var y = fn(5); // 120
```

> Arguments.length传给函数的参数个数

`arguments.length`，`Arguments`对象的`length`属性表示给当前函数的参数个数。该属性只能定义在函数体中。

该属性表示的是实际传入的参数个数，不是声明的参数个数。

示例：

```
alert("实参长度：" +arguments.length);
alert("形参长度： " +arguments.callee.length);

// 使用Arguments对象来检查传入参数个数的正确性
function check(args) {
 var actual = args.length; // 实际的参数个数
 var expected = args.callee.length; // 期待的参数个数
 if( actual != expected ) {
  throw new Error("参数个数有误，期望值:" + expected + ";实际值:" + actual);
 }
}
function fn(x,y,z) {
 check(arguments); // 检查参数个数的正确性
 return x+y+z;
}
```

### `Object.keys()`

`Object.keys()` 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 。

语法

```
Object.keys(obj)
```

参数

`obj`

要返回其枚举自身属性的对象。

**返回值**

一个表示给定对象的所有可枚举属性的字符串数组。

示例：

```
// simple array
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array like object with random key ordering
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable
var myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  }
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']
```

### `Object.getOwnPropertyNames()`

`Object.getOwnPropertyNames()`方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括`Symbol`值作为名称的属性）组成的数组。

语法`Object.getOwnPropertyNames(obj)`

**参数**

`obj`

一个对象，其自身的可枚举和不可枚举属性的名称被返回。

**返回值**

在给定对象上找到的自身属性对应的字符串数组。

示例：

```
var arr = ["a", "b", "c"];
console.log(Object.getOwnPropertyNames(arr).sort()); // ["0", "1", "2", "length"]

// 类数组对象
var obj = { 0: "a", 1: "b", 2: "c"};
console.log(Object.getOwnPropertyNames(obj).sort()); // ["0", "1", "2"]

// 使用Array.forEach输出属性名和属性值
Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
  console.log(val + " -> " + obj[val]);
});
// 输出
// 0 -> a
// 1 -> b
// 2 -> c

//不可枚举属性
var my_obj = Object.create({}, {
  getFoo: {
    value: function() { return this.foo; },
    enumerable: false
  }
});
my_obj.foo = 1;

console.log(Object.getOwnPropertyNames(my_obj).sort()); // ["foo", "getFoo"]
```

### `Object.create()`

`Object.create()`方法创建一个新对象，使用现有的对象来提供新创建的对象的`__proto__`。

```
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"
```

语法`Object.create(proto，[propertiesObject])`

**参数**

`proto`

新创建对象的原型对象。

`propertiesObject`

可选。需要传入一个对象，该传入对象的自有可枚举属性(即其自身定义的属性，而不是其原型链上的枚举属性)将为新创建的对象添加指定的属性值和对应的属性描述符。

**返回值**

一个新对象，带着指定的原型对象和属性。

**例外**

如果`propertiesObject`参数是 `null` 或非原始包装对象，则抛出一个 `TypeError` 异常。

**用 `Object.create`实现类式继承**

```
// Shape - 父类(superclass)
function Shape() {
  this.x = 0;
  this.y = 0;
}

// 父类的方法
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - 子类(subclass)
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// 子类续承父类
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?',
  rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?',
  rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
```

如果你希望能继承到多个对象，则可以使用混入的方式。

```
function MyClass() {
     SuperClass.call(this);
     OtherSuperClass.call(this);
}

// 继承一个类
MyClass.prototype = Object.create(SuperClass.prototype);
// 混合其它
Object.assign(MyClass.prototype, OtherSuperClass.prototype);
// 重新指定constructor
MyClass.prototype.constructor = MyClass;

MyClass.prototype.myMethod = function() {
     // do a thing
};
```

`Object.assign` 会把  `OtherSuperClass` 原型上的函数拷贝到 `MyClass` 原型上，使 `MyClass` 的所有实例都可用 `OtherSuperClass` 的方法。

**使用 `Object.create 的 propertyObject`参数**

```
var o;

// 创建一个原型为null的空对象
o = Object.create(null);


o = {};
// 以字面量方式创建的空对象就相当于:
o = Object.create(Object.prototype);


o = Object.create(Object.prototype, {
  // foo会成为所创建对象的数据属性
  foo: {
    writable:true,
    configurable:true,
    value: "hello"
  },
  // bar会成为所创建对象的访问器属性
  bar: {
    configurable: false,
    get: function() { return 10 },
    set: function(value) {
      console.log("Setting `o.bar` to", value);
    }
  }
});


function Constructor(){}
o = new Constructor();
// 上面的一句就相当于:
o = Object.create(Constructor.prototype);
// 当然,如果在Constructor函数中有一些初始化代码,Object.create不能执行那些代码


// 创建一个以另一个空对象为原型,且拥有一个属性p的对象
o = Object.create({}, { p: { value: 42 } })

// 省略了的属性特性默认为false,所以属性p是不可写,不可枚举,不可配置的:
o.p = 24
o.p
//42

o.q = 12
for (var prop in o) {
   console.log(prop)
}
//"q"

delete o.p
//false

//创建一个可写的,可枚举的,可配置的属性p
o2 = Object.create({}, {
  p: {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true
  }
});
```

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/91ffabe9cbaf4f9bbb34842a9232281e~tplv-k3u1fbpfcp-watermark.image)

### vue准备工作

- 学习认识flow，Vuejs源码目录设计，Vuejs源码构建，从入口开始（了解Vue准备）。
- `Flow`是`facebook`出品的`JavaScript`静态类型检查工具。
- `Vue`的源码利用了`flow`做了静态类型检查。

flow的工作方式：

通常类型检查分为2种：第一种：类型推断；第二种：类型注解。

什么是类型推断呢？

> 通过变量的使用上下文来推断出变量类型。

什么是类型注解呢？

> 事先注解好想要的类型，flow会基于这些注解来判断。

在Vuejs的主目录下有`.flowconfig`文件，是`flow`的配置文件，`[libs]`部分是用来描述包含指定库定义的目录。

`flow`文件夹目录：

1. `compiler.js`编译相关
2. `component.js`组件数据结构
3. `global-api.js`global api结构
4. `modules.js`第三方库定义
5. `options.js`选项相关
6. `ssr.js`服务端渲染相关
7. `vnode.js`虚拟node相关

了解Vue.js源码目录src下：

1. `compiler`编译相关
2. `core`核心代码
3. `platforms`不同平台的支持
4. `server`服务端渲染
5. `sfc`-`.vue`文件解析
6. `shared`共享代码

> Vuejs源码是基于Rollup构建的。

### Vue 初始化过程

推荐：[Vue 初始化过程](https://juejin.cn/post/6950084496515399717#heading-0)

init流程图

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/18d4b4b10a214dff9e7258e4e0167df7~tplv-k3u1fbpfcp-watermark.image)

Vue的本质：其实就是一个用Function实现的Class，通过它的原型prototype以及它本身扩展的一系列的方法和属性。

对数据渲染的过程有了更深的一层理解，从`new Vue()`开始，创建了一个vue是对象，会先进行`init初始化——>$mount()——>compile(若已经是render则该过程不需要)——>render——>创建VNode——>patch过程——>生成真实的DOM`

> `null`

如果想要任意类型`T`可以为`null`或者是`undefined`，只需写为`?T`的格式。

```
var foo: string = null
// 可以是字符串，也可以是null
```

### Vue项目中为什么要在列表组件中写key，其作用是什么

key是给每个vnode的唯一的id，可以依靠key，更准确，更快的拿到oldVnode中对应的vnode节点。

### `['1','2','3'].map(parseInt)`

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c87cff028c4545759b2c288c11c1101f~tplv-k3u1fbpfcp-watermark.image)

答案是`[1,NaN,NaN]`，为什么不是`[1,2,3]`呢？

map函数的第一个参数callback，这个callback一共可以接收三个参数，其中第一个参数代表当前被处理的元素，而第二个参数代表该元素的索引。

```
arr.map(callback: (value:T, index: number, array: T[]) => U, thisArg?:any);
```

- parseInt是用来解析字符串的，使得字符串成为指定基数的整数。接收两个参数，第一个表示被处理的值（字符串），第二个表示为解析时的基数。

```
parseInt(string, radix);
```

`parseINT('1', 0)` 表示 radix 为0时，且string参数不以"0x"和"0"开头时，按照10为基数进行处理，返回为1。

`parseInt('2',1)`，基数为1，（1进制），表示的数中，最大值小于2，所以无法解析，返回为NaN。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/38f843428dc04af48a22f05c1d0b2027~tplv-k3u1fbpfcp-watermark.image)

### 什么是防抖和节流

防抖，字面意思放置的手抖再次触发。

```
onReachBottom() {
    this.timer && clearTimeout(this.timer)
    this.timer = setTimeout(this.getMoreList, 300)
},
```

触发高频事件后n秒后函数只会执行一次，如果n秒内高频事件再次被触发，则需要重新计算时间。

```
// 掘金：魔王哪吒
// 实现input实时搜索

function debounce(fn) {
 let timeout = null
 // 创建一个标记用来存放定时器的返回值
 return function() {
  clearTimeout(timeout)
  // 每当用户输入的时候把前一个setTimeout clear掉
  timeout = setTimeout(() => {
   // 创建一个新的setTimeout，这样就能保证输入字符串后的interval间隔内如果还有字符输入的话，就不会执行fn函数
   fn.apply(this, arguments);
  },500)
 }
}

function sayHi() {
 console.log('防抖成功')
}
var inp = document.getElementById('inp');
inp.addEventListener('input',debounce(sayHi)); // 防抖
```

节流，字面节约流量，高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执 行频率。

```
// 掘金：魔王哪吒
function throttle(fn) {
 let canRun = true; // 通过闭包保持一个标记
 return function() {
  if(!canRun) return
  // 在函数开头判断标记是否为true，不为true则return
  canRun = false // 立即设置为false
  setTimeout(() => {
   fn.apply(this,argument);
   // 最后在setTimeout执行完毕后再把标记设置为true表示可以执行下一次循环了，当定时器没有执行的时候标记为false
   canRun = true
  },500)
 }
}

function sayHi(e) {
 console.log(e.target.innerWidth, e.target.innerHeight)
}
window.addEventListener('resize', throttle(sayHi));
```

### Set, Map, WeakSet, WeakMap

set，对象允许你**存储任何类型的唯一值**，无论是原始值或者是对象引用

weakset，成员都是**对象**，成员都是**弱引用**，可以**被垃圾回收机制回收**，可以用来**保存DOM节点**，**不容易造成内存泄漏**。

Map，本质上是**键值对的集合**，类似集合，可以遍历，方法很多，可以跟各种数据格式转换。

WeakMap，**只接收对象为键名**（null除外），不接收其他类型的值作为键名，**键名是弱引用，键值可以是任意的**，**键名**所指向的对象可以被**垃圾回收**，此时键名是无效的，不能遍历，方法有get，set，has，delete

### 深度优先遍历和广度优先遍历

深度优先遍历

指从某个顶点出发，首先访问这个顶点，然后找出刚访问 这个结点的第一个未被访问的邻结点，然后再以此邻结点为顶点，继续找它的 下一个顶点进行访问。重复此步骤，直至所有结点都被访问完为止。

广度优先遍历

是从某个顶点出发，首先访问这个顶点，然后找出刚访问这个结点所有未被访问的邻结点，访问完后再访问这些结点中第一个邻结点的所有结点，重复此方法，直到所有结点都被访问完为止。

```
//1.深度优先遍历的递归写法
function deepTraveral(node) {
 let nodes = []
 if(node != null) {
  nodes.push[node]
  let childrens = node.children
  for(let i=0; i<childrens.length; i++) deepTraversal(childrens[i])
 }
 return nodes
}
```

```
//2.深度优先遍历的非递归写法
function deepTraversal(node) {
 let nodes = []
 if(node != null) {
  let stack = []
  // 用来存放将来要访问的节点
  stack.push(node)
  while(stack.length != 0) {
   let item = stack.pop()
   // 正在访问的节点
   nodes.push(item)
   let childrens = item.children
   for(let i = childrens.length-1; i>=0; i--) stack.push(childrens[i])
   // 将现在访问点的节点的子节点存入stack，供将来访问
  }
 }
 return nodes
}
```

```
//3.广度优先遍历的递归写法
function wideTraversal(node) {
 let nodes = [], i = 0
 if(node != null) {
  nodes.push(node)
  wideTraversal(node.nextElementSibling)
  node = nodes[i++]
  wideTraversal(node.firstElementChild)
 }
 return nodes
}
```

```
//4.广度优先遍历的非递归写法
function wideTraversal(node) {
 let nodes = [], i=0
 while(node != null) {
  nodes.push(node)
  node = nodes[i++];
  let childrens = node.children
  for(let i=0; i<childrens.length; i++) {
   nodes.push(childrens[i])
  }
 }
 return nodes
}
```

### 实现一个拷贝函数？

`Object.prototype.toString()`

`toString()` 方法返回一个表示该对象的字符串。

```
function Dog(name) {
  this.name = name;
}

const dog1 = new Dog('掘金魔王哪吒');

Dog.prototype.toString = function dogToString() {
  return `${this.name}`;
};

console.log(dog1.toString());
// expected output: "掘金魔王哪吒"
```

语法

```
obj.toString()
// 返回值
// 一个表示该对象的字符串。
```

每个对象都有一个 `toString()` 方法，当该对象被表示为一个文本值时，或者一个对象以预期的字符串方式引用时自动调用。默认情况下，`toString()` 方法被每个 `Object` 对象继承。如果此方法在自定义对象中未被覆盖，`toString()` 返回 `"[object type]"`，其中 `type` 是对象的类型。

```
var o = new Object();
o.toString(); // returns [object Object]
```

> 使用 `toString()` 检测对象类型

可以通过 `toString()` 来获取每个对象的类型。为了每个对象都能通过 `Object.prototype.toString()` 来检测，需要以 `Function.prototype.call()` 或者 `Function.prototype.apply()` 的形式来调用，传递要检查的对象作为第一个参数，称为 `thisArg`。

示例：

```
var toString = Object.prototype.toString;

toString.call(new Date); // [object Date]
toString.call(new String); // [object String]
toString.call(Math); // [object Math]

//Since JavaScript 1.8.5
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
```

`Function.prototype.call()`

`call()` 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数。

`call()` 方法接受的是一个参数列表

示例：

```
// 掘金：魔王哪吒
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// expected output: "cheese"
```

语法

```
function.call(thisArg, arg1, arg2, ...)
```

`thisArg`

可选的。在 `function` 函数运行时使用的 `this` 值。请注意，this可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 `null 或 undefined` 时会自动替换为指向全局对象，原始值会被包装。

`arg1, arg2, ...`

指定的参数列表。

**返回值**

使用调用者提供的 `this` 值和参数调用该函数的返回值。若该方法没有返回值，则返回 `undefined`。

**描述**

`call()` 允许为不同的对象分配和调用属于一个对象的函数/方法。

`call()` 提供新的 `this` 值给当前调用的函数/方法。你可以使用 `call` 来实现继承：写一个方法，然后让另外一个新的对象来继承它（而不是在新对象中再写一次这个方法）。

**使用 call 方法调用父构造函数**

示例：

```
// 掘金：魔王哪吒
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
```

`Function.prototype.apply()`

`apply()` 方法调用一个具有给定`this`值的函数，以及以一个数组（或类数组对象）的形式提供的参数。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5623b879ea9049edbee5e7e435ba9568~tplv-k3u1fbpfcp-watermark.image)

语法

```
// 掘金：魔王哪吒
func.apply(thisArg, [argsArray])
```

**参数**

`thisArg`

必选的。在 func 函数运行时使用的 this 值。请注意，this可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 `null 或 undefined` 时会自动替换为指向全局对象，原始值会被包装。

`argsArray`

可选的。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 func 函数。如果该参数的值为 `null 或  undefined`，则表示不需要传入任何参数。从`ECMAScript 5` 开始可以使用类数组对象。

**返回值**

调用有指定`this`值和参数的函数的结果。

**描述**

在调用一个存在的函数时，你可以为其指定一个 this 对象。 this 指当前对象，也就是正在调用这个函数的对象。 使用 apply， 你可以只写一次这个方法然后在另一个对象中继承它，而不用在新对象中重复写该方法。

**用 apply 将数组各项添加到另一个数组**

```
// 掘金：魔王哪吒
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
```

`Function.prototype.bind()`

`bind()` 方法创建一个新的函数，在 `bind()` 被调用时，这个新函数的 `this` 被指定为 `bind()` 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

```
// 掘金：魔王哪吒
const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42
```

语法

```
// 掘金：魔王哪吒
function.bind(thisArg[, arg1[, arg2[, ...]]])
```

**返回值**

返回一个原函数的拷贝，并拥有指定的 this 值和初始参数。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3cadfa2db34c4bdda6597c04f4fcd01e~tplv-k3u1fbpfcp-watermark.image)

**创建绑定函数**

```
// 掘金：魔王哪吒
this.x = 9;    // 在浏览器中，this 指向全局的 "window" 对象
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();
// 返回 9 - 因为函数是在全局作用域中调用的

// 创建一个新函数，把 'this' 绑定到 module 对象
// 新手可能会将全局变量 x 与 module 的属性 x 混淆
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81
```

在默认情况下，使用 `window.setTimeout()` 时，`this` 关键字会指向 `window` （或 `global`）对象。当类的方法中需要 `this` 指向类的实例时，你可能需要显式地把 `this` 绑定到回调函数，就不会丢失该实例的引用。

**将一个类似于数组的对象转换成一个真正的数组**

```
// 掘金：魔王哪吒
var slice = Array.prototype.slice;

// ...

slice.apply(arguments);
```

`Array.prototype.slice()`

`slice()` 方法返回一个新的数组对象，这一对象是一个由 `begin 和 end` 决定的原数组的浅拷贝（包括 `begin`，不包括`end`）。原始数组不会被改变。

```
// 掘金：魔王哪吒
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
```

语法

```
// 掘金：魔王哪吒
arr.slice([begin[, end]])
```

**返回值**

一个含有被提取元素的新数组。

描述

slice 不会修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组。原数组的元素会按照下述规则拷贝：

如果该元素是个对象引用 （不是实际的对象），slice 会拷贝这个对象引用到新的数组里。两个对象引用都引用了同一个对象。如果被引用的对象发生改变，则新的和原来的数组中的这个元素也会发生改变。

对于字符串、数字及布尔值来说（不是 String、Number 或者 Boolean 对象），slice 会拷贝这些值到新的数组里。在别的数组里修改这些字符串或数字或是布尔值，将不会影响另一个数组。

如果向两个数组任一中添加了新元素，则另一个不会受到影响。

**类数组（Array-like）对象**

slice 方法可以用来将一个类数组（`Array-like`）对象/集合转换成一个新数组。你只需将该方法绑定到这个对象上。 一个函数中的  arguments 就是一个类数组对象的例子。

```
// 掘金：魔王哪吒
function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
```

除了使用 `Array.prototype.slice.call(arguments)`，你也可以简单的使用 `[].slice.call(arguments)` 来代替。

**可以使用 bind 来简化该过程**

```
// 掘金：魔王哪吒
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);

function list() {
  return slice(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
```

**环状数据**

```
// 掘金：魔王哪吒
const obj = {
  foo: {
    name: 'foo',
    bar: {
      name: 'bar'
      baz: {
        name: 'baz',
        aChild: null  //待会让它指向obj.foo
      }
    }
  }
}
obj.foo.bar.baz.aChild = obj.foo // foo->bar->baz->aChild->foo 形成环
JSON.stringify(obj) // => TypeError: Converting circular structure to JSON
```

拷贝这样封闭的环状数据结构，会导致死循环

**先说说什么是深拷贝与浅拷贝**

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c8edc63f67144562b422554df2ed9537~tplv-k3u1fbpfcp-watermark.image)

浅拷贝：也就是拷贝A对象里面的数据，但是不拷贝A对象里面的子对象

深拷贝：会克隆出一个对象，数据相同，但是引用地址不同（就是拷贝A对象里面的数据，而且拷贝它里面的子对象）

**浅拷贝和深拷贝的区别**

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2a97e85b061b4df3b9567539f2ae326a~tplv-k3u1fbpfcp-watermark.image)

推荐: [请分别用深度优先思想和广度优先思想实现一个拷贝函数？ 每日一题系列(六)](https://blog.csdn.net/qq_46299172/article/details/108545861)

### **uniapp实现小程序微信登录**

推荐：[企业微信开放平台注册流程](https://jingyan.baidu.com/article/86112f130c459c6736978737.html)

推荐：[uniapp实现小程序微信登录](https://juejin.cn/post/6922822292678541325)

```
<button open-type="getUserInfo"/>
```

补充：`app`生成签名证书

`testalias 和 test.keystore中的'test'`都是可以修改的，可以替换为自己项目中的名字。输入下面的`keytool -genkey`命令就可以生成证书了

```
keytool -genkey -alias testalias -keyalg RSA -keysize 2048 -validity 36500 -keystore test.keystore
```

用签名生成工具生成签名

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f168728ee5a841ff87e72852dc6bccdb~tplv-k3u1fbpfcp-watermark.image)

`uniapp的mainfest.json`文件配置中，`appid必须是'_UNI_'`开头，所以你的配置文件中得是`'_UNI_'`开头的。

推荐：[小程序静默登录方案设计](https://juejin.cn/post/6933082931653148680)

推荐：[小程序用户登录架构设计](https://juejin.cn/post/6945264484491460638)

> 登录方案

- `Cookie + Session` 登录
- `Token` 登录
- `SSO` 单点登录
- `OAuth` 第三方登录

`SSO` 单点登录，适用于中大型企业，想要统一内部所有产品的登录方式的情况。

### 实现垂直居中

```
// 掘金：魔王哪吒
flex
margin: 0 auto
```

### canvas如何实现按比例沾满全屏

- `document.documentElement.clientWidth`: 可见区域宽度;
- `document.documentElement.clientHeight`: 可见区域高度。
- `canvas.width = document.documentElement.clientWidth`
- `canvas.height = document.documentElement.clientHeight`
- `screen.availWidth`：屏幕可用宽度；
- `screen.availHeight`：屏幕可见高度。
- `canvas.width = screen.availWidth; `
- `canvas.height = screen.availHeight;`
- `screen.width：屏幕显示宽度`
- `screen.height：屏幕显示高度`
- `canvas.width = screen.width`
- `canvas.height = screen.height`
- `window.innerWidth：窗口的宽度`
- `window.innerHeight：窗口的高度`
- `canvas.width = window.innerWidth`
- `canvas.height = window.innerHeight`

### Vue2.0

Vue源码根目录下文件夹：

- `build`打包相关的配置文件，根据不同的入口，打包为不同的文件
- `dist`打包之后文件所在位置
- `examples`部分示例
- `flow`，因Vue使用了`Flow`来进行静态类型检查，这里是定义了声明一些静态类型
- `packages`，分别生成其他的`npm`包
- `src`，主要源码所在位置
- `compiler`模板解析的相关文件
- `codegen`根据`ast`生成`render`函数
- `directives`通用生成`render`函数之前需要处理的指令
- `parser`模板解析
- `core`核心代码
- `components`全局组件
- `global-api`全局方法
- `instance`实例相关内容，包括实例方法，生命周期，事件等
- `observer`双向数据绑定相关文件
- `util`工具方法
- `vdom`虚拟`dom`相关
- `entries`入口文件，也就是`build`文件夹下`config.js`中配置的入口文件
- `platforms`平台相关的内容
- `web`，`web`端独有文件
- `compiler`编译阶段需要处理的指令和模块
- `runtime`运行阶段需要处理的组件，指令和模块
- `server`服务端渲染相关
- `util`工具库
- `weex`，`weex`端独有文件
- `shared`共享的工具方法
- `test`测试用例

### 从入口文件查看Vue源码

先看`package.json`文件，有项目的依赖，有开发环境，生产环境等编译的启动脚本，有项目的许可信息等。来看看：`npm run dev`：

```
// 掘金：魔王哪吒
"dev": "rollup -w -c build/config.js --environment TARGET:web-full-dev"
```

`rollup`是一个类似于webpack的打包工具，入口文件：`/src/entries/web-runtime-with-compiler.js`

```
// 掘金：魔王哪吒
/src/entries/web-runtime-with-compiler.js   
--> /src/entries/web-runtime.js    
--> /src/core/index.js    
--> /src/core/instance/index.js
```

定义Vue对象它的构造函数及其简单：

```
// 掘金：魔王哪吒
function Vue (options) {
 // 判断是不是生产环境
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)) {
    //如果不是通过new关键字来创建对象的话
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
```

Vue的静态方法和实例方法:

```
// src/core/index.js
Vue.version = '__VERSION__'

// src/entries/web-runtime-with-compiler.js
Vue.compile = compileToFunctions    
// 把模板template转换为render函数

// src/core/global-api 
// 在目录结构中，Vue的静态方法大多都是在该文件夹中定义的

// src/core/global-api/index.js
Vue.config 
Vue.util 
Vue.set
Vue.delete
Vue.nextTick
Vue.options = {
  components: {KeepAlive: KeepAlive}
  directives: {},
  filters: {},
  _base: Vue
}

// src/core/global-api/use.js
Vue.use

// src/core/global-api/mixin.js
Vue.mixin

// src/core/global-api/extend.js
Vue.extend

// src/core/global-api/assets.js
Vue.component
Vue.directive
Vue.filter
```

```
vm._uid // 自增的id
vm._isVue // 标示是vue对象，避免被observe
vm._renderProxy // Proxy代理对象
vm._self // 当前vm实例

vm.$parent // 用于自定义子组件中，指向父组件的实例
vm.$root // 指向根vm实例
vm.$children // 当前组件的子组件实例数组
vm.$refs 

vm._watcher = null
vm._inactive = null
vm._directInactive = false
vm._isMounted = false // 标识是否已挂载
vm._isDestroyed = false // 标识是否已销毁
vm._isBeingDestroyed = false // 标识是否正在销毁

vm._events // 当前元素上绑定的自定义事件
vm._hasHookEvent // 标示是否有hook:开头的事件

vm.$vnode // 当前自定义组件在父组件中的vnode，等同于vm.$options._parentVnode
vm._vnode // 当前组件的vnode
vm._staticTrees // 当前组件模板内分析出的静态内容的render函数数组
vm.$el // 当前组件对应的根元素

vm.$slots // 定义在父组件中的slots，是个对象键为name，值为响应的数组
vm.$scopedSlots = emptyObject
// 内部render函数使用的创建vnode的方法
vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false)
// 用户自定义render方法时，传入的参数
vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)

vm._props // 被observe的存储props数据的对象
vm._data // 被observe的存储data数据的对象
vm._computedWatchers // 保存计算属性创建的watcher对象
```

钩子函数：

- `beforeCreate`，创建之前
- `created`，创建
- `beforeMount`，挂载前
- `mounted`，挂载
- `beforeUpdate`，更新前
- `updated`，更新
- `activated`，触发
- `deactivated`，停用
- `beforeDestroy`，销毁前
- `destroyed`，毁坏

```
// vm.$options
declare type ComponentOptions = {
  // data
  data: Object | Function | void;  // 传入的data数据
  props?: { [key: string]: PropOptions }; // props传入的数据
  propsData?: ?Object;  // 对于自定义组件，父级通过`props`传过来的数据
  computed?: {  // 传入的计算属性
    [key: string]: Function | {
      get?: Function;
      set?: Function;
      cache?: boolean
    }
  };
  methods?: { [key: string]: Function }; // 传入的方法
  watch?: { [key: string]: Function | string };  // 传入的watch

  // DOM
  el?: string | Element;  // 传入的el字符串
  template?: string;  // 传入的模板字符串
  render: (h: () => VNode) => VNode;  // 传入的render函数
  renderError?: (h: () => VNode, err: Error) => VNode;
  staticRenderFns?: Array<() => VNode>;

  // 钩子函数
  beforeCreate?: Function;
  created?: Function;
  beforeMount?: Function;
  mounted?: Function;
  beforeUpdate?: Function;
  updated?: Function;
  activated?: Function;
  deactivated?: Function;
  beforeDestroy?: Function;
  destroyed?: Function;

  // assets
  directives?: { [key: string]: Object }; // 指令
  components?: { [key: string]: Class<Component> }; // 子组件的定义
  transitions?: { [key: string]: Object };
  filters?: { [key: string]: Function }; // 过滤器

  // context
  provide?: { [key: string | Symbol]: any } | () => { [key: string | Symbol]: any };
  inject?: { [key: string]: string | Symbol } | Array<string>;

  // component v-model customization
  model?: {
    prop?: string;
    event?: string;
  };

  // misc
  parent?: Component; // 父组件实例
  mixins?: Array<Object>; // mixins传入的数据
  name?: string; // 当前的组件名
  extends?: Class<Component> | Object; // extends传入的数据
  delimiters?: [string, string]; // 模板分隔符

  // 私有属性，均为内部创建自定义组件的对象时使用
  _isComponent?: true;  // 是否是组件
  _propKeys?: Array<string>; // props传入对象的键数组
  _parentVnode?: VNode; // 当前组件，在父组件中的VNode对象
  _parentListeners?: ?Object; // 当前组件，在父组件上绑定的事件
  _renderChildren?: ?Array<VNode>; // 父组件中定义在当前元素内的子元素的VNode数组（slot）
  _componentTag: ?string;  // 自定义标签名
  _scopeId: ?string;
  _base: Class<Component>; // Vue
  _parentElm: ?Node; // 当前自定义组件的父级dom结点
  _refElm: ?Node; // 当前元素的nextSlibing元素，即当前dom要插入到_parentElm结点下的_refElm前
}
```

### 拿到一个函数的返回值类型，使用TS

```
const func = (): number => 1;
// 声明一个泛型类型别名，返回值与泛型类型相同，入参类型不限制。
type Reverse<T> = (arg: any) => T;
// 声明一个泛型方法，入参arg继承泛型约束，返回空对象并断言其类型为T
function returnResultType<T>(arg: Reverse<T>): T {
 return {} as T;
}
// 调用returnResultType,传入方法(arg: any) => 3，获得result返回值
const result = returnResultType((arg:any) => 3);
// 获取result类型并重名为ResultType
type ResultType = typeof result;
```

### Array

构造函数：

```
new Array()
new Array(size)
new Array(element0, element1, ..., elementn)
```

- `size`设定的数组元素个数。返回数组的`length`属性等于`size`。
- 参数列表,`element0,..,elementn`,当`Array()`构造函数用这些参数调用时，新创建的数组实例会用指定的参数值来初始化，并将`length`属性设置为参数个数。
- 当不带参数调用`Array()`时，返回的数组为空，`length`属性为0。
- `concat()`，把元素衔接到数组中。
- `every()`，测试断言函数是否对每个数组元素都为真。
- `filter()`，返回满足断言函数的数组元素。
- `forEach()`，为数组的每一个元素调用指定函数。
- `indexOf()`，在数组中查找匹配元素。
- `join()`，将数组的所有元素转换为字符串，并衔接起来。
- `lastIndexOf()`，在数组中反向查找。
- `map()`，从数组的元素中，计算出新的数组元素。
- `pop()`，移除数组最后一个元素。
- `push()`，把元素添加到数组尾部。
- `reduce()`，从数组的元素中，计算出一个值。
- `reduceRight()`，从右到左缩减数组。
- `reverse()`，在原数组中颠倒元素的顺序。
- `shift()`，移除数组的第一个元素。
- `slice()`，返回数组的一部分。
- `some()`，测试是否至少有一个数组元素能让断言函数为真。
- `sort()`，在原数组中对数组元素进行排序。
- `splice()`，插入，删除，或替换数组元素。
- `toLocaleString()`，将数组转换为本地字符串。
- `toString()`，将数组转换为字符串。
- `unshift()`，在数组头部插入元素。

### `Array.concat()`

```
array.concat(value, ...)
```

返回值，一个新数组，包含`array`的元素，以及衔接的新元素。

`concat()`会将参数衔接到`array`中得到一个新数组并返回，它不会修改`array`，如果传给`concat()`的某个参数本身是一个数组，则会将该数组的元素衔接到`array`中，而不是数组本身。

```
var a = [1,2,3];
a.concat(4,5); // [1,2,3,4,5];
```

### `Array.every()`测试断言函数是否对每个元素为真

```
array.every(predicate)
array.every(predicate,o)
```

参数：

- `predicate`，用来测试数组元素的断言函数。

- `o`，调用`predicate`时的可选`this`值。

返回值：如果对`array`的每一个元素调用`predicate`时都返回真值，则返回`true`，如果有任何一个元素调用`predicate`时返回假值，则返回`false`。

`every()`方法用来测试数组的所有元素是否都满足某些条件。如果`predicate`的每一次调用都返回`true`，则`every()`返回`true`，否则，为`false`。

当遍历的数组为空时，`every()`返回`true`

```
[1,2,3].every(function(x) { return x<5 ;}) // true
[1,2,3].every(function(x) { return x<3 ;}) // false
[].every(function(x) {return false;}); // true []总是返回true
```

### `Array.filter()`返回通过断言的数组元素

- `array.map(predicate)`
- `array.map(predicate, o)`
- `predicate`，用来判断`array`中的元素是否需要包含在返回数组中的调用函数
- `o`，调用`predicate`时的可选`this`值

返回值：

一个新数组，只包含那些让`predicate`返回真值的数组元素

> `filter()`会创建一个新数组，包含那些让`predicate`函数返回真值的`array`的元素。`filter()`方法不会修改`arrry`本身，注意`predicate`函数有可能会修改。

返回新创建的数组。

### `Array.forEach()`为每一个数组元素调用一个函数

```
array.forEach(f)
array.forEach(f,o)
```

参数

```
f 为array的每一个元素调用的函数
o 调用f时的可选this值
```

返回值：该方法无返回值，注意`forEach()`没有返回值，特别注意，它不会返回`array`。

`forEach(), map(), filter(), every(), some()`接受函数作为第一个参数，并接受可选的第二个参数。在函数体内，this值等于o。

如果没有指定第二个参数，this值在非严格模式下是全局对象，在严格模式下则为`null`。

```
var a = [1,2,3];
a.forEach(function(x,i,a){ a[i]++; }); // [2,3,4]
```

### `Array.indexOf()`查找数组

```
array.indexOf(value)
array.indexOf(value,start)
```

参数：

```
value 要在array中查找的值

start 开始查找的可选数组序号，可以省略，则为0
```

返回值，所在index，如果不存在匹配元素时，返回`-1`

```
判断是否相等使用的是"==="操作符

['a', 'b', 'c'].indexOf('b'); // 1
['a', 'b', 'c'].indexOf('d', 1); // -1
```

### `Array.join()`，将数组元素衔接为字符串

```
array.join()
array.join(separator)
```

- `separator`，在返回的字符串中，用来分隔数组的某个元素与下一个元素的可选字符或字符串。如果省略，默认是英文逗号。

返回值，一个字符串。

```
a = new Array(1,2,3,"test");
s = a.join("+"); // 1+2+3+test
```

### `Array.lastIndexOf()`反向查找数组

```
array.lastIndexOf(value);
array.lastIndexOf(value,start);
```

- `value`，要在`array`中查找的值
- `start`，开始查找的可选数组序号，如果省略，则从最后一个元素开始查找

### `Array.length`数组大小

`length`属性表示数组中的元素个数

> 如果设置的`length`大于原值，数组会变大，新添加到末尾处的元素的值为`undefined`。

### `Array.map()`从数组元素中计算新值

```
array.map(f);
array.map(f,o);
```

- `f`为array的每一个元素调用的函数，它的返回值会成为返回数组的元素。
- `o`-`f`调用时的可选`this`值。

返回值：一个新数组，由函数`f`计算出的元素组成。

```
[1,2,3].map(function(x) { return x*x }); // [1,4,9]
```

### `Array.pop()`移除并返回数组的最后一个元素

```
array.pop()
```

返回值：`array`的最后一个元素

> `pop()`会移除`array`的最后一个元素，缩短数组的长度，并返回所移除元素的值。如果数组已经为空，`pop()`不会修改该数组，返回值为`undefined`。

`pop()`和`push()`，先进后出的栈功能：

```
var stack = []; // stack: []
stack.push(1,2); // stack: [1,2] 返回2
stack.pop(); // stack: [1] 返回2
stack.push([4,5]); // stack: [1, [4,5]] 返回2
stack.pop(); // stack: [1] 返回[4,5]
stack.pop(); // stack: [] 返回1
```

### `Array.push()`给数组追加元素

```
array.push(value,...);
```

返回值：把指定值追加到数组后数组的新长度。(它会直接修改array，而不会创建一个新的数组）

`push()`和`pop()`，先进后出的栈功能。

### `Array.reduce()`从数组元素中计算一个值

```
array.reduce(f);
array.reduce(f,initial);
```

- `f`一个函数，可以合并两个值，并返回一个“缩减”的新值。
- `initial`，用来缩减数组的可选初始值，如果指定该参数，`reduce()`的行为会像把该参数插入`array`的头部一样。

返回值：数组的化简值

示例：

```
[1,2,3,4].reduce(function(x,y) { return x*y; }) // 24
```

### `Array.reduceRight()`从右到左缩减数组

```
array.reduceRight(f)
array.reduceRight(f, initial)
```

- `f`一个函数，可以合并两个值，并返回一个“缩减”的新值。
- `initial`用来缩减数组的可选初始值，如果指定该参数，`reduceRight()`的行为会像是把该参数插入`aray`的尾部一样。

返回值：数组的缩减值，该值是最后一次调用`f`时的返回值。

```
[2,10,60].reduceRight(function(x,y) { return x/y; }) // 3
```

### `Array.reverse()`颠倒数组中的元素顺序

```
array.reverse()
```

> `Array`对象的`reverse()`方法可以颠倒数组元素的顺序。它会在原数组中进行操作，而不会创建一个新数组。

```
a = new Array(1,2,3);
a.reverse();
```

### `Array.shift()`移除数组的第一个元素

```
array.shift()
```

返回值：数组原来的第一个元素。

> 如果数组为空，`shift()`什么也不干，返回`undefined`值，没有创建新数组。

```
var a = [1,[2,3],4];
a.shift(); // 1
```

### `Array.slice()`返回数组的一部分

```
array.slice(start, end)
```

返回值：一个新数组，包含array中从start一直到end之间的所有元素（包含start指定的元素，但不包含end指定的元素），如果没有指定end，返回的数组包含从start到array尾部的所有元素。

```
var a = [1,2,3,4,5];
a.slice(0,3); // 返回 [1,2,3]
a.slice(3); // 返回 [4,5]
```

### `Array.some()`测试是否有元素满足断言函数

```
array.some(predicate)
array.some(predicate,o)
```

- `predicate`用来测试数组元素的断言函数
- `o`调用`predicate`时的可选`this`值

返回值：如果`array`中有至少一个元素调用`predicate`时返回真值，则返回true，如果所有元素调用`predicate`时都返回假值，则返回false。

```
[1,2,3].some(function(x) { return x>5; }); //false
[1,2,3].some(function(x) { return x>2; }); // true
[].some(function(x) { return false; }); // false
```

### `Array.sort()`对数组元素进行排序

```
array.sort()
array.sort(orderfunc)
```

- `orderfunc`用来指定如何排序的可选函数

返回值：该数组的引用。注意是在原数组中进行排序，没有新键数组。数组中的undefined元素会始终排列在数组末尾。

```
function numberorder(a,b) {return a-b;}
a = new Array(3,2,4);
a.sort(); // 字母排序
a.sort(numberorder); // 数值排序
```

### `Array.splice()`插入，删除或替换数组元素

```
array.splice(start,deleteCount,value,...)
```

- `start`开始插入和删除处的数组元素的序号。
- `deleteCount`要删除的元素个数，从`start`开始，并包含`start`处的元素，如果指定为0，表示插入元素，而不用删除任何元素。
- `value,...`要插入数组中的零个或多个值，从`start`序号开始插入。

返回值：

如果从数组中删除了元素，则返回一个新数组，包含这些删除的元素，`splice()`会直接修改数组。

```
var a = [1,2,3,4,5,6];
a.splice(1,2);
```

### `Array.toLocaleString()`将数组转换为本地字符串

```
array.toLocaleString()
```

返回值：数组的本地化字符串表示。（异常，调用该方法时，如果对象不是数组，会抛出异常。）

### `Array.toString()`将数组转化成字符串

```
array.toString()
```

返回值：`array`的字符串表示。（异常，调用该方法时，如果对象不是数组，会抛出异常。）

### `Array.unshift()`在数组头部插入元素

```
array.unshift(value,...)
```

参数：`value,...`，要插入`array`头部的一个或多个值。

返回值：数组的新长度。`unshift()`不会创建新数组，而是直接修改数组本身。

```
var a = [];
a.unshift(1); // a:[1];
```

### `Boolean`对布尔值的支持

构造函数：

```
new Boolean(value) // 构造函数
Boolean(value) // 转换函数
```

参数：`value`，`Boolean`对象存放的值，或要转换成布尔值的值。

- `Boolean()`会将参数转换成布尔值，并返回一个包含该值的`Boolean`对象。
- `0,NaN,null,空字符串""和undefined`都会转成false。
- `toString()`根据`Boolean`对象代表的布尔值返回`"true"或"false"`字符串。
- `valueOf()`返回`Boolean`对象中存放的原始布尔值。
- `Boolean`对象时一个封装布尔值的对象。

> Boolean.toString，将布尔值转换成字符串

```
b.toString()
```

- 调用该方法时，如果对象不是Boolean类型，会抛出异常.

> Boolean.valueOf()，Boolean对象的布尔值

### Date操作日期和时间

```
new Date()
new Date(milliseconds)
new Date(datestring)
new Date(year, month, day, hours, minutes, seconds, ms)
```

不带参数时，`Date()`构造函数将根据当前日期和时间创建一个`Date`对象。

> `Date.getDate()`返回一个Date对象的月份中的日期值

返回：给定Date对象date的月份中的日期值，使用本地时间。返回值1~31之间

> Date.getDay() ，返回值0(星期天)~6(星期一)

> Date.getFullYear()，返回值是一个完整的4位数字的年份

> Date.getHours()，返回一个Date对象的小时值，返回值0~23

> Date.getMilliseconds()，返回一个Date对象的毫秒值

> Date.getMinutes()，返回一个Date对象的分钟值，返回值在0~59之间

> Date.getMonth()，返回一个Date对象的月份值，0(1月)~11(12月)之间

> Date.getSeconds()，返回一个Date对象的秒钟值，0~59之间

> Date.getTime()，将一个Date对象以毫秒形式返回

> Date.getYear()，返回一个Date对象的年份值

> Date.now()，以毫秒的形式返回当前时间

> Date.parse()，解析一个日期或时间字符串

> Date.setDate()设置一个Date对象的一月中的日期值

> Date.setFullYear()设置一个Date的年份值

> Date.setHours()设置一个Date的小时，分钟，秒以及毫秒值

> Date.setMilliseconds()设置一个日期的毫秒值

> Date.setMinutes()设置一个Date的分钟，秒钟，以及毫秒值

> Date.setMonth()设置一个Date的月份以及日期值

> Date.setSeconds()设置一个Date的秒钟以及毫秒值

> Date.setTime()使用毫秒值设置一个时间

> Date.setYear()设置一个Date的年份值

### decodeURI()节码一个URI中的字符

```
decodeURI(uri)
// uri
一个包含已编码的URI或其他待解码的文本的字符串
```

### encodeURI()转义一个URI中的字符

转义一个URI中的字符

### Function函数

```
// 构造函数
new Function(argument_names..., body)

// arguments_names...
任意多个字符串参数

// body
指定函数体的字符串

// 返回
新创建的Function对象

// 异常
SyntaxError
表示在body参数或某个argument_names参数中存在JavaScript语法错误
```

> 属性

```
arguments[]
传递给函数的参数数组，不推荐使用

caller
调用该函数的Function对象的引用，如果是全局调用，则该属性为null，不推荐使用
```

方法：

```
apply()
将函数作为指定对象的方法来调用。传递给它的是指定的参数数组。

bind()
返回一个新函数。

call()
将函数作为指定对象的方法来调用。传递给它的是指定的参数。

toString()
返回函数的字符串表示。
```

> Function.apply()

```
function.apply(调用function的对象/函数体中this/如果参数为null，则使用全局对象，一个值数组)
// 返回
调用函数function的返回值
// 异常
如果调用该函数的对象不是函数，或者参数args不是数组和Arguments对象，会抛出异常
```

示例：

```
Object.prototype.toString.apply(o);

var data=[1,2,3,4,5,34];
Math.max.apply(null,data);
```

> Function.bind()，返回一个作为方法调用的函数

```
function.bind(o)
function.bind(o,args...)
// o 
要绑定到函数上的对象
// args...
要绑定到函数上的零个或多个参数值
// 返回
一个新函数
```

示例：

```
var g = f.bind(o, 1,2);

f.call(o, 1,2,3);
```

> Function.arguments[]传递给函数的参数，不建议使用

> Function.call()将函数作为对象的方法调用

```
function.call(thisobj, args...)

// thisobj
调用function的对象，在函数体中，thisobj是关键字this的值，如果这个参数为null，则使用全局对象
// args..
任意多个参数
// 返回
调用函数function的返回值
```

示例：

```
Object.prototype.toString().call(o);
```

> Function.caller()调用当前函数的函数，该属性不是必需的，不应该使用它

> Function.length()声明的参数的个数

> Function.prototype()对象类的原型

> Function.toString()将函数转换成字符串

返回：表示函数的字符串

### Global全局对象

> 全局属性

全局对象不是一个类，注意，所有全局变量也都是全局对象的属性：

- `Infinity`表示正无穷大的数值
- `NaN`表示不是数值的值
- `undefined`表示`undefined`值

> 全局函数

- `decodeURI()`解码使用`encodeURI()`转义的字符串
- `decodeURIComponent()`解码使用`encodeURIComponent()`转义的字符串
- `encodeURI()`通过转义特定字符对URI编码
- `encodeURIComponent()`通过转义特定字符对URI的组成部分编码
- `escape()`用转义序列替换特定字符来对字符串编码
- `eval()`执行JavaScript代码字符串，返回结果
- `isFinite()`判断一个值是否无穷大
- `isNaN()`判断一个值是否是非数值
- `parseFloat()`从字符串中解析数值
- `parseInt()`从字符串中解析整数
- `unescape()`解码使用`escape()`编码的字符串

> 全局对象

- `Array`
- `Boolean`
- `Date`
- `Error`
- `EvalError`
- `Function`
- `JSON`
- `Math`
- `Number`
- `Object`
- `String`
- `TypeError`
- `URIError`

### NaN非数字属性

NaN是一个全局属性，指向一个特殊的非数字值。`NaN`属性不可用`for/in`循环枚举，也不能用`delete`操作符删除。`NaN`不是常量，不可将它设置为任何其他值。

> 检查一个值是否是数字，使用isNaN()，NaN总是与其他值不相等，它本身也不相等。

### Object包含所有JavaScript对象的特性的超类

```
new Object()
new Object(value)
```

属性：constructor，引用当前对象的构造函数。

方法：

- hasOwnProperty()

检查对象是否拥有一个指定名字的本地定义的属性

- isPrototypeOf()

检查当前对象是不是指定对象的原型

- propertyIsEnumerable()

检查指定名字的属性是否存在并且可以用for/in循环枚举

- toLocaleString()

返回该对象的一个本地化的字符串表示

- toString()

返回该对象的一个字符串表示

- valueOf()

返回当前对象的原始值，如果存在原始值的话。

> 静态方法：

- Object.create()

使用指定的原型及属性创建一个新的对象

- Object.defineProperties()

创建或配置指定对象的一个或多个属性

- Object.defineProperty()

创建或配置指定对象的某个属性

- Object.freeze()

将指定对象设置为不可改变

- Object.getOwnPropertyDescriptor()

查询指定对象的指定属性的特性

- Object.getOwnPropertyNames()

返回要给包含指定对象的所有非继承属性名的数组，包含不可枚举属性

- Object.getPrototypeOf()

返回指定对象的原型

- Object.isExtensible()

检查当前对象是否能添加到新的属性中

- Object.isFrozen()

检查当前对象是否已冻结

- Object.isSealed()

检查指定对象是否为封闭的

- Object.keys()

返回一个包含指定对象的所有非继承可枚举属性名的数组

- Object.preventExtensions()

阻止像指定对象添加新的属性

- Object.seal()

阻止向指定对象添加新属性或删除现有属性

> Object类是JavaScript语言的内置数据类型。它是所有其他JavaScript对象的超类，因此，Object类的所有方法和行为都被其他对象继承了。

### Object.constructor对象的构造函数

所有对象的constructor属性都指向用做当前对象的构造函数的那个函数。如果使用`Array()`构造函数创建一个数组a，则a.constructor是一个`Array`：

```
a = new Array(1,2,3); //创建一个对象
a.constructor == Array // 值为true
```

检测是否是一个数组：

```
function isArray(x) {
 return ((typeof x == "object") && (x.constructor == Array));
}
```

`constructor`属性经常用于检测未知对象的类型。给定一个未知的值，可以使用`typeof`操作符来检查它是一个原始值还是一个对象。

如果它是一个对象，则可以使用`constructor`属性来检查对象的类型。

### Object.create()使用指定的原型和属性来创建一个对象

```
Object.create(proto)
Object.create(proto,descriptors)
```

参数：

```
// proto
新创建对象的原型，可为null
// descriptors
一个可选对象，把属性名映射到属性描述符
// 返回
一个新创建的对象，继承自proto，同时拥有descriptiors所描述的属性
```

示例：

```
// 创建一个对象，有x,y属性，同时继承属性z
var p = Object.create({z:0},{
 x: {value:1,writable: false, enumerable: true, configurable: true},
 y: {value:2,writable: false, enumerable: true, configurable: true},
});
```

> Object.defineProperties();

创建或配置对象的多个属性

```
// o
要在其上创建或配置属性的对象
// descriptors
将属性名映射到属性描述符的对象
// 返回
对象o
```

示例：

```
// 把只读属性x和y添加到新创建的对象中
var p = Object.defineProperties({},{
 x: {value:1,writable: false, enumerable: true, configurable: true},
 y: {value:2,writable: false, enumerable: true, configurable: true},
});
```

> Object.defineProperty()

创建或配置对象的一个属性

```
Object.defineProperty(o, name, desc)
```

参数：

```
// o
将在其上创建或配置属性的对象
// name
将创建或配置的属性的名字
// desc
一个属性描述符对象，描述要创建的新属性或现有属性的修改
// 返回
对象o
```

示例：

```
function constant(o, n, v) {
 // 定义一个值为v的常量o.n
 Object.defineProperty(o, n, {value: v, writable: false, enumerable: true, configurable: false});
}
```

> Object.freeze()

将一个对象设置为不可改变，冻结对象是一个永久性的操作，一旦冻结，就不能解冻。Object.freeze()只设置数据属性的可写特性，那些有对应setter函数的属性不会受到影响，Object.freeze()不会影响继承属性。

> Object.getOwnPropertyDescriptor()

查询一个属性的特性

```
Object.getOwnPropertyDescriptor(o,name)
```

参数：

```
// o 
待查询其属性特性的对象
// name
待查询的属性名
// 返回
指定对象指定属性的一个属性描述符对象，如果不存在指定属性则返回undefined
// 描述
属性描述符是一个对象，描述该属性的特性和值
```

数据属性有一个值以及三个性质：

1. 可枚举型
2. 可读写型
3. 可配置性

访问器属性有一个getter和setter方法，以及可枚举性和可配置性。

数据属性的描述符：

```
{
 value:
 writable:
 enumerable:
 configurable:
}
```

访问器属性的描述符：

```
{
 get:
 set:
 enumerable:
 configurable:
}
```

> Object.getOwnPropertyNames()

返回非继承属性的名字

```
Object.getOwnPropertyNames(o);
// o 一个对象
```

返回，一个包含o的多有非继承属性的名字的数组，包含那些不可枚举的属性

```
Object.getOwnPropertyNames([]) // ["length"]: "length" 不可枚举
```

> Object.getPrototypeOf()

返回一个对象的原型

```
var p = {}, // 一个原始对象
Object.getPrototypeOf(p); // Object.prototype
var o = Object.create(p); // 一个继承p的对象
Object.getPrototypeOf(o); // p
```

> Object.hasOwnProperty()

检查一个属性是否是继承的

示例：

```
var o = new Object(); // 创建一个对象
o.x = 3.14; // 定义一个非继承的本地属性
o.hasOwnProperty("x"); //返回true，x是o的本地属性
o.hasOwnProperty("y"); // false , o没有属性y
o.hasOwnProperty("toString"); //返回false，该属性是继承属性
```

> Object.isExtensible()

判断某个对象上是否可以添加新属性

示例：

```
var o = {}; // 新创建一个对象
Object.isExtensible(o); // true,它是可扩展的
Object.preventExtensions(o); // 将它设置为不可扩展的
Object.isExtensible(o); // false
```

> Object.isFrozen()判断对象是否不可改变

- 如果一个对象的所有非继承属性都是只读的，或者它是封闭的，表示它是冻结的
- 如果可以向一个对象添加新的属性，并且不可删除现有的属性，则称它为封闭的
- Object.isFrozen()检测它的参数是否为冻结状态
- 对象一旦冻结就不能再解冻了

> Object.isPrototypeOf()判断当前对象是否为另一个对象的原型

- 如果object是o的原型则返回true，如果o不是一个对象，或object不是o的原型则返回false。

```
var o = new Object();
Object.prototype.isPrototypeOf(o); // true: o是一个对象
Function.prototype.isPrototypeOf(o.toString); // true，toString是一个函数
Array.prototype.isPrototypeOf([1,2,3]); // true
o.constructor == Object // true
```

> Object.isSealed()判断一个对象的属性是否可添加或删除

- 对象一旦封闭，将没有办法解封
- 封闭一个对象：Object.seal()或Object.freeze()

> Object.keys()返回自有的可枚举的属性名

```
Object.keys({x:1,y:2}); // ["x","y"]
```

> Object.preventExtensions()

禁止在一个对象上添加新的属性

- Object.preventExtensions()将o的可扩展性设置为false，之后将不能向它添加新的属性
- 这是一个永久性的改变

> Object.propertyIsEnumerable()

检测某个属性是否在`for/in`循环中可见

```
var o = new Object();
o.x=12;
o.propertyIsEnumerable("x"); // true
o.propertyIsEnumerable("y"); // false
o.propertyIsEnumerable("toString"); // false
```

> Object.seal()阻止添加或删除对象的属性

> Object.toLocaleString()返回对象的本地化的字符串表示

> Object.toString()定义一个对象的字符串表示形式

> Object.valueOf()给定对象的原始值

> parseFloat()将一个字符串转为数字

> parseInt()将一个字符串转为整数

> String()字符串支持

方法：

- charAt()

取出一个字符串中指定位置的字符

- charCodeAt()

返回一个字符串中指定位置的字符的编码

- concat()

将一个或多个值连接成一个字符串

- indexOf()

在指定字符串中寻找一个字符或字串

- lastIndexOf()

在指定字符串中向后寻找一个字符或字串

- localCompare()

使用本地定义的顺序比较字符串

- replace()

使用正则表达式执行查找与替换操作

- search()

在一个字符串中查找匹配某个正则表达式的字串

- slice()

返回字符串的一个切片或子串

- split()

在指定的分隔符字符串或正则表达式处断开，将一个字符串分隔为由字符串组成的数组

- substr()

提取字符串的一个字串，subString()的一个变体

- substring()

提取字符串的一个字串

- toString()

返回原始的字符串值

- valueOf()

返回原始的字符串值

### 回看笔者往期高赞文章，也许能收获更多喔！

- [TypeScript趁早学习提高职场竞争力](https://juejin.cn/post/6950052678927908901)
- [一个合格的初级前端工程师需要掌握的模块笔记](https://juejin.cn/post/6925197705832562696)
- [前端模拟面试字数过23477万内容](https://juejin.cn/post/6948576107163549732)
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

❤️关注+点赞+收藏+评论+转发❤️

### 点赞、收藏和评论

我是`Jeskson`(达达前端)，感谢各位人才的：**点赞、收藏和评论**，我们下期见！(如本文内容有地方讲解有误，欢迎指出☞**谢谢，一起学习了**)

### 我们下期见！

> 文章持续更新，可以微信搜一搜「 **程序员哆啦A梦** 」第一时间阅读，回复【资料】有我准备的一线大厂资料，本文 http://www.dadaqianduan.cn/#/ 已经收录

> `github`收录，欢迎`Star`：[https://github.com/webVueBlog/WebFamily](https://github.com/webVueBlog/WebFamily)
