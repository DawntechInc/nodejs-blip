/* Function for connecting the client to Blip
 * @param {BlipSdk.ClientBuilder} client
 * @return {void}
 */
module.exports.createSession = function(client) {
  return client
         .connect()
         .then((session) => {
           console.log('[CONNECTED] -> session: ', session);
         }).catch((error) => {
             console.log('[CONNECTION FAILED] -> Error: ', error)
         });
}

