module.exports = app => {
    //egg 的生命周期函数  启动应用时执行
    app.beforeStart(async() => {

        //使用箭头函数
        //创建数据表方法

        await app.model.sync({});

    })
}