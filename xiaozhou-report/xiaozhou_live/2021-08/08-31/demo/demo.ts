// enum Gender {
//     female = "女",
//     male = "男"
// }

// let gen:Gender = Gender.female;
// console.log(gen);

// let num:any = 100;
// let str:any = "hello";
// console.log(num + str);

// 刚学ts，把所有变量都设置成any。
// 把tyhescript 写成了 anyscript

// ts

// function add(num1:number,num2:number):number{
//     return num1 + num2;
// }

// console.log(add(10,20));

// function sayHi():void{
//     console.log("你好")
// }

// sayHi();

// let num:number = 100;
// num = null;
// console.log(num);

// 类
// class Student {
//     name:string;
//     age:number;
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }

// let stu1:Student = new Student("小明",2);
// let stu2:Student = new Student("小红",3);

// let list:Student[] = [];
// list.push(stu1);
// list.push(stu2);
// console.log(list);


// 接口
// interface Student {
//     name:string,
//     age:number
// }

// function sayName(stu:Student):void{
//     console.log(stu.name)
// }

// sayName({
//     name:"小明",
//     age:2,
// })

// 接口
// interface Fly {
//     flying():void;
// }

// class Bird implements Fly{
//     name:string = "鸽子";
//     flying():void{
//         console.log("小鸟飞翔")
//     }
// }

// class Plane implements Fly{
//     name:string = "纸飞机";
//     flying():void{
//         console.log("飞机飞翔")
//     }
// }

// let bird:Bird = new Bird();
// let plane:Plane = new Plane();

// function f(obj:Fly){
//     obj.flying();
// }

// f(bird);
// f(plane);

// 泛型：可以使用任意类型

function getSelf<T>(arg:T):T{
    return arg;
}

console.log(getSelf(123));