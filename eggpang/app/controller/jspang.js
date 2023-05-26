'use strict';

const Controller = require('egg').Controller;
class jspangController extends Controller {
    async index() {
        const { ctx, app } = this;
        const username = ctx.session.username;
        await ctx.render(
            'jspang.html', { //这是一个Promise对象
                titlt: username,
                //方法拓展
                //nowTime: app.currentTime()
                //属性拓展
                nowTime: app.timeProp
            }
        )
    }

    async getGirls() {
        const { ctx } = this;
        await new Promise(resolve => {
            setTimeout(() => {
                resolve(ctx.body = '<h1>我,正在向你走来</h1>');
            }, 2000);
        });
    }

    async getGirl() {
        // 自由传参模式
        const ctx = this.ctx; // 与上面等价
        const res = await ctx.service.jspang.getGirl('123');
        ctx.body = res;
    }

    async getGirl2() {
        // 严格传参模式
        const ctx = this.ctx; // 与上面等价
        ctx.body = 'getGirl2:' + ctx.params.names;
    }

    // POST请求

    async add() {
        const ctx = this.ctx
        console.log(ctx.session.counter)
        ctx.session.username = 'jspang'
            // ctx.cookies.set("user", "jspang.com", {
            //     maxAge: 20 * 1000, //时间2秒
            //     httpOnly: false,
            //     encrypt: true //加密
            // })
        ctx.body = {
            status: 200,
            data: 'Cookie添加成功'
        }
    }

    async del() {
        const ctx = this.ctx
        ctx.cookies.set("user", null)
        ctx.body = {
            status: 200,
            data: 'Cookie删除成功'
        }
    }

    async editor() {
        const ctx = this.ctx
        ctx.cookies.set("user", 'bilibili')
        ctx.body = {
            status: 200,
            data: 'Cookie修改成功'
        }
    }

    async show() {
        const ctx = this.ctx
        const user = ctx.cookies.get("user")
        console.log(user)
        ctx.body = {
            status: 200,
            data: 'Cookie显示成功'
        }
    }

    async newContext() {
        const { ctx } = this;
        const params = ctx.params();
        console.log(params);
        ctx.body = 'newContext';
    }

    async newRequest() {
        const { ctx } = this;
        const token = ctx.request.token;
        ctx.body = {
            status: 200,
            body: token

        }
    }

    async newResponse() {
        const { ctx } = this;
        ctx.response.token = 'jspang.ccom'
        const testBase64 = ctx.helper.base64Encode('jspang.ccom')
        ctx.body = testBase64
    }


}

module.exports = jspangController;