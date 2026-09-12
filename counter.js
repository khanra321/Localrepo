let count = 0;

function countUpdate(){
    document.getElementById("counting").innerHTML = count;
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
    let st = document.getElementById("store");
    // st.innerhtml = count + ", ";
    const pre = 0;
    if (pre !== count){
        st.append(count + ", "); // append data in store id element 
    }
    pre == count;
}

function countStore(){
    let save = localStorage.getItem("countS");
    count = save;
    countUpdate();
}