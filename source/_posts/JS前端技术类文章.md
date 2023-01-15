---
title: JS前端技术类文章
tags:
  - JS
  - ES
categories:
  - 掘金
keywords: JS
description: JS前端技术类文章
cover: >-
  https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe22fe0d371945a6b707aade6e8ce07e~tplv-k3u1fbpfcp-watermark.image
abbrlink: 22f6a66b
date: 2021-10-30 09:32:20
top_img:
---

本文已参与「[掘力星计划](https://juejin.cn/post/7012210233804079141/ "https://juejin.cn/post/7012210233804079141/")」，赢取创作大礼包，挑战创作激励金。

## `前沿`

### `装饰器`

装饰器是一种函数，写成`@ + 函数名`。它可以放在类和类方法的定义前面。

装饰器的行为

```
@decorator
class A {}

// 等同于

class A {}
A = decorator(A) || A;
```

装饰器函数的第一个参数，就是所要装饰的目标类。

注意，装饰器对类的行为的改变，是代码编译时发生的，而不是在运行时。这意味着，装饰器能在编译阶段运行代码。也就是说，装饰器本质就是编译时执行的函数。

添加实例属性

```
function testable(target) {
  target.prototype.isTestable = true;
}

@testable
class MyTestableClass {}

let obj = new MyTestableClass();
obj.isTestable // true
```

## `Object.assign()`

` Object.assign()  ` 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。

```
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };


const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
```

```
Object.assign(target, ...sources)
```

如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性。

### `[复制一个对象]`

```
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```

### `[深拷贝问题]`

针对深拷贝，需要使用其他办法，因为 `Object.assign()`拷贝的是（可枚举）属性值。

```
const log = console.log;

function test() {
  'use strict';
  let obj1 = { a: 0 , b: { c: 0}};
  let obj2 = Object.assign({}, obj1);
  log(JSON.stringify(obj2));
  // { a: 0, b: { c: 0}}

  obj1.a = 1;
  log(JSON.stringify(obj1));
  // { a: 1, b: { c: 0}}
  log(JSON.stringify(obj2));
  // { a: 0, b: { c: 0}}

  obj2.a = 2;
  log(JSON.stringify(obj1));
  // { a: 1, b: { c: 0}}
  log(JSON.stringify(obj2));
  // { a: 2, b: { c: 0}}

  obj2.b.c = 3;
  log(JSON.stringify(obj1));
  // { a: 1, b: { c: 3}}
  log(JSON.stringify(obj2));
  // { a: 2, b: { c: 3}}

  // Deep Clone
  obj1 = { a: 0 , b: { c: 0}};
  let obj3 = JSON.parse(JSON.stringify(obj1));
  obj1.a = 4;
  obj1.b.c = 4;
  log(JSON.stringify(obj3));
  // { a: 0, b: { c: 0}}
}

test();
```

### `[合并对象]`

```
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, 注意目标对象自身也会改变。
```

### `[合并具有相同属性的对象]`

```
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
```

### `[拷贝 symbol 类型的属性]`

```
const o1 = { a: 1 };
const o2 = { [Symbol('foo')]: 2 };

const obj = Object.assign({}, o1, o2);
console.log(obj); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
Object.getOwnPropertySymbols(obj); // [Symbol(foo)]
```

> [继承属性和不可枚举属性是不能拷贝的]

### `[原始类型会被包装为对象]`

```
const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("foo")

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// 原始类型会被包装，null 和 undefined 会被忽略。
// 注意，只有字符串的包装对象才可能有自身可枚举属性。
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```

### 数组的处理

`Object.assign`可以用来处理数组，但是会把数组视为对象。

```
Object.assign([1, 2, 3], [4, 5])
// [4, 5, 3]
```

`Object.assign`只能进行值的复制，如果要复制的值是一个取值函数，那么将求值后再复制。

```
const source = {
  get foo() { return 1 }
};
const target = {};

Object.assign(target, source)
// { foo: 1 }
```

### 为对象添加属性

```
class Point {
  constructor(x, y) {
    Object.assign(this, {x, y});
  }
}
```

通过`Object.assign`方法，将`x`属性和`y`属性添加到`Point`类的对象实例。

### 克隆对象

```
function clone(origin) {
  return Object.assign({}, origin);
}
```

将原始对象拷贝到一个空对象，就得到了原始对象的克隆。

### 合并多个对象

将多个对象合并到某个对象。

```
const merge = (target, ...sources) => Object.assign(target, ...sources);
```

如果希望合并后返回一个新对象，可以改写上面函数，对一个空对象合并。

```
const merge = (...sources) => Object.assign({}, ...sources);
```

## `Object.create()`

**`Object.create()`** 方法创建一个新对象，使用现有的对象来提供新创建的对象的`__proto__`。

### `Object.freeze()`

**`Object.freeze()`**  方法可以**冻结**一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。`freeze()` 返回和传入的参数相同的对象。

### `Object.keys()`

` Object.keys()  ` 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 。

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

## 方法的装饰

装饰器不仅可以装饰类，还可以装饰类的属性。

```
function readonly(target, name, descriptor){
  // descriptor对象原来的值如下
  // {
  //   value: specifiedFunction,
  //   enumerable: false,
  //   configurable: true,
  //   writable: true
  // };
  descriptor.writable = false;
  return descriptor;
}

readonly(Person.prototype, 'name', descriptor);
// 类似于
Object.defineProperty(Person.prototype, 'name', descriptor);
```

修改属性描述对象的`enumerable`属性，使得该属性不可遍历。

装饰器有注释的作用。

组件写法：

```
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss'
})
export class MyComponent {
  @Prop() first: string;
  @Prop() last: string;
  @State() isVisible: boolean = true;

  render() {
    return (
      <p>Hello, my name is {this.first} {this.last}</p>
    );
  }
}
```

```
class Example {
    @dec(1)
    @dec(2)
    method(){}
}
```

外层装饰器`@dec(1)`先进入，但是内层装饰器`@dec(2)`先执行。

装饰器只能用于类和类的方法，不能用于函数，因为存在函数提升。

## `UEditor 是由百度「FEX前端研发团队」开发的所见即所得富文本web编辑器`

```
<!DOCTYPE HTML>
<html lang="en-US">

<head>
    <meta charset="UTF-8">
    <title>ueditor demo</title>
</head>

<body>
    <!-- 加载编辑器的容器 -->
    <script id="container" name="content" type="text/plain">
        这里写你的初始化内容
    </script>
    <!-- 配置文件 -->
    <script type="text/javascript" src="ueditor.config.js"></script>
    <!-- 编辑器源码文件 -->
    <script type="text/javascript" src="ueditor.all.js"></script>
    <!-- 实例化编辑器 -->
    <script type="text/javascript">
        var ue = UE.getEditor('container');
    </script>
</body>

</html>
```

### 传入自定义的参数

编辑器有很多可自定义的参数项，在实例化的时候可以传入给编辑器：

```
var ue = UE.getEditor('container', {
    autoHeight: false
});
```

配置项也可以通过 ueditor.config.js 文件修改

### 设置和读取编辑器的内容

通 getContent 和 setContent 方法可以设置和读取编辑器的内容

```
var ue = UE.getContent();
//对编辑器的操作最好在编辑器ready之后再做
ue.ready(function() {
    //设置编辑器的内容
    ue.setContent('hello');
    //获取html内容，返回: <p>hello</p>
    var html = ue.getContent();
    //获取纯文本内容，返回: hello
    var txt = ue.getContentTxt();
});
```

打开控制台（注意：windows系统下请使用管理员权限打开），输入：
```
npm install -g grunt-cli
```

然后输入以下命令。
```
npm install grunt --save-dev
```

## 完整的按钮列表

```
toolbars: [
    [
        'anchor', //锚点
        'undo', //撤销
        'redo', //重做
        'bold', //加粗
        'indent', //首行缩进
        'snapscreen', //截图
        'italic', //斜体
        'underline', //下划线
        'strikethrough', //删除线
        'subscript', //下标
        'fontborder', //字符边框
        'superscript', //上标
        'formatmatch', //格式刷
        'source', //源代码
        'blockquote', //引用
        'pasteplain', //纯文本粘贴模式
        'selectall', //全选
        'print', //打印
        'preview', //预览
        'horizontal', //分隔线
        'removeformat', //清除格式
        'time', //时间
        'date', //日期
        'unlink', //取消链接
        'insertrow', //前插入行
        'insertcol', //前插入列
        'mergeright', //右合并单元格
        'mergedown', //下合并单元格
        'deleterow', //删除行
        'deletecol', //删除列
        'splittorows', //拆分成行
        'splittocols', //拆分成列
        'splittocells', //完全拆分单元格
        'deletecaption', //删除表格标题
        'inserttitle', //插入标题
        'mergecells', //合并多个单元格
        'deletetable', //删除表格
        'cleardoc', //清空文档
        'insertparagraphbeforetable', //"表格前插入行"
        'insertcode', //代码语言
        'fontfamily', //字体
        'fontsize', //字号
        'paragraph', //段落格式
        'simpleupload', //单图上传
        'insertimage', //多图上传
        'edittable', //表格属性
        'edittd', //单元格属性
        'link', //超链接
        'emotion', //表情
        'spechars', //特殊字符
        'searchreplace', //查询替换
        'map', //Baidu地图
        'gmap', //Google地图
        'insertvideo', //视频
        'help', //帮助
        'justifyleft', //居左对齐
        'justifyright', //居右对齐
        'justifycenter', //居中对齐
        'justifyjustify', //两端对齐
        'forecolor', //字体颜色
        'backcolor', //背景色
        'insertorderedlist', //有序列表
        'insertunorderedlist', //无序列表
        'fullscreen', //全屏
        'directionalityltr', //从左向右输入
        'directionalityrtl', //从右向左输入
        'rowspacingtop', //段前距
        'rowspacingbottom', //段后距
        'pagebreak', //分页
        'insertframe', //插入Iframe
        'imagenone', //默认
        'imageleft', //左浮动
        'imageright', //右浮动
        'attachment', //附件
        'imagecenter', //居中
        'wordimage', //图片转存
        'lineheight', //行间距
        'edittip ', //编辑提示
        'customstyle', //自定义标题
        'autotypeset', //自动排版
        'webapp', //百度应用
        'touppercase', //字母大写
        'tolowercase', //字母小写
        'background', //背景
        'template', //模板
        'scrawl', //涂鸦
        'music', //音乐
        'inserttable', //插入表格
        'drafts', // 从草稿箱加载
        'charts', // 图表
    ]
]
```

传入配置参数

```
var ue = UE.getEditor('container', {
    toolbars: [
        ['fullscreen', 'source', 'undo', 'redo', 'bold']
    ],
    autoHeightEnabled: true,
    autoFloatEnabled: true
});
```

## 读取配置项

读取配置项可以通过getOpt方法读取

```
var lang = ue.getOpt('lang'); //默认返回：zh-cn
```

## 前端配置项说明
```
-   **UEDITOR_HOME_URL** {Path String} [默认值：根据config文件路径自动获取] // 为编辑器实例添加一个路径，这个不能被注释
-   **serverUrl** {Path String} [默认值：URL + "php/controller.php"] // 服务器统一请求接口路径
-   **toolbars** {2d Array} //工具栏上的所有的功能按钮和下拉框，可以在new编辑器的实例时选择自己需要的从新定义
-   **labelMap** {Object} [默认：从lang包的labelMap项获取] //参数格式是键值对，键名对应toolbar参数的项：{"bold": "加粗"} ]，当鼠标放在工具栏上时显示的tooltip提示，留空支持自动多语言配置，否则以配置值为准
-   **lang** {String} [默认值："zh-cn"] //lang值也可以通过自动获取 (navigator.language||navigator.browserLanguage ||navigator.userLanguage).toLowerCase()，语言配置项，默认是zh-cn。有需要的话也可以使用如下这样的方式来自动多语言切换，当然，前提条件是lang文件夹下存在对应的语言文件：
-   **langPath** {Path String} [默认值：URL +"lang/"] //语言包文件存放目录
-   **theme** {String} [默认值：'default'] //主题配置项，默认是default。有需要的话也可以使用如下这样的方式来自动多主题切换，当然，前提条件是themes文件夹下存在对应的主题文件：
-   **themePath** {Path String} [默认值：URL +"themes/"] //现有如下皮肤：default
-   **zIndex** {Number} [默认值：900] //编辑器在页面上的z-index层级的基数，默认是900
-   **charset** {String} [默认值："utf-8"] //针对getAllHtml方法，会在对应的head标签中增加该编码设置。
-   **customDomain** {Boolean} [默认值：false] //若实例化编辑器的页面手动修改的domain，此处需要设置为true
-   **isShow** {Boolean} [默认值：true] //默认显示编辑器
-   **textarea** {String} [默认值：'editorValue'] // 提交表单时，服务器获取编辑器提交内容的所用的参数，多实例时可以给容器name属性，会将name给定的值最为每个实例的键值，不用每次实例化的时候都设置这个值
-   **initialContent** {String} [默认值：'欢迎使用ueditor!'] //初始化编辑器的内容，也可以通过textarea/script给值，看官网例子
-   **autoClearinitialContent** {Boolean} [默认值：true] //是否自动清除编辑器初始内容，注意：如果focus属性设置为true，这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了
-   **focus** {Boolean} [默认值：false] //初始化时，是否让编辑器获得焦点true或false
-   **initialStyle** {String} [默认值：'p{line-height:1em}']//编辑器层级的基数，可以用来改变字体等 //如果自定义，最好给p标签如下的行高，要不输入中文时，会有跳动感
-   **iframeCssUrl** {Path String} [默认值：URL + '/themes/iframe.css'] //给编辑器内部引入一个css文件
-   **indentValue** {String} [默认值：'2em'] //首行缩进距离，默认是2em
-   **initialFrameWidth** {Number} [默认值：1000] //初始化编辑器宽度，默认1000
-   **initialFrameHeight** {Number} [默认值：320] //初始化编辑器高度，默认320
-   **readonly** {Boolean} [默认值：false] //编辑器初始化结束后，编辑区域是否是只读的，默认是false
-   **autoClearEmptyNode** {Boolean} [默认值：true] //getContent时，是否删除空的inlineElement节点（包括嵌套的情况）
-   **enableAutoSave** {Boolean} [默认值：true] //启用自动保存
-   **saveInterval** {Number} [默认值：500] //自动保存间隔时间，单位ms
-   **imageScaleEnabled** {Boolean} [默认值：true] //启用图片拉伸缩放
-   **fullscreen** {Boolean} [默认值：false] //是否开启初始化时即全屏，默认关闭
-   **imagePopup** {Boolean} [默认值：true] //图片操作的浮层开关，默认打开
-   **autoSyncData** {Boolean} [默认值：true] //自动同步编辑器要提交的数据
-   **emotionLocalization** {Boolean} [默认值：false] //是否开启表情本地化，默认关闭。若要开启请确保emotion文件夹下包含官网提供的images表情文件夹
-   **retainOnlyLabelPasted** {Boolean} [默认值：false] //粘贴只保留标签，去除标签所有属性
-   **pasteplain** {Boolean} [默认值：false] //是否默认为纯文本粘贴。false为不使用纯文本粘贴，true为使用纯文本粘贴
-   **filterTxtRules** {Object} //纯文本粘贴模式下的过滤规则

-   **allHtmlEnabled** [默认值：false] //提交到后台的数据是否包含整个html字符串
-   **insertorderedlist** //有序列表的下拉配置，值留空时支持多语言自动识别，若配置值，则以此值为准
**insertunorderedlist** //无序列表的下拉配置，值留空时支持多语言自动识别，若配置值，则以此值为准

-   **listDefaultPaddingLeft** [默认值：'30'//默认的左边缩进的基数倍
-   **listiconpath** [默认值：'http://bs.baidu.com/listicon/']//自定义标号的路径
-   **maxListLevel** [默认值：3] //限制可以tab的级数， 设置-1为不限制
-   **autoTransWordToList** [默认值：false] //禁止word中粘贴进来的列表自动变成列表标签
-   **fontfamily** //字体设置 label留空支持多语言自动切换，若配置，则以配置值为准

-   **fontsize** {Array} //字号
```
    ```
    //默认值：
    [10, 11, 12, 14, 16, 18, 20, 24, 36]
    ```
    
-   **paragraph** {Object} //段落格式 值留空时支持多语言自动识别，若配置，则以配置值为准

    ```
    //默认值：
    {
        'p': '',
        'h1': '',
        'h2': '',
        'h3': '',
        'h4': '',
        'h5': '',
        'h6': ''
    }
    ```

-   **rowspacingtop** {Array} //段间距 值和显示的名字相同

    ```
    //默认值：
    ['5', '10', '15', '20', '25']
    ```

-   **rowspacingbottom** //段间距 值和显示的名字相同

    ```
    //默认值：
    ['5', '10', '15', '20', '25']
    ```

-   **lineheight** [默认值：['1', '1.5','1.75','2', '3', '4', '5'] ] //行内间距 值和显示的名字相同

-   **customstyle** [Array] //自定义样式，不支持国际化，此处配置值即可最后显示值block的元素是依据设置段落的逻辑设置的，inline的元素依据BIU的逻辑设置，尽量使用一些常用的标签

    ```
    //默认值：
    [{
            tag: 'h1', //tag 使用的标签名字
            name: 'tc', //
            label: '', //label 显示的名字也是用来标识不同类型的标识符，注意这个值每个要不同
            style: 'border-bottom:#ccc 2px solid;padding:0 4px 0 0;text-align:center;margin:0 0 20px 0;' //style 添加的样式
        }, //每一个对象就是一个自定义的样式
    ```

-   **enableContextMenu** {Boolean} [默认值：true] //打开右键菜单功能
-   **contextMenu** {Object} //右键菜单的内容

-   **shortcutMenu** {Array} //快捷菜单

    ```
    //默认值
    ["fontfamily", "fontsize", "bold", "italic", "underline", "forecolor", "backcolor", "insertorderedlist", "insertunorderedlist"]
    ```

-   **elementPathEnabled** {Boolean} [默认值：true] //是否启用元素路径，默认是显示

-   **wordCount** {Boolean} [默认值：true] //是否开启字数统计

-   **maximumWords** {Number} [默认值：10000] //允许的最大字符数

-   **wordCountMsg** {String} [默认值：] //当前已输入 {#count} 个字符，您还可以输入{#leave} 个字符，字数统计提示，{#count}代表当前字数，{#leave}代表还可以输入多少字符数，留空支持多语言自动切换，否则按此配置显示

    ```
    \默认值：
    '当前已输入{#count}个字符, 您还可以输入{#leave}个字符。 '
    ```

-   **wordOverFlowMsg** {String} [默认值：] //超出字数限制提示 留空支持多语言自动切换，否则按此配置显示

    ```
    \默认值：
    '<span style="color:red;">你输入的字符个数已经超出最大允许值，服务器可能会拒绝保存！</span>'
    ```

-   **tabSize** {Number} [默认值：4] //点击tab键时移动的距离，tabSize倍数，tabNode什么字符做为单位

-   **tabNode** {String} [默认值：'&nbsp;']

-   **removeFormatTags** //清除格式时可以删除的标签和属性

    ```
    //默认值：
    'b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var'
    ```

-   **removeFormatAttributes** [默认值：'class,style,lang,width,height,align,hspace,valign'

-   **maxUndoCount** {Number} [默认值：20] //undo操作，可以最多回退的次数，默认20

-   **maxInputCount** {Number} [默认值：1] //undo操作，当输入的字符数超过该值时，保存一次现场

-   **autoHeightEnabled** {Boolean} [默认值：true] //是否自动长高，默认true

-   **scaleEnabled** {Boolean} [默认值：false] //是否可以拉伸长高，默认true(当开启时，自动长高失效)

-   **minFrameWidth** {Number} [默认值：800] //编辑器拖动时最小宽度，默认800

-   **minFrameHeight** {Number} [默认值：220] //编辑器拖动时最小高度，默认220

-   **autoFloatEnabled** [默认值：true] //是否保持toolbar的位置不动，默认true

-   **topOffset** [默认值：30] //浮动时工具栏距离浏览器顶部的高度，用于某些具有固定头部的页面

-   **toolbarTopOffset** [默认值：400] //编辑器底部距离工具栏高度(如果参数大于等于编辑器高度，则设置无效)

-   **pageBreakTag** [默认值：'*ueditor*page*break*tag *'] //分页标识符，默认是*ueditor*page*break*tag*

-   **autotypeset** {Object} //自动排版参数 默认值：

    ```
    {
        mergeEmptyline: true, //合并空行
        removeClass: true, //去掉冗余的class
        removeEmptyline: false, //去掉空行
        textAlign: "left", //段落的排版方式，可以是 left，right，center，justify 去掉这个属性表示不执行排版
        imageBlockLine: 'center', //图片的浮动方式，独占一行剧中，左右浮动，默认: center，left，right，none 去掉这个属性表示不执行排版
        pasteFilter: false, //根据规则过滤没事粘贴进来的内容
        clearFontSize: false, //去掉所有的内嵌字号，使用编辑器默认的字号
        clearFontFamily: false, //去掉所有的内嵌字体，使用编辑器默认的字体
        removeEmptyNode: false, // 去掉空节点
        //可以去掉的标签
        removeTagNames: {标签名字: 1
        },
        indent: false, // 行首缩进
        indentValue: '2em', //行首缩进的大小
        bdc2sb: false,
        tobdc: false
    }
    ```

-   **tableDragable** {Boolean} [默认值：true] //表格是否可以拖拽

-   **disabledTableInTable** {Boolean} [默认值：true] //禁止表格嵌套

-   **sourceEditor** {String} [默认值："codemirror"] //源码的查看方式，codemirror是代码高亮，textarea是文本框，默认是codemirror，注意默认codemirror只能在ie8+和非ie中使用

-   **codeMirrorJsUrl** {Path String} [默认值：URL + "third-party/codemirror/codemirror.js"] //如果sourceEditor是codemirror需要配置这项，codeMirror js加载的路径

-   **codeMirrorCssUrl** {Path String} [默认值：URL + "third-party/codemirror/codemirror.css"] //如果sourceEditor是codemirror需要配置这项，codeMirror css加载的路径

-   **sourceEditorFirst** {String} [默认值：false] //编辑器初始化完成后是否进入源码模式，默认为否。

-   **iframeUrlMap** {Object} //dialog内容的路径 ～会被替换成URL，垓属性一旦打开，将覆盖所有的dialog的默认路径

    ```
    //默认值：
    {
        'anchor': '~/dialogs/anchor/anchor.html',
    }
    ```

-   **webAppKey** {String} //webAppKey 百度应用的APIkey，每个站长必须首先去百度官网注册一个key后方能正常使用app功能，注册介绍，http://app.baidu.com/static/cms/getapikey.html

-   **allowDivTransToP** {Boolean} 默认会将外部进入的html数据中的Div标签转换成P标签，外部进入的数据包括粘贴和调用setContent接口进入编辑器的数据。如果设置成false将不在做这个转换。

-   **dialogs**: 弹出对话框对应的资源和JS文件
-   **lang**: 编辑器国际化显示的文件
-   **php或jsp或asp或net**: 涉及到服务器端操作的后台文件
-   **themes**: 样式图片和样式文件
-   **third-party**: 第三方插件(包括代码高亮，源码编辑等组件）
-   **ueditor.all.js**: 开发版代码合并的结果,目录下所有文件的打包文件
-   **ueditor.all.min.js**: ueditor.all.js文件的压缩版，建议在正式部署时采用
-   **ueditor.config.js**: 编辑器的配置文件，建议和编辑器实例化页面置于同一目录
-   **ueditor.parse.js**: 编辑的内容显示页面引用，会自动加载表格、列表、代码高亮等样式

-   **_doc**: 部分markdown格式的文档
-   **_example**: ueditor的使用例子
-   **_parse**: ueditor.parse.js的源码

**_src**: ueditor.all.js的源码

-   **_src\core**: ueditor核心代码
-   **_src\plugins**: 插件文件
-   **_src\ui**: ui相关文件
-   **_src\adapter**: 桥接层文件,对接ueditor核心和ui代码

扩展你的功能。

```
UE.registerUI('uiname', function(editor, uiname) {
    //do something
}, [index, [editorId]]);
```

考虑到大家的功能基本上都会扩展一个UI和这个UI做的事情，所以UEditor提供了registerUI这个接口，可以让开发者动态的注入扩展的内容。

1.  **uiname**,是你为新添加的UI起的名字，这里可以是1个或者多个，“uiname”后者是“uiname1 uiname2 uiname3”
1.  **function**，是实际你要做的事情，这里提供两个参数，**editor**是编辑器实例，如果你有多个编辑器实例，那每个编辑器实例化后，都会调用这个function,并且把editor传进来,**uiname**,你为ui起的名字，如果前边你添加的是多个的化，这里function会被调用多次，并且将每一个ui名字传递进来.如果函数返回了一个UI 实例，那这个UI实例就会被默认加到工具栏上。当然也可以不返回任何UI。比如希望监控selectionchange事件，在某些场景下弹出浮层，这时就不需要返回任何UI.
1.  **index**,是你想放到toolbar的那个位置，默认是放到最后
1.  **editorId**,当你的页面上有多个编辑器实例时，你想将这个ui扩展到那个编辑器实例上，这里的editorId是给你编辑器初始化时，传入的id,默认是每个实例都会加入你的扩展

### 追加编辑器内容：

```
ue.ready(function() {
    ue.setContent('<p>new text</p>', true);
});
```

```
ue.ready(function() {
    var html = ue.getContent();
});
```

```
ue.getContentTxt();
```

```
ue.getPlainTxt();
```

```
ue.selection.getText();
```

```
ue.execCommand('bold'); //加粗
ue.execCommand('italic'); //加斜线
ue.execCommand('subscript'); //设置上标
ue.execCommand('supscript'); //设置下标
ue.execCommand('forecolor', '#FF0000'); //设置字体颜色
ue.execCommand('backcolor', '#0000FF'); //设置字体背景颜色
```

### 在当前光标位置插入html内容

```
ue.execCommand('inserthtml', '<span>hello!</span>');
```

http://fex.baidu.com/ueditor/#start-config

## `vuex-module-decorators`

### 安装

```
npm install -D vuex-module-decorators
```

这个包以`es2015`格式生成代码。如果你的 Vue 项目面向 ES6 或 ES2015，那么你不需要做任何事情。但是如果您的项目使用`es5`目标（以支持旧浏览器），那么您需要告诉 Vue CLI / Babel 转译这个包。

```
// in your vue.config.js
module.exports = {
  /* ... other settings */
  transpileDependencies: ['vuex-module-decorators']
}
```

vuex 模块过去写法：

```
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})
```

```
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module
export default class Counter2 extends VuexModule {
  count = 0

  @Mutation
  increment(delta: number) {
    this.count += delta
  }
  @Mutation
  decrement(delta: number) {
    this.count -= delta
  }

  // action 'incr' commits mutation 'increment' when done with return value as payload
  @Action({ commit: 'increment' })
  incr() {
    return 5
  }
  // action 'decr' commits mutation 'decrement' when done with return value as payload
  @Action({ commit: 'decrement' })
  decr() {
    return 5
  }
}
```

```
import { Module, VuexModule, MutationAction } from 'vuex-module-decorators'
import { ConferencesEntity, EventsEntity } from '@/models/definitions'

@Module
export default class HGAPIModule extends VuexModule {
  conferences: Array<ConferencesEntity> = []
  events: Array<EventsEntity> = []

  // 'events' and 'conferences' are replaced by returned object
  // whose shape must be `{events: [...], conferences: [...] }`
  @MutationAction({ mutate: ['events', 'conferences'] })
  async fetchAll() {
    const response: Response = await getJSON('https://xxx.json')
    return response
  }
}
```

```
@Module
class MyModule extends VuexModule {
  wheels = 2

  @Mutation
  incrWheels(extra) {
    this.wheels += extra
  }

  get axles() {
    return this.wheels / 2
  }
}
```

```
const module = {
  state: { wheels: 2 },
  mutations: {
    incrWheels(state, extra) {
      state.wheels += extra
    }
  },
  getters: {
    axles: (state) => state.wheels / 2
  }
}
```

```
import Vuex, { Module } from 'vuex'

Vue.use(Vuex)
```

```
@Module({ stateFactory: true })
class MyModule extends VuexModule {
  wheels = 2

  @Mutation
  incrWheels(extra) {
    this.wheels += extra
  }

  get axles() {
    return this.wheels / 2
  }
}
```

```
const module = {
  state() {
    return { wheels: 2 }
  },

  mutations: {
    incrWheels(state, extra) {
      state.wheels += extra
    }
  },
  getters: {
    axles: (state) => state.wheels / 2
  }
}
```

### 动态模块

Vuex 允许我们在构建 store 后在运行时将模块注册到 store。

来创建动态模块

```
interface StoreType {
  mm: MyModule
}
// Declare empty store first
const store = new Vuex.Store<StoreType>({})

// Create module later in your code (it will register itself automatically)
// In the decorator we pass the store object into which module is injected
// NOTE: When you set dynamic true, make sure you give module a name
@Module({ dynamic: true, store: store, name: 'mm' })
class MyModule extends VuexModule {
  count = 0

  @Mutation
  incrCount(delta) {
    this.count += delta
  }
}
```

如果您想保留状态

```
...

-- @Module({ dynamic: true, store: store, name: 'mm' })
++ @Module({ dynamic: true, store: store, name: 'mm', preserveState: true })
class MyModule extends VuexModule {

...
```

或者当它没有初始状态并且您从 localStorage 加载状态时

```
...

-- @Module({ dynamic: true, store: store, name: 'mm' })
++ @Module({ dynamic: true, store: store, name: 'mm', preserveState: localStorage.getItem('vuex') !== null })
class MyModule extends VuexModule {

...
```

## `Vue Property Decorator`

### 安装

```
npm i -S vue-property-decorator
```

### 用法

有几个装饰器和 1 个函数 (Mixin)：
```
@Prop
@PropSync
@Model
@ModelSync
@Watch
@Provide
@Inject
@ProvideReactive
@InjectReactive
@Emit
@Ref
@VModel
@Component（由 vue-class-component 提供）
Mixins（mixins 由 vue-class-component提供的名为 helper 函数）
```

###  装饰师
`@Prop(options: (PropOptions | Constructor[] | Constructor) = {})`
```
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class YourComponent extends Vue {
  @Prop(Number) readonly propA: number | undefined
  @Prop({ default: 'default value' }) readonly propB!: string
  @Prop([String, Boolean]) readonly propC: string | boolean | undefined
}
```

```
export default {
  props: {
    propA: {
      type: Number,
    },
    propB: {
      default: 'default value',
    },
    propC: {
      type: [String, Boolean],
    },
  },
}
```

```
import 'reflect-metadata'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class MyComponent extends Vue {
  @Prop() age!: number
}
```

###  装饰师
`@PropSync(propName: string, options: (PropOptions | Constructor[] | Constructor) = {})`
```
import { Vue, Component, PropSync } from 'vue-property-decorator'

@Component
export default class YourComponent extends Vue {
  @PropSync('name', { type: String }) syncedName!: string
}
```

```
export default {
  props: {
    name: {
      type: String,
    },
  },
  computed: {
    syncedName: {
      get() {
        return this.name
      },
      set(value) {
        this.$emit('update:name', value)
      },
    },
  },
}
```

###  装饰师
`@Model(event?: string, options: (PropOptions | Constructor[] | Constructor) = {})`
```
import { Vue, Component, Model } from 'vue-property-decorator'

@Component
export default class YourComponent extends Vue {
  @Model('change', { type: Boolean }) readonly checked!: boolean
}
```

```
export default {
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: {
      type: Boolean,
    },
  },
}
```

###  装饰师
`@ModelSync(propName: string, event?: string, options: (PropOptions | Constructor[] | Constructor) = {})`
```
import { Vue, Component, ModelSync } from 'vue-property-decorator'

@Component
export default class YourComponent extends Vue {
  @ModelSync('checked', 'change', { type: Boolean })
  readonly checkedValue!: boolean
}
```

```
export default {
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: {
      type: Boolean,
    },
  },
  computed: {
    checkedValue: {
      get() {
        return this.checked
      },
      set(value) {
        this.$emit('change', value)
      },
    },
  },
}
```

###  装饰师
`@Watch(path: string, options: WatchOptions = {})`
```
import { Vue, Component, Watch } from 'vue-property-decorator'

@Component
export default class YourComponent extends Vue {
  @Watch('child')
  onChildChanged(val: string, oldVal: string) {}

  @Watch('person', { immediate: true, deep: true })
  onPersonChanged1(val: Person, oldVal: Person) {}

  @Watch('person')
  onPersonChanged2(val: Person, oldVal: Person) {}
}
```

```
export default {
  watch: {
    child: [
      {
        handler: 'onChildChanged',
        immediate: false,
        deep: false,
      },
    ],
    person: [
      {
        handler: 'onPersonChanged1',
        immediate: true,
        deep: true,
      },
      {
        handler: 'onPersonChanged2',
        immediate: false,
        deep: false,
      },
    ],
  },
  methods: {
    onChildChanged(val, oldVal) {},
    onPersonChanged1(val, oldVal) {},
    onPersonChanged2(val, oldVal) {},
  },
}
```

### 装饰者

```
`@Provide(key?: string | symbol)`/`@Inject(options?: { from?: InjectKey, default?: any } | InjectKey)`
```
```
import { Component, Inject, Provide, Vue } from 'vue-property-decorator'

const symbol = Symbol('baz')

@Component
export class MyComponent extends Vue {
  @Inject() readonly foo!: string
  @Inject('bar') readonly bar!: string
  @Inject({ from: 'optional', default: 'default' }) readonly optional!: string
  @Inject(symbol) readonly baz!: string

  @Provide() foo = 'foo'
  @Provide('bar') baz = 'bar'
}
```

```
const symbol = Symbol('baz')

export const MyComponent = Vue.extend({
  inject: {
    foo: 'foo',
    bar: 'bar',
    optional: { from: 'optional', default: 'default' },
    baz: symbol,
  },
  data() {
    return {
      foo: 'foo',
      baz: 'bar',
    }
  },
  provide() {
    return {
      foo: this.foo,
      bar: this.baz,
    }
  },
})
```

### 装饰者

```
`@ProvideReactive(key?: string | symbol)`/`@InjectReactive(options?: { from?: InjectKey, default?: any } | InjectKey)`
```
如果父组件修改了提供的值，则子组件可以捕获此修改。

```
const key = Symbol()
@Component
class ParentComponent extends Vue {
  @ProvideReactive() one = 'value'
  @ProvideReactive(key) two = 'value'
}

@Component
class ChildComponent extends Vue {
  @InjectReactive() one!: string
  @InjectReactive(key) two!: string
}
```

### 装饰师
`@Emit(event?: string)` 
```
import { Vue, Component, Emit } from 'vue-property-decorator'

@Component
export default class YourComponent extends Vue {
  count = 0

  @Emit()
  addToCount(n: number) {
    this.count += n
  }

  @Emit('reset')
  resetCount() {
    this.count = 0
  }

  @Emit()
  returnValue() {
    return 10
  }

  @Emit()
  onInputChange(e) {
    return e.target.value
  }

  @Emit()
  promise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(20)
      }, 0)
    })
  }
}
```

```
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    addToCount(n) {
      this.count += n
      this.$emit('add-to-count', n)
    },
    resetCount() {
      this.count = 0
      this.$emit('reset')
    },
    returnValue() {
      this.$emit('return-value', 10)
    },
    onInputChange(e) {
      this.$emit('on-input-change', e.target.value, e)
    },
    promise() {
      const promise = new Promise((resolve) => {
        setTimeout(() => {
          resolve(20)
        }, 0)
      })

      promise.then((value) => {
        this.$emit('promise', value)
      })
    },
  },
}
```

### 装饰师
`@Ref(refKey?: string)` 

```
import { Vue, Component, Ref } from 'vue-property-decorator'

import AnotherComponent from '@/path/to/another-component.vue'

@Component
export default class YourComponent extends Vue {
  @Ref() readonly anotherComponent!: AnotherComponent
  @Ref('aButton') readonly button!: HTMLButtonElement
}
```

```
export default {
  computed() {
    anotherComponent: {
      cache: false,
      get() {
        return this.$refs.anotherComponent as AnotherComponent
      }
    },
    button: {
      cache: false,
      get() {
        return this.$refs.aButton as HTMLButtonElement
      }
    }
  }
}
```

### 装饰师
`@VModel(propsArgs?: PropOptions)` 

```
import { Vue, Component, VModel } from 'vue-property-decorator'

@Component
export default class YourComponent extends Vue {
  @VModel({ type: String }) name!: string
}
```

```
export default {
  props: {
    value: {
      type: String,
    },
  },
  computed: {
    name: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
```


❤️关注+点赞+收藏+评论+转发❤️，原创不易，鼓励笔者创作更好的文章

## 点赞、收藏和评论

我是`Jeskson`，感谢各位人才的：**点赞、收藏和评论**，我们下期见！(如本文内容有地方讲解有误，欢迎指出☞**谢谢，一起学习了**)

## 我们下期见！

> `github`收录，欢迎`Star`：[https://1024bibi.com](https://github.com/webVueBlog/WebFamily)
