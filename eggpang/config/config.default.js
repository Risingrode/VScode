/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    config.security = {
        csrf: {
            enable: false,
        },
    };

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1650348688929_8270';

    // add your middleware config here

    //config.middleware = ['counter'];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            ".html": 'nunjucks'
        }
    };
    config.session = {
        key: "PANG_SESS", // 设置Key的默认值
        httpOnly: true, // 设置服务端操作
        maxAge: 1000 * 60, // 设置最大有效时间
        renew: true, // 页面有访问动作自动刷新session 
    };
    config.mysql = {
        app: true, //是否挂载到app下面
        agent: false, //是否挂载到代理下面
        client: {
            host: '127.0.0.1',
            port: '3306',
            user: 'root',
            password: '123456',
            database: 'testegg'
        }

    }

    return {
        ...config,
        ...userConfig,
    };
};