var express = require('express')
var bodyParser = require('body-parser')
var sender = require('./sender')

var app = express()
app.use(bodyParser.urlencoded({
	extended: true
}))

app.get('/', function(req, res){
	res.send('Hello World')
})

app.post('/receive', function(req, res){
	if (req.body.user_name != 'Qbi') {
		sender.toSlack(req.body.text)
	}
	res.send(req.body.user_name)
	console.log(req.body)
})

var server = app.listen(8181)
