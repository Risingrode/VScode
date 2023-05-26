package main
import "fmt"

func main(){
	if 7%2==0{
		fmt.Println("你好，小可爱")
	}else{
		//加上ln是换行的意思
		fmt.Print("你好，大可爱")
	}

	if 8%4==0{
		fmt.Println("8 是 偶数")
	}

	if num :=9;num<0{
		fmt.Println(num,"is negative")
	}else if num<10{
		fmt.Println(num,"has 1 digit")
	}else{
		fmt.Println(num,"has multiple digits")
	}
}