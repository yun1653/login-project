'use strict';

// 🍅 이 부분이 서버를 실행시키는 부분이다. 즉 이 파일을 실행 시켜야 서버가 가동된다.
// 실행 node ./bin/www.js

// listen 하는 부분을 모듈화
const app = require('../app'); // 상대 경로를 지정해줘야 한다. 즉 (..)상위 폴더로 가서 app.js를 불러온다.

const logger = require('../src/config/logger');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`${PORT} 포트에서 서버가 가동되었습니다.`);
});
