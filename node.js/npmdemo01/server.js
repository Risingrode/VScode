//server.js
const Koa = require("koa");
const router = require("koa-router")();
const nunjucks = require("nunjucks");
const views = require("koa-views");
const app = new Koa();

app.use(views(__dirname + '/views', {
    //将使用nunjucks模板引擎渲染以html为后缀的文件。
    map: { html: 'nunjucks' }
}));

router.get("/", async ctx => {
    let studentList = ["小明", "小花", "小红", "销量"]
    await ctx.render("index", {
        title: "后台数据",
        studentList,
        isLogin: false,
        username: "admin"
    });
})
router.get("/images", async ctx => {
    await ctx.render("images");
})

app.use(router.routes());

app.listen(3000, () => {
    console.log("最终测试 is running");
})