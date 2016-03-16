var http = require('http');
var url = require("url");
var util = require("util");

console.log("start ....");
function onRequest(req, res) {
        res.writeHead(200);
        res.end(util.inspect(url.parse(req.url, true)));
        console.log(util.inspect(url.parse(req.url, true)));
}


http.createServer(onRequest).listen(8181);
