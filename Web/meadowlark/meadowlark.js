const express = require('express');
const app = express();
const forune = require('./lib/fortune.js');

// 핸들바 뷰 엔진 설정
// 뷰 엔진에서 기본적으로 콘텐츠타입 text/html 과 상태코드 200을 반환하여 따로 명시 안해도 됨
// 404 500 핸들러에서만 별도로 명시하면 된다.
const handlebars = require('express-handlebars')
  .create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3030);

app.use((req, res, next) => {
  res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
  next();
});

// 홈페이지 라우트
app.get('/', function(req, res) {
  res.render('home');
});

// 어바웃 페이지 라우트
app.get('/about', function(req, res) {
  res.render('about', {
    fortune: forune.getFortune(),
    pageTestScript: '/qa/tests-about.js'
  } );
});

app.get('/tours/hood-river', (req, res) => {
  res.render('tours/hood-river');
});

app.get('/tours/request-group-rate', (req, res) => {
  res.render('tours/request-group-rate');
});

// static 미들웨어
// 폴더 이름이 public인 이유는 이 디렉터리 안에 있는 것은 조건 없이 클라이언트에 보내기 때문
// 여기에 이미지, CSS파일, 클라이언트 자바스크립트 파일 등을 저장함
// static 미들웨어는 클라이언트에 전송할 각 정적 파일마다 라우트를 만들고 그 파일을 반환하는
// 것과 같은 효과가 있다.
app.use(express.static(__dirname + '/public'));


// 404 폴백 핸들러 (미들웨어)
// app.use는 익스프레스에서 미들웨어를 추가할 때 사용하는 메서드
app.use(function(req, res) {
  res.status(404);
  res.render('404');
});

// 500 에러 핸들러 (미들웨어)
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});