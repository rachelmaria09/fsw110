var square = document.getElementById("square");
document.getElementById("square").addEventListener("mouseover", function() {
    square.style.backgroundColor = "blue";
});
document.getElementById("square").addEventListener("mousedown", function() {
    square.style.backgroundColor = "red";
});
document.getElementById("square").addEventListener("mouseup", function() {
    square.style.backgroundColor = "yellow";
});
document.getElementById("square").addEventListener("dblclick", function() {
    square.style.backgroundColor = "green";
});
window.addEventListener("wheel", function() {
    square.style.backgroundColor = "orange";
});
window.addEventListener("keypress", checkKeyPress, false); 
function checkKeyPress(key) {
    if(key.keyCode == "114") {
    square.style.backgroundColor = "red";
    }
    if(key.keyCode == "103") {
        square.style.backgroundColor = "green";
    }
    if(key.keyCode == "111") {
        square.style.backgroundColor = "orange";
    }
    if(key.keyCode == "98") {
        square.style.backgroundColor = "blue";
    }
    if(key.keyCode == "121") {
        square.style.backgroundColor = "yellow";
    }
};