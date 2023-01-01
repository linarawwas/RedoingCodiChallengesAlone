const password = document.querySelector("#password");
const confirm = document.querySelector("#confirmation");
const button = document.querySelector("button");
const change_border = function() {
    let check = password.value;
    if(check !== null && check !== confirm.value) {
        password.style.border = "3px solid red";
        confirm.style.border = "3px solid red";
    }
}
button.addEventListener("click", change_border);