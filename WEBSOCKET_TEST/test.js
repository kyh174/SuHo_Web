const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);

app.get('/', (req, res) => {
  res.send('socket');
});

app.ws('/', (ws, req) => {
  ws.on('message', (msg) => {
    console.log(msg);
  });
});

app.listen(3030);