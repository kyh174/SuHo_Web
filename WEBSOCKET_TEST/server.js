const express = require('express');
const app = express();

// 포트변수설정
app.set('port', process.env.PORT || 3000);

// 렌더엔진 설정
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('main');
});

app.post('/send-code', (req, res) => {
  console.log(req.body);
  return res.send('HI');
});

app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
});