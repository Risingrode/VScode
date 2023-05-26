# 第18节：grid布局

### 一、grid布局概述

#### grid布局与flex布局对比

grid布局可以为网页提供更强大的布局功能，它与flex布局的区别是。

* flex布局为一维布局，一般一行或一列的布局使用flex布局。
* grid布局为二维布局，同时需要兼顾行与列的布局，可以使用gird布局。

如果不考虑兼容问题，flex布局和grid布局可以很好地替代浮动布局。

#### grid布局基本概念

grid容器的水平区域成为行（row），垂直区域成为列（column），行与列之间的较差与是单元格（cell），划分网格的线成为网格线（gird line），了解了这些基本概念之后，就可以开始用相应的css属性设置grid容器中的项目了。

### 二、grid容器

#### 设置gird容器

通过下面代码可以将一个容器设置成为一个grid容器。

``` css
.container{
    display:grid;
}
```

gird容器内部的元素称为grid容器的项目，grid项目的float属性会失效，通过grid容器的进一步设置，可以让内部的项目按要求排列。


#### grid-template-columns属性与grid-template-rows属性

**grid-template-columns**可以设置gird容器中的项目有多少列，并指定列的宽度，实例代码如下所示

``` html
 <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
    <div class="item">8</div>
    <div class="item">9</div>
</div>
```

``` css
.container{
    display:grid;
    grid-template-columns: 100px 100px 100px;
}
.item{
    border:1px solid red;
}
```

通过上面的样式设置，可以将grid容器设置成为三列，并将每一列的宽度设置为100px。

除了设置制定尺寸的像素，还可以通过fr单位设置列宽度的比例。修改上面的grid容器样式如下所示

``` css
.container{
    display:grid;
    grid-template-columns: 1fr 1fr 2fr;
}
```

可以看到整个gird容器的列被4等分，其中第一列和第二列占1份（1fr），第三列占2份（2fr）。

**gird-template-rows**属性可以设置gird容器中的项目有多少行，并指定行的宽度，实例代码如下所示：

``` css
.container{
    display:grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
}
```

通过上面的样式，可以将grid容器设置成为一个三行三列的布局，并且每一个单元格都为100px。

#### grid-column-gap属性与grid-row-gap属性

grid-column-gap属性与grid-row-gap属性可以为grid容器的航宇列之间设置间距，示例代码如下所示：

``` css
.container {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
    grid-row-gap: 20px;
    grid-column-gap: 30px;
}
```

通过上面的样式，可以将行（row）之间的间距设置为20像素，将列（column）之间的间距设置为30像素。

#### justify-items属性与align-items属性

justify-items属性与align-items属性可以设置单元的水平位置和垂直位置，实例代码如下所示：

``` css
.container {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
    /* 在单元格内水平居中 */
    justify-items: center;
    /* 在单元格内存执居中 */
    align-items: center;
}
```

默认的情况下，grid容器单元格内的块元素会适应单元的的宽度和高度，设置justify-items后，单元格内的元素会适应自身内容的宽度，设置align-items后，单元格内的元素会使用内容的高度。

将justify-items和align-items两个属性设置为center，可以将单元格内的内容垂直水平居中显示。


#### justify-content属性与aling-content属性

通过justify-content属性与aling-content属性可以设置整个内容区域在容器里面的水平位置和垂直位置。

### 三、grid项目

#### justify-self属性与align-self属性

* justify-self属性可以设置单元格内容的水平位置。
* align-self属性可以设置单元内容的垂直位置。

#### grid-column-start属性与grid-column-end属性

指定左右边框垂直网格线

#### grid-row-start属性与grid-row-end属性

指定上下边框水平网格线

### 四、课后练习

1. 使用grid布局实现一个圣杯布局[效果地址]()。
2. 结合grid布局和flex布局实现晓舟报告的首页[效果地址]()。