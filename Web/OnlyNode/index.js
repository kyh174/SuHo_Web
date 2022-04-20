const http = require('http');
const fs = require('fs');

function serverStaticFile(res, path, contentType, responseCode) {
  if (!responseCode) responseCode = 200;
  fs.readFile(__dirname + path, function(err, data) {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 - Internal Error');
    } else {
      res.writeHead(responseCode, { 'Content-Type': contentType });
      res.end(data);
    }
  });
}

http.createServer(function(req, res) {
  let path = req.url;

  switch(path) {
    case '/':
      serverStaticFile(res, '/public/home.html', 'text/html');
      break;
    case '/about':
      serverStaticFile(res, '/public/about.html', 'text/html');
      break;
    case '/img/logo.jpg':
      serverStaticFile(res, '/public/img/logo.jpg', 'image/jpg');
      break;
    default:
      serverStaticFile(res, '/public/404.html', 'text/html', 404);
      break;
  }
}).listen(3030, () => {
  console.log('Server Open 3030');
});