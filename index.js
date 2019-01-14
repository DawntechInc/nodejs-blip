
// var blip = require('balihoo-blip-sdk')
// var blip2 = require('lime-transport-websocket')
var express = require('express');
var config = require('config');
var app = express();


app.get('/', function (req, res) {
  res.send('oi: ');
})

app.listen(3000, () =>  {
  console.log("Example app listening");
  console.log("Port: ", config.get("server.port"));
})