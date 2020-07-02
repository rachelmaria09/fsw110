function myFunction() {
    //first name
    var firstValue = document.getElementById("fname").value;

    //last name
    var secondValue = document.getElementById("lname").value;

    //age
    var ageValue = document.getElementById("age").value;

    //gender
    var genderValue = document.form1.gender.value;
    console.log(genderValue);

    //destination
    var selectBox = document.getElementById("dest");

    //dietary restrictions
    var dietRest = [];
    var checkedBoxes = document.querySelectorAll("input[name=diet]:checked");
    for(var i = 0; i < checkedBoxes.length; i++) {
        dietRest.push(checkedBoxes[i].value);
    };

    //alert message
    alert("First name: " + firstValue 
    + "\n Last name: " + secondValue 
    + "\n Age: " + ageValue 
    + "\n Gender: " + genderValue 
    + "\n Location: " + selectBox.options[selectBox.selectedIndex].value 
    + "\n Dietary restrictions: " + dietRest);

};
//});
