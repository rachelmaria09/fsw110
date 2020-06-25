var square = document.getElementById("square");
//Turn square blue with 'mouseover'.
document.getElementById("square").addEventListener("mouseover", function() {
    square.style.backgroundColor = "blue";
});
//Turn square red with 'mousedown'.
document.getElementById("square").addEventListener("mousedown", function() {
    square.style.backgroundColor = "red";
});
//Turn square yellow with 'mouseup'.
document.getElementById("square").addEventListener("mouseup", function() {
    square.style.backgroundColor = "yellow";
});
//Turn square green with 'dblclick'.
document.getElementById("square").addEventListener("dblclick", function() {
    square.style.backgroundColor = "green";
});
//Turn square orange with 'wheel'.
window.addEventListener("wheel", function() {
    square.style.backgroundColor = "orange";
});
//Turn square either blue, red, yellow, green, or orange when first letter of color is typed.
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