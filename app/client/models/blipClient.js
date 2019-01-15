var BlipSdk = require('blip-sdk');
var WebSocketTransport = require('lime-transport-websocket');
const config = require('config');

// Each blip client is a connection from the server, and it can be reused
const blipClient = new BlipSdk.ClientBuilder()
  .withIdentifier(config.get('blip.identifier'))
  .withAccessKey(config.get('blip.accessKey'))
  .withTransportFactory(() => new WebSocketTransport())
  .build();

module.exports = blipClient;