// 多个use方法
const Koa = require("koa");
const app = new Koa();

app.use(async(ctx, next) => {
        ctx.body = `hello world 付昌威
    我爱你  摸摸哒
    `
        await next();
    })
    //只要调用next函数，就可以把执行权转交给下一个中间件。
app.use(async(ctx, next) => {
    console.log("我是一个中间件")
})

app.listen(3000, () => {
    console.log("demo01 is running")
});