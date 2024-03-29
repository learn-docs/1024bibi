---
title: TypeScript趁早学习提高职场竞争力
tags:
  - TypeScript
categories:
  - 掘金
keywords: TypeScript
description: TypeScript趁早学习提高职场竞争力
cover: >-
  https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7dae4478722a4703a8e9e07cd80328d4~tplv-k3u1fbpfcp-watermark.image
abbrlink: 7048a9f3
date: 2021-04-12 10:16:10
top_img:
---

## 前言

希望可以通过这篇文章，能够给你得到帮助。(感谢一键三连)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/00ff65c5b18347718b845d657d204652~tplv-k3u1fbpfcp-zoom-1.image)

### 还不抓紧学TypeScript

TS：以JavaScript为基础构建的语言；可以在如何支持JavaScript的平台中执行；一个JavaScript的超集，TypeScript扩展了JavaScript，并添加了类型；TS不能被JS解析器直接执行。

TypeScript增加了一些类型，支持ES的新特性，添加ES不具备的新特性，丰富的配置选项，强大的开发工具。

学习TS，记得下载Node.js哦~

使用npm全局安装typescript，进入命令行，输入：`npm i -g typescript`，创建一个ts文件，使用tsc对ts文件进行编译：进入命令行，进入ts文件所在目录，执行命令：`tsc xxx.ts`。

基本类型：

类型声明：

- 类型声明是TS非常重要的一个特点
- 通过类型声明可以指定TS中变量的类型
- 指定类型后，当位变量赋值时，TS编译器会自动检查是否符合类型声明，符合则赋值，否则报错
- 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值

语法：

```
let 变量: 类型;
let 变量: 类型 = 值；
function fn(参数: 类型， 参数: 类型）:类型 {
...
}
```

自动类型判断：

- TS拥有自动的类型判断机制
- 当对变量的声明和赋值是同时进行的，TS编译器会自动判断变量的类型
- 所以如果你的变量的声明和赋值时同时进行的，可以省略掉类型声明


| 类型 | 描述  |
| --- | --- |
| number | 任意数字  |
| string | 任意字符串 |
| boolean | 布尔值true或false |
| 字面量 | 限制变量的值就是该字面量的值 |
| any | 任意类型 |
| unknown | 类型安全的any |
| void | 没有值或undefined |
| never | 没有值  不能是任何值 |
| object | 任意的JS对象 |
| array | 任意JS数组 |
| tuple | 元素，TS新增类型，固定长度数组 |
| enum | 枚举，TS中新增类型 |

- number

```
let decimal: number = 6;
let hex: number = 0xf00d;
```

- boolean

```
let isDone: boolean = false;
```

- string

```
let color: striing = "blue"'
color = "red";
let fullName: string = "jeskson";
```

- 字面量

```
let color: 'red' | 'blue' | 'black';
```

- any

```
let d: any = 3;
d = 'jeskson';
```

- unknown

```
let notSure: unknown = 4;
```

- void

```
let unusable: void = undefined;
```

- never

```
function error(message: string): never {
 throw new Error(message);
}
```

- object

```
let obj: object = {}
```

- array

```
let list: number[] = [1,2,3];
let list: Array<number> = [1,2,3];
```

- tuple

```
let x: [string, number];
x = ["hello", 10];
```

- 类型断言

有些情况下，变量的类型对于我们来说是很明确的，但是TS编译器却并不清楚，此时，可以通过类型断言来告诉编译器变量的类型，断言有两种形式：

- 第一种：

```
let someValue: unknown = "jeskson 1024bibi.com";
let strlength: number = (someValue as string).length;
```

- 第二种：

```
let someValue: unknown = "1024bibi.com";
```

### 编译选项

- 自动编译文件

编译文件时，使用`-w`指令后，TS编译器会自动监视文件的变化，并在文件发生变化时对文件进行重新编译。

```
tsc xxx.ts -w
```

- 自动编译整个项目：

如果直接使用tsc指令，则可以自动将当前项目下的所有ts文件编译为js文件。

但是能直接使用tsc命令的前提时，要先在项目根目录下创建一个ts的配置文件`tsconfig.json`。

