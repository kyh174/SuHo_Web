const { io } = require('socket.io-client');
const socket = io('ws://localhost:3000');

socket.on('server send code', (code) => {
  console.log(code);
});