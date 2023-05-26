# 第01节：Egg概述与创建项目

### 一、Egg概述

Egg.js 为企业级框架和应用而生，我们希望由 Egg.js 孕育出更多上层框架，帮助开发团队和开发人员降低开发和维护成本。

通过Egg可以快速搭建web后台程序。

### 二、创建egg项目

通过下面的命令可以创建一个Egg项目，Egg项目启动后，默认端口是7001，可以直接通过浏览器访问http://127.0.0.1:7001。

``` bash
$ mkdir egg-example && cd egg-example
$ npm init egg --type=simple
$ npm install
$ npm run dev
```


### 三、项目目录结构讲解

**创建好项目的同学可以发现多了好多文件夹，具体用来干什么的呢，请看下面**
```
egg-project(项目名)
├── package.json
├── app
|   ├── router.js
│   ├── controller
│   |   └── home.js
├── config
|   ├── plugin.js
|   ├── config.default.js
└── test
    ├── middleware
    |   └── response_time.test.js
    └── controller
        └── home.test.js
```

``app/router.js`` 用于配置 URL 路由规则
``app/controller/`` 用于解析用户的输入，处理后返回相应的结果
``config/config.default.js`` 用于编写配置文件
``config/plugin.js`` 用于配置需要加载的插件

### 四、课后练习
修改app>controller>home.js文件，将hello world展示在浏览器页面中。
```js
async index() {
    const { ctx } = this;
    ctx.body = `
      <h1>hello world</h1>
    `;
}

```