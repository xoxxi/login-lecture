

//모듈
//import express from "express";
//import cors from "cors";
//import path, {dirname} from 'path';
//import { fileURLToPath } from "url";
//import bodyParser from "body-parser";

const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const PORT = 3000;



//라우팅
const home = require("./src/routes/home/index.js");

// 앱세팅 
app.set("views", "./src/views");

//생성도니 html 코드를 어떤 엔진으로 해석할지 정할 수 있음
app.set("view engine", "ejs");

//import path, {dirname} from 'path';
//import { fileURLToPath } from "url";

//const dirname = dirname(fileURLToPath(import.meta.url));

//app.use('/js', express.static(path.join(dirname, '/src/public/js')));
app.use('/js', express.static(`${__dirname}/src/public/js/home`));app.use(express.static(`${__dirname}/src/public`))
//app.use(express.static(__dirname + '/public'));

//import path, {dirname} from 'path';
//import { fileURLToPath } from "url";

//const __dirname = dirname(fileURLToPath(import.meta.url));

//app.use('/js', express.static(path.join(__dirname, '/src/public/js')));

//router 받아오기
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use("/", home); //use -> 미들 웨어를 등록해주는 메서드

module.exports = app;

// "use strict";

// // 모듈
// const express = require("express");
// const cors = require("cors");
// const {dirname} = require('path');
// const { fileURLToPath } = require("url");
// const bodyParser = require("body-parser");

// const __dirname = dirname(fileURLToPath(import.meta.url));

// const app = express();
// app.use(cors());

// // 모듈
// import home from "./src/routes/home/index.js";
// // ./src/routes/home/index.js

// // 앱 세팅
// app.set("views", "./app/src/views");
// app.set("view engine", "ejs");
// app.use('/js', express.static(path.join(__dirname, '/src/public/js')));
// app.use(bodyParser.json());
// // URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
// app.use(bodyParser.urlencoded({extended: true}));

// // use -> 미들 웨어를 등록해주는 메서드
// app.use("/", home);

// export default app;