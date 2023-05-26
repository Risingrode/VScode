package main

import "fmt"

func main(){
	i:=1
	//这不加break，就是一个死循环
	for {
		fmt.Println("loop")
		break
	}

	for j:=7;j<9;j++{
		fmt.Println(j)
	}

	for n:=0;n<5;n++{
		if n%2==0{//注意这里必须要加大括号
			continue			
		}

		fmt.Println(n)
	}
	for i<=3{
		fmt.Println(i)
		i++
	}

}