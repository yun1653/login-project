// TODO : 이 파일은 매우 민감한 정보를 가지고 있기 때문에 이 정보들을 환경변수로 바꾸어서 처리해줘야 안전하고 깃헙에 올릴 수 있다.

/* npm i -s mysql 패키지 설치 */
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect();

module.exports = db;
