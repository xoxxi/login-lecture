"use strict";

"use strict";


const id = document.querySelector("#id");
const password = document.querySelector("#password");
console.log(id); // id 요소가 제대로 선택되었는지 확인
console.log(password); // password 요소가 제대로 선택되었는지 확인

const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        password: password.value
        }

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res)});
}

//오브젝트로 전달할 떄는 : 씀

//질의선택자 선택자로 html의 값을 가져올 수있음
//login.ejs 파일에 있는 tag들에 있는 정보 = 선택자 