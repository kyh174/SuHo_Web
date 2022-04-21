const express = require('express'); // 익스프레스 모듈
const app = express(); // 익스프레스의 최상위 함수 express()

app.set('port', process.env.PORT || 3030); // 어플리케이션에 변수 할당 환경변수로 port 번호를 가져오거나 3030으로

const handlebars = require('express-handlebars')
  .create({ defaultLayout: 'main' }); // 뷰엔진 핸들바 모듈 추가 및 생성, 기본 레이아웃 설정
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars'); // view engine 변수 설정

/*
익스프레스는 정적 파일과 뷰를 미들웨어로 처리함
public 디렉터리 안에는 정적파일을 넣으며, 이는 특별한 조건 없이
클라이언트에 보냄
*/
// public 미들웨어 처리 (정적파일 처리)
app.use(express.static(__dirname + '/public'));


/*
app.get('path', callbackfunc);
GET 메소드 요청을 지정된 경로로 라우트
*/

// 루트 페이지
app.get('/', (req, res) => {
  res.render('home');
});

// about 페이지
app.get('/about', (req, res) => {
  res.render('about');
});

/*
app.use('path', {callbackfunc})
지정된 경로에 미들웨어 함수를 마운트
요청 경로가 지정된 경로와 일치하면 미들웨어 함수 실행
path 인수 안넘기면 기본으로 / 경로
익스프레스는 미들웨어로 뷰와 정적 파일을 처리함
*/ 

// 404 페이지 - 요청 못찾음
app.use(function(req, res) {
  res.status(404);
  res.render('404');
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
  res.status(500);
  res.render('500');
});



app.listen(app.get('port'), function() {
  console.log('http://localhost:' + app.get('port'));
});