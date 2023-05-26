package main

import "fmt"

func main(){
	//制作一个map容器，key值是string类型 value是int类型
	m:=make(map[string]int)
	m["one"]=1
	m["two"]=2
	fmt.Println(m)
	fmt.Println(len(m))
	fmt.Println(m["one"])
	fmt.Println(m["unknow"])
	//两个返回值，一个返回值是value,另一个是bool类型（是否存在）
	r,ok:=m["unknow"]
	fmt.Println(r,ok)

	delete(m,"one")
	//不加：前面就要加上var
	m2:=map[string]int{"one":1,"two":2}
	var m3=map[string]int{"one":1,"two":2}
	fmt.Println(m2,m3)
}