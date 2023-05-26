package main

import "fmt"

type user struct{
	name string
	password string
}

func (a user)check(password string)bool{
	return a.password==password
}

func (a* user)check1(password string){
	a.password = password
}

func main(){
	a:=user{name:"小王",password:"1024"}
	a.check1("2048")//对其密码进行修改
	fmt.Println(a.check("2048"))
}