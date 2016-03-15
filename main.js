var http = require('http');
console.log("start ....");
var ServerListener = function(req, res) {
        res.writeHead(200);
        res.end('hello world test test test');
}

var server = http.createServer(ServerListener);


server.listen(8181);
