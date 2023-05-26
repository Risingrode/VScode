//server.js
const Koa = require("koa");
const nunjucks = require("nunjucks");
const views = require("koa-views");
const router = require("koa-router")();
const session = require("koa-session");
const parser = require("koa-parser");
const app = new Koa();

app.use(parser());

app.use(session({
    maxAge: 1000 * 30
}, app));

app.keys = ['secret'];

app.use(views(__dirname + "/views", {
    map: { html: "nunjucks" }
}))

//首页 用户都可以访问
router.get('/', async ctx => {
    await ctx.render("home.html");
});

//登录页
router.get("/login", async ctx => {
    await ctx.render("login.html");
})

//内容页
router.get("/list", async ctx => {
    //利用判断语句将其隐藏
    if (ctx.session.user == "admin") {
        await ctx.render("list.html");
    } else {
        ctx.redirect("/");
    }
})

//注销功能
router.get("/logout", async ctx => {
    ctx.session.user = "";
    ctx.redirect("/");
})

//处理请求的路由
router.post("/login", async ctx => {
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    if (username === "admin" && password === "123456") {
        //重定向
        ctx.session.user = "admin";
        ctx.redirect("/list");
    } else {
        ctx.redirect("/");
    }
})

app.use(router.routes());

app.listen("3000", () => {
    console.log("server2 已经启动");
})