`tsconfig.json`是一个`JSON`文件，添加配置文件后，只需`tsc`命令即可完成对整个项目的编译。

配置选项：

`include`: 定义希望被编译文件所在的目录

```
// tsconfig.json
{
 "include": [
  "./src/**/*"
 ]
}
// ** 任意目录
// * 任意文件
```
所有src目录和tests目录下的文件都会被编译

```
"include": ["src/**/*", "tests/**/*"]
```

- exclude

定义需要排除在外的目录；默认值`["node_modules","bower_components","jspm_package"]`

```
"exclude": ["./src/hello/**/*"]
```
src下hello目录下的文件都不会被编译

- extends：定义被继承的配置文件

```
"extends": "./configs/base"
```

当前配置文件中会自动包含config目录下base.json中的所有配置信息

- files

指定被编译的列表，只有需要编译的文件少时才会用到

示例：

```
"files": [
 "type.ts",
 "dada.ts"
]
```

- compilerOptions

编译选项是配置文件中非常重要也比较复杂的配置选项

在compilerOptions中包含多个子选项，用来完成对编译的配置

项目选项：target

设置ts代码编译的目标版本

示例：

```
"compilerOptions": {
 "target": "ES6"
}
```

如上设置，我们所编写的ts代码将会被编译为ES6版本的js代码

- lib

指定代码运行时所包含的库

```
"compilerOptions": {
 "target": "ES6",
 "lib": ["ES6", "DOM"],
 "outDir": "dist",
 "outFile": "dist/aa.js"
}
```

### module

设置编译后代码使用的模块化系统

```
// 配置
// 当有错误时不生成编译后的文件
"noEmitOnError": true,
// 用来设置编译后的文件是否使用严格模式
"alwayStrict": true,
// 不允许隐式的any类型
"noImplicitAny": true,
// 不允许不明确类型的this
"noImplicitThis": true,
// 严格的检查空值
"strictNullChecks": true
```

### 使用webpack打包代码

使用命令：`npm init -y`

使用：`cnpm i -D webpack webpack-cli typescript ts-loader`

```
// webpack.config.js
// 引入一个包
const path = require('path');

// webpack中的所有的配置信息都应该写在module.exports中
module.exports = {
 // 指定入口文件
 entry: "./src/index.ts",
 // 指定打包文件所在目录
 output: {
  // 指定打包文件的目录
  path: path.resolve(__dirname, 'dist'),
  // 打包后文件
  filename: "bundle.js"
 },
 
 // 指定webpack打包时要使用模块
 module: {
  // 指定要加载的规则
  rules: [
   {
    // test指定的是规则生效的文件
    test: /\.ts$/,
    // 要使用的Loader
    use: 'ts-loader',
    // 要排除的文件
    exclude: /node-modules/
   }
  ]
 }
};
```

```
// tsconfig.json
{
 "compilerOptions": {
  "module": "ES2015",
  "target": "ES2015",
  "strict" true
 }
}
```

```
// package.json

"scripts": {
 ...
 "bulid": "webpack"
}
```

使用命令行：`npm run build`

### webpack

通常情况下，实际开发中我们都需要使用构建工具对代码进行打包，TS同样也可以结合构建工具一起使用，下边以webpack为例介绍以下如何结合构建工具使用TS。

步骤：

- 初始化项目

进入项目根目录，执行命令：`npm init -y`，主要作用：创建`package.json`文件。

- 下载构建工具

`npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin`

```
npm i -D webpack webpack-cli typescript ts-loader
```

- webpack：构建工具webpack
- webpack-cli: webpack的命令行工具
- webpack-dev-server: webpack 的开发服务器
- typescript: ts编译器

```
// webpack.config.js

// 引入html插件
const HTMLWebpackPlugiin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// 配置webpack插件
plugins: [
 new CleanWebpackPlugin(),
 new HTMLWebpackPlugin({
  title: "这是一个自定义title"
 }), // 自动的生成html文件
]

// 用来设置引用模块
resolve: {
 extensions: ['.ts', '.js']
}
```

```
// package.json
"script": {
 ...
 "start": "webpack serve --open chrome.exe"
},
```

