var http = require('http');
var url = require("url");
var util = require("util");
var querystring = require('querystring');

function onRequest(req, res) {
        res.writeHead(200);

        var post = ''; 
    	req.on('data', function(chunk){
        	post += chunk;
    	});
    	req.on('end', function(){
        	post = querystring.parse(post);
        	res.end(util.inspect(post));
        	console.log(util.inspect(post));
    	});
}


http.createServer(onRequest).listen(8181);

console.log('server start success...');
