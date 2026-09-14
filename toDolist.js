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
        html += "<li>" + tasks[i]  + " <button onclick='removeTask(" + i + ")';>X</button></li>";
    }
    unorder.innerHTML = html;

}


function addList(){
    let text = input.value;
    if (text === ""){
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

