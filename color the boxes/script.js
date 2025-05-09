//MY METHOD
function randomnumber() {
    return Math.random();
}

let randomcolor = randomnumber();
let randombg = randomnumber();

// function to call all other functions for onclick
function change() {
    colorb1();
    colorb2();
    colorb3();
    colorbg1();
    colorbg2();
    colorbg3();
}
function colorb1() {
    // color for box 1
    let randomcolor = randomnumber();
    if (randomcolor<0.33) {
        document.getElementById("box1").style.color="red";
    }
    else if (randomcolor>0.33 && randomcolor<0.66){
        document.getElementById("box1").style.color="green";
    }
    else{
        document.getElementById("box1").style.color="blue";
    }
}
function colorb2() {
    // color for box 2
    let randomcolor = randomnumber();
    if (randomcolor<0.33) {
        document.getElementById("box2").style.color="red";
    }
    else if (randomcolor>0.33 && randomcolor<0.66){
        document.getElementById("box2").style.color="green";
    }
    else{
        document.getElementById("box2").style.color="blue";
    }
}
function colorb3() {
    // color for box 3
    let randomcolor = randomnumber();
    if (randomcolor<0.33) {
        document.getElementById("box3").style.color="red";
    }
    else if (randomcolor>0.33 && randomcolor<0.66){
        document.getElementById("box3").style.color="green";
    }
    else{
        document.getElementById("box3").style.color="blue";
    }
}
function colorbg1() {
    // bg for box 1
    let randombg = randomnumber();
    if (randombg<0.33) {
        document.getElementById("box1").style.backgroundColor="red";
    }
    else if (randombg>0.33 && randombg<0.66){
        document.getElementById("box1").style.backgroundColor="green";
    }
    else{
        document.getElementById("box1").style.backgroundColor="blue";
    }
}
function colorbg2() {
    // bg for box 2
    let randombg = randomnumber();
    if (randombg<0.33) {
        document.getElementById("box2").style.backgroundColor="red";
    }
    else if (randombg>0.33 && randombg<0.66){
        document.getElementById("box2").style.backgroundColor="green";
    }
    else{
        document.getElementById("box2").style.backgroundColor="blue";
    }
}
function colorbg3() {
    // bg for box 3
    let randombg = randomnumber();
    if (randombg<0.33) {
        document.getElementById("box3").style.backgroundColor="red";
    }
    else if (randombg>0.33 && randombg<0.66){
        document.getElementById("box3").style.backgroundColor="green";
    }
    else{
        document.getElementById("box3").style.backgroundColor="blue";
    }
}