var Connection = require('../actions/connection');
var clientModel = require('../models/blipClient')

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
      console.log('[MANAGER]: Session has been closed');
    })
  });
}
