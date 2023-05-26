package main

import "fmt"

//定义一个user结构体
type user struct{
	name string
	password string
}

func main(){
	//初始化方式
	a:=user{name:"wnag",password:"1024"}
	b:=user{"li","1288"}
	c:=user{name:"xiao"}
	c.password="1024"
	//定义一个user变量
	var d user
	d.name="wang"
	d.password="1024"

	fmt.Println(a,b,c,d)
	fmt.Println(checkPassword(a,"haha"))//值传递
	fmt.Println(checkPassword2(&a,"haha"))//地址传递

}

func checkPassword(u user,password string) bool{
	return u.password==password
}

func checkPassword2(u *user,password string)bool{
	return u.password==password
}
