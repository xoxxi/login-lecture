"use strict";

"use strict";


const id = document.querySelector("#id");
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
console.log(id); // id 요소가 제대로 선택되었는지 확인
console.log(password); // password 요소가 제대로 선택되었는지 확인


const registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click",register);

function register() {
    if(!id.value) return alert("아이디를 입력해주세요");
    if(password.value !== confirmPassword.value) return alert('비밀번호가 일치하지 않습니다.');
    const req = {
        id: id.value, 
        name: name.value,
        password: password.value,
    
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/login";
        }   else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("회원가입 중 에러 발생");    
    }); 
}

//오브젝트로 전달할 떄는 : 씀

//질의선택자 선택자로 html의 값을 가져올 수있음
//register.ejs 파일에 있는 tag들에 있는 정보 = 선택자 