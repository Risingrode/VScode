package main

import(
	"fmt"
	"strconv"
)

func main(){
	//字符串转化成数字
	f,_:=strconv.ParseFloat("1.234",64)
	fmt.Println(f)
	//10代表进制  64代表精度
	n,_:=strconv.ParseInt("111",10,64)
	fmt.Println(n)

	n1,_ :=strconv.ParseInt("0x10000",0,64)
	fmt.Println(n1)
	//Atoi函数直接转换
	n2,_:=strconv.Atoi("123")
	fmt.Println(n2)

	n3,err :=strconv.Atoi("AAA")
	fmt.Println(n3,err)

}