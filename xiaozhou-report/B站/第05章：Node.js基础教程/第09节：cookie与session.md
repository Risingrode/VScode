# 第09节：cookie与session

### 一、cookie与session概述

在说cookie与session的概念之前，我们讨论一个问题，那就是如何保持用户的登录状态。

在之前的课程中，客户端向服务器发送的每一次请求都是独立的，但是当我们访问一些电商网站的时候，可能会发现，当我登录之后，再访问自己的购物车时，确实可以找到自己所添加的商品，也就是说网站保持了我们的登录状态。

### 二、cookie

#### 概述

网站服务器程序可以在浏览器中写入cookie，然后浏览器再次访问这个网站时，就会带着这个cookie。

实例代码如下所示

``` js
router.get("/", async ctx => {
    ctx.cookies.set("username","xiaoming");
    ctx.body = "hello cookie";
})
```

可以在chrome调试工具中的network选项卡查看cookie内容

写入cookie之后，这个浏览器再次访问这个网站的任何一个页面，都会带着这个cookie。

通过`maxAge`可以设置cookie过期的毫秒数，实例代码如下所示

``` js
ctx.cookies.set("username","xiaoming",{
    maxAge:5000 //过期时间设置为五秒
})
```

可以通过下面的方法获取cookie。

``` js
router.get("/images", async ctx => {
    let usr = ctx.cookies.get("username");
    ctx.body = usr;
})
```

#### 记录网页访问次数

利用cookie，可以记录客户端访问浏览器的次数，实例代码如下所示：

``` js
router.get("/count", async ctx => {
    let count = ctx.cookies.get("count");
    if(count > 0){
        count = ++count;
        ctx.cookies.set("count",count,{
            maxAge:2000
        });
    }else{
        count = 1;
        ctx.cookies.set("count",1);
    }
    ctx.body = count
})
```

### 三、session

#### 概述

利用cookie在客户端存储数据是完全透明的，如果存储一些用户信息，会导致很严重的安全问题，所以为了记录用户的登录状态，需要使用cookie与session结合的方式。

``` bash
cnpm install --save koa-session
```

例如给session设置一个count属性，可以直接通过赋值的方式

``` js
ctx.session.count = 0;
```

获取也可以使用相同的方法

``` js
let count = ctx.session.count
```

#### 记录网页访问次数

``` js
const session = require("koa-session");
//加密的密钥，服务器通过加密的cookie获取session
app.keys = ['secret'];
app.use(session({
    maxAge:2000,
},app))

router.get("/session", async ctx => {
    if(ctx.session.count>0){
        ctx.session.count = ++ctx.session.count;
    }else{
        ctx.session.count = 1
    }
    ctx.body = ctx.session.count
})
```

### 四、登录验证

* 首页：任何人都可以访问
* 登录页：提供表单，用户可以通过表单输入登录信息。
* 视频页：登录成功后可查看，并提供注销功能。

``` js
//处理表单
router.post("/login", async ctx => {
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    if(username == "admin" && password == "123456"){
        ctx.session.username = username
        ctx.redirect("/video")
    }else{
        ctx.redirect("/")
    }
})

//视频页
router.get("/video", async ctx => {
    console.log(ctx.session.username)
    if(ctx.session.username){
        await ctx.render("c",{username:ctx.session.username})
    }else{
        ctx.redirect("/")
    }
})
//表单页面
router.get("/login", async ctx => {
    await ctx.render("index")
})
//注销
router.get("/logout", async ctx => {
    ctx.session.username = ""
    ctx.redirect("/")
})
```

### 五、课后练习

在上一节的课后练习基础上，实现晓舟报告的登录功能，要求如下

1. 点击登录按钮，跳转至表单页面，输入用户名和密码后即实现登录效果。
2. 登陆后，任何一个页面都可以显示用户名。