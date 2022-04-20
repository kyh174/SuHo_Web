const express = require('express');
const app = express();
const fs = require('fs');

app.set('port', 3030);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  fs.readFile('./public/html/main.html', (err, data) => {
    res.end(data);
  });
});

app.listen(app.get('port'), () => {
  console.log('http://localhost:' + app.get('port'));
});