---
title: Webpack前端技术类文章
date: 2021-10-30 08:18:04
tags:
	- Webpack
	- ES
categories:
	- 前端
keywords: "Webpack"
description: "Webpack前端技术类文章"
cover: https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe22fe0d371945a6b707aade6e8ce07e~tplv-k3u1fbpfcp-watermark.image
top_img:
---

## 前沿

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d2dcb46c19754836bab9e33bdb46abb8~tplv-k3u1fbpfcp-watermark.image)

webpack是**前端打包工具**，是**大前端自动化工厂**的重要组成部分，webpack的主要是打包，webpack作为**自动化工具链**的一部分集成更大的工具系统，而不是将一切需求的实现都寄望于webpack。

wepack是**前端一个工具**，可以让各个模块进行加载，预处理，再进行打包，它能有Grunt或Gulp所有基本功能。

优势：

1. 支持**commonJS**和**AMD**模块
2. 支持很多模块加载器的调用，可以使模块加载器灵活定制，比如babel-loader加载器，该加载器能使我们使用ES6的语法来编写代码
3. 可以通过配置打包成多个文件，有效的利用浏览器的缓存功能提升性能
4. 使用模块加载器，可以支持sass，less等处理器进行打包且支持静态资源样式及图片进行打包

```
npm install -g webpack

// 项目配置项
// cd 打开
npm init
```

> package.json

```
{
 "name": "jeskson",
 "version": "1.0.0",
 "description": "",
 "main": "index.js",
 "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1"
 },
 "author": "",
 "license": "ISC"
}
```

创建webpack的依赖项：

```
npm install --save-dev webpack
```

```
{
 "name": "jeskson",
 "version": "1.0.0",
 "description": "",
 "main": "index.js",
 "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1"
 },
 "author": "",
 "license": "ISC",
 "devDependencies": {
     "webpack": "^1.14.0"
 }
}
```

> webpack的运行方法

```
module.exports = {
 // __dirname是nodejs里的一个全局变量
 // 它指向的是我们项目的根目录
 // 入口文件的位置
 entry: __dirname + '/app/main.js
 output: {
     // 打包后的文件放置的位置
     path: __dirname + '/public',
     // 打包后我们的文件名字
     filename: 'webpack.js'
 }
}
```

```
webpack.js
```

```
{
 "name": "jeskson",
 "version": "1.0.0",
 "description": "",
 "main": "index.js",
 "scripts": {
     "start": "webpack",
     "test": "echo \"Error: no test specified\" && exit 1"
 },
 "author": "",
 "license": "ISC",
 "devDependencies": {
     "webpack": "^1.14.0"
 }
}
```

```
若start改da，npm run da
```

**Loaders**需要单独安装并且需要在**webpack.config.js**下的**modules**关键字下进行配置，Loaders的配置选项包括以下几方面：

- test，一个匹配loaders所处理的文件的拓展名的正则表达式。
- loader,loader的名称
- include/exclude，手动添加必须处理的文件或屏蔽不需要处理的文件
- query，为loaders提供额外的设置选项

```
npm install --save-dev json-loader
```

> webpack.config.js

```
module.exports = {
 // __dirname是nodejs里的一个全局变量
 // 它指向的是我们项目的根目录
 // 入口文件的位置
 entry: __dirname + '/app/main.js
 output: {
     // 打包后的文件放置的位置
     path: __dirname + '/public',
     // 打包后我们的文件名字
     filename: 'webpack.js'
 },
 module: {
     loaders: [
         {
             test: /\.josn$/,
             loader: 'json"
         }
     ]
 }
}
```

work.js

```
var config = require("./config.json")
document.write(config.text);
```

> webpack对样式表的操作

webpack提供两个工具处理样式表，`css-loader和style-loader`。

`css-loader`使你能够使用类似`@import和url(...)`的方法实现`require()`的功能。

