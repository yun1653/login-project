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
    if (response.err) {
      logger.error(
        `POST / login 200 Response: "success: ${response.success}, ${response.err}"`
      );
    } else {
      logger.info(
        `POST / login 200 Response: "success: ${response.success}, msg: ${response.msg}"`
      );
    }
    return res.json(response);
  },

  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    if (response.err) {
      logger.error(
        `POST / register 200 Response: "success: ${response.success}, ${response.err}"`
      );
    } else {
      logger.info(
        `POST / register 200 Response: "success: ${response.success}, msg: ${response.msg}"`
      );
    }
    return res.json(response);
  },
};

module.exports = { output, process };
