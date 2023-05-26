const http = require("http");

const server = http.createServer((req, res) => { //createServer  获取请求值
    // req 请求  res  响应
    res.end('Hellow World'); // 关闭这一次连接
});

server.listen(3000, () => {
    console.log(`Server is running!`);
});