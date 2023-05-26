const http = require('http');
const koa = require('koa');
const router = require('koa-router')();
const app = new koa();

const server = http.createServer((req, res) => {


    res.end("该服务结束");
})

server.listen(3000, () => {
    console.log("监听窗口设置成功！");
})