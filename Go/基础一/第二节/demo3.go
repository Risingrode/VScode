package main

import "fmt"

func add(a int,b int) int {
	return a+b
}

// 函数标识符 自定义函数名称  参数 返回值类型
func add2(a,b int)int {
	return a+b
}

func exists(m map[string]string,k string)(v string,ok bool){
	v,ok=m[k]
	return v,ok
}

func main(){
	res:=add(1,2)
	fmt.Println(res)

	//这里实际上就是导入两个参数
	v,ok:=exists(map[string]string{"a":"A"},"a")
	fmt.Println(v,ok)

}