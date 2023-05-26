# xiaozhou_cms技术细节

上次内容：egg请求与响应的方式：

1. controller
2. router.js

### 一、整体目录结构回顾

### 二、启动流程

1. app.js文件通过sequelize执行初始化数据库的工作。

sequelize是一个orm框架：对象关系映射

``` js
//js的数据格式
{
    id:1,
    username:"小明",
    password:"123456" 
}
[
    {
        id:1,
        username:"小刚",
        password:"123456" 
    },
    {
        id:2,
        username:"小红",
        password:"654321" 
    }
]
```

关系型数据库，非关系型数据库（no sql）

|||

| id   | name | 密码   | ---  |
| ---- | ---- | ------ | ---- |
| 1    | 小刚 | 123456 |      |
| 2    | 小红 | 654321 |      |

java => mybatis plus

node => sequelize





### 三、整体架构

1. controller:接受用户请求，并响应。
2. service：处理项目的业务逻辑
3. model：定义表结构
4. view：模板引擎
5. utils/checkagaint.js可以实现判断终端设备。
6. public：静态文件目录
7. extend/filter.js：实现了nunjucks模板的过滤器功能
8. middleware/checktoken.js：实现登录验证

### 四、登录的逻辑

1. cookie
2. session

### 五、其他

