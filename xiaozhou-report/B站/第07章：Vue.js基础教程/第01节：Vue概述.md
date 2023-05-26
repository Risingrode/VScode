# 第01节：安装和引入Vue.js

### 一、vue概述

目前前端开发最火热的三大框架分别是React、Angular和Vue。

Angular是谷歌公司开发的前端框架，在国外的用户比国内用户多很多，国内始终是不温不火的状态。

React和Vue的国内用户比较多。可能是因为Vue简单易用，而且是由华人开发，所以Vue在国内的受众非常多。从本章我们开始学习Vue的相关知识。

#### 使用vue还是jQuery

jQuery仍然有自己的优势，例如我们制作一些相对简单的网站，或者是网站的部分活动页面，使用jQuery仍然可以提升开发效率。但是面对稍微具备规模的web应用，vue绝对是更好的选择。

### 二、第一个Vue项目

有两种方法可以在自己的项目中引入Vue：

* 第一种是像引入jQuery一样，引入Vue.js文件。
* 第二种是使用Node环境，构建基于Vue的web项目。

在真实的项目开发中，都会使用第二种开发方式，本节我们先以第一种-引入Vue.js文件方式起步。

``` html
<body>
    <div id="app">
        {{message}}
    </div>
    <script src="vue.js"></script>
    <script>
        new Vue({
            data:{
                message:"hello world"
            }
        }).$mount("#app")
    </script>
</body>
```

我们再来看一下上面的代码，它包含了一个vue程序最基本的结构：

首先，我们在html中定义了一个id为app的容器，然后我们在js创建一个Vue的实例，通过el属性指定这个容器，从而实现让js接管html.

每个 Vue 应用都是通过用 Vue 函数创建一个新的 Vue 实例开始的：

``` js
var vm = new Vue({
  // 选项
})
```

* 在构造函数Vue中，我们需要传入一个【选项对象】来进一步描述vue实例的行为。
* $mount方法，将Vue挂载到html。
* el属性，作用于$mount相同。
* data属性，在Vue的实例之下添加属性。
* `{{}}`可以输入一个表达式，也可以直接获取Vue实例的属性。

### 三、绑定属性

上面的例子中，我们将一个data中的message属性通过双花括号显示在文本节点之中，除此之外，我们还可以将数据绑定成为一个html属性，示例代码如下所示。

``` html
<body>
    <div id="app">
        <h1 v-bind:title="message">鼠标停留在这个H1标签上，可以看到title</h1>
        <h1 :title="message">鼠标停留在这个H1标签上，可以看到title</h1>
    </div>
    <script src="../../script/vue.js"></script>
    <script>
        new Vue({
            data:{
                message:"hello world"
            }
        }).$mount("#app")
    </script>
</body>
```

使用【v-bind:属性名】和【:属性名】两种方式都可以绑定属性，在实际开发中，我们通常使用简写。

### 四、绑定事件

在【选项对象】中可以设置methods属性为vue的示例添加方法，这些方法我已直接被调用，也可以绑定为事件。绑定事件的方法如下所示：

``` html
<body>
    <div id="app">
        <button v-on:click="fun">按钮</button>
        <button @click="fun">按钮</button>
    </div>
    <script src="../../script/vue.js"></script>
    <script>
        new Vue({
            methods:{
                fun(){
                    alert("hello world")
                }
            }
        }).$mount("#app")
    </script>
</body>
```

使用【v-on:事件类型】和【@事件类型】两种方式都可以为元素绑定事件，在实际开发中，通常使用简写。

methods属性中定义的方法内部，可以使用this获取到vue的示例，也就是说我们可以进一步通过this获取到data中的属性，而且可以通过赋值的方式改变data中的属性值。

``` html
<body>
    <div id="app">
        <h1>{{title}}</h1>
        <button @click="changeTitle">改变标题</button>
    </div>
    <script src="../../script/vue.js"></script>
    <script>
        new Vue({
            data:{
                title:"hello world"
            },
            methods:{
                changeTitle(){
                    this.title = "hello Vue";
                }
            }
        }).$mount("#app")
    </script>
</body>
```

在上面的例子中，我们实现了通过按钮的点击事件改变h1中的文本内容。

#### 事件修饰符详解

* .prevent:阻止元素的默认行为
* .stop:阻止事件冒泡
* .once:只触发一次事件

``` html
<!-- 阻止元素默认行为 -->
<div id="app">
    <form @submit.prevent="postData">
        <input type="submit">
    </form>
</div>
<script src="js/vue.js"></script>
<script>
    //jquery：操作DOM
    const vue = new Vue({
        methods:{
            postData(){
                console.log("提交数据");
            }
        }
    });
    vue.$mount("#app")
</script>
```

``` html
<!-- 阻止事件冒泡 -->
<div id="app">
    <button @click.once="test">test</button>
</div>
<script src="js/vue.js"></script>
<script>
    const vue = new Vue({
        methods:{
            test(){
                console.log("提交数据");
            }
        }
    });
    vue.$mount("#app")
</script>
```

#### 五、课后练习

1. 制作一个计数器，点击+，计数器数值增加，点击-，计数器数值减小，且不能小于零。
2. 制作一个图片切换的功能，电子数字列表，改变img标签显示的图片。









