/** Function for receiving notifications from the server.
 *  @param  {BlipSdk.ClientBuilder} client.
 *  @return {Handler} receiving notification handler for canceling registration.
 */
module.exports.addNotification = function(client) {
  return client.addNotificationReceiver("received", (notification) => {
    console.log('[NOTIFICATIONS] Notification received: ', notification);
  });
}

/** Function for sending a notification to the server.
 *  @param  {BlipSdk.ClientBuilder} client
 *  @param  {Notification} notification.
 *  @return {void}.
 */
module.exports.sendNotification = function(client, notification) {
  client.sendNotification(notification);
   console.log('[NOTIFICATIONS] Notification sent: ', notification);
}
