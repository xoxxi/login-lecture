"use strict"



const id = document.querySelector("#id")
const psword = document.querySelector("#psword");
const loginbtn = document.querySelector("button");

loginbtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        psword: psword.value
    };

    fetch("/login", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json" //내가 보내는 데이터의 타입을 알려줌
        }, //내가 전달하는 데이터가 json 데이터라는 것을 알려주어야 함
        body: JSON.stringify(req), //문자열로 감쌀 수 있음

    })
}
//오브젝트로 전달할 떄는 : 씀
console.log(id);
console.log("heelo");

//질의선택자 선택자로 html의 값을 가져올 수있음
//login.ejs 파일에 있는 tag들에 있는 정보 = 선택자 