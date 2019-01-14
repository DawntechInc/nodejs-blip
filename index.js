let BlipSdk = require('blip-sdk');
let WebSocketTransport = require('lime-transport-websocket');
let Lime = require('lime-js');
var express = require('express');
var config = require('config');
// var app = express();

// Bot client
var client = new BlipSdk.ClientBuilder()
    .withIdentifier(config.get('blip.key'))
    .withAccessKey(config.get('blip.key'))
    .withTransportFactory(() => new WebSocketTransport())
    .build();


// app.get('/', function (req, res) {
//   res.send('oi: ');
// })

// app.listen(3000, () =>  {
//   console.log("Example app listening");
//   console.log("Port: ", config.get("server.port"));
// })

