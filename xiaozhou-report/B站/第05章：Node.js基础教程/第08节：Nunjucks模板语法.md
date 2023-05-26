# 第08节：nunjucks模板语法

### 一、概述

    在上一节内容中，我们了解到通过`render`方法不仅可以指定渲染的模板，还可以向模板传递数据。

    本节我们继续讲解nunjucks模板语法，使其不仅可以展示一行字符串，还可以展示更为丰富的网页效果。

    本章我们只讲解常用的功能，如果需要更多的nunjucks模板功能，可以到[nunjucks中文文档](https://nunjucks.bootcss.com/templating.html)查阅

### 一、循环语句

我们以晓舟报告的网站为例，视频列表中会显示多条数据，显示的数据条数取决于数据库中的数据量。所以页面的内容应该是应该根据后台数据动态显示。那么如何动态显示数据列表的，实例代码如下所示。

``` json
//数据
{"fruits":["香蕉","苹果","鸭梨"]}
```

``` html
<ul>
    {% for fruit in fruits %}
    <li>{{fruit}}</li>
    {% endfor %}
</ul>
```

### 二、分支语句

再看晓舟报告的首页，默认情况下，右上角显示的是登录按钮，如果登录之后，会显示用户头像。

也就是说页面的像是内容取决于当前用户状态，这样的功能可以使用分支语句制作，实例代码如下所示：

``` json
//数据
{"isLogin":true}
```

``` html
{% if isLogin %}
    <p>欢迎您来到我的网站</p>
{% else %}
    <p>请登录</p>
{% endif %}
```

### 三、模板继承

晓舟报告每个页面的头部，都有相同的菜单，那么如果我们在每一个页面都重新写一遍菜单，这样的代码既不利于开发，也不利于维护。所以我们要把公共部分提取出来，可以用模板继承的功能来实现，实例代码如下所示：

``` html
<!-- 模板layout.html -->
<a href="/">首页</a>
<a href="/images">图片</a>
{% block content %}{% endblock %}
```

``` html
<!-- home.html -->
{% extends "./views/layout.html" %}
{% block content %}
<h1>首页</h1>
{% endblock %}
```

``` html
<!-- images.html -->
{% extends "./views/layout.html" %}
{% block content %}
<h1>图片</h1>
{% endblock %}
```

### 四、include

某些页面可能会包含相同的组件，例如晓舟报告的轮播图，这样的内容可以通过`include`引入到网页中，降低网页的耦合。

``` html
{% extends "./views/layout.html" %}

{% block content %}
<h1>首页</h1>

{% include "./views/footer.html" ignore missing %}

{% endblock %}

```

### 五、课后练习

通过nunjucks模板制作晓舟报告网站，功能如下所示：

1. 首页导航效果需要使用模板继承功能
2. 文档列表、博客列表、视频列表要使用后台的数据
3. 如果登录，显示用户名，如果未登录，显示登录按钮（是否登录通过一个变量控制即可）


