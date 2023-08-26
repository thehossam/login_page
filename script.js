let wepper = document.querySelector(".wepper");
let btnLogin = document.querySelector("header .login");
let closeWepper = document.querySelector(".wepper .icon i");


btnLogin.addEventListener("click", ()=>{
    wepper.classList.add("active-bob")
})
closeWepper.addEventListener("click",()=>{
    wepper.classList.remove("active-bob")
})