使用命令：`cnpm i -D @babel/core @babel/preset-env babel-loader core-js`

```
 // 指定webpack打包时要使用模块
 module: {
  // 指定要加载的规则
  rules: [
   {
    // test指定的是规则生效的文件
    test: /\.ts$/,
    // 要使用的Loader
    use: [
     {
     loader: "babel-loader",
     // 设置babel
     options: {
      presets: [
       [
        // 指定环境的插件
        "@babel/preset-env",
        // 配置信息
        {
         targets: {
          "chrome":"88"
         }
         "corejs": "3",
         // 使用corejs的方式 usage表示按需加载
         "useBuiltIns":"usage"
        }
       ]
      ]
     }
     }
     
     'ts-loader'
    ]
    // 要排除的文件
    exclude: /node-modules/
   }
  ]
 }
```

### 面向对象

面向对象是程序中一个非常重要的思想，它被很多同学理解成了一个比较难，比较深奥的问题。其实，面向对象很简单，程序之中所有的操作都需要通过对象来完成。

如：

- 操作浏览器要使用window对象
- 操作网页要使用document对象
- 操作控制台要使用console对象

一切操作都要通过对象，也就是所谓的面向对象，那么对象到底是什么呢？这就要先说到程序是什么，计算机程序的本质就是对现实事物的抽象，抽象的反义词是具体，比如：照片是对一个具体的人的抽象，汽车模型是对具体汽车的抽象等等。程序也是对事物的抽象，在抽象中我们可以表示一个人，一条狗等。一个事物到了程序就变成了一个对象。

### 类

定义类：

```
class 类名 {
 属性名: 类型;
 constructor(参数: 类型){
  this.属性名 = 参数;
 }
 方法名(){
  ...
 }
}
```

示例：

```
class Person {
 // 直接定义的属性是实例属性，需要通过对象的实例去访问：
 // const per = new Person();
 // per.name
 
 // 使用static开头的属性是静态属性（类属性），可以直接通过类去访问
 // Person.age
 
 // readonly开头的属性表示一个只读的属性
 
 // 定义实例属性
 name: string = 'jeskson';
 // 在属性前使用static 关键字可以定义类属性（静态属性）
 static age: number = 18;
}
const per = new Person();
// console.log(per);
// console.log(per.name, per.age);
sayHello(){
 console.log('hello');
}

// 不加static，实例对象调用
// 定义static，类方法或属性
```

### 构造函数

```
class Dog{
 name = 'j';
 age = 1;
 bark(){
  alert('j');
 }
}

const dog = new Dog();
const dog2 = new Dog();

console.log(dog);
console.log(dog2);
```

改造：

```
class Dog {
 name: string;
 age: number;
 
 // constructor 被称为构造函数
 // 构造函数会在对象创建时调用
 constructor(name: string, age: number) {
  // 在实例方法中，this就表示当前的实例
  // 在构造函数中当前对象就是当前新建的那个对象
  // 可以通过this向新建的对象中添加属性
  this.name = name;
  this.age = age;
 }
 bark() {
  alert('1024bibi.com');
  // 在方法中可以通过this来表示当前调用方法的对象
  console.log(this.name);
 }
}
const dog = new Dog('dadaqianduan.cn', age: 1);
const dog2 = new Dog('1024bibi.com', age: 2);
console.log(dog);
console.log(dog2);

dog2.bark();
```

### 继承

```
(function(){
 // 定义一个表示狗的类
 class Dog{
  name: string;
  age: number;
  
  constructor(name: string, age: number) {
   this.name = name;
   this.age = age;
  }
  
  sayHello() {
   console.log('dadaqianduan.cn')'
  }
 }
 
 const dog = new Dog('dada', 1);
 console.log(dog);
 dog.sayHello();
})();
```

使用继承后，子类将会拥有父类所有的方法和属性

使用继承可以将多个类中公有的代码写在一个父类中，这样只需要写一次即可让所有的子类都同时拥有父类中的属性和方法。

子类覆盖掉父类方法的形式，称为方法重写。

```
class Dog extends Animal{
 run() {
  console.log();
 }
 sayHello() {
  console.log();
 }
}
```

