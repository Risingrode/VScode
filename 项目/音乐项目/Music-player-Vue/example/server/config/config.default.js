/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require("path")
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1649897563213_9901';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    config.sequelize = {
        dialect: 'mysql',
        database: 'helloworld',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456',
        timezone: '+08:00',
    }

    config.jwt = {
        secret: 'xiaozhoubaogao',
    }

    config.cors = {
        origin: '*',
        credentials: true,
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    }

    config.security = {
        csrf: {
            enable: false,
        },
    };

    config.view = {
        defaultViewEngine: 'nunjucks'
    }

    //设置vue打包后的访问路径
    config.static = {
        prefix: '/', //访问路径
        //设置静态目录
        dir: path.join(appInfo.baseDir, 'app/public'),
    };

    return {
        ...config,
        ...userConfig,
    };
};