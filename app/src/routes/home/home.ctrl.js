'use strict';

const User = require('../../models/User');
const logger = require('../../config/logger');

const output = {
  home: (req, res) => {
    logger.info(`GET / 200 "홈 화면으로 이동`);
    res.render('home/index'); //views폴더의 ejs 파일
  },

  login: (req, res) => {
    logger.info(`GET / 200 "로그인 화면으로 이동`);
    res.render('home/login'); //views폴더의 ejs 파일
  },

  register: (req, res) => {
    logger.info(`GET / 200 "회원가입 화면으로 이동`);
    res.render('home/register'); //views폴더의 ejs 파일
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();

    const url = {
      method: 'POST',
      path: '/login',
      status: response.err ? 400 : 200, //200은 서버에서 정상응답해줬단 의미
    };

    log(response, url);
    return res.status(url.status).json(response);
  },

  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();

    const url = {
      method: 'POST',
      path: '/register',
      status: response.err ? 409 : 201,
    };

    log(response, url);
    return res.status(url.status).json(response);
  },
};

module.exports = { output, process };

const log = (response, url) => {
  if (response.err) {
    logger.error(
      `${url.method} ${url.path} ${url.status} Response: ${response.success}, ${response.err}`
    );
  } else {
    logger.info(
      `${url.method} ${url.path} ${url.status} Response: ${response.success}, ${
        response.msg || ''
      }`
    );
  }
};
