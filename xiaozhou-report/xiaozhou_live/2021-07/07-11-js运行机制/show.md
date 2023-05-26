# JavaScript运行机制

javascript

1. 运行在浏览器中
2. node运行js





### 一、什么是同步与异步

异步：

1. 计时器（setTimeout,setInterval）
2. ajax
3. 读取文件

同步程序执行完成后，执行异步程序。

### 二、单线程

js是单线程的，一个任务完成之后才能执行另一个任务

### 三、process.nexTick与setImmediate方法

### 四、事件循环

### 五、宏任务与微任务

宏任务：计时器、ajax、读取文件

微任务：promise.then

执行顺序

1. 同步程序
2. process.nextTick
3. 微任务
4. 宏任务
5. setImmediate



### 六 、async函数

1. async函数的返回值是promise对象

### 六、测试题