//server.js
const Koa = require("koa");
const nunjucks = require("nunjucks");
const views = require("koa-views");
const router = require("koa-router")();
const session = require("koa-session");
const app = new Koa();

app.keys = ["123456"];

app.use(session({
    maxAge: 5000
}, app));

app.use(views(__dirname + "/views", {
    map: { html: "nunjucks" }
}))

router.get('/', async ctx => {
    //cookie是以明值对的方式记录在客户端（浏览器）的
    ctx.cookies.set("user", "admin"); //2个参数
    ctx.body = "cookie";
});

router.get("/test", async ctx => {
    let count = ctx.cookies.get("count"); //获取cookie
    if (count > 0) { //判断是否有cookie
        count++;
        ctx.cookies.set("count", count, {
            maxAge: 2000 //设置cookie过期时间为2秒
        }); //重新设置加1之后的值
    } else {
        count = 1;
        ctx.cookies.set("count", 1);
    }
    ctx.body = count;
})

//设置session
router.get("/session", async ctx => {
    ctx.session.user = "admin";
    ctx.body = "set session";
})

//获取session,并将内容显示在页面
router.get("/stest", async ctx => {
    let user = ctx.session.user;
    ctx.body = user;
})

app.use(router.routes());

app.listen("3000", () => {
    console.log("server2 已经启动");
})