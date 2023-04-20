// 회원가입/로그인 관련 라우터 설정
const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

router.get('/', controller.index);
