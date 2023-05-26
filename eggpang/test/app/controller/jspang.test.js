'use strict';

const { app } = require('egg-mock/bootstrap');

// 第一个参数是测试名称
describe('jspang -index', () => {

  it('jspang index page ', () => {
    return app.httpRequest()
      .get('/jspang') // 要测试的路径
      .expect(200) // 希望的状态码
      .expect('<h1>I am  JSPang</h1>'); // 希望的结果
  });

  it('jspang getGirls', async () => {
    await app.httpRequest()
      .get('/getGirls')
      .expect(200)
      .expect('<h1>杨幂，正在向你走来</h1>');
  });

});
