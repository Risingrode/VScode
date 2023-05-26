# 第03节：Ajax第三方模块

### 一、概述

在上一节的内容中，我们说了如何自己封装一个简易的Ajax方法。

其实在实际项目开发中，我们并不需要自己去封装，已经有很多成熟的Ajax第三方模块了，直接使用即可。

本节就来说说一个常用的Ajax第三方模块-Axios。

### 二、下载并引入Axios

可以直接使用npm下载Axios，命令如下：

``` bash
npm install axios
```

因为我们要将Axios引入到前端的页面，所以需要将axios.js文件拷贝到静态文件目录。

> 在node_modules目录中，找到axios>dist>axios.min.js文件，拷贝到public目录中即可。然后在模板中用script标签来引入此js文件。

### 三、后台程序

关于后台程序，我们仍然使用第01节的水果列表增删改查接口，实例代码如下所示：

``` js
//数据
let dataList = ["香蕉","苹果","鸭梨"];

//get查看
router.get("/fruits", ctx => {
    ctx.body = dataList;
})
//post添加
router.post("/fruits", ctx => {
    let fruit = ctx.request.body.fruit;
    dataList.push(fruit);
    ctx.body = dataList;
})

//put修改
router.put("/fruits/:id", ctx => {
    let id = ctx.params.id;
    let fruit = ctx.request.body.fruit;
    dataList.splice(id,1,fruit);
    ctx.body = dataList;
})
//delete删除
router.delete("/fruits/:id", ctx => {
    let id = ctx.params.id;
    dataList.splice(id,1);
    ctx.body = dataList;
})
```

### 四、Axios的常用方法

接下来，使用axios实现用户列表的增删改查。

``` js
//get请求查询数据
axios.get("/fruits").then( res => {
    console.log(res.data)
} )
//post请求添加数据
axios.post("/fruits",{
    fruit:"草莓"
}).then( res => {
    console.log(res.data)
} )
//put请求修改数据
axios.put("/fruits/0",{
    fruit:"西瓜"
}).then( res => {
    console.log(res.data)
} )
//delete请求删除数据
axios.delete("/fruits/0").then( res => {
    console.log(res.data)
} )

```

通过上面的代码可以看到，使用Axios完成异步的数据操作是非常简单的，我们在后续章节的Ajax相关内容，都会使用Axios来实现。

### 五、jQuery中的ajax方法

我们之前使用jQuery主要是用来操作DOM，其实jQuery也封装了Ajax方法，实例代码如下所示：

``` js
$.ajax({
    url:"/fruit",
    type:"get"
}).done( res => {
    console.log(res);
})
```

如果项目是基于jQuery开发的，jQuery中的Ajax方法可以完全替代Axios，但是如果项目并没有使用jQuery，那么使用Axios这种轻量级的Ajax库会更方便。

### 六、总结

本节主要讲解的是Ajax的使用方法，在实际项目开发中，Axios需要结合表单和表格元素完成数据的操作，并在页面中展示出操作的结果。

如何在页面中操作数据，我们会在下一章《Vue.js入门与进阶》中，结合Vue框架一起讲解。

### 七、课后练习

默认数据如下所示，

``` json
["香蕉","苹果","鸭梨"]
```

分别用jQuery和axios实现后台数据列表的增删改查，要求如下：

1. get方法获取数据列表
2. post添加数据，然后重新查询
3. put修改数据，然后重新查询
4. delete删除数据，然后重新查询

