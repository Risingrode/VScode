'use strict'

const Controller = require('egg').Controller;
class loginController extends Controller {
    async login() {
        const { ctx } = this;
        await ctx.render('change');
    }
}
module.exports = loginController;