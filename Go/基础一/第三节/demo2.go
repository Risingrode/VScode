package main

import(
	"encoding/json"
	"fmt"
)
//结构体内部变量名需要大写，这样就可以进行json序列化
type userInfo struct{
	Name string
	//想要json话，必须要用大写，不想用大写的话需要重新改名字age(在后面加上)
	Age int `json:"age"`
	Hobby []string
}

func main(){
	a:=userInfo{Name:"wang",Age:18,Hobby:[]string{"Golang","TypeScript"}}
	buf,err:=json.Marshal(a)

	if err!=nil{
		panic(err)//错误需要使用panic函数输出
	}

	fmt.Println(buf)//16进制编码
	fmt.Println(string(buf))//需要字符串话，才能能看到真正的

	//把其改为json格式
	buf,err=json.MarshalIndent(a,"","\t")
	if err!=nil{
		panic(err)
	}
	fmt.Println(string (buf))

	var b userInfo
	err= json.Unmarshal(buf,&b)//反序列化
	if err !=nil{
		panic(err)
	}
	fmt.Printf("%#v\n",b)
}