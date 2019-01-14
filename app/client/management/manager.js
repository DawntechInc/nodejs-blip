var Connection = require('../actions/connection');

var clientModel = require('../models/blipClient')

module.exports.clientManager = function() {
  Connection.createSession(clientModel).then(() => {
    console.log('Session has been created');
  });
}