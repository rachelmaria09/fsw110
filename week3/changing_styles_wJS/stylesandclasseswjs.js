for (let i = 0; i < 5; i++) {
    var heading = document.createElement("h2");
    document.body.append(heading);
    heading.textContent = "assignment two";
    document.getElementById("heading");
    heading.style.color = "blue";
    heading.style.fontSize = "20px";
    heading.style.fontWeight = "lighter";
    heading.style.fontFamily = "sans-serif";
    heading.style.color = "cornflowerblue";
    console.log('assignment two');
}

document.getElementById("#heading").classList.add("border");
