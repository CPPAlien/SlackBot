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
	sender.toSlack(req.body.text)
	res.send(req.body.text)
	console.log(req.body.text)
})

var server = app.listen(8181)
