# 第03节：npm常用命令

### 一、npm安装第三方模块

npm有两种方式安装第三方模块：本地安装和全局安装，使用哪种安装方式，取决于我们用npm模块来做什么。

* 如果模块作为项目的依赖，需要被引入到指定项目当中，需要本地安装。
* 如果需要模块提供某些命令工具，则需要全局安装。

稍后我们就来样式两种安装的区别。

#### 本地安装

我们先打开windows命令行工具，进入到需要安装第三方模块的目录，例如D:/npmtest目录，然后执行下面命令

``` bash
npm install query
```

安装完成之后，npm会在D:/npmtest目录下创建一个node_modules的目录，然后将npm模块下载到这个目录之下。上面的例子我们安装的是jQuery，所以打开node_modules会看到一个jQuery的目录。

关于第三方模块如何在node项目中使用，我们下一节会讲解。

#### 全局安装

某些第三方模块为我们提供了一些功能需要全局安装才可以使用，例如`http-server`，他可以为我们提供一个创建静态文件服务器的功能。

现在我们就来下载这个模块，全局安装需要在命令中添加-g，示例代码如下所示：

``` bash
npm install -g http-server
```

下载完成之后，http-server模块不会像本地安装那样下载到当前目录下，而是会下载到系统目录中，win10系统下载目录如下所示：

> C:\Users\Administrator\AppData\Roaming\npm\node_modules

我们不必去打开这个目录去浏览下载的文件，只要知道全局安装之后，我们可以使用这个模块提供的精灵。

http-server模块提供了http-server命令，可以用此命令创建一个静态服务器，步骤如下：

1. 选择开启服务器的目录，这里选择D:/test/server目录。
2. 在这个目录中执行http-server命令，默认端口为8080。
3. 在server目录中创建一个index.html文件。
4. 打开浏览器，访问http://127.0.0.1:8080/index.html，可以看到index.html文件的内容。
5. 如果服务器与其他设备处于同一网络（例如同一wify下的手机和电脑），可以使用ip地址访问此网页。

大家可能对服务器的概念不是特别了解，关于服务器的概念，我们会在后续章节。

### 二、npm项目初始化

使用如下命令，可以在当前目录编程一个node项目（实质上就是添加了一个package.json文件）。

``` bash
npm init
```
执行命令之后会有一些列提示，一直按回车选择默认项即可。创建完成之后会生成一个package.json文件，文件内容如下所示：

``` json
{
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {
    "vue": "^2.6.10"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

```

这个文件用来记录项目的详细信息，包括项目名称、依赖模块等。

#### 安装第三方依赖

通过下列命令，可以将安装的第三方依赖记录在package.json文件中。

``` bash
npm install --save jquery
npm install --save bootstrap
```
下载完成之后，可以看到在dependencies字段下面记录了我们下载模块的名称和版本。这样，只要有了这个文件，我们就知道整个node项目需要依赖哪些第三方模块了。

``` json
{
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bootstrap": "^4.4.1",
    "jquery": "^3.4.1"
  }
}
```
> 下载多个模块可以简写：npm install --save jquery boostrap，模块名之间用空格分开。

### 三、通过配置文件安装依赖

在实际开发的过程中，项目代码可能会分享给他人或传输到互联网上，我们没有必要将依赖模块的代码一并传输，只需要传输一个package.json文件即可。

有了这个配置文件，其他人接收到项目代码之后，只需要执行下面的命令

``` bash
npm install
```
npm便会根据package.json文件中的记录下载所有依赖模块。

### 四、课后练习

1. 初始化项目，并在项目中安装jQuery和bootstrap，并写入配置文件中的依赖。
2. 拷贝第一题中的package.json到另一个项目，然后用npm自动安装配置文件记录的所有依赖。