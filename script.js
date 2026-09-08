let show = document.getElementById("demo");
const show1 = document.getElementsByClassName("demo1");
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");
show.innerHTML = "Hello world";
show1[0].innerHTML = "The first paragraph (index 0) inside 'main' is: " + y[0].innerHTML;


let light = document.getElementById("im");

function turnOn(){
    light.src = "on.jpg";
}
function turnOff() {
    light.src = "off.png";
}