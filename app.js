const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('여기는 루트입니다.');
});

app.get('/login', (req, res) => {
  // "/login"에서 앞에 있는 "/"는 꼭 넣어줘라. "/"은 root를 의미하는 것이다.
  res.send('여기는 로그인 화면입니다.');
});

app.listen(3000, () => {
  console.log('서버 가동');
});
