const { io } = require('socket.io-client');
const socket = io('ws://localhost:3000');
const { PythonShell } = require('python-shell');
const fs = require('fs');

socket.on('server send code', (code) => {
  fs.writeFile('./code.py', code, (err) => {
    if (err) {
      console.error(err);
      return
    }
    PythonShell.run('code.py', null, (err, result) => {
      if (err) throw err;
      console.log('finished');
      console.log('results: ' + result);
    });
  });
});