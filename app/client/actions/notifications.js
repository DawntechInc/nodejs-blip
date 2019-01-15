/** Function for receiving notifications from the server.
 *  @param {BlipSdk.ClientBuilder} client.
 *  @return {Handler} receiving notification handler for canceling registration.
 */
module.exports.addNotification = function(client) {
  return client.addNotificationReceiver("received", (notification) => {
    console.log('[NOTIFICATION]: Notification received: ', notification);
  });
}

/** Function for sending notifications to the server.
 *  @param {Notification} notification.
 *  @return {void}.
 */
module.exports.sendNotificationMessage = function(notification) {
  client.sendNotification(notification);
}
