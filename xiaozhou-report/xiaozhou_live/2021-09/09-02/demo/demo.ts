// 今天讲面向对象的程序设计
// 1. 什么是面向对象
// 2. 面向对象的三大特性：封装、继承、多态
// 语言使用：TypeScript

// 编程思想，编程范式，写代码的思路

// 面向过程的程序设计

// 动物叫声比赛游戏

// function catShout(){
//     console.log("猫叫")
// }

// function dogShout(){
//     console.log("狗叫")
// }

// function birdShout(){
//     console.log("鸟叫")
// }

// catShout();
// dogShout();
// birdShout();

class Cat {
    shout(){
        console.log("猫叫")
    }
}

class Dog {
    shout(){
        console.log("狗叫")
    }
}

class Bird {
    shout(){
        console.log("鸟叫")
    }
}

let cat:Cat = new Cat();
let dog:Dog = new Dog();
let bird:Bird = new Bird();

cat.shout();
dog.shout();
bird.shout();

/* 
    1. 代码的健壮性
    2. 代码的可维护性
    3. 代码的可扩展性
    4. 代码的可读性

    高内聚，低耦合的代码

    如果是两个大神写代码，都可以实现以上功能；
    但是如果两个菜鸟，使用面向对象会更容易达到上面的效果
*/