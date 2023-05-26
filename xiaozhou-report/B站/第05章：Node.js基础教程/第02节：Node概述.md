# 第02节:node概述

### 一、什么是Node

在我们此前的课程中，JavaScript一直作为一门前端开发语言运行在浏览器内部（浏览器引擎负责解释JavaScript语言）。Node同样也是JavaScript这门语言的运行环境。通过Node，我们可以让JavaScript具备后台开发的能力。

#### 安装Node

在windows环境下安装Node非常简单，下载地址如下所示：

[Node下载地址](http://nodejs.cn/download/)

下载完成之后，双击安装包，然后一直【下一步】就可以了。


#### 测试Node

安装完成之后，打开命令行工具，我这里使用的是windows系统自带的命令行工具，输入下列命令：

``` bash
node -v
```

如果可以显示Node的版本号，说明Node已经安装成功。

### 二、npm概述

npm是node的包管理器，我们可以通过npm下载第三方模块，也可以通过npm管理一整个Node项目或前端开发项目的所有依赖。

在安装Node的时候，npm也已经被成功安装了，这里直接打开命令行即可，输入如下命令，如果可以看到NPM的版本号，说明NPM安装成功。

``` bash
npm -v
```

下一节我们会继续讲解如何使用npm。

### 三、cnpm

在后续的开发中，我们会非常频繁第使用npm下载第三方模块，但是npm服务器位置处于国外，下载包的速度会比较缓慢。幸好淘宝为国内用户提供的cnpm，他是npm的镜像，下载第三方包时，们完全可以使用cnpm来替代npm。

#### cnpm安装

安全npm之后，执行下面的命令，可以下载cnpm

``` bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

下载完成之后，输入下面的命令，检查是否安装成功

``` bash
cnpm -v
```

如果正确安装成功，命令行会提示cnpm的版本信息。

在后续的课程内容中，我们都尽量使用cnpm来下载第三方模块。

### 四、在node中执行JavaScript程序

#### 直接执行

打开命令行工具，输入命令：

``` bash
node
```

按回车键即可进入node的终端，然后可以在这个终端输入JavaScript程序。

虽然这样可以执行node程序，但是在开发过程中我们不会这样使用。

#### 运行js文件

可以使用node命令执行js文件，例如我们在一个test目录中新建一个hello.js文件，然后在此目录下

### 五、课后练习

1. 进入node的命令行工具，定义一个函数计算两个数的加和，并在控制台输出结果，然后调用这函数，实例代码如下所示：

``` js
function add(a , b){
    console.log(a + b) ;
}
add(10,20);
```

2. 编写将上一题的码编写在一个js文件中，在文件中定义一个函数计算两个数的加和，然后用node运行这个js文件。