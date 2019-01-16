/** Function for connecting the client to Blip.
 *  @param  {BlipSdk.ClientBuilder} client.
 *  @return {Handler} creating session handler for canceling registration.
 */
module.exports.createSession = function(client) {
  return client
         .connect()
         .then((session) => {
           console.log('[CLIENT] Session created: ', session);
         }).catch((error) => {
             console.log('[CLIENT] Error on creating session: ', error)
         });
}

/** Function for connecting the client to Blip.
 *  @param  {BlipSdk.ClientBuilder} client.
 *  @return {Handler} closing session handler for canceling registration.
 */
module.exports.closeSession = function(client) {
  return client.close()
         .then(() => {
           console.log('[CLIENT] Session closed');
         })
         .catch((error) => {
           console.log('[CLIENT] Error on closing session: ', error);
         });
}