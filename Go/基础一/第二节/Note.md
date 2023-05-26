# 第二节

## map

```go
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
```

## range

```go
    package main

    import "fmt"

    func main(){
        nums:=[]int{2,3,4}
        sum:=0

        //i表示下标 num表示具体数值
        //当需要遍历一个map时，使用range
        for i,num:=range nums{
            sum+=num
            if num==2{
                fmt.Println("index",i,"num",num)
            }
        }
        fmt.Println(sum)

        m:=map[string]string{"a":"A","b":"B"}
        for k,v:=range m{
            fmt.Println(k,v)
        }
        for k:=range m{
            fmt.Println("key",k)
        }
    }
```

## 函数

```go
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
```

## 指针

```go
    package main

    import "fmt"

    func add2(n int){
        n+=2
    }
    //传进来一个地址
    func add2ptr(n * int){
        *+=2
    }

    func main(){

        n:=5//还可以写成var n=5
        add2(n)//值传递
        fmt.Println(n)
        add2ptr(&n)//地址传递
        fmt.Println(n)
    }
```

## 结构体

```go
    package main

    import "fmt"

    //定义一个user结构体
    type user struct{
        name string
        password string
    }

    func main(){
        //初始化方式
        a:=user{name:"wnag",password:"1024"}
        b:=user{"li","1288"}
        c:=user{name:"xiao"}
        c.password="1024"
        //定义一个user变量
        var d user
        d.name="wang"
        d.password="1024"

        fmt.Println(a,b,c,d)
        fmt.Println(checkPassword(a,"haha"))//值传递
        fmt.Println(checkPassword2(&a,"haha"))//地址传递

    }

    func checkPassword(u user,password string) bool{
        return u.password==password
    }

    func checkPassword2(u *user,password string)bool{
        return u.password==password
    }
```

## 结构体修改

```go
    package main

    import "fmt"

    type user struct{
        name string
        password string
    }

    func (a user)check(password string)bool{
        return a.password==password
    }

    func (a* user)check1(password string){
        a.password = password
    }

    func main(){
        a:=user{name:"小王",password:"1024"}
        a.check1("2048")//对其密码进行修改
        fmt.Println(a.check("2048"))
    }
```

## 返回错误

```go
    package main

    import(
        "errors"
        "fmt"
    )

    type user struct {
        name string 
        password string
    }
    //传入一个user数组和名字，返回值是一个结构体对象和一个错误
    func findUser (users []user ,name string)(v *user,err error){
        for _,u:=range users{//进行查找
            if u.name==name{
                return &u,nil//找到，返回该对象
            }
        }
        return nil,errors.New("NOt, fount")
    }

    func main(){
        //注意，这是出纳入一个user数组，传入要查找的名字
        u,err:=findUser([] user{{"wang","1024"}},"wang")
        if err!=nil{
            fmt.Println(err)
            return
        }
        fmt.Println(u.name)

        if u,err:=findUser([]user{{"wang","1024"}},"li");err!=nil{
            fmt.Println(err)
            return 
        }else{
            fmt.Println(u.name)
        }
    }
```

## 字符串操作

```go
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
        //一个汉字2字节，并且后面还带些东西
        fmt.Println(len(b))
    }
```
