'use strict';

const Controller = require('egg').Controller;

class adminController extends Controller {
    async index() {
        await this.ctx.render("admin/login.html");
    }

}

module.exports = adminController;