# JavaScript运行机制

### 一、复习：什么是同步与异步

1. 同步程序按顺序执行

``` js
console.log(1);
console.log(2);
console.log(3);
```

1. 异步程序先执行一部分，得到结果（或到时间）再执行另一部分

   1. 计时器
   2. ajax
   3. 读取文件

``` js
setTimeout(() => {console.log(1)},0);
setTimeout(() => {console.log(2)},0);
setTimeout(() => {console.log(3)},0);
```

 

### 二、单线程（两个任务不会同时执行）

``` js
console.log(1);
setTimeout(() => {console.log(2)},0);
setTimeout(() => {console.log(3)},0);
setTimeout(() => {console.log(4)},0);
console.log(5);
```

1. 先执行同步，再执行异步。
2. 同步程序执行完成后才能执行异步程序。
3. 异步程序在任务队列中按顺序执行。
4. 同步如果时间过长，仍会等待，执行完成之后才能执行异步程序，因此计时器时间并不准确。

``` js
//计时器会不准确
for(let i = 0;i<2000;i++){
    console.log(1);
}
setTimeout(() => {console.log(2)},0);
setTimeout(() => {console.log(3)},0);
setTimeout(() => {console.log(4)},0);
console.log(5);
```

### 三、process.next与setImmediate方法

process.nextTick方法在同步程序之后，异步程序之前执行

``` js
console.log(1);
setTimeout(() => {console.log(2)},0);
setTimeout(() => {console.log(3)},0);
setTimeout(() => {console.log(4)},0);
console.log(5);
process.nextTick(() => {
    console.log(6)
})
```

setImmediate方法在异步程序之后执行

``` js
console.log(1);
setTimeout(() => {console.log(2)},0);
setTimeout(() => {console.log(3)},0);
setTimeout(() => {console.log(4)},0);
console.log(5);
process.nextTick(() => {
    console.log(6)
})
setImmediate(() => {
    console.log(7)
})
```

执行顺序如下：

1. 同步程序
2. process.nextTick
3. 异步程序
4. setImmediate

### 四、事件循环
``` js
setImmediate(() => {
    console.log(7)
})
console.log(1);
setTimeout(() => {console.log(2)},0);
setTimeout(() => {console.log(3)},0);
setTimeout(() => {console.log(4)},0);
setTimeout(() => {console.log(8)},100);
setTimeout(() => {console.log(9)},100);
setTimeout(() => {console.log(10)},100);
console.log(5);
process.nextTick(() => {
    console.log(6)
})
```

异步程序得到结果或到时间的时候，会将任务放入任务队列；

每一次时间循环，都回去执行任务队列中的任务

process.nextTick方法可以在当前"运行栈"的尾部----下一次Event Loop（主线程读取"任务队列"）之前----触发回调函数

setImmediate方法则是在当前"任务队列"的尾部添加事件，也就是说，它指定的任务总是在下一次Event Loop时执行

### 五、宏任务与微任务

1. 宏任务：计时器，ajax，读取文件
2. 微任务：promise，process.nextTick

``` js
setImmediate(() => {
    console.log(1)
})
console.log(2);
setTimeout(() => {console.log(3)},0);
setTimeout(() => {console.log(4)},100);
console.log(5);
new Promise((resolve) => {
    console.log(6)
    resolve()
}).then(() => {
    console.log(7)
})
process.nextTick(() => {
    console.log(8)
})
```

代码执行顺序：

1. 同步程序：promise函数中的代码属于同步
2. process.nextTick
3. （微任务）promise.then
4. （宏任务）setTimeout
5. setImmediate

### 六 、async/await

``` js
// async执行顺序，可以转换成promise的思路
async function fun1(){  
    let data = await fun2();
    console.log(data);
}
async function fun2(){
    console.log(200);
    return 100
}

fun1();
// 代码逻辑同下列实例
function fun2(){
    return new Promise((resolve) => {
        console.log(200);
        resolve(100);
    })
}

fun2().then((data) => {
    console.log(data);
})
```

### 六、测试题

``` js
// 3,5,7,10,2,4,8,9,6,1
setImmediate(() => {
  console.log(1)
})
process.nextTick(() => {
  console.log(2)
})
console.log(3)
async function async1() {
  await async2()
  console.log(4)
}
async function async2() {
  console.log(5)
}
async1()

setTimeout(function() {
  console.log(6)
}, 0)

new Promise(resolve => {
  console.log(7)
  resolve()
})
  .then(function() {
    console.log(8)
  })
  .then(function() {
    console.log(9)
  })

console.log(10)
```