`style-loader`将**所有的计算后的样式加入页面中**，二者组合在一起使你能够把样式表嵌入`webpack`打包后的JS文件中。

安装命令：`npm install --save-dev style-loader css-loader`

> webpack.config.js

```
module.exports = {
 // __dirname是nodejs里的一个全局变量
 // 它指向的是我们项目的根目录
 // 入口文件的位置
 entry: __dirname + '/app/main.js
 output: {
     // 打包后的文件放置的位置
     path: __dirname + '/public',
     // 打包后我们的文件名字
     filename: 'webpack.js'
 },
 module: {
     loaders: [
         {
             test: /\.josn$/,
             loader: 'json"
         },
         {
             test: /\.css$/,
             loader: "style!css" // 右向左执行
         }
     ]
 }
}
```

css3语法，编写样式的时候，要做**浏览器的兼容**，也就是要添加很多的样式前缀，这样也会增多代码量，但是现在添加前缀的工作交给webpack来做。

```
npm intall --save-dev postcss-loader autoprefixer
```

> webpack.config.js

```
module.exports = {
 // __dirname是nodejs里的一个全局变量
 // 它指向的是我们项目的根目录
 // 入口文件的位置
 entry: __dirname + '/app/main.js
 output: {
     // 打包后的文件放置的位置
     path: __dirname + '/public',
     // 打包后我们的文件名字
     filename: 'webpack.js'
 },
 module: {
     loaders: [
         {
             test: /\.josn$/,
             loader: 'json"
         },
         {
             test: /\.css$/,
             loader: "style!css!postcss" // 右向左执行
         }
     ]
 },
 postcss: [
     require('autoprefixer')
 ]
}
```

兼容:

```
body {
 background: red;
 display: flex;
 display: -webkit-box;
 display: -ms-flexbox;
}
```

> webpack之babel-core（es6转换成es5）

Babel其实是几个**模块化的包**，其核心功能位于称为**babel-core**的npm包中，不过webpack把它们整合在一起使用，但是对于每一个你需要的功能或拓展，你都需要安装单独的包（用得最多的是解析ES6的babel-preset-es2015包和解析JSX的babel-preset-react包）。

```
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
```

配置项写法：

```
{
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel', // 在webpack的module部分的loaders里进行配置即可
    query: {
        presets: ['es2015','react']
    }
}
// React安装： npm install --save react react-dom
```

> webpack.config.js

```
module.exports = {
 // __dirname是nodejs里的一个全局变量
 // 它指向的是我们项目的根目录
 // 入口文件的位置
 entry: __dirname + '/app/main.js
 output: {
     // 打包后的文件放置的位置
     path: __dirname + '/public',
     // 打包后我们的文件名字
     filename: 'webpack.js'
 },
 module: {
     loaders: [
         {
             test: /\.josn$/,
             loader: 'json"
         },
         {
             test: /\.css$/,
             loader: "style!css!postcss" // 右向左执行
         },
         {
             test: /\.js$/,
             loader: "babel",
             exclude: /node_modules/,
             query: {
                 presets: ['es2015']
             }
         }
     ]
 },
 postcss: [
     require('autoprefixer')
 ]
}
```

> webpack之插件的使用

插件（Plugins）是用来**拓展Webpack功能**的，它们会在整个构建过程中生效，执行相关的任务。

