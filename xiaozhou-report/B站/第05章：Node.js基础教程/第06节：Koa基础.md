# 第06节：Koa基础

### 一、Koa框架概述

Koa是一个基于Node的web服务器开发框架，通过Koa我们可以更便捷第开发web服务器。不必像上一节那样刀耕火种地从零开始写。

本节我们来讲解如何使用Koa创建一个web服务器。在学习之前，我们先来了解一些基础知识。

### 二、安装Koa

在安装Koa之前，先初始化一个项目。

新建一个空目录，在该目录中打开命令行工具，执行

``` bash
npm init
```
初始化完成之后，执行下列命令安装Koa。

``` bash
 cnpm install --save koa
```

### 三、创建服务器

通过require可以引入koa，然后使用koa创建服务器，实例代码如下所示：

``` js
const Koa = require("koa");  
const app = new Koa();
app.listen(3000,() => {
    console.log("server is running")
});
```

引入的Koa是一个构造函数，通过new关键字可以创建一个koa应用app。然后通过app的listen方法设置监听端口，运行这个程序就可以移动一个koa服务器了。

访问本机的3000端口可以看到`not found`，这说明服务器已经正常启动了，但是还没有指定服务器响应的内容。

接下来，我们用app的use方法设置响应的内容，实例代码如下所示。


``` js
const Koa = require("koa");
const app = new Koa();

//use方法内的函数会在请求与响应之间执行。
app.use(async ctx => {
    ctx.body = "hello world"
})

app.listen(3000,() => {
    console.log("server is running")
});

```

app的use方法可以调用一个函数（中间件），这个函数会在请求和相应之间被调用。函数可以接受两个参数。

* ctx：上下文变量，可以获取请求与响应的相关信息。
* next：处理下一个异步函数。

``` js
// 多个use方法
const Koa = require("koa");
const app = new Koa();

app.use(async (ctx,next) => {
    ctx.body = "hello world"
    await next();
})

app.use(async (ctx,next) => {
    console.log("我是一个中间件")
})

app.listen(3000,() => {
    console.log("server is running")
});

```

### 四、路由

之前我们说过，浏览器可以像服务器发送请求，服务器给予响应之后，我们就能看到网页了。理解了这个过程之后，我们再来输入研究一下请求的知识点。

浏览器可以使用不同的方法发送请求，常用的方法如下所示：

* get请求：用来获取页面或数据
* post请求：用来提交数据，一般登录的时候，想后台发送用户名和密码可以使用。

本节我们主要使用get请求来获取页面，实例代码如下所示：

``` bash
cnpm install --save koa-router
```

``` js
const Koa = require("koa");
const router = require("koa-router")();
const app = new Koa();

//get是http协议请求的方法
router.get("/", async ctx => {
    ctx.body = "<h1>home page</h1>"
})

router.get("/video", async ctx => {
    ctx.body = "<h1>video page</h1>"
})

app.use(router.routes())


app.listen(3000,() => {
    console.log("server is running")
});

```

这样我们就可以实现一个有多个页面的应用程序了

### 五、静态文件

在网页中插入图片，需要在img标签中填写图片的地址。web应用的服务器，只有静态文件目录的文件才可以被html页面直接访问。

也就是说，我们需要先创建一个静态文件目录，然后在里面放置图片（或js，或css），才能被html页面访问。

通过下面的命令下载`koa-static`，可以设置静态文件目录。

``` bash
cnpm install --save koa-static
```

实例代码如下所示：

``` js
const Koa = require("koa");
const static = require("koa-static");
const app = new Koa();
//__dirname是当前项目的绝对路径
app.use(static(__dirname + "/public"));

app.use(async (ctx) => {
    ctx.body = `
        <h1>这是一个有图片的网页</h1>
        <img src='/img/logo.jpg'>
    `
})
app.listen(3000,() => {
    console.log("server is running")
})
```

引入`koa-static`，可以得到一个static函数，通过调用这个static函数，便可以将参数的目录设置为一个静态目录了。

这样就可以在网页中看到图片了。

### 五、课后练习

创建一个基于koa的服务器，运行在80端口之上，满足一下要求：

1. 访问http://127.0.0.1，显示文字欢迎来到首页
2. 访问http://127.0.0.1/doc，显示有标题、段落和图片的网页内容
3. http://127.0.0.1/doc页面中的标题和段落字体为蓝色，通过外部样式引入