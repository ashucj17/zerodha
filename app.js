let signUp = document.querySelector(".signup_button");
signUp.innerHTML = "Sign up here";
console.log(signUp);
let banner = document.querySelector(".content");
banner.appendChild(signUp);

let signIn_page = document.createElement("a");
signIn_page.innerHTML = "About SignUp";
signIn_page.setAttribute("class", "sign");
signIn_page.setAttribute("href", "./signup.html");
console.log(signIn_page);
let content = document.querySelector(".content");
content.appendChild(signIn_page);

function clickable() {
  alert("button clicked");
}
