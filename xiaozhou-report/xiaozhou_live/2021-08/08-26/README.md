# 模板引擎

### 一、前言

上一节课我们说了，浏览器输入一个地址，按回车就会向服务器发送一个请求，服务器就会响应页面。我们可以将html代码以字符串的方式发送给浏览器，浏览器就可以看到页面了。

但是如果以字符串的方式编写html代码肯定是反人性的，这个时候就需要模板引擎来实现页面的编辑。

``` js
await this.ctx.render("index.html") //渲染模板
```

### 二、引入nunjucks模板

下载模板

``` bash
cnpm install --save egg-view-nunjucks
```

配置插件

``` js
module.exports = {
  nunjuscks:{
    enable:true,
    package:'egg-view-nunjucks'
  }
};
```

配置文件

``` js
config.view ={
  defaultViewEngine:'nunjucks'
}
```

在`app`目录下新建`view`目录，就可以在其中添加模板页面了

### 三、为什么要使用模板引擎

小伙伴们一定会问，我直接用vue或者react不好吗，获取异步数据，页面由前端负责，统一打包成静态文件。

1. 如果是做一个系统肯定是可以的，而且现在主流也是这么做的，但是如果是要做一个许可要搜索引擎查找的网站，异步的数据是不利于ESO优化的，所以不可以。
2. 当然，Vue和React都提供了服务器渲染的解决方案，所以仍然可以解决SEO的问题，但是会引入新的复杂度，所以对于比较简单的内容展示项目，用模板会是一个更好的选择。

当今仍然有大量的项目在使用模板开发，而不是使用Vue或者React的服务器渲染技术。

### 四、模板语法

1. 使用双花括号可以绑定数据：`{{}}`
2. 显示列表：`{% for item in list%}{% endfor %}`
3. 条件控制：`{% if boolean %} {% endif %}`

``` html
{% if isLogin %}
    <p>欢迎您来到我的网站</p>
{% else %}
    <p>请登录</p>
{% endif %}
```

### 五、继承

大家会发现一个网站中很多页面都是公共的内容，例如主菜单，这样的功能如果每一个模板页都去单独实现，网站会变得很难维护（修改一个功能要改很多页面）因此，几乎所有的模板引擎都提供了继承的功能。

``` html
<!-- 模板layout.html -->
<a href="/">首页</a>
<a href="/images">图片</a>
{% block content %}{% endblock %}

<!-- home.html -->
{% extends "./layout.html" %}
{% block content %}
<h1>首页</h1>
{% endblock %}

<!-- images.html -->
{% extends "./layout.html" %}
{% block content %}
<h1>图片</h1>
{% endblock %}
```

* block content
* block title
* block css
* block js

### 六、注意事项

刚刚开始使用模板的小伙伴可能会混淆前端和后台的概念，例如会纠结如何绑定事件，其实这些前端的操作仍然在前端的`script`标签中去完成。

### 七、登录功能

1. 登录页面
2. 显示继承实现的列表

获取请求参数，验证登录是否成功



