'use strict';
const Service = require('egg').Service;

class JspangService extends Service {
  async getGirl(id) {
    return {
      id,
      name: '小花',
      age: 13,
    };
  }
}

module.exports = JspangService;
