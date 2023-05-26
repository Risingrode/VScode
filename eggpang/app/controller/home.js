'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

    async index() {
        const { ctx } = this;
        console.log(ctx.session.counter)
        let fruits = ctx.service.fruits.getFruits;
        await ctx.render("index", fruits)
    }

    async pang() {
        const { ctx } = this;
        ctx.body = 'hi,egg';
    }

    async testGetGirl() {
        const { ctx } = this;
        const id = ctx.query.id;
        const res = await ctx.service.jspang.getGirl(id);
        ctx.body = res;
    }

    async nunView() {
        const { ctx } = this;
        await ctx.render('index', { fruits: ['苹果', '香蕉', '鸭梨'] });
    }
}

module.exports = HomeController;