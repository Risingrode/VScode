# 第07节：模板引擎概述

### 一、模板引擎概述

上一节我们通过Koa创建了一个web服务器，并可以根据用户请求路径的不同响应不同的页面，但是每一个页面的内容都是通过字符串的方式给送给浏览器的，这样的开发方式并不友好，我们更希望直接发送html页面。

模板引擎可以解决这个问题，通过模板引擎，可以直接设置响应的html页面，并且可以把后台数据绑定到模板中，然后发送给客户端。

目前市面上有很多模板引擎，这里我们选择一个功能完善，又容易上手的模板引擎：`nunjucks`

### 二、安装nunjucks

在koa框架下安装nunjucks需要两个第三方模块

* koa-views：负责配置koa的模板引擎
* nunjucks：下载模板引擎

执行命令安装这两个模块

``` bash
cnpm install --save koa-views
cnpm install --save nunjucks
```

### 三、配置模板引擎

``` js
//server.js
const Koa = require("koa");  
const nunjucks = require("nunjucks");
const views = require("koa-views");
const app = new Koa();  

app.use(views(__dirname + '/views', {
    //将使用nunjucks模板引擎渲染以html为后缀的文件。
    map: { html: 'nunjucks' } 
}));

app.use(async ctx => {
    //render方法渲染模板，第二个参数可以给模板传递参数
    await ctx.render("index",{title:"我的第一个模板"}) 
})

app.listen(3000, () => {
    console.log("server is running");
}) 
```

``` html
<!-- views/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{title}}</title>
</head>
<body>
    <h1>hello world</h1>
</body>
</html>
```

### 四、结合路由渲染模板

结合上一节路由的内容，制作一个有两个页面的网站，功能如下：

核心功能代码如下所示：

``` js

router.get('/', async (ctx, next) => {
    await ctx.render('index',{
        title:"欢迎来到晓舟报告"
    })
});

router.get('/docs', async (ctx, next) => {
    await ctx.render('data', {
        title: '晓舟报告',
        desc:'让学习更高效'
    })
});

```

### 五、处理表单数据

#### 表单概述

在网页重构的课程中，我们已经了解了表单的基本样式，本节我们讲解如何通过表单向后台发送数据，首先看两个`form`标签的属性。

* action属性：指定表单提交数据的路径
* method属性：指定表单提交数据的请求方法，请求方法包括get、post。

`form`标签设置完成之后，要对表单空间进行设置

* input.name属性：指定数据传输的字段
* input.type="submit"：指定提交按钮，点击后提交表单数据

#### 获取get请求的数据

直接通过`ctx.query`可以获取get请求的数据，实例代码如下所示：

``` js
//获取get请求的参数
router.get("/form", async ctx => {
    await ctx.render("form")
})
router.get("/data", async ctx => {
    let username = ctx.query.username;
    await ctx.render("data",{usr:username})
})

```

若需要获取post请求的数据，需要安装第三方模块`koa-parser`来解析post请求，实例代码如下所示：

``` html
<form action="/data">
    <input type="text" name="username">
    <input type="submit" value="提交数据">
</form>
```

``` js
const Koa = require("koa");  
const parser = require('koa-parser')
const app = new Koa(); 
app.use(parser());
//获取post请求的参数
router.get("/form", async ctx => {
    await ctx.render("form")
})
router.post("/data", async ctx => {
    let username = ctx.request.body.username;
    await ctx.render("data",{usr:username})
})
```

``` html
<form action="/data" method="POST">
    <input type="text" name="username">
    <input type="submit" value="提交数据">
</form>
```

### 六、课后练习

制作一个登陆验证功能，具体要求如下所示

1. 登录页填写用户名和密码（正确的用户名为：admin，密码为：123456）
2. 输入正确的用户名和密码，跳转页面提示【登录成功】
3. 输入错误的用户名和密码，跳转页面提示【登录失败】