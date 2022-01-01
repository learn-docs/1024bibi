---
title: 一份不可多得的TypeScript系统入门整理
date: 2021-04-18 19:19:46
tags:
	- TypeScript
categories:
	- TypeScript
	- 前端
keywords: "一份不可多得的TypeScript系统入门整理"
description: "一份不可多得的TypeScript系统入门整理"
cover: https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7c636b26ba045fcad1abe508bf6f390~tplv-k3u1fbpfcp-watermark.image
top_img:
---
---
theme: cyanosis
---

- 推荐： [TypeScript趁早学习提高职场竞争力](https://juejin.cn/post/6950052678927908901)

[Github来源：](https://github.com/webVueBlog/WebFamily) | 求星星 ✨ | 给个❤️关注，❤️点赞，❤️鼓励一下作者

![TypeScript.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bdfb34fcac30412db26acbe0d9e0672e~tplv-k3u1fbpfcp-watermark.image)

![TS基础篇.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d59f2c57c2e14dac9afa670b2e3a2b52~tplv-k3u1fbpfcp-watermark.image)

在另一页面打开即可高清

![TypeScript.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8cf145d46ea847bea2d3747140e23d91~tplv-k3u1fbpfcp-watermark.image)

### TypeScript开发

全局安装typescript，使用安装命令可以使用`npm`也可以使用`yarn`：

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/17dcf3a1c70d4c539a8f99f61073628e~tplv-k3u1fbpfcp-watermark.image)

```
npm install typescript -g

yarn global add typescript
```

### demo.ts

```
function jeskson() {
 let web: string = "hello world"
 console.log(web)
}

jeskson()

// tsc
tes demo.ts
node demo.js
```

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b6ee77ca17254fbfb69fc1dcc3fbfb62~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/de47fe245e484bce93c1bf8ee08562b1~tplv-k3u1fbpfcp-watermark.image)

```
npm install -g ts-node
```

### 数据类型

- TS的数据类型

```
// ES6的数据类型：
基本数据类型：Boolean,Number,String,Symbol,undefined,null

引用类型：Array,Function,Object

// TS的数据类型，增加
void,any,never,元组,枚举,高级类型
```

类型注解：

```
let hello : string = 'Hello TypeScript'
```

原始类型

```
let bl: boolean = true
let num: number = 123
let str: string = "123"
```

数组泛型

```
let arrType: Array<number> = [0, 1, 2, 3, 5];
let arrType1: Array<string> = ['0', '1', '2', '3', '5'];
let arrType2: Array<any> = [1, '1', 2, 's', true];
```

用接口表示数组

```
interface Person{
  name: string;
  age: number;
}
interface NumberArray {
       [index:number]: Person;         
}
let arrType3: NumberArray = [{name:'张三'，age: 20}]
let arrType4：Array<Person> = [{name:'张三'，age: 20}]
let arrType5：Person[] = [{name:'张三'，age: 20}]
```

> 类数组

类数组（Array-like Object）不是数组类型:

```
function sum() {
    let args: number[] = arguments;
}

// index.ts(2,7): error TS2322: Type 'IArguments' is not assignable to type 'number[]'.
//   Property 'push' is missing in type 'IArguments'.

function sum() {
    let args: IArguments = arguments;
}
```

> 元组类型

```
let tuple: [number, string] = [0, '1']
// 此时,如果改变数组的元素类型或添加元素数量,编辑器都会报错
// TS允许向元组中使用数组的push方法插入新元素(但不允许访问)
```

### 函数

函数声明（Function Declaration）和函数表达式（Function Expression）

```
// 函数声明（Function Declaration）
function sum(x, y) {
    return x + y;
}

// 函数表达式（Function Expression）
let mySum = function (x, y) {
    return x + y;
};
```

```
// 函数声明的类型定义
function sum(x:number,y:number):number{
       return x+y  
}
// 输入多余的或者少于要求的参数，是不被允许的

// 函数表达式
let mySun = function(x:number,y:number):number{
      return x + y  
}
```

用接口定义函数的形状

```
interface SearchFunc{
       （source:string,subString:string）:boolean
}    

let mySearch:SearchFunc;
mySearch = function(source: string,subString:string){
     return source.search(subString) !== -1  
}
```

与接口中的可选属性类似，我们用 `?` 表示可选的参数：

```
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('dada', 'Cat');
let tom = buildName('dada');
```

参数默认值

```
function buildName(firstName:string,lastName:string='Cat'){
    return firstName + ' ' + lastName;
}
let tomcat = buildName('dada', 'Cat');
let tom = buildName('dada');
```

剩余参数

