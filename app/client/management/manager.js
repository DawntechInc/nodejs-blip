var Lime = require('lime-js'); // Events of messages and notifications
var Connection = require('../actions/connection');
var Messages = require('../actions/messages');
var Notifications = require('../actions/notifications');
var Notification = require('../models/notification');
var Message = require('../models/message');

/**
 * Function for managing the client.
 * @param  {void}.
 * @return {void}.
 */
module.exports.clientManager = function(clientModel) {
  Connection.createSession(clientModel).then(() => {
    console.log('[MANAGER] Session has been created');
  });
}