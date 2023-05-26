# 第04节：Node基础

### 一、模块化开发

之前我们做过一个练习，使用node运行一个js文件。但是在实际项目开发中，不可能将全部代码都写在一个文件中。node为我们提供了模块化的语法，每一个js文件都可以当做一个模块：

* require() 引入一个外部模块
* module.exports 暴露模块接口

现在我们实现一个加法计算的功能，在一个add.js文件中编写一个加法函数，然后用module.exports暴露这个方法，然以在创建一个入口文件main.js引入这个加法函数，并通过加法函数计算结果。

示例代码如下所示：

``` js
// add.js定义一个模块，处理加法和减法
function add(a,b){
    return a + b;
}
module.exports = add;
```

``` js
// main.js引入外部模块，使用加法和减法函数
const add = require("./add");
let result = add(10,20);
console.log(result)
```

可以看到在命令行中输出运算结果`30`。

#### ES2015的模块化语法

这里需要补充一个知识点，在ES2015中的模块化语法与node的模块化语法略有差异，如下所示

* import 引入外部模块
* export 暴露模块接口

在vue的课程中，我们会使用到ES2015的模块化语法，这里不做深入讨论。

#### 外部模块

上面我们已经学习了使用require可以引入一个自定义的外部模块，其实其实引入的外部模块有三种情况：

1. 核心模块:核心模块是node自带的模块，可以在require引入后直接使用。
2. 自定义模块:自定义模块是我们自己编写的，上面模块化的例子中，add.js文件就是一个自定义模块。引入自定义模块需要些完整的路径。
3. 第三方模块：使用npm下载的模块是第三方模块，下载完成后可以使用require直接引入
 
本章后续内容我们会讲解第三方模块的使用，本节只讲解常用的核心模块。

### 二、核心模块

#### fs

fs模块是node的文件系统模块，通过此模块的readFile方法可以读取文件，我们新建一个readFile.js文件，然后在其目录同级创建一个txt文件，内容为`hello node`，然后编辑readFile.js文件，代码如下所示：

``` js
const fs = require("fs");
fs.readFile("hello.txt", (err,data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})
```

然后在此目录下执行

``` bash
node readFile.js
```

在示例代码中，fs的readFile方法有两个参数

* 第一个参数是读取文件的地址
* 第二个参数是一个回调函数
  * 如果读取文件失败，回调函数的第一个参数err会显示错误信息，如果读取文件成功，则err为null。
  * data是一个buffer类型，我们暂时不用理解，只要知道data.toString可以把buffer类型转换成字符串即可。

程序运行最终结果会在命令行中输出`hello node`

本节我们主要的学习目标是了解如何使用核心模块，所以关于fs模块的更多使用方法，本节不再展开描述。

#### path

path 模块提供了一些用于处理文件路径的小工具，例如我们可以用path的join方法链接两个路径，实例代码如下所示。

``` js
const path = require("path");

let domain = "http://www.xiaozhoubg.com"
let url = "docs";
let id = "22";

let address = path.join(domain,url,id);

console.log(address);
```

我们首先引入path模块，然后定义三个变量，使用path的join方法传入这三个变量，输出的结果是三个变量链接在一起的路径

``` bash
http:\www.xiaozhoubg.com\docs\22
```

#### http

http模块是可以用来创建web服务器，我们会在下节内容中进一步讲解。

### 三、课后练习

1. 定义一个可以完成四则运算的node模块。
2. 用fs模块打开d盘test目录下的index.html文件。（自己手动创建缺失的文件和目录）