```
// 可以使用 ...rest 的方式获取函数中的剩余参数

function push(array,...items){
     items.forEach(function(item){
        array.push(item)
　　})  
}

let a = [];
push(a,1,2,3)


function push(array:any[],...items:any[]){
     items.forEach(function(item){
         array.push(item);
    })  
}

let a = []
push(a,1,2,3)
```

### 重载

重载允许一个函数接受不同数量或类型的参数时，作出不同的处理

```
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```

使用重载定义多个 `reverse` 的函数类型：

```
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```

### 静态类型

```
let count : number = 1;

interface dada {
 uname: string,
 age: number
}

const jeskson :dada = {
 uname: 'jeskson',
 age: 12
}
```

对象类型：

```
const gege: {
 name: string,
 age: number
} = {
 name: 'jeskson',
 age: 12
}
```

```
const person : string [] = ['dada', 'jeskson', '掘金魔王哪吒']
```

```
class Person{}
const dada : Person = new Person()

const dada :()=>string = ()=>{return 'jeskson'}
```

静态类型：对象类型，数组类型，类类型，函数类型

### 类型注解与类型推断

局部变量：

```
let count : number;
count=12;
```

如果ts能够自动分析判断变量类型，就不需要，否则就需要使用类型注解。

> 函数参数和函数的返回类型的注解

```
function getNum(a : number, two : number) : number {
 return a + b
}
const total = getNum(1,2)
```

> never

```
function errorFunction() : never {
 throw new Error()
 console.log('hello world')
}

function forNever() : never {
 while(true) {}
 console.log('hello world')
}

function add({one,two} : {one : number,two : number}) {
 return one + two
}
const total = add({one:1,two:2})
```

> 数组类型注解

```
const numberArr : number[] = [1,2,3]

const stringArr : string[] = ['a','b','c']

const undefinedArr : undefined[] = [undefined, undefined]

const arr : (number | string)[] = [1,'string',2]

const dada : {name:string,age:number}[] = [
 {name:'jeskson',age:12},
 {name:'魔王哪吒',age:12},
]

// 类别别名
// type alias
type typeMy = {name:string,age:number}

const dada : typeMy[] = [{name:'jeskson',age:12}]
```

### 元组

加强版：

```
const dada : (string | number)[] = ['魔王哪吒','jeskson',12]

// 不常用-元组
const dada1 : [string,string,number] = ["jeskson",12,"dadaqianduan"]
```

### 接口

```
interface dada {
 name: 'jeskson';
 age: 12;
 work ?: string;
 say():string;
}

class obj implements dada {
 name="dada"
 age=12
 work="it"
 say(){
  return "dadaqianduan"
 }
}

const selected = (person: dada)=>{
}

// obj.name && console.log(obj.name)
```

### 类

```
class Da {
 content = "掘金魔王哪吒"
 sayHello() {
  return this.content
 }
}

consot da = new Da()
console.log(da.sayHello())
```

```
class Person {
 name: string;
}
const person = new Person()
person.name = "jeskson"
console.log(person.name)
```

类的构造函数

```
class Person {
 public name : string;
 constructor(name:string){
  this.name = name
 }
}

// 优化
class Person {
 constructor(public name:string){}
}
class Teacher extends Person{
 constructor(public age:number){
  super('jeskson')
 }
}

const person = new Person('jeskson')

const dada = new Teacher(12)
console.log(dada.age)
console.log(person.name)
```

### Getter,Setter,static

```
class Da {
 constructor(private _age:number){}
 get age() {
  return this._age
 }
 set age(age:number) {
  this._age = age
 }
}

const dada = new Da(12)
```

```
class Da{
 static sayHello() {
  return "魔王哪吒"
 }
}
console.log(Da.sayHello())
```

只读属性：

```
class Person{
 public readonly _name:string
 constructor(name:string) {
  this._name = name
 }
}
const person = new Person('jeskson');
console.log(person.name);
```

抽象类，使用继承抽象类：

```
abstract class Da {
 abstract say()
}
class da extends Da {
 say() {
  console.log('jeskson')
 }
}
```

`tsc -init`生成`tsconfig.json`文件：

`compilerOptions`配置项

```
"files": []

removeComments 为 true，去掉注释
strict为true，书写规范

// 允许你的注解类型any不用特意标明
"noImplicitAny": true

// 不允许有null值出现
"strictNullChecks": true

// 入口文件
"rootDir": "./src"
// 编译好的文件
"outDir": "./build"

// Generates corresponding '.map' file
// 信息文件，存储位置信息
"sourceMap": true

// Report errors on unused locals
"noUnusedLocals": true
```

### 联合类型和类型保护

