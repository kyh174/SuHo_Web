const express = require('express'); // 익스프레스 모듈
const app = express(); // 익스프레스의 최상위 함수 express()

app.set('port', process.env.PORT || 3030); // 어플리케이션에 변수 할당 환경변수로 port 번호를 가져오거나 3030으로

const handlebars = require('express-handlebars')
  .create({ defaultLayout: 'main' }); // 뷰엔진 핸들바 모듈 추가 및 생성, 기본 레이아웃 설정
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars'); // view engine 변수 설정

/*
app.get('path', callbackfunc);
GET 메소드 요청을 지정된 경로로 라우트
*/

// 루트 페이지
app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Main');
});

// about 페이지
app.get('/about', (req, res) => {
  res.type('text/plain');
  res.send('About');
});

/*
app.use('path', {callbackfunc})
지정된 경로에 미들웨어 함수를 마운트
요청 경로가 지정된 경로와 일치하면 미들웨어 함수 실행
path 인수 안넘기면 기본으로 / 경로
*/ 

// 404 페이지 - 요청 못찾음
app.use(function(req, res) {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

/*
미들웨어 에러처리 하는 법
아래 500페이지 코드와 같이 콜백함수에서 인수 4개를 반드시 받아야함
err, req, res, next
console.error(err.stack)으로 에러 출력
*/

// 500 페이지 - 서버에러
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.end('500 - Server Error');
});

app.listen(app.get('port'), function() {
  console.log('http://localhost:' + app.get('port'));
});