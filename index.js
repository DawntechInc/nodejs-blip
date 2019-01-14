

// var Functions = require('./app/client/actions/functions');
// var Messages = require('./app/client/actions/messages');
// var Notifications = require('./app/client/actions/notifications');

var manager = require('./app/client/management/manager');
var express = require('express');

// Bot client
manager.clientManager();

// var app = express();
// app.get('/', function (req, res) {
//   res.send('TEST: ');
// })

// app.listen(3000, () =>  {
//   console.log("Example app listening");
//   console.log("Port: ", 3000);
// })