```
interface Teacher{
 teacher: boolean;
 say:()=>{}
}
interface Student{
 teacher: boolean;
 say:()=>{}
}

//联合类型，类型保护，类型断言
function da(study: Teacher | Student) {
 if(study.teacher) {
  (study as Teacher).say();
 }else{
  (study as Student).say();
 }
}
```

### 泛型

```
function fn<T>(params: Array<T>){
 return params;
}
fn<string>(["12","123"]);
```

使用：

```
class Select {
 constructor(private da: string[]) {}
 getDa(index:number):string{
  return this.da[index];
 }
}
const dada = new Select(["1","2","3"]);
onsole.log(dada.getDa(1));
```

```
class Select<T> {
 constructor(private da: T[]){}
 getDa(index: number): T{
  return this.da[index];
 }
}
```

```
interface Girl {
 name: string;
}
class SelectGirl<T extends Girl> {
 constructor(private girls: T[]) {}
 getGirl(index: number): string {
  return this.girls[index].name;
 }
}

class SelectGirl<T extends number | string> {
 constructor(private girls: T[]) {}
 getGirl(index: number): T {
  return this.girls[index];
 }
}
```

### NameSpace

`npm init -y`生成`package.json`文件

`tsc -init`生成`tsconfig.json`文件

> 安装VsCode编辑器：

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e45eaf9cdd54ceaa0dadaa7937fa890~tplv-k3u1fbpfcp-watermark.image)

```
interface Person {
 name: string
}
const teacher: Person = {
 name: 'jeskson'
}
```

> 基础类型和对象类型

```
// 基础类型 null, undefined, symbol, boolean, void
const count:number = 12;
const name:string = '掘金魔王哪吒';

// 对象类型
const teacher: {
 name: string;
 age: number;
} = {
 name: 'jeskson',
 age: 12
};

const nums:number[] = [1,2,3]

const goTotal: ()=>number = () => {
 return 123;
}
```

> 类型注解和类型推断

```
// type annotation 类型注解

let count:number;
count=123;

// type inference 类型推断，TS会自动的尝试分析变量的类型
```

```
// 推动不出来，就自己加
function getTotal(firstNumber:number, secondNumber:number) {
 return firstNumber + secondNumber;
}
const total = getTotal(1,2);
```

> 函数相关类型

```
// 实战
function getTotal(firstNumber:number, secondNumber:number):number {
 return firstNumber + secondNumber;
}
const total = getTotal(1,2);

// void这个函数不应该有返回值
function sayHello(): void {
 console.log('hello');
}

// never 表示这个函数永远不能执行完成
function errorEmitter(): never {
 while(true){} // 或抛出异常
}
```

```
function add({first,second}:{first:number;second:number}):number{
 return first+second;
}
function getNumber({first}:{first:number}){
 return first;
}
```

小结：

```
// 基础类型 boolean,number,string,void,undefined,symbol,null

let count: number;
count = 12;

// 对象类型 {},Class,function,[]
const fun = (str:string) => {
 return parseInt(str,10);
}
const fun1: (str:string)=>number = (str) => {
 return parseInt(str,10);
}

const date = new Date();
```

> 数组和元组

```
const arr: (number|string)[] = [1,'2',3];
const stringArr: string[] = ['a','b','c'];
const undefinedArr:undefined[] = [undefined];

const objectArr: {name:string,age:number}[] = [{
 name: '掘金魔王哪吒',
 age: 12
}]

// type alias 类型别名
type User = {name:string;age:number};
const objectArr: User[] = [{
 name: '掘金魔王哪吒',
 age: 12
}]

class Teacher {
 name: string;
 age: number;
}
const objectArr: Teacher[] = [
 new Teacher();
 {
  name: 'jeskson',
  age: 12
 }
];
```

元组

```
const teacherInfo: [string, string, number] = ['dadaqianduan','1024bibi.com',12];
```

> Interface接口

```
interface Person {
 // readonly name: string;
 name: string;
 age?: number;
}
const getPersonName = (person: Person): void => {
 console.log(person.name);
};
const setPersonName = (person: Person, name: string): void=>{
 persono.name = name;
};
const person = {
 name: '掘金魔王哪吒',
 age: 12
};
getPersonName(person);
```

> 类的定义与继承

```
class Person {
 name='掘金魔王哪吒';
 getName() {
  return this.name;
 }
}
class Teacher textends Person {
 getTeacherName() {
  return 'teacher';
 }
 getName() {
  return '1024bibi.com' + super.getName()
 }
}

const teacher = new Teacher();
// 重写，字类可以重写父类的东西
```

> 类中的访问类型和构造器

