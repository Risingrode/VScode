// 今天讲cookie与session在egg中的应用

'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
      await this.ctx.render("index.html")
  }

  async setCookie(){
    let number = 1;
    if(this.ctx.cookies.get("number")){
      // 如果有cookie
      number = this.ctx.cookies.get("number");
      number++;
      this.ctx.cookies.set("number",number);
    }else{
      // 如果没有cookie
      this.ctx.cookies.set("number",number);
    }
    await this.ctx.render("cookiePage.html",{
      number
    })
  }

  async setSession(){
    let number = 1;
    if(this.ctx.session.number){
      number = this.ctx.session.number;
      number++;
      this.ctx.session.number = number;
    }else{
      this.ctx.session.number = number;
    }
    await this.ctx.render("sessionPage.html",{
      number
    })
  }
}

module.exports = HomeController;
