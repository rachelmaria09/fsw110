// make the box disapear when the user clicks it
var changeBox = document.querySelector(".red-box");

window.addEventListener("click",
    function(e) {
        changeBox.style.display = "none";
    })