let show = document.getElementById("demo");
const show1 = document.getElementsByClassName("demo1");
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");

show.innerHTML = "Hello world";
show1[0].innerHTML = "The first paragraph (index 0) inside 'main' is: " + y[0].innerHTML;


let light = document.getElementById("im");
const onc = document.getElementById("on");
const offc = document.getElementById("off");

function turnOn(){
    light.src = "on.jpg";
    onc.style.display="none";
    offc.style.display="block";
}
function turnOff() {
    light.src = "off.png";
    offc.style.display="none";
    onc.style.display="block";  
}

let de = document.getElementById("dat");

function data() {
    de.innerHTML = Date();
}


function validateForm(){
    let ch = document.forms["myForm"]["fName"].value;
    if (ch == ""){
        alert("Name must be filled out.");
        return false;
    }
}

function clickMe(){
    const inD = document.getElementById("animate");
    let b = 0;
    let a = setInterval(frame, 2);
    function frame(){ 
        if (b == 120){
            clearInterval(a);
        }else{
            b++;
            inD.style.top = b + "px";
            inD.style.left = b + "px";
        }
    }

}



