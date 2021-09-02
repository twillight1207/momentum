const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function paintGreetings(name) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${name}!`;
}

function onLoginSubmit(event) {
    //누르면 새로고침하는 것을 막음
    event.preventDefault();
    //loginform 사라지게 함
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //username 값을 저장
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    //greeting 나타남
    paintGreetings(username);
}



const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    //show the greeting
    paintGreetings(savedUsername);
}
