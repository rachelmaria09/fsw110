let form = document.form

function removeItem() {
    this.parentNode.parentNode.removeChild(this.parentNode);
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    for(i=0; i < form.length - 1; i++) {
    //adds items
    let item = document.createElement('li');
    item.textContent = `${form[i].value}`;
    //remove items
    /*let input = document.createElement("input");
    input.type = "button";
    input.value = "Done";
    input.onclick = removeItem;
    item.appendChild(input);*/
    document.getElementsByTagName("ul")[0].append(item);
    }

    let input = document.createElement("input");
    item.appendChild(input);
    input.type = "button";
    input.value = "Done";
    input.onclick = removeItem;


    document.getElementsByTagName("li")[0].append[input];

    form.reset();
});