### super-父类还有一个名字叫做超类

```
(function(){
 class Animal{
  name: string;
  
  constructor(name: string) {
   this.name = name;
  }
  
  sayHello() {
   console.log('动物叫');
  }
 }
 
 class Dog extends Animal{
  sayHello() {
   // 在类的方法中 super 就表示当前类的父类
   super.sayHello();
  }
 }
 
 const dog = new Dog('1024bibi.com');
 dog.sayHello();
})();
```

```
class Dog extends Animal{
 age: number,
 constructor(name: string, age: number){
  // 如果在子类中写了构造函数，在子类构造函数中必须对父类引用
  super(name); // 调用父类的构造函数
  this.age = age;
 }
 sayHello() {
  // 在类的方法中 super 就表示当前类的父类
  // super.sayHello();
 }
}
const dog = new Dog('dadaqianduan.cn');
```

### 抽象类

以abstract开头的类是抽象类，不希望这个类创建对象的时候

抽象类中可以添加抽象方法，抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写

```
abstract class Animal{
 name: string;
 
 constructor(name: string) {
  this.name = name;
 }
 
 // 定义一个抽象方法
 // 抽象方法使用abstract开头，没有方法体
 // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
 abstract sayHello():void;
}
```

### 接口

```
(function(){
 // 描述一个对象的类型
 type myType = {
  name: string,
  age: number
 };
 
 // 接口用来定义一个类结构
 // 用来定义一个类中应该包含哪些属性和方法
 // 同时接口也可以当成类型声明去使用
 
 interface myInterface{
  name: string;
  age: number;
 }
 
 interface myInterface{
  gender: string;
 }
 
 const obj: myType = {
  name: 'dada',
  age: 1
 };
 
 const obj1: myInterface = {
  name: 'dada',
  age: 1,
  gender: '男'
 };
 
})();
```

接口可以在定义类的时候去限制类的结构

接口中的所有的属性都不能有实际的值

接口只定义对象的结构，而不考虑实际值

在接口中所有的方法都是抽象方法

```
interface myInter{
 name: string;
 
 sayHello(): void;
}

// 定义类时，可以使类去实现一个接口
// 实现接口就是使类满足接口的要求

class MyClass implements myInter {
 name: string;
 constructor(name: stirng) {
  this.name = name;
 }
 sayHello(){
  // 接口就是就类的限制，定义规范
 }
}
```

### 封装

```
(function(){
 // 定义一个表示人的类
 class Person{
  private _name: string;
  private _age: number;
  // public 修饰的属性可以在任意位置访问（修改）默认值
  // private 私有属性，私有属性只能在类内部进行访问修改
  
  // 通过在类中添加方法使得私有属性可以被外部访问
  
  constructor(name: string, age: number) {
   this._name = name;
   this._age = age;
  }
  // 定义方法，用来获取name属性
  getName() {
   return this._name;
  }
  // 定义方法，用来设置name属性
  setName(value: string) {
    if(value>=0) {
      this._name = value;
    }
  }
  
  // TS中设置getter方法的法方式
  get name() {
  console.log('get name()执行了');
   return this._name;
  }
  set age(value) {
   if(value>=0){
    this._age = value;
   }
  }
  }
 }
 
 const per = new Person('jeskson', 18);
 console.log(per);
 
 // per.name = 'dadaqianduan.cn';
 // per.age = 12;
 
 // console.log(per.getName());
 // per.setName('jeskson');
 // per.age = 2
 
})();
```

```
get name() {
 return this._name;
}

set name(value) {
 this._name = value;
}
```

### public 

```
class A {
 public num: number;
 // private num: number;
 // protected 受保护的属性，只能在当前类和子类中使用
 constructor(num: number){
  this.num = num;
 }
}

class B extends A {
 test() {
  console.log(this.num);
 }
}
```

### 语法糖

```
class C{
 // 可以直接将属性定义在构造函数中
 constructor(public name: string, public age: number){
 }
}
```

### 泛型

在定义函数或是类时，如果遇到类型不明确就可以使用泛型

```
function fn(a: number): number{
 return a;
}
```

此时泛型便能够发挥作用；

