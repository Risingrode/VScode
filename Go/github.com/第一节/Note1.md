# 性能优化建议

## benchmark(性能测试)

> go test -bench=. -benchmem

```txt
这是测试结果
    goos: windows
    goarch: amd64
    cpu: AMD Ryzen 5 5500U with Radeon Graphics         
    BenchmarkFib10-12      4559619        260.1 ns/op        0 B/op        0 allocs/op
    //            12核        执行多少次   每次执行花费多少时间    每次执行花费多少空间    每次执行申请多少空间
    PASS
    ok   _/d_/VS_code代码/Go/基础二/课程代码/go-practice-main/start 4.586s

```

## 切片操作(性能优化建议)

`slice`

 > 提前分配内存

`另一个陷阱:大内存未释放`

- 在已有切片基础上创建切片，不会创建新的底层数组
- 场景：
    1.原切片较大，代码在原切片基础上新建小切片
    2.原底层数组在内存中有引用，得不到释放
- 可以使用`copy`代替`re-slice`

`Map`

> 与上面一样

提前分配好内存可以提高运行速度

`字符串处理`

 > 使用strings.Builder

- 使用+效果最差,strings.Builder,bytes.Buffer相近，strings.Buffer更快
- 字符串在Go中是不可变类型，占用内存大小固定
- 使用+会重新分配内存
- 他们底层都是[]byte数组
- 内存扩容策略

## 优化内存

`空结构体`
其可以作为占位符，不占内存

## 多线程优化

`atomic`

- 通过硬件实现，效率比锁高
- 对于非数值操作，可以使用atomic.Value，能承载一个 interface{}

`加锁`

- 锁的实现是通过操作系统来实现，属于系统调用
- sync.Mutex 应该用来保护一段逻辑，不仅仅用于保护一个变量

## 性能调优

- 依靠数据，不是猜测
- 要定位最大瓶颈而不是细枝末节
- 不要过早优化
- 不要过度优化

## 性能分析工具pprof

[看这篇文章](https://blog.wolfogre.com/posts/go-ppof-practice/)
