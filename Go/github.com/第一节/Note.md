# 高质量编程

## 代码格式

使用gofmt自动格式化代码

`简单性`

`可读性`

`生产力`

## 注释

- 解释代码作用
- 解释代码如何做
- 解释代码实现原因
- 解释代码什么情况会出错

> 注释应该体现代码未表现的上下文信息

## 命名规范

- 缩略词全部大写 比如:HTTP
- 尽量简洁
/*24分钟*/

## 编码规范

- package 只由小写字母组成
- 简短一点，包括上下文信息
- 不要与标准库同名。

使用单数不适用复数

 > 降低理解阅读代码的成本
 > 考虑上下文信息，设计简洁的名称

## 控制流程

 > 避免嵌套

```go
    if foo{
        return x
    }else{
        return nil
    }
    //可以转化成
    if foo{
        return x
    }
    return nil
```

- 线性原理,处理逻辑尽量走直线，避免复杂的嵌套分支
- 正常流程代码沿着屏幕向下移动
- 提升代码可维护性和可读性
- 故障问题大多出现在复杂的条件语句和循环语句中

## 错误和异常处理

`简单错误`

优先使用errors.New来匿名创建变量直接表达,
如果有格式化要求，使用fmt.Errorf

`错误的Wrap和Unwrap(错误的包装与解包)`

- 错误的Wrap实际上是提供一个error嵌套另外一个error的能力,从而生成一个error的跟踪链
- 在fmt.Errorf 中使用:%w 关键字来将一个错误关联到错误链中

`panic`

- 用于真正异常情况
- 不建议在业务中使用panic
- 如果问题可以被解决，可以使用panic

`recover`
生效范围:在当前goroutine的被defer 函数中生效

1. recover只能在被defer的函数中使用

如果需要更多的上下文信息，可以recover后在log中记录当前的调用栈

`defer`

```go
func main(){
    if true {
        defer fmt.Printf("1")
    }else {
        defer fmt.Printf("2")
    }
    defer fmt.Printf("3")
}

//运行结果是：3 1
```

- defer 语句会在函数返回前调用
- 多个defer语句使后进先出
