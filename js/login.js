const inputId = document.getElementsByClassName("id")[0];
const inputPwd = document.getElementsByClassName("password")[0];
const buttonLogin = document.getElementsByClassName("button-login")[0];


inputId.addEventListener('keyup', () => {
    checkLoginInput(inputId, inputPwd, buttonLogin);
});

inputPwd.addEventListener('keyup', () => {
    checkLoginInput(inputId, inputPwd, buttonLogin);
});

//버튼 활성화
const buttonOn = (button) => {
    button.disabled = false;
    button.style.backgroundColor = "#0095f6";
    button.style.cursor = "pointer";
};

//버튼 비활성화
const buttonOff = (button) => {
    button.disabled = true;
    button.style.backgroundColor = "#c4e1fb";
    button.style.cursor = "default";
};

//로그인 인풋 검사
const checkLoginInput = (id, pwd, button) =>{
    if (id.value && pwd.value) {
        buttonOn(button);
    } else {
        buttonOff(button);
    }
};
