# 第15节：flex布局

### 一、flex布局概述

此前我们制作的所有网页都是基于盒子模型和浮动布局完成的，本节我们一起学习弹性布局（或者叫弹性盒子布局），这是一种更先进的布局方式，可以让网页布局更简洁，更易于维护。

本节会针对flex布局的常用属性，讲解如何将flex布局应用到实际项目中。

### 二、flex容器

将一个元素设置如下属性

``` css
.box{
  display: flex;
}
```

此容器会变成一个flex容器（flex container），容器内部的元素被称为flex项目（flex item），在这个容器内部浮动会失效，通过设置flex容器的css样式，可以改变内部项目的布局方式。

我们先来了解一些flex布局的基本概念，示例图如下所示

![Flex布局的基本概念](../images/0120_img0.png)

一个flex容器默认存在两个轴，横向的主轴（main轴）和纵向的交叉轴（cross轴）。默认情况下flex项目按照main轴排列，通过设置，可以让项目按照cross轴排列，示例代码如下所示：

``` html
<div class="container">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
</div>
```

``` css
.container{
    display: flex;
}
.box{
    border:1px solid red;
}
```

通过上面的案例，大家可以看到，默认情况下flex容器内部的元素是按照主轴排列的，并且块元素不会独立成行。

#### flex-direction

通过flex-direction属性，可以设置flex容器按主轴或是交叉轴排列。

* flex-direction:row;默认值，项目按主轴排列，高度为容器高度。
* flex-direction:column;项目按交叉轴排列，长度为容器长度。

示例代码如下所示：

``` css
.container{
    display: flex;
    /* flex-direction: column; */
    flex-direction: row;
    border:1px solid #00f;
    height:200px;
}
.box{
    border:1px solid red;
}
```

这里大家可以直观地看到，让flex项目按照主轴排列，此功能可以完全取代浮动布局，而且不必考虑浮动元素脱离文档流的种种弊端。如果不考虑浏览器兼容问题，那么flex布局大部分情况都可以很好地替代浮动布局。

#### justify-content

justify-content属性可以控制flex项目在容器中的水平排列方式，示例代码如下所示

``` css
.container{
    display: flex;
    border:1px solid #00f;
    height:200px;
    /* flex项目按水平排列 */
    justify-content:center;
}
```

* justify-content:flex-start;flex项目在主轴开始位置展示
* justify-content:flex-end;flex项目在主轴结束位置展示
* justify-content:flex-center;flex项目在主轴居中展示

此前我们将一个元素居中显示，通常将设置元素设置为固定宽度，然后为其设置属性margin：0 auto;对于宽度不固定的元素，我们只能使用一些奇淫技巧让其居中。

现在有了flex布局，我们可以很轻易的让一个或多个不定宽度的元素居中。

#### align-items

align-items属性可以控制flex项目在容器中的垂直排列方式，示例代码如下所示

``` css
.container{
    display: flex;
    border:1px solid #00f;
    height:200px;
    justify-content: center;
    align-items: center;
}
.box{
    border:1px solid #f00;
    height:50px;
}
```

* align-items:flex-start;flex项目在交叉轴开始位置展示
* align-items:flex-end;flex项目在交叉轴结束位置展示
* align-items:flex-center;flex项目在交叉轴居中展示

### 三、flex项目

#### align-self

``` html
<div class="container">
    <div class="box">1</div>
    <div class="box item">2</div>
    <div class="box">3</div>
</div>
```

``` css
.container{
    display: flex;
    border:1px solid #00f;
    height:200px;
    justify-content: center;
    align-items: center;
}
.box{
    border:1px solid #f00;
    height:50px;
}
.item{
    align-self: flex-start;
}
```

#### flex

``` html
<div class="container">
    <div class="box item1">1</div>
    <div class="box item2">2</div>
    <div class="box item3">3</div>
</div>
```

``` css
.container{
    display: flex;
    border:1px solid #00f;
    height:200px;
    justify-content: center;
    align-items: center;
}
.box{
    border:1px solid #f00;
    height:50px;
}
.item1{
    flex:1;
}
.item2{
    flex:2;
}
.item3{
    flex:3;
}
```

### 四、课后练习

1. 使用flex布局让一个宽高都为100px的div垂直水平居中[效果地址]()。
2. 使用flex布局完成晓舟报告首页顶部菜单[效果地址]()。
3. 使用flex布局完成晓舟报告移动端的底部菜单[效果地址]()。