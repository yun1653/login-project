'use strict';

const users = {
  // 지금은 DB가 없으니 서버에서 보관하는 유저 자료들을 하드코딩해서 마련
  id: ['bbitz8888', 'yun1653', 'bbitz8490'],
  psword: ['1234', '5678', '4567'],
};

const output = {
  home: (req, res) => {
    res.render('home/index');
  },

  login: (req, res) => {
    res.render('home/login');
  },
};

const process = {
  login: (req, res) => {
    // bodyParser 패키지가 설치되고 app.js에서 미들웨어 등록되어야 제대로 나옴.
    const id = req.body.id; // 브라우저에서 요청한(fetch로 넘겨준 req) 데이터를 받아서
    const psword = req.body.psword;

    if (users.id.includes(id)) {
      // 위의 유저 자료와 비교하는 과정.
      // 변수 id가 users.id 안에 있으면
      const idx = users.id.indexOf(id); // 해당 인덱스 값을 가져오고
      if (users.psword[idx] === psword) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: '로그인에 실패했습니다.',
    });
  },
};

module.exports = { output, process };
