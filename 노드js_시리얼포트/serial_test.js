const { SerialPort, ReadlineParser } = require('serialport');

const port = new SerialPort({path: 'COM6', baudRate: 9600});
const parser = new ReadlineParser();

port.pipe(parser);
port.on('open', () => {
  console.log('Serial Port Open');
  parser.on('data', console.log);
});