举个例子：

```
function test(arg: any): any{
    return arg;
}
```

- any会关闭掉类型的检查，任意类型

使用any会关闭TS的类型检查，其次这样设置也不能体现出参数和返回值是相同的类型。

创建泛型函数

```
// 类型不明确时，使用泛型
function fn<T>(a: T): T{
 return a;
}
// T只有在函数的执行的时候，才能定义
```

这里的`<T>`就是泛型，不一定非叫T

可以直接调用具有泛型的函数

```
fn(10); // 不指定泛型，ts可以自动对类型进行推断

fn<string>('jeskson'); // 指定泛型

function fn2<T,k>(a: T, b: K): T {
 console.log(b);
 return a;
}

fn2<number, string>(123, 'dadaqianduan.cn');

// 限制泛型的类型

interface Inter {
 length: number;
}

function fn3<T extends Inter>(a: T): number{
 return a.length;
}

fn3('123');
fn3({length: 12);
```

泛型可以同时指定多个，`T extends Inter`表示泛型必须时Inter实现类（子类）

泛型类

```
class MyClass<T> {
 name: T;
 constructor(name: T) {
  this.name = name;
 }
}

const mc = new MyClass<string>('jeskson');
```

### typescript打包

webpack整合，通常情况下，实际开发中我们都需要使用构建工具对代码进行打包；TS同样也可以结合构建工具一起使用，下边以webpack为例介绍一下如何构建工具使用TS：

初始化项目，进入项目根目录执行命令：`npm init -y`，创建`package.json`文件。

**下载构建工具**，命令如下：

```
npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin
```

- `webpack`：构建工具`webpack`
- `webpack-cli`：`webpack`的命令行工具
- `webpack-dev-server`：`webpack`的开发服务器
- `typescript`：`ts`编译器
- `ts-loader`：`ts`加载器，用于在webpack中编译ts文件
- `html-webpack-plugin`：`webpack`中html插件，用来自动创建html文件
- `clean-webpack-plugin`：`webpack`中的清除插件，每次构建都会先清除目录

配置`webpack`

根目录下创建webpack的配置文件`webpack.config.js：`

```
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
   optimization:{
       minimize: false // 关闭代码压缩，可选
   },

   entry: "./src/index.ts",

   devtool: "inline-source-map",

   devServer: {
       contentBase: './dist'
   },

   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js",
       environment: {
           arrowFunction: false // 关闭webpack的箭头函数，可选
       }
   },

   resolve: {
       extensions: [".ts", ".js"]
   },

   module: {
       rules: [
           {
               test: /\.ts$/,
               use: {
                   loader: "ts-loader"     
               },
               exclude: /node_modules/
           }
       ]
   },

   plugins: [
       new CleanWebpackPlugin(),
       new HtmlWebpackPlugin({
           title:'TS测试'
       }),
   ]
}
```

**配置TS编译选项**

根目录下创建`tsconfig.json`，配置可以根据自己需要

```
{
   "compilerOptions": {
       "target": "ES2015",
       "module": "ES2015",
       "strict": true
   }
}
```

修改`package.json`配置

```
"scripts": {
   "test": "echo \"Error: no test specified\" && exit 1",
   "build": "webpack",
   "start": "webpack serve --open chrome.exe"
},
```

**项目使用**

在src下创建ts文件，并在并命令行执行`npm run build`对代码进行编译；

或者执行`npm start`来启动开发服务器；

**Babel**

除了webpack，开发中还经常需要结合babel来对代码进行转换；以使其可以兼容到更多的浏览器，在上述步骤的基础上，通过以下步骤再将babel引入到项目中。

Promise等ES6特性，TS无法直接转换，这时还要用到babel来做转换。

安装依赖包：

```
npm i -D @babel/core @babel/preset-env babel-loader core-js
```

**共安装了4个包**，分别是：

`@babel/core`：babel的核心工具

`@babel/preset-env`：babel的预定义环境

`@babel-loader`：`babel`在`webpack`中的加载器

`core-js`：`core-js`用来使老版本的浏览器支持新版ES语法

修改`webpack.config.js`配置文件

