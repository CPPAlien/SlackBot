var request = require('request')
var sentiment = require('./sentiment')

exports.toSlack = function (content, name) {

	sentiment.generateEmo(content, function(emoji) {

		var dataBody = {
			"text": "@"+name+" "+emoji,
			"icon_emoji": ":qbi:"
		};

		var data = {
			headers: {'content-type' : 'application/json'},
			url:'https://hooks.slack.com/services/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',
			body: dataBody,
			json: true
		};

		request.post(data, function(error, response, body){
	    	if(error) {
	        	console.log(error);
	    	} else {
	        	console.log(response.statusCode, body);
	    	}
		});

	});

}