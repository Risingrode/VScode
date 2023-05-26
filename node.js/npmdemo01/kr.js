const Koa = require("koa");
const router = require("koa-router")();
const app = new Koa();

//get是http协议请求的方法
//页面切换

router.get("/", async ctx => {
    ctx.body = "<h1>home page</h1>"
})

router.get("/video", async ctx => {
    let str = "666我的宝贝";
    ctx.body = `<h1>video page</h1>
    <h1>转换页面成功</h1>
    <p>${str}</p>
    `
})

app.use(router.routes())


app.listen(3000, () => {
    console.log("转换页面操作 is running")
});