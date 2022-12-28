'use strict';

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl');

router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login);
router.get('/register', ctrl.output.register);

router.post('/login', ctrl.process.login); // 브라우저(클라이언트)에서 오는 로그인 데이터를 서버에서 받는 API
router.post('/register', ctrl.process.register);

module.exports = router;
