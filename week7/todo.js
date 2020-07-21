let form = document.form

function removeItem() {
    this.parentNode.parentNode.removeChild(this.parentNode);
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let item = document.createElement('li');

    for(i=0; i < form.length - 1; i++) {
    //adds items
    item.textContent = `${item.textContent} || ${form[i].value}`;

    document.getElementsByTagName("ul")[0].append(item);
    }

    let input = document.createElement("input");
    item.appendChild(input);
    input.type = "button";
    input.value = "Done";
    input.onclick = removeItem;
    input.style.display = "block";
    document.getElementsByTagName("li")[0].append[input];

    form.reset();
});
