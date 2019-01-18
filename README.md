# Bot | NodeJS Blip SDK

Bot for the Blip platform utilizing its NodeJS software development kit.

**Author:** Levindo Gabriel Taschetto Neto.

## NodeJS Environment
```
node v9.7.1 linux/amd64
```

## How to Create Bot on BLIP

*  Create chatbot.
*  Create from scratch.
*  Choose a chatbot name and click finish.
*  Go to the drop menu next to the bot's name, and enter on its *configuration*.
*  Activate the option *Connect using SDK*.
*  Place the credentials *Identifier* and *Access key* into their reserved values in the [configuration file](config/default.json).

## How to Install Dependencies and Start the Service via Docker

For this to work you ought to have Docker installed in your machine.
To run the service under the project defined on the [configuration file](config/default.json), please run the following command within the root of the project:
```
$ docker build -t nodejs-blip .
$ docker run -p 8051:8050 nodejs-blip
```
