'use strict';
const Service = require('egg').Service;

class FruitsService extends Service {
  async getFruits() {
    return fruits = [
      '香蕉',
      '苹果',
      '鸭梨',
    ];
  }
}

module.exports = FruitsService;
