const http = require('http');

const app = http.createServer((req, res) => {
  // 브라우저에게 한글로 처리된다는 것을 알려줘야 한다.
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  if (req.url === '/') {
    res.end('여기는 메인 화면 입니다.');
  } else if (req.url === '/login') {
    res.end('여기는 로그인 화면입니다. http서버');
  }
});

app.listen(3001, () => {
  console.log('http 서버로 가동된 서버입니다.');
});

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('여기는 루트 화면입니다.');
// });

// app.get('/login', (req, res) => {
//   res.send('여기는 로그인 화면입니다.');
// });

// app.listen(3000, () => {
//   console.log('서버 가동');
// });
