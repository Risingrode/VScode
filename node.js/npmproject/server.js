const Koa = require("koa"); //引入Koa构造函数
const router = require("koa-router")();
const app = new Koa(); //创建应用

//引入一个中间件，中间件是一个函数
// app.use(async(ctx) => {
//     ctx.body = "hellow koa!";
// })

router.get("/", async(ctx) => {
    ctx.body = "home page";
})

router.get("/video", async(ctx) => {
    ctx.body = "video page";
})

app.use(router.routes()); //在koa项目中引入router

app.listen(3000, () => {
    console.log("server is beautiful");
}); //设置监听窗口