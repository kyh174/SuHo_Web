const express = require('express');
const app = express();
const expressWs = require('express-ws')(app); // 웹소켓

// 포트변수설정
app.set('port', process.env.PORT || 3000);

// 렌더엔진 설정
app.set('view engine', 'ejs');

// 바디파서
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.render('main');
});

app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
});