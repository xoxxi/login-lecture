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
}

console.log(id);
console.log("heelo");

//질의선택자 선택자로 html의 값을 가져올 수있음
//login.ejs 파일에 있는 tag들에 있는 정보 = 선택자 