# 第11节：elementUI

### 一、elementUI概述

elementUI是一个基于Vue的UI库。学习UI库最简单的方式就是去看它的文档。[文档地址](https://element.eleme.cn/#/zh-CN/component/installation)

### 二、安装 elementUI

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。  
在项目的根目录打开命令行输入：

```
npm install element-ui --save
```

```js
import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI); 

new Vue({
  el: "#app",
  render: h => h(App)
});
```

安装完成之后，就可以像下面的示例代码一样，直接使用elementUI提供的组件了。

```html
<el-button>默认按钮</el-button>
```

### 三、常用组件介绍

#### 表单组件
由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据

#### 表格组件
用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。
#### 消息提示
模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。
#### 总结
关于elementUI的组件，了解一些常用的即可，以后工作中，随时都可以根据需求去查找文档。

### 四、课后练习

1. 使用ElementUI实现一个用户注册功能，点击注册按钮，在控制台输出所有注册用户的信息，信息具体内容如下：
   1. 用户名
   2. 密码
   3. 邮箱
   4. 性别
   5. 兴趣爱好：篮球、足球、羽毛球。

[效果链接]()
   
2. 使用ElementUI实现一个表格数据的添加与删除[效果链接]()。

