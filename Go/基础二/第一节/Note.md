# 语言进阶

## 协程与线程

 > 协程:比较轻便，kb级别
 > 线程：MB 级别

在函数前面加上go关键字,就可以变成协程

## csp通信共享连接

 1. 通过通信共享内存
 2. 通过共享内存实现通信

## Channel

    > make(chan 元素类型,[缓冲大小])

- 无缓冲通道 make(chan int)
- 有缓冲通道 make(chan int,2)

## GOPATH

    > bin 项目编译的二进制文件
    > pkg 项目编译的中间产物，加速编译
    > src 项目源码

`注意:不同版本的go依赖版本不同`

## GO VENDOR

    > 用于放置所有依赖副本

## Go Module

    > 通过go.mod文件管理依赖包版本
    > 通过go get/go mod 指令管理依赖包

## Proxy 缓存软件版本与内容

## go get

- @update 默认
- @none 删除依赖
- @v1.1.2 tag版本
- @23dfdd5 特定的commit
- @master 分支的最新commit

## go mod

- init          初始化，创建go.mod文件
- download      下载模块到本地缓存
- tidy          增加需要的依赖,删除不需要依赖

## 测试

### 单元测试

 > 面对开发模块

`规则`

- 所有测试文件以_test.go结尾
- TestXxx(* testing.T)
- 初始化逻辑放入TestMain中

`覆盖率`评估单元测试
一般50%~60%即可
测试分支相互独立、全面覆盖
测试单元粒度足够小，函数单一职责

### 单元测试-Mock

### 基准测试

 > 分析本地性能的时候，在本地运行，速度比较快
`优化`

## 分层结构

- 数据层（Respository）:数据Model,外部数据的增删改查
- 逻辑层(Service):业务Entity,处理核心业务逻辑输出
- 视图层(Controller):视图view,处理和外部的交互逻辑  --->    Client

## Gin 高性能go web框架
