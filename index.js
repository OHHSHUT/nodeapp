//importing node framework
var express = require(‘express’);
var app = express();//Respond with "hello world tu chutya hai2" for requests that hit our root "/"
app.get(‘/’, function (req, res) {
 res.send(‘hello world’);
});//listen to port 80 by default
app.listen(process.env.PORT || 80);
module.exports = app;
