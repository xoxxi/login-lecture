
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

//app.use('/js', express.static(`${__dirname}/src/public/js/home`));
app.use(express.static(`${__dirname}/src/public`));

//router 받아오기
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use("/", home); //use -> 미들 웨어를 등록해주는 메서드

module.exports = app;
