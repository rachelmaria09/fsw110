//addition
function add() {
    let add1 = document.getElementById("add1").value;
    let add2 = document.getElementById("add2").value;
    document.getElementById("result").innerHTML = Number(add1) + Number(add2);
}
let addition = document.getElementById("addButton");
addition.addEventListener("click", add);


//subtraction
function subtract() {
    let subtract1 = document.getElementById("subtract1"). value;
    let subtract2 = document.getElementById("subtract2").value;    
    document.getElementById("result").innerHTML = Number(subtract1) - Number(subtract2);
    }

let subtraction = document.getElementById("subtractButton");
subtraction.addEventListener("click", subtract);

//multiply
function multiply() {
    let times1 = document.getElementById("times1").value;
    let times2 = document.getElementById("times2").value;
    document.getElementById("result").innerHTML = Number(times1) * Number(times2);
}
let multiplication = document.getElementById("timesButton");
multiplication.addEventListener("click", multiply);