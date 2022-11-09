# 1024bibi.com

<img src="./1641058147300.jpg" style="display: flex; margin: auto; width: 80%;"/>

> 点击勘误[issues](https://github.com/webVueBlog/1024bibi/issues)，哪吒感谢大家的阅读

```js
git config --global user.name "此处填写你注册时的用户名"
git config --global user.email "此处填写你注册时的邮箱"
# 一般只要不报错，可以跳过下面寻找.gitconfig文件
```

## 本地安装 hexo 静态博客框架以及发布到 Github Pages

首先选择一个磁盘作为你博客文件的存放位置，然后新建一个文件夹，比如名为 blogtest 的文件夹，创建完后，先不要点进去，在此处点击鼠标右键，选择 Git Bash Here，然后依次输入如下命令，：

```js
# hexo框架的安装
npm install -g hexo-cli
# 等上一个命令完成后，在输入下面的命令
hexo init <新建文件夹的名称>  #初始化文件夹
cd <新建文件夹的名称>
npm install  # 安装博客所需要的依赖文件
```

等待运行完成，此时文件夹中多了许多文件。
注意：后续的命令均需要在站点目录下（即文件夹内）使用 Git Bash 运行。
此时 Hexo 框架的本地搭建已经完成了。我们来运行一下看看，命令行依次输入以下命令 :

```js
hexo g
hexo s
```

node的版本有问题。

开始下n来管理node的版本。

```js
sudo npm i -g n
```

然后将node替换为稳定版：

```js
sudo n stable
```

然后查看node的版本：

```js
node -v
v12.16.2
```

先清理，然后再生成：

```js
hexo clean
hexo g
```

```js
Mac 升级/降级node版本
1）安装node版本管理模块n
sudo npm install n -g

根据所需选择安装操作：
2）安装稳定版
sudo n stable

3）安装最新版
sudo n latest

4）版本降级/升级
sudo n 版本号//例如：sudo n 9.1.7

版本号可以在此处查询：
https://nodejs.org/en/download/

mac v17.3.0
sudo n 16.9.1
#prefix=/Users/jeskson/npm-global

This package has installed:
	•	Node.js v18.12.1 to /usr/local/bin/node
	•	npm v8.19.2 to /usr/local/bin/npm
Make sure that /usr/local/bin is in your $PATH.

This package has installed:
	•	Node.js v15.0.1 to /usr/local/bin/node
	•	npm v7.0.3 to /usr/local/bin/npm
Make sure that /usr/local/bin is in your $PATH.

sudo npm install -g n
```

## hexo 三连

执行 hexo 三连

`hexo clean && hexo g && hexo s`

## 学前必读

哪吒希望能为开发人员提供最大程度的愉悦开发体验。提供便捷的阅读文档，帮助前端开发小团体高效率的工作进度，并维护本站1024bibi.com文档。

## 感谢指正

指正不胜感激，无以回报。

## 声明

学习文档，仅适合本人食用！！!

## 勘误及提问

如果有疑问或者发现错误，可以在相应的 issues 进行提问或勘误。

如果喜欢或者有所启发，欢迎 star，对作者也是一种鼓励。

## License

所有文章采用[知识共享署名-非商业性使用-相同方式共享 3.0 中国大陆许可协议](http://creativecommons.org/licenses/by-nc-sa/3.0/cn/)进行许可。