const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);

app.get('/', (req, res) => {
  res.end();
});

app.ws('/', (ws, res) => {
  ws.on('message', (msg) => {
    console.log(msg);
  });
});

app.listen(3030, () => {
  console.log("http://localhost:3030");
});