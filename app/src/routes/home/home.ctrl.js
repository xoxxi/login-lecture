"use strict";



const output = {
    home: (req, res) =>{
        res.render("home/index");
    },
    
    login: (req, res) =>{
        res.render("home/login");
    },
};

const users = {
    id: ["alswl", "alsgml", "alswjd"],
    password : ["1234", "123", "12345"],
};

const process = {
    login: (req, res) =>{
        const id = req.body.id;
        const password = req.body.password;
        
        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.password[idx] === password){
                return res.json({
                    id,
                    password,
                    success: true,
                });
            }
        }
        return res.json({
            id,
            password,
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
    },
};
module.exports = {
    output,
    process,
};