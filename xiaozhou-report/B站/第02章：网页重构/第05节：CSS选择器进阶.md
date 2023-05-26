# 第05节：css选择器进阶

### 一、更多的选择器

上一节我们已经掌握了常用css选择器和css的一些常用属性，本节我们进一步扩展css选择器的内容包括内容如下：

* 层级选择器
* 组合选择器
* 伪类选择器
* 伪元素选择器

#### 层级选择器
  
找到指定html元素内的某个元素:

``` css
.sport li{
    color:red
}
```

同上面的选择器 .sport li，可以选择class为sport元素内部所有的li标签。在上一节我们讲解过，尽量不要单独使用元素选择器来定义元素样式，但是如上所述，配合class选择器组成一个层级选择器，这样就可以更便捷、高效第使用元素选择器了。

#### 组合选择器

组合选择器可以将多个选择器用逗号分隔开，进而定义将多个选择器选择的元素定义为相同的样式，例如下面的示例，可以将class属性为info1和info2的所有元素定义字体颜色为红色。

``` css
.info1,.info2{
    color:red;
}
```

#### 伪类选择器

此前我们学习的所有选择器都是静态的定义某些元素的样式，通过伪类选择器，我们还可以为元素添加一定的行为，这里讲解最常用的伪类选择器:hover，当鼠标悬浮在某个元素上时，为其设置样式，示例代码如下所示：

``` css
.box:hover{
    background-color: red;
}
```

#### 伪元素选择器

伪元素选择器可以使用css为网页添加额外的元素。

* ::before：伪元素选择器，在每个内容之前插入内容
* ::after：伪元素选择器，在每个内容之后插入内容

示例代码如下所示

``` css
h1::before{
    content:"before";
    border:1px solid red;
}
h1::after{
    content:"after";
    border:1px solid blue;
}
```

#### 选择器总结

在css3版本之前，伪类选择器和伪元素选择器都是一个冒号，css3的语法中，为了让伪类选择器和伪元素选择器有所区分，在伪元素选择器前又增加了一个冒号，编程了两个冒号。当时css3是完全兼容此前的css版本的，所以大家在开发的过程中，可能会遇到只有一个冒号的伪元素选择器，虽然可以正常使用，但是这是过时的语法，大家在开发的过程中尽量使用css3的新语法，使用两个冒号。

虽然css还有很多很多选择器我们并没有讲解，但是目前学习的选择器基本可以应付95%以上的开发工作了，在学习的过程中，建议大家先熟悉这些选择器并灵活运用，日后的工作中如果遇到需要其他选择器才能应付的需求，到时直接看文档查阅其他选择器，基本可以分分钟搞定所遇到的问题。

### 二、选择器权重

#### class选择器与id选择器权重对比

到目前为止我们已经可以熟练掌握css选择器了，但是考虑一个问题，如果两个不同的选择器都找到了同一个元素，并且设置不同的样式，那么这个元素的样式应该被哪个选择器所指定呢，这就涉及到了选择器权重的问题，示例代码如下所示。
``` css
#content{
    width:100px;
    height:100px;
    background-color: #0f0;
}
.box{
    width:100px;
    height:100px;
    background-color: #f00;
}
```

在代码中，我们使用class选择器将div定义成红色，用id选择器将元素定义为绿色，最终元素为id选择器设置的样式，可以看出id选择器的权重大于class选择器的权重。这里大家应该记住，id选择器权重最大，其次是class选择器，最后是元素选择器。再看下面的例子。

``` css
.box1{
    width:100px;
    height:100px;
    background-color: #0f0;
}
.box2{
    width:100px;
    height:100px;
    background-color: #f00;
}
```

在上面的代码中，我们使用两个class选择器定义一个div，最终div的样式被第二个选择器设置，这是因为两个选择器权重如果相同，最后面的选择器设置的内容会覆盖前面的内容;

#### 选择器权重计算方法

在css中，id选择器的权重是100，class选择器的权重是10，元素选择器的权重是1，数值越大，权重越大，如果是放在层级选择器中，可以把层级选择器拆分成多个选择器权重的值，然后相加计算总权重值，例如下面的选择器

``` css
#container .box ul li{
    /* 
        id：100
        class:10
        ul:1
        li:1
        总和:112
     */
}
.container .box li{
    /* 
        class:10
        class:10
        li:1
        总和:21
     */
}
```
如果上面两个选择器同时选择一个元素，那么第一个选择器设置的样式会被使用，因为其选择器权重值为112，大于下面选择器的权重值21。

#### 其他引入css的方法

此前我们编写的css样式都写在head标签的style标签内，此方法我们称作【嵌入样式】，除了嵌入样式外，还有两种方法来设置css样式

1. 内联样式
2. 外部样式

外部样式实例代码如下所示

``` html
<!-- index.html文件 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <h1>hello world</h1>
</body>
</html>
```

``` css
/* index.css文件 */
h1{
    color:blue;
}
```

内联样式实例代码如下

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h1 style="color:yellow">hello world</h1>
</body>
</html>
```

内联样式仅仅只是设置了一个html标签的样式，因此，随着网页内容的增加，这设置样式的方式不仅增加了css代码量，而且难以维护，**所以我们不要使用此方法设置样式。**

嵌入样式写在html文件中，随着网页内容的增加，会显得html文件过于臃肿，所以也不推荐使用这种方式。

从现在开始，我们编写的所有样式，都要使用外部样式。

关于三种样式的优先级，内联样式优先级最高，嵌入样式和外部样式如果权重相同，后面的样式会覆盖前面的样式。

### !important

通过在样式的结尾设置!important，可以将此样式优先级设置为最高，实例代码如下所示：

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        h1{
            color:red !important;
        }
    </style>
</head>
<body>
    <h1 style="color:yellow">hello world</h1>
</body>
</html>
```

在上面的代码中，网页中的字体仍然是红色，因为!important优先级高于内联样式。

### 课后练习

优化上一节课后练习的代码，要求如下：

1. 使用层级选择器让所有样式都在.container的下级
2. 使用link标签引入外部样式
3. 去掉列表元素之前的点，并且将列表设置为红色字体。

最终展示效果[效果地址](http://www.xiaozhoubg.com/public/demo/frontend/2-5-1.html)




