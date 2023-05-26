'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
      let cookieCount = this.ctx.cookies.get("count");
      let sessionCount = this.ctx.session.count;
      await this.ctx.render("index.html", {
        cookieCount,
        sessionCount
      })
  }

  async setCookie() {
    let count = 1;
    if (this.ctx.cookies.get("count")) {
      count = this.ctx.cookies.get("count");
      count++;
      this.ctx.cookies.set("count", count);
    } else {
      this.ctx.cookies.set("count", count);
    }
    await this.ctx.render("cookiePage.html", { count })
  }

  async setSession() {
    let count = 1;
    if (this.ctx.session.count) {
      count = this.ctx.session.count;
      count++;
      this.ctx.session.count = count;
    } else {
      this.ctx.session.count = count;
    }
    await this.ctx.render("sessionPage.html", { count })
  }
}

module.exports = HomeController;
