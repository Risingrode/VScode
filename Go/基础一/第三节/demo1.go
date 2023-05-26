package main

import "fmt"

type point struct{
	x,y int
}

func main(){
	s:="hello"
	n:=123
	p:=point{1,2}
	fmt.Println(s,n)
	fmt.Println(p)

	fmt.Printf("s=%v\n",s)
	fmt.Printf("s=%v\n",n)
	fmt.Printf("p=%v\n",p)

	fmt.Printf("p=%+v\n",p)//输出详细信息
	fmt.Printf("p=%#v\n",p)//输出函数+结构体+具体数值

	f:=3.1415926
	fmt.Println(f)
	//.2表示保留2位,f表示以小数形式输出
	fmt.Printf("%.2f\n",f)
}