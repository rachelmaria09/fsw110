
for (let i = 0; i < 10; i++) { //establish for loop
    var heading = document.createElement("h1"); //create the element desired
    document.body.append(heading); //choose placement of element
    heading.textContent = "Hello World"; //create text
    document.getElementById("heading"); //retrieve element desired
    heading.style.color = "blue"; //give element text color
    heading.style.fontWeight = "lighter"; //make font weight lighter
    console.log('Hello World'); //log to console
};

const names = ["steve", " larry", " joe", " shirley", " steph", " nate", " rick", " emily"]; //establish array

for (var i = 0; i < names.length; i++) { //establish for loop
    const person = names[i]; //give variable to each specific item in the array
    const list = document.createElement("ul"); //create the element desired
    document.body.append(list); //choose placement of element
    list.textContent = names[i]; //create text
    console.log(names[i]); //log to console
}
