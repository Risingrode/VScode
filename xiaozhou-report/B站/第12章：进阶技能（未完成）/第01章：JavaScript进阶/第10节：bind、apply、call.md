### 10. 说说call、apply、bind的区别，在开发中如何应用？

call、apply、bind都可以重新指定函数的对象上下文，区别如下所示：

1. 如果函数有多个参数，需要放在apply方法的第二个参数中，第二个参数为数组，使用apply方法，函数直接被调用。
2. 如果函数有多个参数，需要放在call方法的的二个参数及其以后的参数中，并且依次排列，使用call方法，函数直接被调用。
3. bind与call的使用方法类似，给函数传递参数也是从bind的第二个参数开始，依次排列，区别是bind不会直接调用函数，而是将一个改变对象上下文的新函数作为返回值。需要调用的时候再调用。

实际应用：在封装的防抖方法中，使用call将input作为回调函数的上下文对象，当事件触发时，this可以指向input（不适用call，因为是闭包函数，所以this会指向window对象）。

``` js
let input = document.querySelector("input");
function throttle(fn,delay){
    let mark = true;
    return function(){
        if(mark){
            setTimeout(() => {
                fn.call(this);
                mark = true;
            },delay)
        }
        mark = false;
    }
}
input.oninput = throttle(function(){
    console.log(this.value)
},2000)
```

