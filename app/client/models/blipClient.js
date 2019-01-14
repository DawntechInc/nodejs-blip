var BlipSdk = require('blip-sdk');
var WebSocketTransport = require('lime-transport-websocket');
var Lime = require('lime-js');
const config = require('config');

const blipClient = new BlipSdk.ClientBuilder()
  .withIdentifier(config.get('blip.identifier'))
  .withAccessKey(config.get('blip.accessKey'))
  .withTransportFactory(() => new WebSocketTransport())
  .build();

module.exports = blipClient;