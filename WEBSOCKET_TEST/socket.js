const { WebSocketServer } = require('ws');

const WebSocket = require('ws').Server;
const wss = new WebSocketServer({ port: 3000 });

wss.on("connection", function(ws) {
  ws.send("Hello I am Server");
  ws.on("message", function(message) {
    console.log("Received: %s", message);
  });
});