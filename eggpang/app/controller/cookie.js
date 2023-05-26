'use strict';

const Controller = require('egg').Controller;

class CookieController extends Controller {

    async coview() {
        const { ctx } = this;
        await ctx.render('cookies', { title: "我是登录页" });
    }

    async add() {
        const ctx = this.ctx
        ctx.cookies.set("user", "jspang.com", {
            maxAge: 20 * 1000, //时间2秒
            httpOnly: false,
            encrypt: true //加密 可以设置中文cookie
        })
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


}
module.exports = CookieController;