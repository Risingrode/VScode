// nunjucks模板引擎
/* 
  java thymeleaf
  php
  node -> koa -> egg => nunjucks
  python Django
*/

//  ajax在默认的情况下，不允许跨域
/* 
  解决方案：
  1. 后台设置成允许跨域 setHeader
  2. 使用代理，在vue的设置中有proxy选项
  3. jsonp(jsonp不是ajax) 
  4. Nginx反向代理
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = `
    //   <h1>hello world</h1>
    //   <script>
    //     alert("hello world")
    //   </script>
    // `;
    let str = "hello world"
    let list = ["香蕉","苹果","鸭梨"]
    let isLogin = true;
    await this.ctx.render("index.html",{
      str,
      list,
      isLogin
    })
  }
}

module.exports = HomeController;
