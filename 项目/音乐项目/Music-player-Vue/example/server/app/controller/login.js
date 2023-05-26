'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
    async login() {
        try {
            //拿到前端用户名 发给前端token
            let username = this.ctx.request.body.username;
            let token = this.ctx.app.jwt.sign({
                username
            }, this.ctx.app.config.jwt.secret);
            this.ctx.body = {
                code: 20000,
                token
            }
        } catch (error) {
            this.ctx.body = {
                code: 40000,
                msg: "登录失败"
            }
        }

    }
}

module.exports = LoginController;