```
module: {
    rules: [
        {
            test: /\.ts$/,
            use: [
                {
                    loader: "babel-loader",
                    options:{
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    "targets":{
                                        "chrome": "58",
                                        "ie": "11"
                                    },
                                    "corejs":"3",
                                    "useBuiltIns": "usage"
                                }
                            ]
                        ]
                    }
                },
                {
                    loader: "ts-loader",

                }
            ],
            exclude: /node_modules/
        }
    ]
}
```

使用ts编译后的文件将会再次被babel处理;使得代码可以在大部分浏览器中直接使用;同时可以在配置选项的targets中指定要兼容的浏览器版本

### 编译选项

自动编译文件

```
tsc xxx.ts -w
```

**自动编译整个项目**

如果直接使用tsc指令，则可以自动将当前项目下的所有ts文件编译为js文件。

但是能直接使用tsc命令的前提时，要先在项目根目录下创建一个ts的配置文件 `tsconfig.json`

`tsconfig.json`是一个JSON文件，添加配置文件后，只需只需 tsc 命令即可完成对整个项目的编译

`include`

定义希望被编译文件所在的目录

```
默认值：["**/*"]
示例：

"include":["src/**/*", "tests/**/*"]
```

`exclude`

定义需要排除在外的目录

```
默认值：["node_modules", "bower_components", "jspm_packages"]
示例：

"exclude": ["./src/hello/**/*"]
```

`extends`

定义被继承的配置文件

```
示例：

"extends": "./configs/base"
```

`files`

指定被编译文件的列表，只有需要编译的文件少时才会用到

`compilerOptions`

编译选项是配置文件中非常重要也比较复杂的配置选项

```
"compilerOptions": {
    "target": "ES6"
}

// 设置ts代码编译的目标版本

// 可选值：

ES3（默认）、ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext
```

`lib`

指定代码运行时所包含的库（宿主环境）

```
"compilerOptions": {
    "target": "ES6",
    "lib": ["ES6", "DOM"],
    "outDir": "dist",
    "outFile": "dist/aa.js"
}

// 可选值：

ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext、DOM、WebWorker、ScriptHost ......
```

`module`

设置编译后代码使用的模块化系统

```
"compilerOptions": {
    "module": "CommonJS"
}
```

`outDir`

编译后文件的所在目录

```
"compilerOptions": {
    "outDir": "dist"
}
```

`outFile`

将所有的文件编译为一个js文件

默认会将所有的编写在全局作用域中的代码合并为一个js文件，如果module制定了None、System或AMD则会将模块一起合并到文件之中

```
"compilerOptions": {
    "outFile": "dist/app.js"
}
```

`rootDir`

指定代码的根目录，默认情况下编译后文件的目录结构会以最长的公共目录为根目录

```
// 通过rootDir可以手动指定根目录
"compilerOptions": {
    "rootDir": "./src"
}
```

`allowJs`

是否对js文件编译

`checkJs`

是否对js文件进行检查

```
"compilerOptions": {
    "allowJs": true,
    "checkJs": true
}
```

`removeComments`

- 是否删除注释
- 默认值：false

`noEmit`

- 不对代码进行编译
- 默认值：false

`sourceMap`

- 是否生成`sourceMap`
- 默认值：`false`

**严格检查**

```
strict
启用所有的严格检查，默认值为true，设置后相当于开启了所有的严格检查

alwaysStrict
总是以严格模式对代码进行编译

noImplicitAny
禁止隐式的any类型

noImplicitThis
禁止类型不明确的this

strictBindCallApply
严格检查bind、call和apply的参数列表

strictFunctionTypes
严格检查函数的类型

strictNullChecks
严格的空值检查

strictPropertyInitialization
严格检查属性是否初始化
```

**额外检查**

`noFallthroughCasesInSwitch`

检查switch语句包含正确的break

`noImplicitReturns`

检查函数没有隐式的返回值

`noUnusedLocals`

检查未使用的局部变量

`noUnusedParameters`

检查未使用的参数

`allowUnreachableCode`

检查不可达代码

可选值：
true，忽略不可达代码
false，不可达代码将引起错误

`noEmitOnError`

有错误的情况下不进行编译，默认值：false

