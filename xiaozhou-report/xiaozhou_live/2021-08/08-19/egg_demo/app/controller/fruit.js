'use strict';

const Controller = require('egg').Controller;
const list = ["香蕉","苹果","鸭梨"]
class FruitController extends Controller {
  async getFruit() {
    this.ctx.body = list;
  }

  async insertFruit(){
    //   获取前端传递过来的参数
    let fruit = this.ctx.request.body.fruit;
    list.push(fruit)
    this.ctx.body = true;
  }

  async deleteFruit(){
      let i = this.ctx.params.id;
      list.splice(i,1);
      this.ctx.body = true;
  }

  async updateFruit(){
      let i = this.ctx.params.id;
      let fruit = this.ctx.request.body.fruit;
      list.splice(i,1,fruit)
      this.ctx.body = true;
  }
}

module.exports = FruitController;
