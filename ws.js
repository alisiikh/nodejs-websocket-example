var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({port: 40510})


wss.broadcast = function broadcast(msg) {
   wss.clients.forEach(function each(client) {
       client.send(msg);
   });
};

wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    console.log('received: %s', message)

    if (message == "all") {
        wss.broadcast(message);
    }
  });

  setInterval(
    () => ws.send(`${new Date()}`),
    1000
  )
})
