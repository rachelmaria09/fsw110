var h1 = document.createElement("h1");
var h1text = document.createTextNode("Welcome to my JS site!");
h1.appendChild(h1text);
document.body.appendChild(h1);

var p = document.createElement("p");
var ptext = document.createTextNode("All of this was created with JavaScript!");
p.appendChild(ptext);
document.body.appendChild(p);

function makeList() {
    let listData = [
        'Blue',
        'Red',
        'Green',
        'Yellow',
        'Orange',
    ],
    listContainer = document.createElement('div'),
    listElement = document.createElement('ol'),
    numberOfListItems = listData.length,
    listItem,
    i;
    
    document.getElementsByTagName('body') [0].appendChild(listContainer);
    listContainer.appendChild(listElement);

    for (i = 0; i < numberOfListItems; ++i) {
        listItem = document.createElement('li');
        listItem.innerHTML = listData[i];
        listElement.appendChild(listItem);
    }
}
makeList();