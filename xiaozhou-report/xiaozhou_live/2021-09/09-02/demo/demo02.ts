// 面向对象的三大特性：封装、继承、多态

// 动物叫声比赛

class Animal {
    private age:number;
    // getter
    getAge(){
        return this.age;
    }
    // setter
    setAge(age:number){
        if(age >= 0 && age < 20){
            this.age = age;
        }else{
            console.log("设置年龄失败");
            this.age = 0;
        }
        
    }
    shout(){};
}

class Cat extends Animal {
    shout(){
        console.log("猫叫")
    }
}

class Dog extends Animal {
    shout(){
        console.log("狗叫")
    }
}

interface ToSky {
    fly():void;
}

class Bird extends Animal implements ToSky {
    shout(){
        console.log("鸟叫")
    }
    fly(){
        console.log("鸟儿飞翔")
    }
    
}

class Plane implements ToSky{
    fly(){
        console.log("飞机飞")
    }
}

let cat:Cat = new Cat();
cat.setAge(5)
console.log(cat.getAge());
let dog:Dog = new Dog();
dog.setAge(100)
console.log(dog.getAge());
let bird:Bird = new Bird();
bird.setAge(9)
console.log(bird.getAge());
// 叫声
// cat.shout();
// dog.shout();
// bird.shout();

class Game {
    playShout(player:Animal){
        player.shout();
    }

    playFly(player:ToSky){
        player.fly()
    }
}
// 多态的特性，向上转型
let game:Game = new Game();
game.playShout(cat); //Cat -> Animal
game.playShout(bird);
game.playShout(dog);

// 多态常用的用法：定义不同类型，实现接口
game.playFly(bird);
let plane:Plane = new Plane();
game.playFly(plane);

let player:Bird = new Bird();
// 可以使用player

