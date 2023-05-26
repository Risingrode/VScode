# 第07节：插槽、DOM操作、过滤器

### 一、插槽

#### 插槽基础

默认的情况下，引入的组件，开始标签和结束标签之间不可以添加内容（如果添加了也会被忽略）。

插槽可以用来扩展组件的自定义能力，例如我们可以创建一个`MyButton`的自定义按钮，然后通过插槽来定义内部的文本。

``` html
<!-- MyButton.vue -->
<template>
    <div>
        <slot></slot>
    </div>
</template>
```

``` html
<!-- app.vue -->
<template>
    <my-button>测试文本</my-button>
</template>
```

#### 具名插槽

有的时候一个组件会带有多个插槽，可以为`slot`标签添加`name`属性来区分不同的插槽，实例代码如下所示

``` html
<!-- Layout.vue -->
<template>
    <div>
        <header>
            <slot name="header"></slot>
        </header>
        center
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
```

引入组件后，可以通过`template`标签指定插槽的属性，实例代码如下所示。

``` html
<!-- app.vue -->
<template>
    <layout>
      <template v-slot:header>
        this is header
      </template>
      <template v-slot:footer>
        this is footer
      </template>
    </layout>
</template>
```

`v-slot`可以用`#`缩写，上面的代码可以缩写为

``` html
<layout>
    <template #header>
    this is header
    </template>
    <template #footer>
    this is footer
    </template>
</layout>
```

我们使用的很多Vue的第三方UI库多是使用插槽原理实现的，我们会在后面的课程中继续学习插槽在项目中的应用。

### 二、获取真实DOM

在此前的课程中，我们都是通过虚拟DOM实现的页面操作。在项目开发过程中，我们偶尔也会需要获取真实的DOM节点。

例如下面的例子，我们定义了一个空的div，然后在Vue中获取这个div的样式。

可以通过ref属性为元素添加引用信息，然后通过$refs来获这个元素。示例代码如下所示

``` html
<template>
    <div class="content" ref="box">

    </div>
</template>

<script>
export default {
    //window.getComputedStyle方法可以获取元素的样式。
    mounted(){
         console.log(window.getComputedStyle(this.$refs.box).height)
    }
}
</script>

<style scoped>
.content{
    border:1px solid red;
    width:100px;
    height:100px;
}
</style>
```

### 三、过滤器

``` html
<template>
    <div>
        <h1>{{date | dateForma}}</h1>
    </div>
</template>
```

``` js
export default {
    data(){
        return {
            date:"2020-1-1"
        }
    },
    filters:{
        dateForma(value){
            let dateTime = new Date(value);
            let year = dateTime.getFullYear();
            let month = dateTime.getMonth();
            let date = dateTime.getDate();
            return `${year}年${month+1}月${date}日`
        }
    }
}
```

### 四、课后练习

1. 使用插槽自定义表格组件，让组件可以展示列表内容[效果地址]()。
2. 当浏览器滚动到底部时，获取更多数据[效果地址]()。
3. 编写一个过滤器，将阿拉伯数字转换成汉子的数字[效果地址]()。