'use strict';

// 모듈
const express = require('express');
const bodyParser = require('body-parser'); // request로 온 값의 body를 파싱해줘서 보여주는 라이브러리, npm i body-parser -s 설치
const app = express();

// 라우팅
const home = require('./src/routes/home/index');

// 앱셋팅
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json()); // bodyParser 미들웨어 등록
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결을 위해 아래 코드 설정
app.use(bodyParser.urlencoded({ extended: true })); //

app.use('/', home);

module.exports = app; // app를 내보내줘야 다른 모듈에서 이것을 받을 수 있다.
