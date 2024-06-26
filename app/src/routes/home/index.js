"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register)
router.post("/login", ctrl.process.login);

module.exports = router;
//Router를 외부 파일에서 사용할 수 있도록 던져줌
//내보내기 명령
//app.js에서 받아오면 됨