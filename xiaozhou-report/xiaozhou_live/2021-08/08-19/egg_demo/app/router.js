'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 定义访问路径
  router.get('/', controller.home.index);
  // 查看水果列表
  router.get("/fruit",controller.fruit.getFruit)
  // 添加数据
  router.post("/fruit",controller.fruit.insertFruit)
  // 删除数据
  router.delete("/fruit/:id",controller.fruit.deleteFruit)
  // 修改数据
  router.put("/fruit/:id",controller.fruit.updateFruit)
};
