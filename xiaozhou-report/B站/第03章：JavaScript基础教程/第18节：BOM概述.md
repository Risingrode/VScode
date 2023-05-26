## 第十八节:BOM概述

### 一、概述

《javaScript高级程序设计》这本书讲过: javaScript = ECMAScript + DOM + BOM。
 
 * DOM:文档对象模型(document对象)
 * BOM：浏览器对象模型

### 二、Window对象(全局对象)
windows对象是全局对象，所有在浏览器可以直接使用的方法都是window对象的方法，其中document对象和alert()方法就是window的属性,使用时window.document和window.alert() 一般可省略window。

首先写一个打开vscode写一个案例计时器方法 示例代码如下：

```js
window.setTimeout(()>={
    console.log("hello word")
},1000)
```
如上代码时一个计时器方法使用setTimeout方法，一秒钟输出一次hello word；

计时器方法上节已经讲过了，本节主要讲的还是弹出框方法，弹出框的方法主要分为三种:

* alert()
```js
    alert("hello word") //直接弹出编写的参数
```

* prompt()

```js
let str = prompt("请输入你的名字") //prompt方法中可以加入一个参数，但是通常我们只加入一个参数就可以了。
console.log(str) //点击确定控制台会输出弹出框的内容，点击取消会返回null
```

* confirm()

```js
let result= confirm("确定是否删除此弹框") //confirm返回的是一个布尔值，也可以加入一个参数
console.log(result) //点击确定控制台会返回true 取消返回false
```

在开发应用中，一般不适用系统自带的弹出框，一定段可能会被屏蔽。

### 三、location对象

1. location.href - 属性返回当前页面的URL - "https://www.baidu.com"
2. location.hostname - 主机的域名 - "wwww.baidu.com"
3. location.pathname - 当前页面的路径和文件名 "/s"
4. location.port - 端口 - "8080"
5. loaction.protocol -  协议 - "https:"

### 四、navigator对象

navigator.userAgent 检查当前设备，并在控制台输出

