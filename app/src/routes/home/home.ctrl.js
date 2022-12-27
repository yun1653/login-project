'use strict';

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
    console.log(req.body); // bodyParser 패키지가 설치되고 app.js에서 미들웨어 등록되어야 제대로 나옴.
  },
};

module.exports = { output, process };
