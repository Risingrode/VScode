'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    const counter = app.middleware.counter();
    router.get('/test', controller.home.testGetGirl);
    router.get('/jspang', controller.jspang.index);
    router.get('/getGirls', controller.jspang.getGirls);
    router.get('/getGirl', controller.jspang.getGirl);
    router.get('/getGirl2/:names', controller.jspang.getGirl2);
    // router.post('/add', controller.jspang.add);
    router.get('/index', counter, controller.home.index);
    router.get('/nunView', controller.home.nunView);
    router.post('/add', controller.jspang.add);
    router.post('/del', controller.jspang.del);
    router.post('/editor', controller.jspang.editor);
    router.post('/show', controller.jspang.show);

    router.post('/newContext', controller.jspang.newContext)
    router.post('/newRequest', controller.jspang.newRequest)
    router.get('/newResponse', controller.jspang.newResponse)

    router.get("/addGirl", controller.girlsManage.addGirl);
    router.get("/delGirl", controller.girlsManage.delGirl);
    router.get("/updateGirl", controller.girlsManage.updateGirl);
    router.get("/getGirl", controller.girlsManage.getGirls);

    // cookie测试路由
    router.get('/coview', controller.cookie.coview);
    router.post('/addj', controller.cookie.add);
    router.post('/delj', controller.cookie.del);
    router.post('/editorj', controller.cookie.editor);
    router.post('/showj', controller.cookie.show);

    router.get('/login', controller.login.login)
};