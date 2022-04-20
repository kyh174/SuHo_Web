const express = require('express');
const app = express();
const fs = require('fs');
const { SerialPort } = require('serialport');
const openPort = new SerialPort({ path: 'COM3', baudRate: 9600 });

app.set('port', 3030);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  fs.readFile('./public/html/main.html', (err, data) => {
    res.end(data);
  });
});

app.listen(app.get('port'), () => {
  console.log('http://localhost:' + app.get('port'));

  openPort.on('open', () => {  // 포트통신 열기
    console.log('Port Open');
  });

  openPort.on('data', (data) => {  // 포트통신 보내기
    openPort.write(data);
  });
});