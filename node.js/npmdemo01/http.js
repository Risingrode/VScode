const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Hello World fu');
});
server.listen(3000, () => {
    console.log(`Server 开始跑了`);
});