```
// private protected public 
class Person {
 public name: string;
 sayHi() {
  console.log('1024bibi.com')
 }
}
const person = new Person();
person.name = '掘金魔王哪吒'
console.log(person.name);

// public 允许我在类的内外被调用
// private 允许在类内被使用
// protected 允许在类内以及继承的子类中是使用
```

- `constructor`

```
class Person {
 public name: string;
 constructor(name: string) {
  this.name = name;
 }
}

const person = new Person('dadaqianduan');
console.log(person.name);
```

```
// 简化写法
class Person {
 constructor(public name: string) {}
}
```

```
class Teacher extends Person {
 constructor(public age:number) {
  super('dadaqianduan');
 }
}

// 如果父类没有构造器，也使用空的 super()
```

> 静态属性，Setter和Getter

```
class Person {
 constructor(private name: string) {}
 get getName() {
  return this.name;
 }
}

const person = new Person('dadaqianduan');
console.log(person.getName);
```

```
class Person {
 constructor(private _name: string) {}
 get name() {
  return this._name;
 }
 set name(name: string) {
  this._name = name;
 }
}
```

设计模式：单例模式，一个类只允许通过这个类，获取一个单例实例

```
class Demo {
 private static instance: Demo;
 private constructor(public name:string) {}
 
 static getInstance(name: string) {
  if(!this.instance) {
   this.instance = new Demo('1024bibi.com');
  }
  return this.instance;
 }
}

//const demo1 = new Demo();
//const demo2 = new Demo();

const demo1 = Demo.getInstance();
```

> 抽象类

抽象类只能被继承，不能被实例化

```
abstract class Da {
 width: number;
 getType() {
  return 'dadaqianduan';
 }
 abstract getAra(): number;
}
```

```
npm init -y
```

生成`package.json`文件：

```
{
 "name": "TypeScript",
 "version": "1.0.0",
 "description": "",
 "main": "index.js",
 "scripts": {
  "test: "echo \"Error: no test specified\" && exit 1"
 },
 "keywords": [],
 "author": "",
 "license": "ISC"
}
```

```
tsc --init
// Successfully created a tsconfig.json file

// npm uninstall ts-node -g
```

```
npm install -D ts-node
```

```
npm install typescript -D
```

### TypeScript中的配置文件

```
// 编译配置文件
// tsconfig.json
要编译的文件
"include" ["./demo.ts"],
```

### 联合类型和类型保护

```
interface Bird {
 fly: boolean;
 sing: ()=>{};
}
interface Dog {
 fly: boolean;
 bark: ()=>{};
}
// 类型断言的方式
function trainAnial(animal: Bird | Dog) {
 if(animal.fly) {
  (animal as Bird).sing();
 } else {
  (animal as Dog).bark();
 }
}

// in 语法来做类型保护
function trainAnialSecond(animal: Bird | Dog) {
 if('sing' in animal) {
  animal.sing();
 } else {
  animal.bark();
 }
}
```

```
// typeof 语法来做类型保护
function add(first: string | number, second: string | number) {
 if(typeof first === 'string' || typeof second === 'string') {
  return `${first}${second}`;
 }
 return first + second;
}

// 使用instanceof语法来做类型保护
class NumberObj {
 count: number;
}

function addSecond(first: object | NumberObj, second: object | NumberObj) {
 if(first instanceof NumberObj && second instanceof NumberObj) {
  return first.count + second.count;
 }
 return 0;
}
```

### Enum枚举类型

```
const Status = {
 OFFLINE: 0,
 ONLINE: 1,
 DELETED: 2
}
function getResult(status) {
 if(status === Status.OFFLINE){
  return 'offline';
 }else if(status === Status.ONLINE) {
  return 'online';
 }else if(status === Status.DELETED) {
  return 'deleted';
 }
 return 'error';
}
```

```
enum Status {
 OFFLINE,
 ONLINE,
 DELETED2
}
function getResult(status) {
 if(status === Status.OFFLINE){
  return 'offline';
 }else if(status === Status.ONLINE) {
  return 'online';
 }else if(status === Status.DELETED) {
  return 'deleted';
 }
 return 'error';
}
```

### 函数泛型

```
// 泛型generic泛指的 类型
function join<T,P>(first: T, second: P) {
 return `${first}${second}`;
}
function anotherJoin<T>(first: T,second: T): T {
 return first;
}

// T[]
function map<T>(params: Array<T>) {
 return params;
}
// join<number,string>(1,'1');
// map<string>(['123']);
join(1,'1');
```

### 类中如何使用泛型

