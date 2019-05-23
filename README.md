# nodejs-websocket-example
it is an example of implementing websocket(ws) on both server and client side

## Install
```
$ npm install --save ws express
or 
$ git clone git@github.com:alisiikh/nodejs-websocket-example.git
```

## Unstanding ws
 `ws` is a WebSocket client and server implementation, fast, and easy to use ( [R]ead More](https://stackoverflow.com/questions/16392260/which-websocket-library-to-use-with-node-js) ).

#### client
`websocket client` is a browser supported object.

There are 3 basic functions:
 - `ws.onopen` : emmited when connected
 - `ws.send` : sending a send event to websocket server
 - `ws.onmessage` : event emmited when receiving message 
 
And one custom method added to broadcast messages to all clients
- `wss.broadcast` : sends an event to all knows clients

([Read More](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications))

## Run

Run server
```
$ npm start
``` 

Open browser
```
http://localhost:3000/
```

## Reference
 - [https://github.com/alisiikh/nodejs-websocket-example](https://github.com/alisiikh/nodejs-websocket-example)
 - [https://github.com/websockets/ws](https://github.com/websockets/ws)
 - [https://websockets.github.io/ws/](https://websockets.github.io/ws/)
