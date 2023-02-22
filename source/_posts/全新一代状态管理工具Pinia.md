---
title: 全新一代状态管理工具Pinia
abbrlink: e68c7fb9
date: 2022-12-10 09:32:20
tags:
  - Pinia
categories:
  - Pinia
keywords: 全新一代状态管理工具
description: Pinia、全新一代状态管理工具
cover: >-
  https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe22fe0d371945a6b707aade6e8ce07e~tplv-k3u1fbpfcp-watermark.image
top_img:
---

## Pinia的优势，环境安装和课程介绍

Pinia是Vue生态里Vuex的代替者，一个全新Vue的状态管理库。在Vue3成为正式版以后，尤雨溪强势推荐的项目就是Pinia。那先来看看Pinia比Vuex好的地方，也就是Pinia的五大优势。

可以对Vue2和Vue3做到很好的支持，也就是老项目也可以使用Pinia。

抛弃了Mutations的操作，只有state、getters和actions.极大的简化了状态管理库的使用，让代码编写更加容易直观。

不需要嵌套模块，符合Vue3的Composition api ，让代码更加扁平化。

完整的TypeScript支持。Vue3版本的一大优势就是对TypeScript的支持，所以Pinia也做到了完整的支持。如果你对Vuex很熟悉的化，一定知道Vuex对TS的语法支持不是完整的（经常被吐槽）。

代码更加简洁，可以实现很好的代码自动分割。Vue2的时代，写代码需要来回翻滚屏幕屏幕找变量，非常的麻烦，Vue3的Composition api完美了解决这个问题。 可以实现代码自动分割，pinia也同样继承了这个优点。

如果你说这五点有点太多了，记不住。可以简单总结Pinia的优势就是，更加简洁的语法，完美支持Vue3的Composition api 和 对TypesCcript的完美支持。这些优势和尤雨溪的强烈推荐，个人觉得很快Pinia就会完全取代Vuex，成为最适合Vue3的状态管理库。

这里说一点哦，其实pinia的开发团队，就是Vuex的开发团队。

Vue3环境安装

明白了Pinia的优势后，下一步我们就需要安装开发环境了。Pinia是Vue的状态管理库，所以需要先安装Vue的项目环境。这里需要说一下Pinia同时支持Vue2和Vue3，但这里我就用Vite来创建一个Vue3项目为例。

使用Vite就需要先初始化vite，一条命令搞定。

```
npm init vite@latest
```

如果是第一次安装，会提示你安装对应的packages。

```
Need to install the following packages:
  create-vite@latest
Ok to proceed? (y)
```

如果出现这句话，我们直接输入y，回车后安装对应的packages。然后回让你输入名字，这里起名叫做pinia-demo。

输入完名字，会让你选择项目的框架。

```
? Select a framework: » - Use arrow-keys. Return to submit.
>   vanilla
    vue
    react
    preact
    lit
    svelte
```

这里按鼠标的上下键进行选择。因为Pinia是专门为Vue项目开发的，所以这里我们只能选择vue。选择vue之后回车。

```
? Select a variant: » - Use arrow-keys. Return to submit.
>   vue
    vue-ts
```

然后会让你选择是否使用ts-vue。如果你选择使用TypeScript，就选择第二项。

这里多说一点哦，如果你自己开发项目或者是新项目，还是建议使用TypeScript。用起来会减少很多错误，也适合团队的开发。对前端职业生涯很有好处。

这步选择完成后，Vite一瞬间就初始化好了项目。按照下面的顺序，只需要三步，就可以运行起来一个Vue3的项目。

```
Done. Now run:

  cd pinia-demo  // 进入项目文件夹
  npm install    // 安装项目依赖
  npm run dev    // 运行项目
```

