this 总是指向函数的直接调用者（而非间接调用者）
如果有 new 关键字， this 指向 new 出来的那个对象
在事件中， this 指向触发这个事件的对象，特殊的是， IE中的 attachEvent 中的
this 总是指向全局对象 Window