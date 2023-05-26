# 第07节：service

### 一、概述

简单来说，Service 就是在复杂业务场景下用于做业务逻辑封装的一个抽象层，提供这个抽象有以下几个好处：

1. 保持 Controller 中的逻辑更加简洁。
2. 保持业务逻辑的独立性，抽象出来的 Service 可以被多个 Controller 重复调用。

### 二、在app/service目录下创建student.js文件

``` js
const Service = require('egg').Service;
class StudentService extends Service {
  async getStduentList() {
    	
  }
}
module.exports = StudentService ;

```

### 三、controller调用service方法

``` js
await this.ctx.service.clazz.getClazzList();
```

### 四、课后练习

制作学生成绩管理功能，数据存储在mysql中，要求如下

1. 实现班级列表的查看、添加、删除功能。
2. 实现学生列表的查看、添加、删除功能。
3. 学生字段包括，id、姓名、成绩、班级名称。

前端：Vue + Element_UI + axios
后端：Egg + sequelize + MySQL