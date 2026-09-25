const userName = document.getElementById("userName");
const password = document.getElementById("password");
const conformPassword = document.getElementById("conformPassword");
const subBtn = document.getElementById("subBtn");
const lab1 = document.getElementById("lab1");
const lab2 = document.getElementById("lab2");
const lab3 = document.getElementById("lab3");


subBtn.addEventListener("click", blankCheck);


function blankCheck(){
    let name = userName.value;

    if(name === ""){
       lab1.innerHTML = "User name required." ; 
    }else{
        lab1.innerHTML = "" ;
    }

    let pass = password.value;

    if (pass === ""){
        lab2.innerHTML = "password required";
    }else{
        lab2.innerHTML = "";
    }

    let conPass = conformPassword.value;

    if (conPass === ""){
        lab3.innerHTML = "Conform first";
    }else{
        lab3.innerHTML = "";
    }
    



}