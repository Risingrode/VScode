# 第02节：创建Vue项目

### 一、使用vue/cli创建Vue项目

在第七章我们已经介绍了如何使用npm命令全局安装node包，本节我们需要安装一个名为@vue/cli的包来创建我们的vue项目，安装代码如下所示：

``` bash
npm install -g @vue/cli
```

安装完成之后，在命令行可以使用Vue命令命令创建一个vue项目，具体命令如下所示

``` bash
vue create hello
```

安装过程需要连接国外服务器下载项目模板和依赖包，如果网速过慢可以在[配套示例代码]()中下载项目模板，然后使用cnpm下载依赖包。

创建完成之后，让命令行工具进入到hello目录中，然后执行下面的命令启动项目：

``` bash
npm run serve
```

项目启动后，会在8080端口开启一个服务器，我们直接访问http://localhost:8080/，就可以访问刚才创建的这个Vue项目了，如果成功访问会看到如下图所示的页面。

### 二、项目目录结构

创建的项目目录结构如下所示：

```
├─hello
│    ├─node_modules
│    ├─public
│    │   ├─favicon.ico
│    │   ├─index.html
│    ├─src
│    │   └─assets
│    │   │   └─logo.png
│    │   └─components
│    │   │   └─HelloWorld.vue
│    │   └─App.vue
│    │   └─main.js
│    ├─babel.config.js
│    ├─package.json
│    ├─README.md
```

#### 重要文件介绍

* node_modules：存放项目依赖包
* public：存放静态文件(例如图片等)
* src：项目源文件，后续开发几乎都在这个目录下进行   
  * main.js为项目的入口文件
  * App.vue是单文件组

#### 组件化开发概述

以vue为后缀的文件是vue的单文件组件，我们在开发vue应用的过程中，主要任务就是去编写这些以vue为后缀的文件。

最近几年前端开发非常盛行的开发方式是组件化开发，要想理解什么是组件化开发，需要先理解什么是组件。

**大家可以把组件理解成一个，可以自定义的，有更强大功能的标签。**

而我们开发web项目，其实就是在编写和组装这些组件，例如晓舟报告的官网，可以将整个应用拆分成header，slider等等内容。

这样用组件拆分的方式开发项目，思路清晰，简洁高效，而且还可以复用相同的组件。

#### 程序是如何运行的？

import和export是ES2015的语法，类似于node的require和module.export

* import:引入第三方模块，可以取代require
* export:暴露接口，让其他模块使用当前模块

``` js
import Vue from 'vue'  
import App from './App.vue'
Vue.config.productionTip = false //开发过程中的错误提示
new Vue({
  render: h => h(App),
}).$mount('#app')
```

`render`方法是一个ES6语法的简写，如果完整的写法可以看做如下语法

``` js
new Vue({
  render (createElement) {
    return createElement(App);
  }
}).$mount('#app')
```

`render`方法中的`createElement`可以根据组件生成DOM节点，这样，就成功地将单文件组件App.vue加载到index.html中了。

### 三、改写App.vue文件

我们删除App.vue的默认代码，只留下一个组件的估价，代码如下所示：

``` html
<template>
     <!-- 组件的应用 -->
</template>

<script>
    //  导入其他组件，定义该组件的数据、方法等
</script>

<style>
     /* 组件的样式  */
</style>
```

* template标签中添加的是html代码，template内部所有内容都要包含在一个标签之内。
* script标签中添加的是JavaScript代码
* style标签中添加的是CSS样式。

**默认情况下，vscode编辑器不能高亮显示.vue文件，需要安装vetur插件。**

了解了基本语法之后，我们来编写第一个组件，示例代码如下所示：

``` html
<template>
  <div>
    <h1>{{message}}</h1>
  </div>
</template>

<script>
export default {
  data(){
    return {
      message:"hello vue"
    }
  }
}
</script>
```

上面的案例是第一节讲过的一个案例，将data中的数据在文本中显示，但是与此前的代码有所区别：

1. 因为是单文件组件，所以需要在script中，用模块化的语法export default将组件的示例暴露给外部。这样组件文件才能被使用。
2. data属性与之前相比，变成了一个方法，而data中的数据是data方法的返回值。

初学者很容易将data的用法写错，这里需要十分注意。其余的写法，例如属性绑定，事件绑定，与此前学习过的语法没有区别。

绑定属性和事件的方法如下所示：

``` html
<template>
    <div>
        <h1 :title="message">hello world</h1>
        <button @click="sayHi">say hi</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            message:"hello vue"
        }
    },
    methods:{
        sayHi(){
            alert("Hi!")
        }
    }
}
</script>
```


### 四、课后练习

按照本章的内容，完成下列操作：

1. 下载vue/cli
2. 通过npm run serve命令启动项目
3. 将默认项目改写成一个计数器功能