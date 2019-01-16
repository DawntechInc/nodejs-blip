
var Manager = require('./app/client/management/manager');
var Messages = require('./app/client/actions/messages');
var clientModel = require('./app/client/models/blipClient');
var express = require('express');

// Bot client
Manager.clientManager(clientModel);
Messages.receiveMessageWithFilterMessageContent(clientModel, 'oi');
Messages.receiveMessageWithFilterMessageContent(clientModel, 'oie');
Messages.receiveMessage(clientModel);

