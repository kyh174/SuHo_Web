const express = require('express');
const app = express();
const fs = require('fs');

const { SerialPort } = require('serialport');
const port = new SerialPort({
  path: 'COM6',
  baudRate: 9600
});

port.on('open', (err) => {
  if(!err)
    console.log('Serial Port Open');
  else
    console.error(err);
});

app.get('/', (req, res) => {
  fs.readFile('./main.html', (err, data) => {
    res.end(data);
  });
});

app.get('/led-on', (req, res) => {
  port.write();
});

app.get('/led-off', (req, res) => {
  port.write();
});

app.listen(3030, () => {
  console.log('Server Open');
});