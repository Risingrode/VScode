# cookie与session实现用户登录

### 一、前期内容补充： 模板继承

``` html
<!-- 模板layout.html -->
<a href="/">首页</a>
<a href="/images">图片</a>
{% block content %}{% endblock %}

<!-- home.html -->
{% extends "./views/layout.html" %}
{% block content %}
<h1>首页</h1>
{% endblock %}

<!-- images.html -->
{% extends "./views/layout.html" %}
{% block content %}
<h1>图片</h1>
{% endblock %}
```

### 二、cookie与session概述

对于如何理解cookie和session，咱们之前直播已经详细地讲解过了，剪辑后的视频过两天会发出来，咱们这里简单再复习一下：

1. cookie是存储在客户端的，session是存储在服务器端的。
2. 如果响应带着cookie，则cookie会被写入浏览器，以后浏览器访问站点的任何页面，都会带着cookie。
3. 服务器设置session时，会在响应中给浏览器写入一个加密的cookie，这样，以后浏览器访问站点的任何页面，都会带着这个加密的cookie，服务器就知道他对应的是哪个session了。

设置和读取cookie：

``` js
let count = 0;
ctx.cookies.set('count', ++count); //设置cookie
let count = ctx.cookies.get('count'); //获取cookie
```

设置和读取session：

``` js
let count = 0;
ctx.session.count = ++count; //设置session
cotx.session.count; //读取session

```

### 三、cookie计数器

``` js
async setCookie(){
let count = 1;
if(this.ctx.cookies.get("count")){
  count = this.ctx.cookies.get("count");
  count++;
  this.ctx.cookies.set("count",count);
}else{
  this.ctx.cookies.set("count",count);
}
await this.ctx.render("cookiePage.html",{count})
}
```

### 四、session计数器

``` js
async setSession(){
let count = 1;
if(this.ctx.session.count){
  count = this.ctx.session.count;
  count++;
  this.ctx.session.count = count;
}else{
  this.ctx.session.count = count;
}
await this.ctx.render("sessionPage.html",{count})
}
```

### 五、登录功能的实现

``` js
const Controller = require('egg').Controller;

class LoginController extends Controller{
    async index(){
        await this.ctx.render("login.html")
    }
    
    async doLogin(){
        let {username,password} = 
        this.ctx.request.body;
        if(username === "xiaoming" 
        && password === "123456"){
            this.ctx.session.user = "xiaoming"
            this.ctx.redirect("/")
        }else{
            this.ctx.body = "登录失败"
        }
    }

}

module.exports = LoginController
```

### 六、使用中间件验证

``` js
module.exports = () => {
  return async function(ctx, next) {
   if (ctx.session.user) {
    await next();
  } else {
     await ctx.redirect("/login");   }
  }
};
router.get("/", app.middleware.checktoken(), controller.home.index)
```

