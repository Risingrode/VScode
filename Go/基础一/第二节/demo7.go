package main

import(
	"errors"
	"fmt"
)

type user struct {
	name string 
	password string
}
//传入一个user数组和名字，返回值是一个结构体对象和一个错误
func findUser (users []user ,name string)(v *user,err error){
	for _,u:=range users{//进行查找
		if u.name==name{
			return &u,nil//找到，返回该对象
		}
	}
	return nil,errors.New("NOt, fount")
}

func main(){
	//注意，这是出纳入一个user数组，传入要查找的名字
	u,err:=findUser([] user{{"wang","1024"}},"wang")
	if err!=nil{
		fmt.Println(err)
		return
	}
	fmt.Println(u.name)

	if u,err:=findUser([]user{{"wang","1024"}},"li");err!=nil{
		fmt.Println(err)
		return 
	}else{
		fmt.Println(u.name)
	}
}