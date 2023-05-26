"use strict";

const Controller = require("egg").Controller;

class GirlManage extends Controller {
    async addGirl() {
        const { ctx } = this;
        const params = {
            id: 5,
            name: '小白',
            age: 19,
            skill: '联系'
        };
        const res = await ctx.service.testdb.addGirl(params);
        ctx.body = res;
        ctx.body = '添加女孩';
    };

    async delGirl() {
        const { ctx } = this;
        const id = { "id": 1 };
        const res = await ctx.service.testdb.delGirl(id);
        console.log(res);
        if (res) {
            ctx.body = '删除女孩-成功';
        } else {
            ctx.body = '删除失败';
        }
    };

    async updateGirl() {
        const { ctx } = this;
        const params = {
            id: 3,
            name: '小白',
            age: 20,
            skill: '头疗'
        }
        const res = await ctx.service.testdb.updateGirl(params);
        if (res) {
            ctx.body = '修改女孩-成功';
        } else {
            ctx.body = '修改失败';
        }
    };

    async getGirls() {
        const { ctx } = this;
        const res = ctx.service.testdb.FindAll();
        //字符串化
        ctx.body = "查询女孩：" + JSON.stringify(res);
    };
}

module.exports = GirlManage;