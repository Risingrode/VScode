package main

import (
	"fmt"
	"time"
)

func main(){

	a:=2
	//其switch语句默认是带break语句的
	switch a{
	case 1:
		fmt.Println("我是小可爱")
	case 2:
		fmt.Println("你好呀")
	case 4,5:
		fmt.Println("大家好！")
	default:
		fmt.Println("other")
	}

	t:=time.Now()
	switch{
	case t.Hour()<12:
		fmt.Println("今天是上午")
	default:
		fmt.Println("今天是下午")
	}
}


