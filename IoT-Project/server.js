const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server, Socket } = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('socket connected');
  socket.on('web send code', (code) => {
    console.log(code);
    io.emit('server send code', code);
  });
  socket.on('client send result', (result) => {
    console.log(`client result: ${result}`);
    io.emit('server send result', result);
  });
  socket.on('client send result error', (err) => {
    io.emit('server send result error', err);
  });
});

server.listen(3000, () => {
  console.log('http://localhost:3000');
});