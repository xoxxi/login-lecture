"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello);
router.get("/login", ctrl.login);

module.exports = router;
//Router를 외부 파일에서 사용할 수 있도록 던져줌
//내보내기 명령
//app.js에서 받아오면 됨