```
interface Item {
 name: string;
}
class DataManager<T extends Item> {
 constructor(private data: T[]) {}
 getItem(index: number):string {
  return this.data[index].name;
 }
}

const data = new DataManager({
 {
  name: 'jeskson'
 }
]};

// 用泛型可以声明一些类型：
// 如何使用泛型作为一个具体的类型注解
function hello<T>(params: T) {
 return params;
}
const func: <T>(param: T) => T = hello;
```

### 命名空间

```
"use strict"
var Header = (function() {
 function Header() {
  var elem = document.createElement('div');
  elem.innerText = 'This is Header';
  document.body.appendChild(elem);
 }
 return Header;
}());

var Content = (function()=>{
 function Content() {
  var elem = document.createElement('div');
  elem.innerText = 'This is Content';
  document.body.appendChild(elem);
 }
 return Content
}());
```

### 使用Parcel打包TS代码

```
yarn add --dev parcel@next
```

### 泛型中keyof语法的使用

> 某一数据类型的key的数组集合，既适用于数组，也适用于对象

```
interface testInter {
    name: string,
    age: number
}
let testArr: string[] = ['dada', 'dada1'];
let testObj: testInter = {name: 'tate', age: 26}

// 数组
function showKey<K extends keyof T, T> (key: K, obj: Array<string>) {
    return key;
}
showKey<number, Array<string>>(1, testArr);

// 对象
function showKey<K extends keyof T, T> (keyItem: K, obj: T): K {
    return keyItem;
}
let val = showKey('name', testObj)

function showKey<K extends keyof T, T> (items: K[], obj: T): T[K][] {
    return items.map(item => obj[item])
}
```

```
interface Person {
 name: string;
 age: number;
 gender: string;
}
class Teacher {
 constructor(private info: Person) {}
 getInfo(key: string) {
  if(key==='name' || key==='age' || key==='gender') {
   return this.info[key];
  }
 }
}
 
const teacher = new Teacher({
 name: 'jeskson',
 age: 12,
 gender: 'male'
});
const test = teacher.genInfo('name');
```

```
class Teacher {
 constructor(private info: Person) {}
 // getInfo<T extends keyof Person>(key:string) {
 getInfo<T extends keyof Person>(key: T):Person[T]{
  return this.info[key];
 }
}
```

### 装饰器

```
// 类的装饰器
// 装饰器本身是一个函数
// 装饰器通过@符号来使用
```

```
// 普通方法，target对应的是类的prototype
// 静态方法，target对应的是类的构造函数
function getNameDecorator(target:any,key:string){
 console.log(target,key);
}
class Test {
 name: string;
 constructor(name: string){
  this.name = name;
 }
 @getNameDecorator
 static getName() {
  return '123';
 }
}
```

### 接口Interface

有时候我们传入的参数可能会包含很多的属性，但编译器只会检查那些必须的属性是否存在，以及类型是否匹配，而接口就是用来描述这样的结构。

```
function Person(config: {name:string,age:number}) {
 console.log(config.name+config.age);
}
console.log(Person({name:'魔王哪吒',age:12}));
// 重构
interface Config {
 name: string;
 age: number;
}
function Person(config: Config) {
 console.log(config.name+config.age);
}
// 接口类型检查会检测属性有没有在Config接口中而进行限制
```

> 可选属性

接口中的属性有时候是不必须的，有的用得到，有的用不到的情况下，是可选属性，这样对可能存在的属性进行预先定义。

```
interface Config {
 name: string;
 age?: number;
 // [propName: string]: any 转字符串索引签名
}
// [propName: string]: any
// 这个索引签名是为了你能够预见某个对象可能有某些特殊的用途而准备的
// 属性名写错，可以通过索引签名的方式进行屏蔽错误
```

> 只读属性

对于一些对象属性只能在对象刚刚创建的时候修改其值，在属性前用readonly来指定只读属性：

```
interface Point {
  readonly x: number;
  readonly y: number;
}
let p:Point = { x: 12, y: 14 }
p.x = 15 // 错误
```

> 函数类型

接口能够描述JavaScript中对象拥有的各种各样的外形

函数类型接口：

```
interface Fun {
 (source: string, subString: string): Boolean
}
```

> 接口继承

接口是可以相互继承的，能够从一个接口里复制成员到另一个接口里。

```
interface Animal {
 name: string;
 say(): void;
}
interface Person extends Animal {
 work(): void;
 closer: string;
}
class Pro implements Person {
 closer: string;
 name: string;
 say(): void {
 
 }
 work(): void {
 
 }
 constructor(name:string, closer:string) {
  this.name = name;
  this.closer = closer;
 }
}
let g:Person = new Pro("jeskson","it");
g.say();
g.work();
```

- 对象类型接口
- 函数类型接口

接口的定义方式：使用interface关键字

