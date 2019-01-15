/** Function for receiving a message from the server.
 *  @param  {BlipSdk.ClientBuilder} client.
 *  @return {Handler} receiving message handler for canceling registration.
 */
module.exports.receiveMessage = function(client) {
  return client
         .addMessageReceiver(true, (messageReceived) => {
           console.log('[MESSAGES]: Received message: ', messageReceived);
         });
}

/** Function for receiving a message from the server and filtering the sender.
 *  @param  {BlipSdk.ClientBuilder} client.
 *  @param  {String} sender.
 *  @return {Handler} receiving message handler for canceling registration.
 */
module.exports.receiveMessageWithFilter = function(client, sender) {
  return client
         .addMessageReceiver((message) => {
           message.from === sender
         },
         (message) => {
           console.log('[MESSAGES]: Received message: ', messageReceived, 'from the sender ', sender);
        });
}

/** Function for sending a message to the server.
 *  @param  {BlipSdk.ClientBuilder} client.
 *  @param  {Message} message.
 *  @return {void}.
 */
module.exports.sendMessage = function(client, message) {
  client.sendMessage(message);
}