运行成功后，会提示可以通过下面的地址进行访问。复制地址，在浏览器中输入[http://localhost:3000/](http://localhost:3000/), 就可以看到默认的项目页面了。

```
vite v2.7.13 dev server running at:

  > Local: http://localhost:3000/
  > Network: use `--host` to expose

  ready in 805ms.
```

如果可以正常访问页面，说明Vue3的项目已经安装好了。

Pinia的安装

安装好Vue3的开发环境后，就可以安装Pinia状态管理库了。安装的方法依然是使用npm 来安装。

```
npm install pinia
# or with yarn
yarn add pinia
```

视频中使用了npm 来进行安装。安装完成后，可以到项目中的package.json文件中查看一下pinia的版本。

```
{
  "name": "pinia-demo",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "pinia": "^2.0.11",
    "vue": "^3.2.25"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^2.0.0",
    "typescript": "^4.4.4",
    "vite": "^2.7.2",
    "vue-tsc": "^0.29.8"
  }
}
```

```
npm install pinia@2.0.11
```

## 用Pinia的方式创建一个Store

在main.ts里引入Pinia

安装好Pinia后，需要作的第一件事就是在/src/main.ts里引入pinia。 这里我们直接使用import引入。

```
import { createPinia } from 'pinia'
```

引入后，通过createPinia( )方法，得到pinia的实例和挂载到Vue根实例上。为了方便你学习，这里直接给出main.ts的全部代码。

```
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia' 

// 创建pinia 实例
const pinia = createPinia()
const app = createApp(App)
// 挂载到 Vue 根实例上
app.use(pinia)
app.mount('#app')
```

这样我们就在项目中引入了Pinia,也就是说我们可以在项目中使用它进行编程了。

创建store状态管理库

引入Pinia后，就可以创建状态管理库了，也就是常说的Store。直接在/src目录下，新建一个store文件夹。有了文件夹之后，再创建一个index.ts文件。

这个文件里的代码，我们一般只做三件事。

定义状态容器(仓库)

修改容器(仓库)中的 state

仓库中的 action 的使用

```
import { defineStore } from 'pinia'

export const mainStore = defineStore('main',{
  state:()=>{
    return {}
  },
  getters:{},
  actions:{}
})
```

写完这段代码，你会感觉这个很像一个Vue的小组件，这也算是Pinia的一个优点。

defineStore( )方法的第一个参数：相当于为容器起一个名字。注意：这里的名字必须唯一，不能重复。这个是官方特别说明的一个事情。

defineStore( )方法的第二个参数：可以简单理解为一个配置对象，里边是对容器仓库的配置说明。当然这种说明是以对象的形式。

state 属性：用来存储全局的状态的，这里边定义的，就可以是为SPA里全局的状态了。

getters属性：用来监视或者说是计算状态的变化的，有缓存的功能。

actions属性：对state里数据变化的业务逻辑，需求不同，编写逻辑不同。说白了就是修改state全局状态数据的。

如果你会Vuex的话，上面这些内容可能对你来说没什么难度。但如果你不会Vuex，现在只要知道这段代码大概的意思就可以，不用深究。随着我们学习的深入，你会有更具体的了解。

我们在Store里定义一个State，我们这里就写Hello World!。

```
state:()=>{
    return {
      helloWorld:'Hello World'
    }
  },
```

这时候这个helloWorld就是全局的状态数据，是每个页面和组件都可以通过Pinia方法读取到的。

在Vue3组件里 读取Store数据

在\src\components里，新建一个xxx.vue的组件。编写下面的代码，具体的代码解释在视频中进行讲解。

```
<template>
  <h2 class="">{{ store.helloWorld }}</h2>
</template>

<script lang="ts" setup>
import { mainStore } from "../store/index";
const store = mainStore();
</script>

<style lang="scss" scoped></style>
```

先引入mainStore,然后通过mainStore得到store实例，就可以在组件里调用store里的state定义的状态数据了。

写好这个组件后，到App.vue里引入，就可以使用了。当然这里我们删除自动生成的一些无用代码。

```
<script setup lang="ts">
import xxx from "./components/xxx.vue";
</script>

<template>
  <xxx></xxx>
</template>

<style>

</style>
```

写完这些后，在VSCode中打开终端，然后输入yarn dev或者npm run dev 运行Vue服务，在浏览器中输入[http://localhost:3000/](http://localhost:3000/) 查看结果。

## Pinia改变状态数据和注意事项

新建组件 实现状态数据的改变

为了演示数据仓库的概念，新建一个组件。然后在一个组件里修改状态数据，看看另一个组件中的数据是否会改变。注意这时候我们就是两个组件了，只是在一个页面中显示而已。

在\components\文件夹下新建一个文件CountButton.vue。新建完成以后，直接复制上节课的代码。

```
<template>
  <h2 class="">{{ store.helloWorld }}</h2>
</template>

<script lang="ts" setup>
import { mainStore } from "../store/index";
const store = mainStore();
</script>

<style lang="scss" scoped></style>
```

因为这里要作的是一个可以计数的组件，所以先到\store\index.ts的state属性中，增加一个状态数据count : 0.

\src\store\index.ts文件

```
state:()=>{
  return {
    helloWorld:'HelloWorld',
    count:0
  }
},
```

有了这个状态数据后，再回到\components\CountButton.vue文件里，增加button和对应的业务逻辑

```
<template>
  <div><button @click="handleClick">点击增加</button></div>
</template>

<script lang="ts" setup>
import { mainStore } from "../store/index";
const store = mainStore();

const handleClick = () => {
  store.count++;
};
</script>

<style lang="scss" scoped></style>
```

我们先写了一个按钮，点击后直接执行handleClick方法。你会发现，这种改变状态数据的方法是非常方便的，要比Vuex简洁太多了。

写好后，我们把count显示再xxx.vue组件里。

\src\components\xxx.vue

```
<template>
  <h2 class="">{{ store.helloWorld }}</h2>
  <h2 class="">{{ store.count }}</h2>
</template>

<script lang="ts" setup>
import { mainStore } from "../store/index";
const store = mainStore();
</script>

<style lang="scss" scoped></style>
```

然后把CountButton加入到App.vue页面中。

```
<script setup lang="ts">
import xxx from "./components/xxx.vue";
import ``` from "./components/CountButton.vue";
</script>

<template>
  <xxx></xxx>
  <count-button></count-button>
</template>

<style></style>
```

作完这步后，就可以到浏览器中查看一下最终的实现效果。如果一切正常，你可以看到我们点击按钮后，两个组件的数据通过Pinia的状态管理，已经可以实现联动了。

注意别踩了结构的坑

我在学习的时候发现了这样一个坑，在这里也和大家分享一下。希望小伙伴们不要踩坑。看下面的代码，我们是否可以简化一点。

```
<template>
  <h2 class="">{{ store.helloWorld }}</h2>
  <h2 class="">{{ store.count }}</h2>
</template>

<script lang="ts" setup>
import { mainStore } from "../store/index";
const store = mainStore();
</script>

<style lang="scss" scoped></style>
```

我们可以把store进行结构，然后直接template中直接这样读出数据。

```
<template>
  <h2 class="">{{ store.helloWorld }}</h2>
  <h2 class="">{{ store.count }}</h2>
  <hr />
  <h2 class="">{{ helloWorld }}</h2>
  <h2 class="">{{ count }}</h2>
</template>

<script lang="ts" setup>
import { mainStore } from "../store/index";
const store = mainStore();
const { helloWorld, count } = store;
</script>

<style lang="scss" scoped></style>
```

这样看似简单，但通过解构的数据，只有一次作用，不是响应式数据（这就是我踩的坑了）。也就是说当你改变数据状态时，解构的状态数据不会发生变化。我们这时候再点击增加按钮，可以看到只有没结构的数据发生了变化。

于是我开始查找官方文档，显然Pinia团队也发现了这个问题，提供了storeToRefs( )方法。这个方法Pinia中，所以我们先用import引入。

`import { storeToRefs } from "pinia";`

有了storeToRefs( )方法后，就可以在解构的代码中，对store使用方法了。其实这时候就是把解构出来的数据作了ref响应式代理。所以数据拥有了响应式能力。

`const { helloWorld, count } = storeToRefs(store);`

这时候再到浏览器中测试一下，就一切正常了。补充：其实在Vuex中，直接解构数据也是不可以的。


## Pinia修改状态数据的多种方式

使用 $patch 修改多条数据

我们再编写一个方法handleClickPatch( )这个方法。我们采用Pinia中的$patch的方式编写。

\scr\components\CountButtton.vue

```
const handleClickPatch = () => {
  store.$patch({
    count: store.count + 2
  });
};
```

然后在`<template>`里添加一个按钮，点击后执行这个方法。

```
<div><button @click="handleClickPatch">修改数据（$patch）</button></div>
```

当然我在修改单条数据的时候，我喜欢这种直接修改的方式store.count++,因为足够简单。但是如果你同时修改多条数据，这里建议你使用$patch的方法。

比如现在我们点击按钮时，同时修改状态数据helloWorld,就可以写成这种方式。

```
const handleClickPatch = () => {
  store.$patch({
    count: store.count + 2,
    helloWorld: store.helloWorld === "xxx" ? "HelloWorld" : "xxx",
  });
};
```

那你说我在handleClick里直接写两行代码，是不是也可以实现这样的效果。通过代码测试，是可以实现的。哪为什么还要用$patch来作？

```
const handleClick = () => {
  store.count++;
  store.helloWorld = store.helloWorld === "xxx" ? "HelloWorld" : "xxx";
};
```

因为Pinia 的官方网站，已经明确表示$patch的方式是经过优化的，会加快修改速度，对程序的性能有很大的好处。所以如果你是多条数据同时更新状态数据，推荐使用$patch方式更新。

```
<template>
  <div>
    <div><button @click="handleClick">修改数据（简单方法）</button></div>
    <div><button @click="handleClickPatch">修改数据（$patch）</button></div>
  </div>
</template>

<script lang="ts" setup>
import { mainStore } from "../store/index";
const store = mainStore();

const handleClick = () => {
  store.count++;
  store.helloWorld = store.helloWorld === "xxx" ? "HelloWorld" : "xxx";
};

const handleClickPatch = () => {
  store.$patch({
    count: store.count + 2,
    helloWorld: store.helloWorld === "xxx" ? "HelloWorld" : "xxx",
  });
};

</script>

<style lang="scss" scoped></style>
```

$patch加函数的形式修改状态数据

上面的$patch方法，我们的参数使用的是一个对象。还有一种方式是传递函数，这种方法适合复杂数据的修改，比如数组、对象的修改。

再编写一个方法handleClickMethod( ),然后传递一个箭头函数进去。

```
const handleClickMethod = () => {
  store.$patch((state) => {
    state.count++;
    state.helloWorld = state.helloWorld === "xxx" ? "HelloWorld" : "xxx";
  });
};
```

这时候的state就是store仓库里的state，所以我们可以直接在函数里改变任何状态数据的值。为了看到效果，我们再编写一个按钮，来执行这个方法。

```
<div>
   <button @click="handleClickMethod">修改数据（$patch+函数）</button>
</div>
```

写完后，可以到浏览器中看一下。这个方式我觉的和React非常像了。

在actions中写好逻辑 再调用actions

如果你有一个修改的过程非常复杂，你可以先在store里，定义好actions中的函数，然后在组件里再调用函数。

我们先到\src\store\index.ts文件里，在actions的地方编写一个changeState( )方法，用来改变数据状态。代码如下：

```
actions:{
    changeState(){
        this.count++
        this.helloWorld='xxx'
    }
  }
```

有了这个changeState( )函数后，就可以在组件中调用这个函数来修改状态数据了。来到\src\components\CountButton.vue文件。编写一个新的方法handleClickActions( )方法。然后就可以用store调用changeState( )方法了。

```
const handleClickActions = ()=>{
  store.changeState()
}
```

然后再加入一个按钮，调用这个方法就可以了。

```
<div>
  <button @click="handleClickActions">修改数据（actions）</button>
</div>
```

注意：在用actions的时候，不能使用箭头函数，因为箭头函数绑定是外部的this。这个小伙伴们需要注意一下就可以了。

## Pinia中的Getters使用

新增状态属性和编写Getters

先在\src\store\index.ts文件的state里增加一个phone的状态数据。

```
state:()=>{
  return {
    helloWorld:'HelloWorld',
    count:0,
    phone:'15139333888'
  }
},
```

然后再getters里编写一个方法，这个方法就是隐藏手机号中间四位的，隐藏的方法就是使用正则表达式替换。代码如下：

```
getters:{
    phoneHidden(state){
      return state.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
    }
  },
```

然后到\src\components\xxx.vue中直接显示隐藏号码显示。

```
<template>
  <h2 class="">{{ store.helloWorld }}</h2>
  <h2 class="">{{ store.count }}</h2>
  <h2 class="">{{ store.phoneHidden }}</h2>
  <hr />
  <h2 class="">{{ helloWorld }}</h2>
  <h2 class="">{{ count }}</h2>
  <h2 class="">{{ phoneHidden }}</h2>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { mainStore } from "../store/index";
const store = mainStore();
const { helloWorld, count, phoneHidden } = storeToRefs(store);
</script>

<style lang="scss" scoped></style>
```

这时候打开浏览器，可以看到电话号码已经被隐藏了。

Getters的缓存特性

Getters是有缓存特性的，现在我们的xxx组件中调用了两次phoneHidden吧，这时我们在index.ts状态仓库里增加一个console.log('PhoneHidden被调用了’)。

```
getters:{
    phoneHidden(state){
      console.log('PhoneHidden被调用了');
      return state.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
    }
  },
```

然后回到浏览器中按F12打开查看Console面板，可以看到只显示了一次PhoneHidden被调用了，也变相说明了getters是有缓存的，虽然调用多次，但是值一样就不会被多次调用。

在\src\components\CountButton.vue文件下，新编写一个方法handleClickChangePhone。用来改变电话号码。

```
// 点击按钮的对应函数
const handleClickChangePhone = () => {
  store.phone = "15139333999";
};
```

有了函数后，再编写一个按钮，触发这个函数，电话号码就变化了。

```
<!--编写的新按钮-->
<div>
     <button @click="handleClickChangePhone">改变电话号码</button>
</div>
```

当电话号码改变时，Getters会自动工作，对应的phoneHidden方法也会随着调用一次，清除以前的数据缓存。

关于this的使用

写完上面的小案例，相信你对Pinia的Getters的使用已经掌握了。这时候再回到\src\store\index.ts文件里。我们看到actions里是直接可以使用this关键字操作的。

那我们思考一个问题，在getters里可以用this进行操作吗？

答案时可以的，修改代码为下面的形式。

```
getters:{
    phoneHidden() : String{
      console.log('PhoneHidden被调用了');
      return this.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
    }
  },
```

因为我们使用的时TS，所以如果我们不传state, TypeScript是无法自动推到出来返回的数据类型的，所以这里我们要标明返回类型为 String。就不会提示错误了。

## Pinia中Store的互相调用

在课程中我们一直只使用了一个Store仓库，在真实项目中我们往往是有多个Store的。有多个Stroe时，就会涉及Store内部的互相调用问题。

新创建一个Store仓库

在\src\store下新建一个xxx.ts文件。然后下入下面的代码。

```
import { defineStore} from 'pinia'

export const xxxStore = defineStore('xxx',{
  state:()=>{
    return {
      list:['xxx','xxx','xxx']
    }
  }
})
```

这是一个非常简单的仓库，只有state（状态数据），需要注意的是ID要是唯一的。有了这个仓库后，就可以回到index.ts这个仓库中调用了。

先引入xxx这个store.

`import {xxxStore} from './xxx'`

然后在actions部分加一个getList( )方法。这部分就写的很简单了，只是用console.log( )打印到控制台 上就可以了。

```
actions:{
    changeState(){
        this.count++
        this.helloWorld='xxx'
    },
    getList(){
       console.log(xxxStore().list)
    }
  }
```

为了方便你学习，这里给出\src\store\index.ts的全部代码。

```
import { defineStore} from 'pinia'
import {xxxStore} from './xxx'

export const mainStore = defineStore('main',{
state:()=>{
  return {
    helloWorld:'HelloWorld',
    count:0,
    phone:'15139333888'
  }
},
  getters:{
    phoneHidden() : String{
      console.log('PhoneHidden被调用了');
      return this.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
    }
  },
  actions:{
    changeState(){
        this.count++
        this.helloWorld='xxx'
    },
    getList(){
       console.log(xxxStore().list)
    }
  }
})
```

这样就实现了两个store中互相调用。为了看到效果，我们依然来到\src\components\CountButton.vue这个文件里，写一个新的方法，就叫做getList( )。

```
const getList = () => {
  store.getList();
};
```

有了getList( )方法后，在template部分，写一个按钮进行触发。

```
<div>
    <button @click="getList">显示List</button>
</div>
```

到浏览器中查看效果，按F12打开控制台，点击按钮后，可以看到跨Store的状态数据调用已经成功了。

## Pinia在开发中的调试方法

用vue-devtools对Pinia的调试

我这里默认你已经安装好了vue-devtools这个Chrome浏览器插件，我们打开VSCode，用yarn dev打开服务，然后在浏览器预览。

http://localhost:3000

打开以前学习时编写的程序，这时候看到vue-devtools这个插件已经亮起来了。我们直接按F12进入调试模式，然后点击Vue标签。

这时候在上半部分有一个面板，默认显示是Components,点击后，也可以选择Pinia。这时候点击Pinia就可以看到store里边的state、getters...等信息了。

也就是说vue-devtools已经完全支持Pinia的调试了。