接口中可定义：

- 确定属性
- 可选属性
- 任意属性
- 只读属性

1. 确定属性

```
interface UserInfo {
 name: string;
 age: number;
}

const myInfo: UserInfo = {
 name: '魔王哪吒',
 age: 12
}
```

> 接口中约束好的确定属性，定义对象变量的时候，不能少，也不能多🙅‍

2. 可选属性

```
interface UserInfo {
 name: string;
 age: number;
 sex?: string;
}

const myInfo: UserInfo = {
 name: '魔王哪吒',
 age: 12
}
```

> 接口中的可选属性，是表示在对象变量中可以不存在

3. 任意属性

```
interface UserInfo {
 name: string;
 age: number;
 sex?: string;
 [proName: string]: any;
}

const myInfo: UserInfo = {
  name: "dadaqianduan",
  age: 12,
  test1: '123',
  test2: 'abc',
  test3: 123
};
```

> 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是任意属性类型的子类，定义了任意属性后，对象变量中的属性个数才可以出现比接口的属性数量多的情况。

4. 只读属性

```
interface UserInfo {
  readonly id: number;
  name: string;
  age: number;
  sex?: string;
  [propName: string]: any;
}
```

```
const myInfo: UserInfo = {
  id: 1,
  name: "dada",
  age: 12,
  test1: "123",
  test2: "abc",
  test3: 123
};
```

> 只读属性，也是确定属性，在对象变量定义的时候必须有值，后面不能修改

- 对象接口，以查询商品列表接口API示例：

```
interface ResponseData {
    resCode: number;
    resData: ResultData[];
    message: string;
}

interface ResultData {
    productId: number;
    productName: string;
}

let resultData = {
    resCode: 0,
    resData: [
        { productId: 1, productName:"TypeScipt实战" },
        { productId: 2, productName:"TypeScipt从入门到精通" },
    ],
    message: "success"
}

function render(res: ResponseData) {
    console.log(res.resCode, res.message)
    res.resData.forEach((obj) => {
        console.log(obj.productId, obj.productName)
    })
}

render(resultData);
```

> 只要传入的对象满足接口的必要条件就可以被允许,即使传入多余的字段也可以通过类型检查

- 绕过检查的方法有3种:

1. 将对象字面量赋值给一个变量

```
let result = {
    resCode: 0,
    resData: [
        { productId: 1, productName:"TypeScipt实战", remark: "备注"},
        { productId: 2, productName:"TypeScipt从入门到精通" },
    ],
    message: "success"
}
render(result)
```

2. 使用类型断言

> 使用类型断言方式,明确告诉编译器类型是什么,编译器就会绕过类型检查

```
render({
    resCode: 0,
    resData: [
        { productId: 1, productName:"TypeScipt实战", remark:""},
        { productId: 2, productName:"TypeScipt从入门到精通" },
    ],
    message: "success"
} as ResponseData)

render(<ResponseData>{
    resCode: 0,
    resData: [
        { productId: 1, productName:"TypeScipt实战", remark: "备注"},
        { productId: 2, productName:"TypeScipt从入门到精通" },
    ],
    message: "success"
})
```

3. 使用字符串索引签名

```
interface ResultData {
    productId: number;
    productName: string;
    [remark: string]: any;  // 字符串索引签名
}
```

> 函数接口

- 函数定义方式：

1. 在TS中，使用一个变量直接定义函数

```
let add: (x: number, y: number) => number
= (x, y){
  return x+y;
};
add(1,2)
```

2. 使用接口定义函数

```
interface Add {
    (x: number, y: number): number
}
let myFunc: Add = function(x, y){
  return x+y;
};
myFunc(1,2);
```

3. 使用类型别名来定义函数

类型别名使用type关键字

```
type Add = (x: number, y: number) => number
```

> 可索引类型的接口

```
// 数字索引接口
interface numberIndex {
    [x: number]: string
}
// 相当于声明了一个字符串类型的数组
let chars: numberIndex = ['A', 'B']
```

```
// 声明一个字符串索引类型的接口
interface stringIndex {
    [x: string]: string
}
```

```
// 两种索引签名混用
interface stringIndex {
    [x: string]: string
    [z: number]: number    // // Numeric index type 'number' is not assignable to string index type 'string'.
}

interface stringIndex {
    [x: string]: any
    [z: number]: number // Numeric index type 'number' is not assignable to string index type 'string'.
}
```

### 上手TypeScipt

对于npm的用户

```
npm install -g typescript
```

构建第一个TypeScript文件，dada.ts 文件：

```
function dada(person) {
 return "hello" + person;
}
let user = "jeskson";
document.body.innerHTML = dada(uer);
```

