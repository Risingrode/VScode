# sass

### 一、概述

#### 为什么使用css预处理语言

css的缺点：

* 语法不够强大，导致重复编写，代码无法复用。
* 代码不方便维护

使用css预处理语言：

* 引入变量、混入、继承、内置函数等特性。

#### 安装

使用npm全局安装sass之后，可以通过sass命令将scss\sass文件编译成css文件。

``` bash
npm install -g sass
```

### 编译

通过下面的

``` bash

sass index.scss index.css
```

### 基本概念

- node-sass 是用 node(调用 cpp 编写的 libsass)来编译 sass；
  dart-sass 是用 drat VM 来编译 sass；
- node-sass是自动编译实时的，dart-sass需要保存后才会生效
  推荐 dart-sass 性能更好（也是 sass 官方使用的），而且 node-sass 因为国情问题经常装不上

SCSS 是 Sass 3 引入新的语法，其语法完全兼容 CSS3，并且继承了 Sass 的强大功能。Sass 和 SCSS 其实是同一种东西，我们平时都称之为 Sass，两者之间不同之处有以下两点：

1. 文件扩展名不同，Sass 是以“.sass”后缀为扩展名，而 SCSS 是以“.scss”后缀为扩展名
2. 语法书写方式不同，Sass 是以严格的缩进式语法规则来书写，不带大括号({})和分号(;)，而 SCSS 的语法书写和我们的 CSS 语法书写方式非常类似。

先来看一个示例：

**Sass 语法：**

```scss
$font-stack: Helvetica, sans-serif  //定义变量
$primary-color: #333 //定义变量

body
  font: 100% $font-stack
  color: $primary-color
```

**SCSS 语法：**

```scss
$font-stark Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```




### 变量

变量可以存储一下信息

* 字符串
* 数字
* 颜色值
* 布尔值
* 列表
* null

``` scss
$myFont: Helvetica, sans-serif;
$myColor: red;
$myFontSize: 18px;
$myWidth: 680px;

body {
  font-family: $myFont;
  font-size: $myFontSize;
  color: $myColor;
}

#container {
  width: $myWidth;
}
```

### 作用域

可以在大括号中定义局部变量，此变量只有当前选择器和当前选择器的下级可以使用。

### 嵌套规则

``` scss
.header{
    background-color: $bgc;
    height:80px;
    width:1000px;
    margin:0 auto;
    .title{
        color:$textColor;
    }
}
```



### 混入（mixin）

混入类似于一个函数，定义一次，可以使用多次。使用@mixin定义混入，@include使用混入。

``` scss
@mixin box{
    background-color: $bgc;
    height:300px;
    width:1000px;
    margin:0 auto;
}
.header{
    @include box;
    .title{
        color:$textColor;
    }
}
```

### 混入传参

定义混入是，在混入括号后面写一个小括号，可以在里面定义参数。使用@include是可以传递参数。

``` scss
$bgc:yellow;
$textColor:blue;
@mixin box($width,$height){
    background-color: $bgc;
    height:$height;
    width:$width;
    margin:0 auto;
}
.header{
    @include box(1000px,100px);
    .title{
        color:$textColor;
    }
}
.container{
    @include box(1000px,500px);
    .title{
        color:$textColor;
    }
}
.footer{
    @include box(1000px,100px);
    .title{
        color:$textColor;
    }
}

```

### 继承

``` scss
$bgc:yellow;
$textColor:blue;
@mixin box($width,$height){
    background-color: $bgc;
    height:$height;
    width:$width;
    margin:0 auto;
}
.title-style{
    text-align: center;
    color:$textColor;
}
.header{
    @include box(1000px,100px);
    .title{
        @extend .title-style
    }
}
.container{
    @include box(1000px,500px);
    .title{
        @extend .title-style
    }
}
.footer{
    @include box(1000px,100px);
    .title{
        @extend .title-style
    }
}
```

