package main

import "fmt"

func main(){
	//制作一个string数组，长度为3
	s:=make([]string,3)
	s[0]="a"
	s[1]="b"
	s[2]="c"
	//数组下边从0开始
	fmt.Println("get:",s[2])
	fmt.Println("len:",len(s))
	//把元素添加到该数组后面
	s=append(s,"d")
	s=append(s,"e","f")
	fmt.Println(s)

	c:=make([]string,len(s))
	copy(c,s)//数组拷贝
	fmt.Println(c)
	//输出从下标2输出到下标5
	fmt.Println(s[2:5])
	fmt.Println(s[:5])
	fmt.Println(s[0:2])

	good:=[]string{"g","o","o","d"}
	fmt.Println(good)

}