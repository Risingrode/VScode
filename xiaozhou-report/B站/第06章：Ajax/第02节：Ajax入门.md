# 第02节：Ajax入门

### 一、Ajax概述

在我们之前学习的内容中，向服务器发送请求后，再浏览器中响应的页面都是整页刷新。

在某些项目中，我们只希望获取页面的局部数据，而不必整页刷新，这个时候就需要使用Ajax来实现功能了。

Ajax 的全称是Asynchronous JavaScript and XML（异步的JavaScript 和 XML）。这个概念出现的比较早，那个时候前端和后台的数据交互主要以XML格式为主，例如下面的数据格式：

``` xml
<fruit>
   <name>apple</name>
   <weight>0.5kg</weight>
   <color>red</color>
</fruit>
```

现在仍然存在很多用xml交互数据的情况，但是目前主流的数据格式使用的是json（JavaScript对象表示法），例如下面的格式：

``` json
{
    "fruit":{
        "name":"apple",
        "weight":"0.5kg",
        "color":"red"
    }
}
```

对于熟悉js的开发人员，这样的格式再熟悉不过了，基本是零学习成本，以后我们使用Ajax传递数据都是使用json格式。

#### ajax的优缺点

* 优点：按需获取数据，提升系统性能。
* 缺点：异步获取数据，不利于搜索引擎优化。

### 二、Ajax原理

考虑一个问题，在之前的学习内容中，我们是如何向服务器发送请求的？这里我们列举一下：

1. 在浏览器中直接输入网址
2. a标签实现的页面跳转
3. 表单提交
4. Postman模拟http请求

Ajax的原理是通过`XMLhttpRequest`对象向服务器发送请求，实例代码如下所示：

``` js
//后台程序
router.get("/", async ctx => {
    await ctx.render("index")
})

router.get("/data", async ctx => {
    ctx.body = "hello world"
})
```

``` js
//前端程序
var xhr = new XMLHttpRequest(); //创建XHR对象
xhr.open("get","/data");   //规定请求类型
xhr.send()                      //发送请求
xhr.onreadystatechange = function(){ //监听readyState事件
// 0: 请求未初始化
// 1: 服务器连接已建立
// 2: 请求已接收
// 3: 请求处理中
// 4: 请求已完成，且响应已就绪
  if(xhr.readyState === 4 && xhr.status === 200){
      alert(xhr.responseText)
  }
}
```

这里需要注意的是，上面的代码，我们在实际开发项目中并不常用，因为通常情况下，我们会引入第三方Ajax库来处理异步请求。

### 三、封装一个Ajax方法

#### 回调函数

将上面的程序封装到一个myAjax方法，实例代码如下所示，这里需要注意的是，因为Ajax是异步的操作，因此封装的Ajax不能用return获取返回值。下面的示例使用的是回调函数封装的Ajax方法

``` js
function myAjax(method,url,next) {
   let xhr = new XMLHttpRequest();
   xhr.open(method, url);
   xhr.send()
   xhr.onreadystatechange = function () {
       if (xhr.readyState === 4 && xhr.status === 200) {
           next(xhr.responseText);
       }
   }
}

document.querySelector("button").onclick = function() {//调用封装的Ajax
  myajax("get","/data",function(data){
      alert(data);
  });
}
```

#### Promise

过多的使用回调函数会让程序变得很难维护，接下来我们用Promise重新封装ajax方法，示例代码如下所示：

``` js
function myajax(method, url, next) {
   return new Promise(function (resolve,reject) {
       let xhr = new XMLHttpRequest();
       xhr.open(method, url);
       xhr.send(); //可以向后台传输数据
       xhr.onreadystatechange = function () {
           if (xhr.readyState === 4 && xhr.status === 200) {
               resolve(xhr.responseText);
           }
       }
       reject("获取数据失败")
   })
}
document.querySelector("button").onclick = async function () {
   let p = myajax("get", "data");
   p.then(function (data) {
       alert(data);
   })
}
```

使用async函数才是处理异步问题的终极解决方案，所以在后续的开发中，尽量使async函数来处理异步问题。

### 四、课后练习

独立完成封装XMLHttpRequest对象，并获取后台的字符串数据。



