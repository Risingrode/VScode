'use strict'

const Controller = require('egg').Controller;

class LoginController extends Controller {
    async index() {
        await this.ctx.render("index.html")
    }

}

module.exports = LoginController