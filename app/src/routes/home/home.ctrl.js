'use strict';

const User = require('../../models/User');

const output = {
  home: (req, res) => {
    res.render('home/index'); //views폴더의 ejs 파일
  },

  login: (req, res) => {
    res.render('home/login'); //views폴더의 ejs 파일
  },

  register: (req, res) => {
    res.render('home/register'); //views폴더의 ejs 파일
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },

  register: (req, res) => {
    const user = new User(req.body);
    const response = user.register();
    return res.json(response);
  },
};

module.exports = { output, process };
