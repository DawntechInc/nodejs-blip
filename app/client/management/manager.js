var Lime = require('lime-js'); // Events of messages and notifications

var Connection = require('../actions/connection');
var clientModel = require('../models/blipClient');
var Notification = require('../models/notification');

/**
 * Function for managing the client.
 * @param {void}
 * @returns {void}
 */
module.exports.clientManager = function() {
  Connection.createSession(clientModel).then(() => {
    console.log('[MANAGER]: Session has been created');
  }).then(() => {
    Connection.closeSession(clientModel).then(() => {
      var notificationTest = new Notification("ef16284d-09b2-4d91-8220-74008f3a5788", "553199990000@0mn.io", Lime.NotificationEvent.RECEIVED);
      console.log("notificationTest: ", notificationTest);
      console.log('[MANAGER]: Session has been closed');

    })
  });
}