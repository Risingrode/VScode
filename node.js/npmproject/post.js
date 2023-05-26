const url = require('url'); // node 内置模块
const http = require('http');


let str = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="POST">
        <div>
            用户名：<input type="text" name="username" id="username">
        </div>
        <div>
            密码：<input type="password" name="userpwd" id="userpwd">
        </div>
        <div>
            <input type="submit" name="password">
        </div>
    </form>
</body>
</html>
`;

// 当客户端与服务器建立好连接后，服务器可以通过http.IncomingMessage对象
//（createServer方法中回调函数的第一个参数）的一些属性和方法或事件
// 来获取客户端的请求信息或读取客户端请求的数据。
// method：客户端请求的方式，值为GET/POST/PUT/DELETE
// url：客户端请求时的URL参数字符串信息。
// headers：客户端发送的请求头信息。
// httpVersion：客户端发送的HTTP版本（1.0/1.1）
// trailers：客户端发送的trailers对象信息。
// 只有IncommingMessage对象的end事件触发后才能读取到该信息。
// socket：服务器端监听客户端请求的socket对象。
// data事件：当服务器接收到客户端发送的请求数据时触发data事件。
// end事件：当客户端发送给服务器数据执行完毕时触发end事件。

http.createServer((req, res) => {
    let body = ''; // 用于接收 post 请求传递过来的数据
    // data 事件会在客户端有数据传递过来的时候触发
    req.on('data', function(chunk) { //接收到客户端请求的连接后代码部分
        //用于接收响应的东西
        body += chunk;
    });
    // end 事件会在 post 请求的数据接收完毕之后触发
    req.on('end', function() {
        // console.log(body);
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        if (body) {
            res.end('服务器已经接收到客户端post请求内容:' + body);
        } else {
            res.end(str);
        }
    })
}).listen(3000, function() {
    console.log('服务器已经启动...');
});