let con = document.getElementById("counting");
let st = document.getElementById("store");
let show = document.getElementById("lastStore");

document.getElementById("Incrise").addEventListener("click", countIncrise);
document.getElementById("Decrise").addEventListener("click", countDecrise);
document.getElementById("Reset").addEventListener("click", countReset);
document.getElementById("Save").addEventListener("click", countSave);
document.getElementById("Store").addEventListener("click", countStore);


let count = 0;

function countUpdate(){
    con.innerHTML = count;
}

function countIncrise(){
    count++;
    countUpdate();
}
function countDecrise(){
    count--;
    countUpdate();
}

function countReset(){
    count = 0;
    location.reload(); //use for refrace the paage
}

function countSave(){
    localStorage.setItem("countS", count);
    // st.innerhtml = count + ", ";
    const pre = 0;
    if (pre !== count){
        st.append(count + ",  "); // append data in store id element 
    }
    pre == count;
}

function countStore(){
    let save = localStorage.getItem("countS");
    show.innerHTML = save;
}