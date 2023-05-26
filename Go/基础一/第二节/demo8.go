package main

import(
	"fmt"
	"strings"
)

func main(){
	a:="hello"
	//检查是否有ll这个子串
	fmt.Println(strings.Contains(a,"ll"))
	fmt.Println(strings.Count(a,"l"))
	//检查前缀
	fmt.Println(strings.HasPrefix(a,"he"))
	//检查后缀
	fmt.Println(strings.HasSuffix(a,"llo"))
	//看ll的下标是多少
	fmt.Println(strings.Index(a,"ll"))
	//在字符串之间添加一个东西
	fmt.Println(strings.Join([] string{"he","llo"},"-"))
	//把a这个字符串拼接2次
	fmt.Println(strings.Repeat(a,2))
	//e用E代替
	//返回将s中前n个不重叠old子串都替换为new的新字符串，如果n<0会替换所有old子串。
	fmt.Println(strings.Replace(a,"e","E",-1))
	//按照-分隔开，变成字符串数组
	fmt.Println(strings.Split("a-b-c","-"))
	//全部转化为小写
	fmt.Println(strings.ToLower(a))
	fmt.Println(strings.ToUpper(a))
	fmt.Println(len(a))

	b:="你好"
	//一个汉字2字节，并且后面还带些东西+2
	fmt.Println(len(b))
}