> 编译代码

在命令行上，运行TypeScript编译器：

```
tsc dada.ts
```

> 添加类型注解`: string`

```
function dada(person: string) {
 return "jeskson"+person;
}
let user = "jeskson";
document.body.innerHTML = dada(user);
```

> 类型注解

TypeScript里的类型注解是一种轻量级的为函数或变量添加约束的方式。

接口

允许我们在实现接口的时候只要保证包含了接口要求的结构就可以

```
// implements语句
interface Person {
 firstName: string;
 lastName: string;
}

function func(peson: Person) {
 return person.firstName + person.lastName;
}

let user = { firstName: "jeskson", lastName: "User" };

document.body.innerHTML = func(user);
```

类，支持基于类的面向对象编程

```
class Student {
 fullName: string;
 constructor(public firstName: string, public lastName: string) {
  this.fullName = firstName + lastName;
 }
}

interface Person {
 firstName: string;
 lastName: string;
}

function dada(person: Person) {
 return person.firstName+person.lastName;
}

let user = new Student("jeskson","魔王哪吒");
document.body.innerHTML = dada(user);
```

> 运行TypeScript Web应用

在`index.html`里输入内容:

```
<!DOCTYPE html>
<html>
    <head><title>TypeScript dada</title></head>
    <body>
        <script src="dada.js"></script>
    </body>
</html>
```

### 对象

在JS中,可以任意修改对象属性,TS中不允许

```
// 这是因为,仅声明了对象obj的类型注解是object
let obj: object = {x: 'a', y: 'b'}
obj.x = 3    // Property 'x' does not exist on type 'object'.
```

```
let obj: {x: string, y: string} = {x: 'a', y: 'b'}
obj.x = 'c'
```

### Symbol

具有唯一的值,可以显式声明,也可直接创建

```
let symbol1: Symbol = Symbol()  // 显示声明
let symbol2 = Symbol()  // 直接创建

// 验证:是否是同一个对象
console.log(symbol1 === symbol2)    // fasle
```

### undefined 和 null

```
// 一旦声明了undefined,就不能再被赋值为任何其他的数据类型了
let udf: undefined = undefined
let nu: null = null

let undf: undefined = 1 
// Type '1' is not assignable to type 'undefined'.

// 默认情况下,undefined和null也不能被赋值给任何其他类型

let num1: number = undefined    
// Type 'undefined' is not assignable to type 'number'.

let num2: number = null 
// Type 'null' is not assignable to type 'number'.
```

- 在TS中,`undefined和null`是任何类型的子类型,所以可以被赋值给其他类型
- 设置允许被赋值为其他类型

> 打开`tsconfig.js,将strictNullChecks = false(默认true)`

### `void,any,never`

- 在`js`中,`void`操作符可以使任何一个表达式返回`undefined`
- `void 0 	// 将返回undefined`

```
// void
let voidFunc = () => {}
```

- `any`:如果不指定`TS`的变量类型,默认为`any`类型,可以赋值为任何类型
- `never`:永远不会有返回值的类型

```
// 函数抛出异常,永远不会有返回值,类型为never
let error = () => {
    throw new Error('error')
}

// 死循环函数永远没有返回值,类型为never
let endless = () => {
    while(true) {}
}
```

### 对数组中的对象按对象的值进行去重

```
let listData = [
  { firstName: "dada", lastName: "abc", size: 18 }
}
```

```
//js
let obj = {};
listData = listData.reduce((item, next) => {
  if (!obj[next.lastName]) {
    item.push(next);
    obj[next.lastName] = true;
  }
  return item;
}, []);
```

```
//ts
const obj: {[key: string]: boolean;} = {};
listData = listData.reduce<ListDataItem[]>((item, next) => {
  if (!obj[next.lastName]) {
    item.push(next);
    obj[next.lastName] = true;
  }
  return item;
},[]);
```

### 在微信小程序开发中使用`Typescript`

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/80c267b51415499e9e0d2537446b7e04~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5452e288b2348a9a33bfac2e2010969~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7ddd5e782a0745808370946543680af8~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5f3e2ebef36e4527b6bb2095c8e245db~tplv-k3u1fbpfcp-watermark.image)

### 模块的概念

“内部模块”现在称为“命令空间”，“外部模块”现在简称为“模块”，模块字其自身的作用域里执行，而不是在全局作用域里。

这意味着定义在一个模块里的变量，函数，类等等在模块外部是不可见的，除非你明确地使用export形式之一导出它们。

相反，如果想使用其它模块导出的变量，函数，类，接口等的时候，你必须要导入它们，可以使用 `import` 形式之一。

