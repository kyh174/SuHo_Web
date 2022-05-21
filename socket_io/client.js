const { io } = require("socket.io-client");
const socket = io("ws://hocalhost:3000");

socket.on('chat message', (msg) => {
  console.log(msg);
});