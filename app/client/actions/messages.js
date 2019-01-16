var Message = require('../models/message');
var Lime = require('lime-js');

/** Function for receiving a message from the server.
 *  @param  {BlipSdk.ClientBuilder} client.
 *  @return {Handler} receiving message handler for canceling registration.
 */
module.exports.receiveMessage = function(client) {
  return client
         .addMessageReceiver(true, (messageReceived) => {
           console.log('[MESSAGES] Received message: ', messageReceived);
         });
}

/** Function for receiving a message from the server and filtering the sender.
 *  @param  {BlipSdk.ClientBuilder} client.
 *  @param  {String} sender.
 *  @return {Handler} receiving message handler for canceling registration.
 */
module.exports.receiveMessageWithFilterSender = function(client, sender) {
  return client
         .addMessageReceiver((message) => {
           message.from === sender
         },
         (message) => {
           console.log('[MESSAGES] Received message: ', messageReceived, 'from the sender ', sender);
        });
}

module.exports.receiveMessageWithFilterMessageContent = function(client, messageContent) {
  client.addMessageReceiver(function(message) {
    return message.content === messageContent;
  }, function(message) {
      var messageSent = new Message("text/plain", messageContent.concat('-resp p/ ').concat(message.from), message.from, Lime.Guid());
      client.sendMessage(messageSent);
      console.log('[MESSAGES] Message sent: ', messageSent, 'back to the user ', messageSent.to);
  });
}


/** Function for sending a message to the server.
 *  @param  {BlipSdk.ClientBuilder} client.
 *  @param  {Message} message.
 *  @return {void}.
 */
module.exports.sendMessage = function(client, message) {
  client.sendMessage(message);
  console.log('[MESSAGES] Message sent: ', messageReceived, 'back to the user ', message.to);
}