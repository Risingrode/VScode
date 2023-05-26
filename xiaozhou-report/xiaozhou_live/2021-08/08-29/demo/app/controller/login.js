const Controller = require("egg").Controller;

class LoginController extends Controller {
    async index(){
        await this.ctx.render("login.html");
    }

    async doLogin(){
        let {username, password} = 
        this.ctx.request.body;
        if(username === "xiaoming"
        && password === "123456"){
            // 登录成功的逻辑
            this.ctx.session.testname = "xiaoming";
            this.ctx.redirect("/")
        }else{
            this.ctx.body = "登录失败"
        }
    }
}

module.exports = LoginController;