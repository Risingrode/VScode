// 今天讲后台（egg）
// 有一些前端基础，肯定能学会。
// 目标：独立完成一个内容管理系统
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    //this.ctx.body设置响应的内容
    this.ctx.body = `
      <h1>我是响应</h1>
    `;
    // await this.ctx.render("fruit.html")
  }
}

module.exports = HomeController;
