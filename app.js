let signUp = document.querySelector(".signup_button");
signUp.innerHTML = "Sign up here";
console.log(signUp);
let banner = document.querySelector(".content");
banner.appendChild(signUp);

function clickable() {
  alert("button clicked");
  let signIn_page = document.createElement("a");
  signIn_page.innerHTML = "About SignUp";
  signIn_page.setAttribute("class", "sign");
  console.log(signIn_page);
  let content = document.querySelector(".content");
  content.appendChild(signIn_page);
}
