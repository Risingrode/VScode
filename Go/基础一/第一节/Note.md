# 基础语法

## 导包

 > 导入单个包使用（）,第一行暴露一个函数名。

```go
    package main

    import (
        "fmt"
    )

    func main() {
        fmt.Println("hello world")
    }
```

## 变量

```go
    package main

    import (
        "fmt"//输入库
        "math"//数学库
    )

    func main(){
        var a="initial"
        //定义一个int类型，需要在变量后面进行定义
        var b,c int=1,2

        var d=true//默认Bool型

        var e float64
        f:=float32(e)

        g:=a+"foo"//字符串拼接
        fmt.Println(a,b,c,d,e,f)
        fmt.Println(g)

        const s string="consist"
        const h=5000000000
        const i=3e20/h
        //转化为sin值
        fmt.Println(s,h,i,math.Sin(h),math.Sin(i))
    }
```

## for循环

```go

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
            if n%2==0 {
                //注意这里必须要加大括号
                continue   
            }

            fmt.Println(n)
        }
        for i<=3{
            fmt.Println(i)
            i++
        }
    }
```

## if语句

```go
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

```

## switch语句

```go
    package main

    import (
        "fmt"
        "time"
    )

    func main(){

        a:=2
        //其switch语句默认是带break语句的
        switch a{
        case 1:
            fmt.Println("我是小可爱")
        case 2:
            fmt.Println("你好呀")
        case 4,5:
            fmt.Println("大家好！")
        default:
            fmt.Println("other")
        }

        t:=time.Now()
        switch{
        case t.Hour()<12:
            fmt.Println("今天是上午")
        default:
            fmt.Println("今天是下午")
        }
    }
```

## 数组

```go
    package main

    import "fmt"

    func main(){

        var a[5]int
        a[4]=100
        fmt.Println("get:",a[2])
        fmt.Println("len:",len(a))

        b:=[5]int{1,2,3,4,5}
        fmt.Println(b)

        var twoD [2][3]int
        for i:=0;i<2;i++{
            for j:=0;j<3;j++{
                twoD[i][j]=i+j
            }
        }
        fmt.Println("2d:",twoD)
    }
```

## 字符数组

```go
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
```