```
npm i -D less less-loader css-loader style-loader
```

### 问题：`request to https://registry.cnpmjs.org/ts-loader failed, reason: Hostname/IP does not match certificate's altnames: Host: registry.cnpmjs.org. is not in the cert's altnames: DNS:r.cnpmjs.org`

命令行下执行：

关闭`npm`的`https`（取消`npm`的`https`认证）
```
npm config set strict-ssl false
```

```
npm ERR! code ERR_TLS_CERT_ALTNAME_INVALID
npm ERR! errno ERR_TLS_CERT_ALTNAME_INVALID
npm ERR! request to https://registry.cnpmjs.org/cnpm failed, reason: Hostname/IP does not match certificate's altnames: Host: registry.cnpmjs.org. is not in the cert's altnames: DNS:r.cnpmjs.org

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\41586\AppData\Roaming\npm-cache\_logs\2020-08-23T00_26_46_591Z-debug.log
```

解决办法：

```
npm config set registry http://registry.npmjs.org/
```

使用TypeScript + Webpack + Less项目依赖：

```
TypeScript：

typescript；
ts-loader；
Webpack：

webpack；
webpack-cli；
webpack-dev-server；
html-webpack-plugin；
clean-webpack-plugin；
Babel：

core-js；
babel-loader；
@babel/core；
@babel/preset-env；
Less & CSS资源：

style-loader；
css-loader；
less；
less-loader；
postcss；
postcss-loader；
postcss-preset-env；
```

分别执行下面的命令安装依赖并编译项目：

```
# 安装依赖
npm i
# 编译打包
npm run build
```

使用`npm run start`进入开发模式。

问题：

```
Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
 - configuration.output has an unknown property 'environment'. These properties are valid:
   object { auxiliaryComment?, chunkCallbackName?, chunkFilename?, chunkLoadTimeout?, crossOriginLoading?, devtoolFallbackModuleFilen
ameTemplate?, devtoolLineToLine?, devtoolModuleFilenameTemplate?, devtoolNamespace?, filename?, futureEmitAssets?, globalObject?, has
hDigest?, hashDigestLength?, hashFunction?, hashSalt?, hotUpdateChunkFilename?, hotUpdateFunction?, hotUpdateMainFilename?, jsonpFunc
tion?, jsonpScriptType?, library?, libraryExport?, libraryTarget?, path?, pathinfo?, publicPath?, sourceMapFilename?, sourcePrefix?,
strictModuleExceptionHandling?, umdNamedDefine?, webassemblyModuleFilename? }
   -> Options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk.
```

```
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! demo@1.0.0 build: `webpack`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the demo@1.0.0 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
```

**Mode**模式（Mode）

提供 mode 配置选项，告知 webpack 使用相应模式的内置优化。

`Providing the mode configuration option tells webpack to use its built-in optimizations accordingly.`

```
string = 'production': 'none' | 'development' | 'production'
```

**用法** 

只需在配置对象中提供 mode 选项：

```
module.exports = {
  mode: 'development',
};
```

或者从 CLI 参数中传递：

```
webpack --mode=development
```

Mode: development 

```
// webpack.development.config.js
module.exports = {
 mode: 'development'
```

Mode: production 

```
// webpack.production.config.js
module.exports = {
  mode: 'production',
```

Mode: none 

```
// webpack.custom.config.js
module.exports = {
 mode: 'none',
```

如果要根据 webpack.config.js 中的 mode 变量更改打包行为，则必须将配置导出为函数，而不是导出对象：

```
var config = {
  entry: './app.js',
  //...
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  if (argv.mode === 'production') {
    //...
  }

  return config;
};
```

> css

```
// 清除默认样式
* {
 margin: 0;
 padding: 0;
 // 改变盒子模型的计算方式
 box-sizing: border-box;
}
```

box-sizing属性用于更改用于计算元素的宽度和高度默认的CSS盒子模型，可以使用此属性来模拟不正确支持CSS盒子模型规范的浏览器行为。

框属性的基本规范：

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a3d48c49b6f49e2a884276f8857db87~tplv-k3u1fbpfcp-watermark.image)

