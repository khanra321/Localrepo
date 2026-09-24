const userName = document.getElementById("userName");
const password = document.getElementById("password");
const conformPassword = document.getElementById("conformPassword");
const subBtn = document.getElementById("subBtn");
const lev1 = document.getElementById("lev1");
const lev2 = document.getElementById("lev2");
const lev3 = document.getElementById("lev3");


subBtn.addEventListener("click", blankCheck);


function blankCheck(){
    let name = userName.value;

    if(name === ""){
       lev1.innerHTML = "User name required." ;
    }
    


    



}