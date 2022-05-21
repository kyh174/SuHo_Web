const express = require('express');
const app = express();
// http, server는 직접 작업해야 하는 경우가 아니면 사용할 필요가 없음
// app.listen()을 사용하면 됨
// 다음을 사용하는 경우 (socket.io / SPDY / HTTPS) 에는 필요
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io'); // socket.io 의 Server 객체 임포트
const io = new Server(server); // 객체 생성하면서 위에서 만든 server를 넣어줌

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // __dirname은 루트 디렉토리 경로 C:\Users\kim\Desktop\Git\SuHo_Web\socket_io
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3000, () => {
  console.log('http://localhost:3000');
});