1. `width`和`height`设置内容框的宽度和高度。内容框是框内容显示的区域，包括框内的文本内容。

2. `padding`表示一个`css`框内边距，这一层位于内容框的外边缘与边界的内边缘之间。

3. `border`即`css`框的边界是一个分隔层。

4. `margin`即外边距代表`css`框周围的外部区域。

- `box-sizing:border-box`属性

运用`box-sizing:border-box`属性下，框模型的变化

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bc05b585c461432cb3a936989b2be1e3~tplv-k3u1fbpfcp-watermark.image)

`width=content+padding+border`

采用的是`flex`布局的方式，为了自适应，宽度`width`采用的是百分比`%`的形式，`border，padding，margin`采用的是`px`尺寸，所有外层的盒子运用了`box-sizing:border-box`，属性来改变盒子的结构。

背景裁剪（Background clip）属性

- `background-clip: border-box`：背景被裁剪到边框盒

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8b0e5a26b296455fb871b6ef70228d86~tplv-k3u1fbpfcp-watermark.image)

```
#div {
    padding: 25px;
    border:10px dotted #000;
    background-color: yellow;
    background-clip: border-box;
}
```

- `background-cilp: padding-box;`背景被裁剪到内边距框；

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ed55ee2260f4655a93490b8eac09613~tplv-k3u1fbpfcp-watermark.image)

```
#div {
    padding: 25px;
    border:10px dotted #000;
    background-color: yellow;
    background-clip: padding-box;
}
```

- `background-clip: content-box;`背景被裁剪到内容框。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b7c8200039b94a988910580d56ce9230~tplv-k3u1fbpfcp-watermark.image)

```
#div {
    padding: 25px;
    border:10px dotted #000;
    background-color: yellow;
    background-clip: content-box;
}
```

### 块级盒子和内联盒子

- 块级盒子

一个被定义成块级的（`block`）盒子会表现出以下行为:

- 盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间，在绝大数情况下意味着盒子会和父容器一样宽
- 每个盒子都会换行
- `width 和 height` 属性可以发挥作用
- 内边距（`padding`）, 外边距（`margin`） 和 边框（`border`） 会将其他元素从当前盒子周围“推开”

- 内联盒子

一个被定义成内联的（`inline box`）盒子会表现出以下行为:

- 盒子不会产生换行。
- `width 和 height` 属性将不起作用。
- 垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 `inline` 状态的盒子推开。
- 水平方向的内边距、外边距以及边框会被应用且会把其他处于 `inline` 状态的盒子推开。

**CSS中组成一个块级盒子需要:**

`Content box`: 这个区域是用来显示内容，大小可以通过设置 `width 和 height`.

`Padding box`: 包围在内容区域外部的空白区域； 大小通过 `padding` 相关属性设置。

`Border box`: 边框盒包裹内容和内边距。大小通过 `border` 相关属性设置。

`Margin box`: 这是最外面的区域，是盒子和其他元素之间的空白区域。大小通过 `margin` 相关属性设置。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c7b9da12b1d04fec92d45e12d518217b~tplv-k3u1fbpfcp-watermark.image)

在标准模型中，如果你给盒设置 `width 和 height`，实际设置的是 `content box`。

`padding 和 border` 再加上设置的宽高一起决定整个盒子的大小。

示例：

```
.box {
  width: 350px;
  height: 150px;
  margin: 25px;
  padding: 25px;
  border: 5px solid black;
}
```

如果使用标准模型宽度 = `410px (350 + 25 + 25 + 5 + 5)`，高度 = `210px (150 + 25 + 25 + 5 + 5)`，`padding 加 border 再加 content box`。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5f39bdc0fae44b095340fa4775d1ae1~tplv-k3u1fbpfcp-watermark.image)

### 替代（IE）盒模型

默认浏览器会使用标准模型。如果需要使用替代模型，您可以通过为其设置 `box-sizing: border-box` 来实现。

示例：

```
.box {
  box-sizing: border-box;
} 
```

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/68fb50a35c80491e8102727a2d17637d~tplv-k3u1fbpfcp-watermark.image)

### 回看笔者往期高赞文章，也许能收获更多喔！

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