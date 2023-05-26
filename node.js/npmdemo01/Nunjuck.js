//server.js
const Koa = require("koa");
const nunjucks = require("nunjucks");
const views = require("koa-views");
const app = new Koa();

app.use(views(__dirname + '/views', {
    //将使用nunjucks模板引擎渲染以html为后缀的文件。
    map: { html: 'nunjucks' }
}));

app.use(async ctx => {
    //render方法渲染模板，第二个参数可以给模板传递参数
    await ctx.render("index", { title: "我的第一个模板" })
})

app.listen(3000, () => {
    console.log("server is running");
})