const Service = require('egg').Service;
//去数据库拿到数据返回给controller

class HelloService extends Service {

    async getMessage() {

        try {
            return await this.ctx.model.Hello.findAll();
        } catch (error) {
            return null;
        }
    }
}

module.exports = HelloService;