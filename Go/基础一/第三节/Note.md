# 第三节

## 输出形式

```go
    package main

    import "fmt"

    type point struct{
        x,y int
    }

    func main(){
        s:="hello"
        n:=123
        p:=point{1,2}
        fmt.Println(s,n)
        fmt.Println(p)

        fmt.Printf("s=%v\n",s)
        fmt.Printf("s=%v\n",n)
        fmt.Printf("p=%v\n",p)

        fmt.Printf("p=%+v\n",p)//输出详细信息
        fmt.Printf("p=%#v\n",p)//输出函数+结构体+具体数值

        f:=3.1415926
        fmt.Println(f)
        //.2表示保留2位,f表示以小数形式输出
        fmt.Printf("%.2f\n",f)
    }
```

## json序列化

```go
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
```

## 时间操作

```go
    package main

    import(
        "fmt"
        "time"
    )

    func main(){
        now :=time.Now()
        fmt.Println(now)
        t:=time.Date(2022,3,27,1,25,36,0,time.UTC)
        t2:=time.Date(2022,3,27,2,25,36,0,time.UTC)
        fmt.Println(t)
        fmt.Println(t.Year(),t.Month(),t.Day(),t.Hour(),t.Minute())
        fmt.Println(t.Format("2006-01-02 15:04:05"))

        //对2个时间做一个减法，得到一个时间段
        diff:=t2.Sub(t)

        fmt.Println(diff)
        fmt.Println(diff.Minutes(),diff.Seconds())
        t3,err:=time.Parse("2006-01-02 15:04:05", "2022-03-27 01:25:36")
        if err!=nil{
            panic(err)
        }
        fmt.Println(t3==t)
        fmt.Println(now.Unix())//转化成时间戳
    }
```

## 进制转化

```go
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
```

## 线程

```go
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
```
