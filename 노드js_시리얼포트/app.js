const express = require('express');
const path = require('path');

const app = express();

// 포트 설정
app.set('port', 3030);

// 정적파일 연결
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/open_port', (req, res) => {
  res.send({val: 'aaaa'});
});




app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트 대기중');
});