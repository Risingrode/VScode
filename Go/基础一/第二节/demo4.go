package main

import "fmt"

func add2(n int){
	n+=2
}
//传进来一个地址
func add2ptr(n * int){
	*+=2
}

func main(){

	n:=5//还可以写成var n=5
	add2(n)//值传递
	fmt.Println(n)
	add2ptr(&n)//地址传递
	fmt.Println(n)
}