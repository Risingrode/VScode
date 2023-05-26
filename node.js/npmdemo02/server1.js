const Koa = require("koa");
const router = require("koa-router")();
const parser = require("koa-parser");
const app = new Koa();

app.use(parser());

//数据
let dataList = ["香蕉", "苹果", "鸭梨"];

//get查看
router.get("/", ctx => {
    ctx.body = dataList;
})


//post添加
// router.post("/fruits", ctx => {
//     let fruit = ctx.request.body.fruit;
//     dataList.push(fruit);
//     ctx.body = dataList;
// })

//put修改
// router.put("/fruits/:id", ctx => {
//         let id = ctx.params.id;
//         let fruit = ctx.request.body.fruit;
//         dataList.splice(id, 1, fruit);
//         ctx.body = dataList;
//     })
//     //delete删除
// router.delete("/fruits/:id", ctx => {
//     let id = ctx.params.id;
//     dataList.splice(id, 1);
//     ctx.body = dataList;
// })
app.listen("3000", () => {
    console.log("监听成功");
});