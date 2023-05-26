package main

import(
	"fmt"
	"os"
	"os/exec"
)

func main(){
	//输出当前执行线程
	fmt.Println(os.Args)
	//获取环境变量
	fmt.Println(os.Getenv("PATH"))
	//写入环境变量
	fmt.Println(os.Setenv("AA","BB"))
	//启动子进程，获取输入输出
	buf,err:=exec.Command("grep","127.0.0.1","/etc/hosts").CombinedOutput()

	if err!=nil{
		panic(err)
	}
	fmt.Println(string(buf))

}
