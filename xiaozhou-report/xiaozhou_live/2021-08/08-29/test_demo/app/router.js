'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/',app.middleware.checktoken(), controller.home.index);
  router.get("/cookie",app.middleware.checktoken(),controller.home.setCookie)
  router.get("/session",app.middleware.checktoken(),controller.home.setSession)
  router.get("/login",controller.login.index);
  router.post("/login",controller.login.doLogin)
};
