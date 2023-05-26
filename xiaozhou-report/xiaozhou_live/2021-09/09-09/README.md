# 换一个方式来学习数据结构与算法那

>数据结构：相互之间存在的一种或多种数据元素的集合。
>
>算法：对特定问题求解的步骤。

严谨与易懂如果冲突，教科书肯定会选择严谨。

咱们将的内容，以易懂为主。

目的：不是为考试，不是为了考研

>数据结构：数据的定义、存储方式
>
>算法：处理数据的方式

程序 = 数据结构 + 算法

``` js
let num1 = 10,
    num2 = 20;
let result = num1 + num2;
```

上学课堂上学的数据结构：线性表、栈、队列、树、图、串





### 语言：JavaScript

### 基础：具备一点点前端开发经验即可



### 时间复杂度

``` js
function f(n){ //n是正整数
    console.log(n);
}
```

随着n的变化，console.log()执行多少次 :表示方法O(1)

``` js
function f(n){
    for(let i = 0;i<n;i++){
        console.log(i);
    }
}
```

随着n的变化，console.log()执行多少次

我们称n为问题规模，问题规模和代码执行次数的关系O(n)

大O表示法来表示时间复杂度

``` js
function f(n){
    for(let i = 0;i<n;i++){
        for(let j= 0;j<n;j++){
            console.log(i + j)
        }
    }
}
```

2 => 4

3 => 9

4 => 16

时间复杂度是
$$
O(n^2)
$$

``` js
let arr = [9,5,3,7,9,2,4,1];

//排序算法
function f(arr){
    //进行排序
}
```

``` js
function f(n){
    let i = 1;
    while(i<=n){
        console.log(i);
        i = i*2;
    }
}
```

时间复杂度是什么？

假设程序执行t次 
$$
i = 2^t \leq{n}
$$
上面代码的时间复杂度是
$$
O(\log_2n)
$$

### 算法执行次数排序

$$
O(1)<o(\log_2n)<O(n)<O(nlog_2n)<O(n^2)<O(n^3)
$$

