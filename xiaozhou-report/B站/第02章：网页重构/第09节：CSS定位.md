# 第09节：css定位

### 一、定位的基本概念

在我们浏览网页的过程中，经常会发现网页中的元素重叠展示，例如一个列表压在了一张图片之上，或者浏览器右下角突然弹出的广告压到了其他元素之上，这些都需要使用css的定位才能实现，本节我们就讲解css定位相关的属性，定位可以分为三类:

* 绝对定位
* 相对定位
* 固定定位


### 二、css定位详解

我们可以通过position属性，将一个元素设置成定位元素，之后就可以通过top、left、bottom、right属性来设置元素的坐标。

#### 绝对定位

将一个元素设置下面的属性：

``` css
element{
    position:absolute;
}
```

元素就变成了一个绝对定位元素，实例代码如下所示。

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .box{
            width:100px;
            height:100px;
            background-color: #f00;
            border:1px solid #0f0;
        }
        .pos{
            position: absolute; /*设置绝对定位元素*/
            top:50px;           
            left:50px;
        }
    </style>
</head>
<body>
    <!-- 一个元素可以设置多个class属性，用空格区分开 -->
    <div class="box">1</div>
    <div class="box pos">2</div>
    <div class="box">3</div>
</body>
</html>
```

从上面代码的效果中，我们可以了解以下几点：

* 绝对定位元素脱离文档流，并不占位，第一个div和第三个div相邻。
* 原点在整个网页左上角的位置。
* 定位的坐标分别是top:50px;left:50px;这个值是元素左上角距离原定的距离。

#### 相对定位

将一个元素设置下面的属性：

``` css
element{
    position:relative;
}
```

元素就变成了一个相对定位元素，实例代码如下所示。

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .box{
            width:100px;
            height:100px;
            background-color: #f00;
            border:1px solid #0f0;
        }
        .pos{
            position: relative; /*设置相对定位元素*/
            top:50px;
            left:50px;
        }
    </style>
</head>
<body>
    <div class="box">1</div>
    <div class="box pos">2</div>
    <div class="box">3</div>
</body>
</html>
```

从上面代码的效果中，我们可以了解以下几点：

* 相对定位元素不脱离文档流，元素占位，第一个div和第三个div不相邻，中间的间距就是相对定位元素的位置。
* 原点在其占位位置的左上角。
* 定位的坐标分别是top:50px;left:50px;这个值是元素左上角距离原定的距离。

#### 固定定位

将一个元素设置下面的属性：

``` css
element{
    position:fixed;
}
```

元素就变成了一个固定定位元素，实例代码如下所示。

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        body{
            height:1000px;
        }
        .box{
            width:100px;
            height:100px;
            background-color: #f00;
            border:1px solid #0f0;
        }
        .box2{
            position: fixed; /*设置固定定位元素*/
            top:50px;
            left:50px;
        }
    </style>
</head>
<body>
    <div class="box box1">1</div>
    <div class="box box2">2</div>
    <div class="box box3">3</div>
</body>
</html>
```

从上面代码的效果中，我们可以了解以下几点：

* 固定定位元素脱离文档流，并不占位，第一个div和第三个div相邻。
* 我们将body元素的高度设置成1000px，这样我们就可以通过滚轮控制网页显示的位置。
* 原点在浏览器当前窗口的左上角。
* 定位的坐标分别是top:50px;left:50px;这个值是元素左上角距离原定的距离。
* 当混轮滚动的时候，固定定位元素永远相对于窗户的位置定位。

#### 设置参照物

理解了上面三种定位方法，我们再来考虑开始提到的那个问题，如果我们希望将一个数字列表压在一张图片之上。居中显示在网页之上，我们将数字列表设置定位之后，坐标应该设置成多少呢？因为居中的图片与浏览器窗口的左边距是不固定的，所以没有办法设置成一个固定值，这个时候，我们就需要给定位元素设置参照物。

将父级元素设置定位元素，那么子级元素定位的坐标原点会设置为父级元素左上角的位置。代码如下所示。

``` html
<div class="container">
    <div class="box"></div>
</div>
```

``` css
 .container{
    width:300px;
    height:300px;
    border:1px solid blue;
    position: relative;;
    top:100px;
    left:100px;
}
.box{
    border:blue 4px solid;
    width:100px;
    height:100px;
    position:absolute;
    top:10px;
    left:20px;
}
```

父级容器不管是绝对定位，相对定位还是固定定位，都可以实现作为参照物的效果，在实际项目开发中，常用方法如下所示：

1. 如果父级元素不脱离文档流，参与正常排版，那么父级设置相对定位。
2. 如果父级需要根据视窗的显示位置而变化位置，可以设置固定定位。

一般父级容器不设置绝对定位。

#### 注意事项

大家掌握了定位之后会发现一个问题，那就是只要我么使用定位，就可以实现所有的网页效果，再也不需要浮动布局，也不用管网页的树状结构了。

这样做其实是不可以的，在制作网页的过程中，我们不仅要将元素放在指定的位置，还要考虑网页的后续可维护性，已经针对不同屏幕尺寸的适应能力。因此，定位是我们实现网页布局的最后手段。多于一个新手来说，能不用定位来实现的布局，都不要用定位来实现。

### 三、课后练习

1. 完成晓舟报告右侧返回顶部的悬浮效果[效果地址](http://www.xiaozhoubg.com/public/demo/frontend/2-9-1.html)。
2. 制作一个在图片上显示图标描述文字的效果，并且图片再网页右下角显示[效果地址](http://www.xiaozhoubg.com/public/demo/frontend/2-9-2.html)。
3. 制作一个标题效果，让标题左右两边各带一个横线（使用伪元素和定位来实现）[效果地址](http://www.xiaozhoubg.com/public/demo/frontend/2-9-3.html)。






