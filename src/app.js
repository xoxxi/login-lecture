// const express = require('express')
// const app = express()
// const port = 3000


// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.get('/user/:id', (req, res) => {
//     // const q = req.params
//     // console.log(q.id)

//     // const q = req.query
//     // console.log(q.q)
//     // console.log(q.name)
//     // console.log(q.age)

//     // res.json({'userid' : q.name})

//     const p = req.params;
//     console.log(p);
//     const b = req.body;
//     console.log(b);
    
//     res.send({'message' : 'Hello World!'});
// })

// app.get('/sound/:name', (req, res) => {
//     const {name} = req.params  
    
//     if(name == 'dog'){
//         res.json({'sound' : '멍멍'})
//     } else if(name == 'cat'){
//         res.json({"sound" : '먀-악!!!!!'})
//     } else if(name == 'pig'){
//         res.json({"sound" : '꿀꿀'})
//     } else{
//         res.json({"sound" : '알 수 없음'})
//     }
    
//     res.json({'sound' : 'didh'})
// })

// app.listen(port, () => {
//     console.log('Example app listening on port $(port)')
// })

//모듈
const express = require("express");
const app = express();



//라우팅
const home = require("./routes/home");

// 앱세팅 
app.set("views", "./views");
//생성도니 html 코드를 어떤 엔진으로 해석할지 정할 수 있음
app.set("view engine", "ejs");

//router 받아오기
app.use("/", home); //use -> 미들 웨어를 등록해주는 메서드

module.exports = app;