模块的概念：

我们可以把一些公共的功能单独抽离成一个文件作为一个模块，模块里面的变量，函数，类等默认是私有的，如果我们要在外部访问模块里面的数据，我们需要通过`export`暴露模块里面的数据。暴露后使用`import`引入模块就可以使用模块里面暴露的数据。

### 命名空间

命名空间和模块的区别

- 命名空间：内部模块，主要用于组织代码，避免命名冲突
- 模块：ts的外部模块的简称

```
namespace A {
interface Animal {
 name: string;
 eat(): void;
}
class Dog implements Animal {
 name: string;
 constructor(theName: string) {
  this.name = theName;
 }
 eat() {
  console.log('dog');
 }
}
class Cat implements Animal {
 name: string;
 constructor(theName: string) {
  this.name = theName;
 }
 eat() {
  console.log('cat');
 }
}
let dog = new Dog('dogdog');
dog.eat();
}
```

```
import {A,B} from './modules/animal';

var dog = new A.Dog('hei');
dog.eat();
```

### 装饰器

装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。

通俗的讲装饰器就是一个方法，可以注入到类，方法，属性参数上扩展类，属性，方法，参数的功能。

常见的装饰器有：**类装饰器，属性装饰器，方法装饰器，参数装饰器**

装饰器的写法：

- 普通装饰器（无法传参）
- 装饰器工厂（可传参）

> 方法参数装饰器：

参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元素数据，传入下列3个参数：

- 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
- 方法的名字
- 参数在函数参数列表中的索引

```
function logParams(params:any){
 return function(target:any,methodName:any,paramsIndex:any){
  console.log(params);
  console.log(target);
  console.log(methodName);
  console.log(paramsIndex);
 }
}
class HttpClient{
 public url:any|undefined;
 constructor(){}
 getDate(@logParams('xxx') uuid:any){
  console.log(uuid);
 }
}
```

### keyof

```
keyof与Object.keys相似，keyof取interface的键
interface Point {
 x: number;
 y: number;
}
// type keys = "x" | "y"
type keys = keyof Point;
```

```
// 无法确认返回类型
// 无法对 key 做约束
const data = {
 a: 1,
 b: 2
}

function get(o: object, name: string) {
 return o[name]
}
```

使用keyof：

```
function get<T extends object, K extends keyof T>(o: T, name: K): T[K] {
  return o[name]
}
```

### `?: 运算符`

```
T extends U ? X : Y

type isTrue<T> = T extends true ? true : false
```

### `tsconfig.json`

`tsconfig.json`文件中指定了用来编译这个项目的根文件和编译选项

`tsconfig.json`示例文件:

```
//"compilerOptions"可以被忽略，这时编译器会使用默认值。
//使用"files"属性
//"files"指定一个包含相对或绝对文件路径的列表。
{
    "compilerOptions": {
        "module": "commonjs",
        "noImplicitAny": true,
        "removeComments": true,
        "preserveConstEnums": true,
        "sourceMap": true
    },
    "files": [
        "core.ts",
        "sys.ts",
        "types.ts",
        "scanner.ts",
        "parser.ts",
        "utilities.ts",
        "binder.ts",
        "checker.ts",
        "emitter.ts",
        "program.ts",
        "commandLineParser.ts",
        "tsc.ts",
        "diagnosticInformationMap.generated.ts"
    ]
}
//使用"include"和"exclude"属性
//如果"files"和"include"都没有被指定，编译器默认包含当前目录和子目录下所有的TypeScript文件
//排除在"exclude"里指定的文件
{
    "compilerOptions": {
        "module": "system",
        "noImplicitAny": true,
        "removeComments": true,
        "preserveConstEnums": true,
        "outFile": "../../built/local/tsc.js",
        "sourceMap": true
    },
    "include": [
        "src/**/*"
    ],
    "exclude": [
        "node_modules",
        "**/*.spec.ts"
    ]
}
```

查看模式: http://json.schemastore.org/tsconfig.

### 回看笔者往期高赞文章，也许能收获更多喔！

- [JS葵花宝典秘籍笔记，为你保驾护航金三银四](https://juejin.cn/post/6951545839307194375)
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
- [14期-连肝7个晚上，总结了计算机网络的知识点！（共66条）](https://juejin.cn/post/6850037263116a533773)
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

> 文章持续更新，可以微信搜一搜「 **程序员哆啦A梦** 」第一时间阅读，回复【资料】有我准备的一线大厂资料，本文 https://www.1024bibi.com 已经收录

> `github`收录，欢迎`Star`：[https://github.com/webVueBlog/WebFamily](https://github.com/webVueBlog/WebFamily)
