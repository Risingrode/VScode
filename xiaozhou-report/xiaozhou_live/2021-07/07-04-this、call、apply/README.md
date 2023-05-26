# 前端面试题：今日内容

### 一、this关键字的使用方法

### 二、call、apply、bind的用法

### 三、对象克隆clone（拷贝copy）（如果有时间）

深度拷贝，浅拷贝











### 一、this关键字的使用方法

1. 方法中的this，指向调用方法的对象
2. 全局环境下指向全局对象
3. 全局函数中的this，指向全局对象
4. 内部函数中的this，指向全局对象
5. 事件中的this，指向触发事件的DOM对象
6. 构造函数中的this，指向new创建的对象【面试题new的作用】
7. 箭头函数中的this，指向定义函数上下文的this。
8. 使用闭包，var获取dom的索引（娱乐）。

### 二、call、apply、bind的用法

1. 全局函数调用call
2. 对象方法调用call
3. 基于call的继承
4. 多重继承
5. call的应用，防抖

``` js
document.querySelector("input").oninput = debounce(function(){
    console.log(this.value)
},500)
function debounce(fn, delay) {
    let timer = null;
    return function () {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.call(this);
            timer = null;
        }, delay)
    }
}
```

### 三、对象克隆

``` js
function copyObject(obj){ //传进来一个对象，得到对象副本
    // let newObj = {};
    // //拷贝的算法
    // for(let i in obj){
    //     if(obj[i] instanceof Object){
    //         newObj[i] = copyObject(obj[i]);
    //     }else{
    //         newObj[i] = obj[i];
    //     }
    // }
    let newStr = JSON.stringify(obj);
    let newObj = JSON.parse(newStr);
    return newObj;
}
```

