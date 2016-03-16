var request = require('request')
var sentiment = require('./sentiment')

exports.toSlack = function (content) {
	var postData = {
		"text" : content,
		"icon_emoji": ':ghost:',
	}

	request.post({
		headers: {'content-type' : 'application/json'},
		url:'https://hooks.slack.com/services/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',
		body: postData,
		json: true
		}, 
		function(error, response, body){
	    	if(error) {
	        	console.log(error);
	    	} else {
	        	console.log(response.statusCode, body);
	    	}
		})
}