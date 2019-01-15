/** Function for receiving notifications from the server.
 *  @param {BlipSdk.ClientBuilder} client.
 *  @return {Handler} receiving notification handler for canceling registration.
 */
module.exports.addNotification = function(client) {
  return client.addNotificationReceiver("received", (notification) => {
    console.log('[NOTIFICATION]: Notification received: ', notification);
  });
}


// module.exports.sendNotificationMessage = function(client) {
//   client.sendNotification()
// }