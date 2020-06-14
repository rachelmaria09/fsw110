//navbar
var navbar = document.createElement('Navigation-Bar');
navbar.style.backgroundColor = "lightslategrey";
document.body.append(navbar);

var home = document.createElement("a");
home.textContent = "Home    ";
navbar.appendChild(home);
var about = document.createElement("a");
about.textContent = "About  ";
navbar.appendChild(about);
var ourpets = document.createElement("a");
ourpets.textContent = "Our Pets ";
navbar.appendChild(ourpets);
var contactus = document.createElement("a");
contactus.textContent = "Contact Us ";
navbar.appendChild(contactus);

//h1
var h1 = document.createElement("h1");
var h1text = document.createTextNode("Pet Store");
h1.appendChild(h1text);
h1.style.backgroundColor = "lightgrey";
document.body.appendChild(h1);

//p
var p = document.createElement("p");
var ptext = document.createTextNode("We have a wide variety of happy, healthy pets and we are here to help match you with just the right best friend!");
p.appendChild(ptext);
p.style.backgroundColor = "lightslategrey";
document.body.appendChild(p);

//list
function makeList() {
    let listData = [
        'Dogs',
        'Cats',
        'Birds',
        'Fish',
        'And more!',
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

//footer
var footer = document.createElement("footer");
var footertext = document.createTextNode("Please contact use with any questions - 443-123-4567");
footer.appendChild(footertext);
footer.style.backgroundColor = "lightgrey";
document.body.appendChild(footer);