`Loaders`和`Plugins`常常被弄混，但是它们其实是完全不同的东西，`loaders`是**打包构建过程中用来处理源文件**的 (`JSX, Scss, Less`），一次处理一次，插件并不直接操作单个文件，它直接对整个构建过程起作用。

要使用某个插件，我们要通过npm安装它，然后要做的就是在webpack配置中的plugins关键字部分，添加改插件的一个实例（`plugins`是一个数组），添加一个实现版权声明的插件。

我们需要在配置文件的最开始调用webpack插件：

```
var webpack = require('webpack');
```

然后在`module.exports={}`里添加一个`plugins`的关键字

```
plugins: [
    new webpack.BannerPlugin('版权') // 在整个数组中new一个就可以了
    // 这里一个添加版权声明的插件是webpack自带的并不需要安装插件
]
```

## HtmlWebpackPlugin

这个插件的作用是依据一个简单的模板，帮你生成最终的HTML5文件，这个文件中自动引用了你打包后的JS文件，每次编译都在文件名中插入一个不同的哈希值。

```
npm install --save-dev html-webpack-plugin
```

这个插件自动完成了我们之前手动做的一些事情，在正式使用之前需要对一直以来的项目结构做一些改变：

移除public文件夹，利用此插件，HTML5文件会自动生成，此外CSS已经通过前面的操作打包到JS中，public文件夹里。

在app目录下，创建一个Html文件模板，这个模板包含title等其它你需要的元素，在编译过程中，本插件会依据此模板生成最终的html页面，会自动添加所依赖的css.js，favicon等文件。

配置项：

> webpack.config.js

```
var webpack = require('webpack');
var Html = require('html-webpack-plugin');

module.exports = {
 // __dirname是nodejs里的一个全局变量
 // 它指向的是我们项目的根目录
 // 入口文件的位置
 entry: __dirname + '/app/main.js
 output: {
     // 打包后的文件放置的位置
     path: __dirname + '/public',
     // 打包后我们的文件名字
     filename: 'webpack.js'
 },
 module: {
     loaders: [
         {
             test: /\.josn$/,
             loader: 'json"
         },
         {
             test: /\.css$/,
             loader: "style!css!postcss" // 右向左执行
         },
         {
             test: /\.js$/,
             loader: "babel",
             exclude: /node_modules/,
             query: {
                 presets: ['es2015']
             }
         }
     ]
 },
 postcss: [
     require('autoprefixer')
 ],
 plugins: [
    new webpack.BannerPlugin('版权'), // 在整个数组中new一个就可以了
    // 这里一个添加版权声明的插件是webpack自带的并不需要安装插件
    new Html({
        template: __dirname + '/app/index.html'
    })
 ]
}
```

> webpack之webpack-dev-server

自动刷新页面的功能

**webpack开发服务器**，是webpack官方提供的一个辅助开发工具，它可以自动监控项目下的文件，一旦有修改保存的操作，他就会主动执行打包命令，将我们的代码重新打包，并且需要的话还可以刷新浏览器。

```
npm install --save-dev webpack-dev-server
```

contentBase 默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录。

- port 设置默认监听端口，如果省略，默认为“8080”
- inline 设置为true，当源文件改变时会自动刷新页面
- colors 设置为true，使终端输出的文件为彩色的
- historyApiFallback 在开发单页应用时非常有用，它依赖于HTML5 history API,如果设置为true，所有的跳转将指向index.html

```
devServer {
 contentBase: "./public", // 本地服务器所加载的页面所在的目录
 colors: true, // 终端中输出结果为彩色
 historyApiFallback: true, // 不跳转
 inline: true, // 实时刷新
}
```

> webpack.config.js

```
var webpack = require('webpack');
var Html = require('html-webpack-plugin');

module.exports = {
 // __dirname是nodejs里的一个全局变量
 // 它指向的是我们项目的根目录
 // 入口文件的位置
 entry: __dirname + '/app/main.js
 output: {
     // 打包后的文件放置的位置
     path: __dirname + '/public',
     // 打包后我们的文件名字
     filename: 'webpack.js'
 },
 module: {
     loaders: [
         {
             test: /\.josn$/,
             loader: 'json"
         },
         {
             test: /\.css$/,
             loader: "style!css!postcss" // 右向左执行
         },
         {
             test: /\.js$/,
             loader: "babel",
             exclude: /node_modules/,
             query: {
                 presets: ['es2015']
             }
         }
     ]
 },
 postcss: [
     require('autoprefixer')
 ],
 plugins: [
    new webpack.BannerPlugin('版权'), // 在整个数组中new一个就可以了
    // 这里一个添加版权声明的插件是webpack自带的并不需要安装插件
    new Html({
        template: __dirname + '/app/index.html'
    })
 ],
 devServer: {
     contentBase: './public', // 本地服务起所加载的页面所在的目录
     colors: true,
     inline: true, // 实时刷新
     hot: true
 }
}
```

webpack-dev-server有两种启动模式：

iFrame:该模式下修改代码会自动打包，但不会刷新浏览器

inline:该模式下修改代码会自动打包，并且会刷新浏览器

运行方式：`webpack-dev-server --line`

> 模块热加载技术，也就是说我们在修改代码后并执行保存，代码不仅可以打包而且会自动刷新我们修改部分的代码，而不会刷新浏览器。

```
devServer: {
    contentBase: "./public", // 本地服务器所加载的页面所在的目录
    colors: true, // 终端中输出结果为彩色
    historyApiFallback: true, // 不跳转
    inline: true, // 实时刷新
    hot: true // 允许热加载
}
```

```
webpack-dev-server --inline --hot
```

## Fuse.js

Fuse.js 是一个**功能强大、轻量级的模糊搜索库，零依赖**。

```
// 1. List of items to search in
const books = [
  {
    title: "Old Man's War",
    author: {
      firstName: 'John',
      lastName: 'Scalzi'
    }
  },
  {
    title: 'The Lock Artist',
    author: {
      firstName: 'Steve',
      lastName: 'Hamilton'
    }
  }
]

// 2. Set up the Fuse instance
const fuse = new Fuse(books, {
  keys: ['title', 'author.firstName']
})

// 3. Now search!
fuse.search('jon')

// Output:
// [
//   {
//     item: {
//       title: "Old Man's War",
//       author: {
//         firstName: 'John',
//         lastName: 'Scalzi'
//       }
//     },
//     refIndex: 0
//   }
// 
```

##  模块打包工具

模块打包工具是 为了解决 模块间的依赖，使其能够打包后的结果运行在浏览器上。

- 将存在依赖关系的模块按照特定规则合并为单个JS文件，一次全部加载进页面中。
- 在页面初始时加载一个入口模块，其他模块异步地进行加载。

### webpack

1. webpack默认支持多种模块标准
2. webpack有完备的代码分割解决方案
3. webpack可以处理各种类型的资源
4. webpack有庞大的社区支持

安装使用本地安装方式：

1. 如果采用全局安装，那么在与他人进行项目协作的时候，由于每个人系统中的webpack版本不同，可能会导致结果不一致。
2. 部分依赖与webpack的插件会调用项目中webpack的内部模块，这种情况下仍然需要在项目本地安装webpack，而如果全局和本地都有，容易造成混淆。

```
npm init
// yarn init
```

生成一个package.json文件，它相当于npm项目的说明书，里面记录了项目名称，版本，仓库地址等信息。

```
npm install webpack webpack-cli --save-dev
```

webpack是核心模块，webpack-cli命令行工具

- entry是资源打包的入口
- output-filename是输出资源名
- webpack为开发者提供了development,production,none三种模式

webpack的默认配置文件为webpack.config.js：

```
module.exports = {
 entry: './src/index.js',
 output: {
  filename: 'bundle.js',
 },
 mode: 'development',
}
```

## webpack-dev-server

```
npm install webpack-dev-server --save-dev
```

`npm install --production`过滤掉`devDependencies`中的多余模块

```
module.exports = {
 entry: './src/index.js',
 output: {
  filename: 'bundle.js',
 },
 mode: 'development',
 devServer: {
  publicPath: '/dist',
 },
}
```

webpack-dev-server是用来接收浏览器的请求，然后将资源返回。当webpack-dev-server接收到浏览器的资源请求时，它会首先进行URL地址校验。如果该地址是资源服务地址，就会从webpack的打包结果中寻找该资源并返回给浏览器。反之，如果请求地址不属于资源服务地址，则直接读取硬盘中的源文件并将其返回。

webpack-dev-server：

- 令webpack进行模块打包，并处理打包结果的资源请求
- 作为普通的web server，处理静态资源文件请求

> webpack可以处理模块之间的依赖，将它们串联起来合并为单一的JS文件，使用本地安装，可以使团队开发时共用一个版本，并且可以让其他插件直接获取webpack的内部模块。

## 模块打包

### 导出

```
module.exports = {
 name: 'calculater',
 add: function(a, b) {
  return a + b;
 }
};
```

CommonJS模块内部会有一个module对象用于存放当前模块的信息，可以理解成在每个模块的最开始定义的对象：

```
var module = {...};
// 模块自身逻辑
module.exports = {...};
```

应用中，🗡已把module.exports以及exports语句放在模块的末尾.

> 在CommonJS中使用require进行模块导入

```
module.exports = {
 add: func()
}

const addFun = require('./addjs.js');
const num = addFun.add()
```

- require的模块是第一次被加载，这时会首先执行该模块，然后导出内容。
- require的模块曾经被加载过，该模块的代码不会再次执行，而是直接导出上次执行后得到的结果。

模块中的module对象用来存放信息，对象中有个属性loaded用于记录该模块是否被加载过。默认为false，加载过后为true。

### 动态性

require函数可以接收表达式。

```
const moduleNames = ['foo.js', 'bar.js'];
moduleNames.forEach(name => {
 require('./' + name);
});
```

## es6模块

```
export default {
 name: 'dada'
};

import add form './xx.js';
const num = add.name
```

> ES6 Module会自动采用严格模式

### 导出

- 第一种： 将变量的声明和导出写在一行
- 第二种： 将先进行变量声明，然后再用同一个export语句导出

在使用命名导出时，可以通过as关键字对变量重命名。

将export default理解为对外输出了一个名为default的变量，因此不需要像命名导出一样进行变量声明，直接导出值即可。

```
// 导出字符串
export default 'ddd'
```

### 导入

> 在导入多个变量时，可以采用整体导入的方式

`import * as addFunc from 'xxx.js';`

两种导入方式混合：

```
import React, { Component } from 'react';
// React对应的是该模块的默认导出
// Component是其命名导出中的一个变量
```

> 复合写法

```
import calculator from './calculator.js';
export default calculator;
```

### CommonJS和ES6 Module

CommonJS和ES6 Module最本质的区别在于前者对模块依赖的解决是“动态的”，而后者是“静态的”。

动态：模块依赖关系的建立发生在代码运行阶段；静态：模块依赖关系的建立发生在代码编译阶段。

ES6代码的编译阶段就可以分析出模块的依赖关系：

- 死代码检测和排除，用静态分析工具检测哪些模块没有被调用过。就是未被调用到的模块代码就是不会被执行的，成了死代码，通过静态分析可以在打包时去掉这些未曾用过的模块，来减少打包资源体积。
- 模块变量类型检查，JavaScript属于动态类型语言，不会在代码执行前检查类型错误。而ES6 Module的静态模块结构有助于确保模块之间传递的值或接口类型是正确的。
- 编译器优化。CommonJS等动态模块系统中，无论采用哪种方式，本质上导入的都是一个对象，而ES6 Module支持直接导入变量，减少了引用层级，程序效率更高。

> 在导入一个模块时，对于CommonJS来说是一份导出值的拷贝，而ES6 Module则是值的动态映射，并且这个映射是只读的。

## AMD

AMD是异步模块定义，与CommonJS和ES6 Module区别在于它加载模块的方式是异步的。

通过AMD形式定义模块的好处在于其模块加载是非阻塞性的，当执行到require函数时并不会停下来去执行被加载的模块，而是继续执行require后面的代码，

## UMD

它的目标是使一个模块能运行在各种环境下，不论是CommonJS,AMD,还是非模块化的环境。

## npm

初始化npm工程，通过npm来获取模块：

```
// 项目初始化
npm init -y
// 安装 lodash
npm install lodash
```

```
// 使用
// index.js

import _ from 'lodash';
```

CommonJS和ES6 Module是目前使用广泛的，主要区别前者建立模块依赖关系是在运行时，后者是编译时。在模块导入方面，CommonJS导入是值拷贝，ES6 Module导入的是只读的变量映射，ES6 Module通过其静态特性可以进行编译过程中的优化，并且具备处理循环依赖的能力。

> webpack是一个在开发阶段进行打包的模块化工具，也就是说它无法不经过打包直接在线上使用。webpack同时兼容AMD、Common.js以及非模块化的写法.

使用全局安装的webpack或者gulp

```
npm install -g webpack gulp
```

可以考虑使用淘宝的镜像
```
npm install -g webpack gulp --registry=http://registry.npm.taobao.org
```

> 入口文件就是在HTML直接引用的，由浏览器触发执行的JS文件。其它的非入口文件则是由入口文件来直接或间接依赖，由JS互相调用执行。

解析文件

```
(function(modules){
    // Runtime
})([
    // 模块数组
])
```

Common Chunks 插件的作用就是提取代码中的公共模块，然后将公共模块打包到一个独立的文件中去，以便在其它的入口和模块中使用。

使用它来提取公共模块

```
var webpack = require('webpack');

module.exports = {
    entry:{
        main1:'./main',
        main2:'./main.2'
    },
    output:{
        filename:'bundle.[name].js'
    },
    plugins: [
        new  webpack.optimize.CommonsChunkPlugin('common.js', ['main1', 'main2'])
    ]
};
```

分割点表示代码在此处被分割成两个独立的文件。具体的方式有两种。

使用`require.ensure`：

```
require.ensure(["module-a", "module-b"], function(require) {
    var a = require("module-a");
    // ...
});
```

使用AMD的动态`require`：

```
require(["module-a", "module-b"], function(a, b) {
    // ...
});
```

## `output.publicPath`

一般情况下，用上面的配置就能搞定了。但如果你的网站稍大一点，可能需要引入CDN，而且很可能CDN还有一些很古怪的前缀，这个时候可以通过`output.publicPath`来搞定。

例如，在前面的例子中，输出的脚本路径是`dist/example4.1.js`，而在生产环境中访问的时候却有可能是`http://cdn.toobug.net/scripts/webpack_guide/dist/example4.1.js`。这种情况下，就需要使用`output.publicPath`来将前面的路径补全：

```
output:{
    publicPath:'http://cdn.toobug.net/scripts/webpack_guide/'
}
```

这样发布到生产环境以后，就会到CDN上对应的路径去加载脚本了。

## TypeScript（ts-loader）

```
module:{
    rules:[{
        test: /.ts$/,
        loader:'ts-loader',
    }]
}
```

bundle-loader是一个用来在运行时异步加载模块的loader。

```
// 在require bundle时，浏览器会加载它
var waitForChunk = require("bundle!./file.js");

// 等待加载，在回调中使用
waitForChunk(function(file) {
    // 这里可以使用file，就像是用下面的代码require进来一样
    // var file = require("./file.js");
});

// todo：这句注释说的是？
// wraps the require in a require.ensure block
```

```
var load = require("bundle?lazy!./file.js");

// 只有在调用load的时候才会真正加载
load(function(file) {

});
```


❤️关注+点赞+收藏+评论+转发❤️，原创不易，鼓励笔者创作更好的文章

## 点赞、收藏和评论

我是`Jeskson`，感谢各位人才的：**点赞、收藏和评论**，我们下期见！(如本文内容有地方讲解有误，欢迎指出☞**谢谢，一起学习了**)

## 我们下期见！

> `github`收录，欢迎`Star`：[https://1024bibi.com](https://1024bibi.com)
