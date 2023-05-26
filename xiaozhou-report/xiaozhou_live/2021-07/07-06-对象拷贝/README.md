# 前端面试题：对象拷贝

### 一、JavaScript的内存结构

### 二、Vue.js的对象列表

### 三、浅拷贝

### 四、递归

### 五、深度拷贝

### 周四晚八点讲Git











cdn:`<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>`

``` js
function copy(obj){
    let newObj = obj instanceof Array ? [] : {};
    for(let i in obj){
        if(obj[i] instanceof Object){
            newObj[i] = copy(obj[i])
        }else{
            newObj[i] = obj[i]
        }

    }
    return newObj;
}
```





