function myFunction() {
    var firstValue = document.getElementById("fname").value;
    var secondValue = document.getElementById("lname").value;
    var ageValue = document.getElementById("age").value;
    alert("First name: " + firstValue + "\n Last name: " + secondValue + "\n Age: " + ageValue);
    var formReset = document.getElementById("form1").reset();
};