let input = document.getElementById("input");
let add = document.getElementById("add");
let unorder = document.getElementById("unorder");
let clear = document.getElementById("clear");

add.addEventListener("click", addList);
clear.addEventListener("click", clearList);

let tasks = [];

function displayList(){
    let html = "";
    for (let i = 0; i < tasks.length; i++){
        html += "<li>" + "<p id='name'>"+ tasks[i] + "</p>"  + " <button id='butt'; onclick='removeTask(" + i + ")';>X</button></li>";
    }
    unorder.innerHTML = html;

}


function addList(){
    let text = input.value;
    if (text === ""){
        modalShow();
        return;
    
    }
    tasks.push(text);
    input.value = "";
    displayList();
    saveList();

}

function removeTask(i){
    tasks.splice(i, 1);
    displayList();
    saveList();
}

function clearList(){
    tasks = [];
    displayList();
    saveList();
}

function saveList(){
    localStorage.setItem("takes", JSON.stringify(tasks));
}
function loadList(){
    let saved = localStorage.getItem("takes");
    if (saved !== null){
        tasks = JSON.parse(saved);
    }
}

loadList();
displayList();


// modal project

const moOverlay = document.getElementById("modal-overlay");
const closed = document.getElementById("closed");


closed.addEventListener("click", modalHide)

function modalShow(){
    moOverlay.classList.add("show");
}
function modalHide(){
    moOverlay.classList.remove("show");
}

moOverlay.addEventListener("click", function(event){
    if(event.target === moOverlay){
        modalHide();
    }
})

// moOverlay.addEventListener("keydown", function(event){
//     if(event.key === "Escape"){
//         modalHide();
//     }
// })









