var http = require('http');
console.log("start ....");
function onRequest(req, res) {
        res.writeHead(200);
        res.end('hello world test test test');
        console.log('received request');
}


http.createServer(onRequest).listen(8181);
