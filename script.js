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
    // light.style.height="300px";
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


