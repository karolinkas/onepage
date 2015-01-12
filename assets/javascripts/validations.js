var Name = document.RegisterForm.Name.value;
var lastName = document.RegisterForm.lastName.value;
var email = document.RegisterForm.email.value;
var password = document.RegisterForm.password.value;
var city = document.RegisterForm.city.value;
var directions = document.RegisterForm.directions.value;
var bloque = document.RegisterForm.bloque.value;
var piso = document.RegisterForm.piso.value;
var esc = document.RegisterForm.esc.value;
var puerta = document.RegisterForm.puerta.value;
var cp = document.RegisterForm.cp.value;
var telefono = document.RegisterForm.telefono.value;


function validate() {
    if (Name == "") {
        console.log("Please provide your name!");
        document.RegisterForm.lastName.focus();
        return false;
    }
    if (validateEmail(email)) {
        console.log("Please provide a valid Email!");
        document.RegisterForm.email.focus();
        return false;
    }
    if (isNaN(piso)) {
        console.log("Please provide a piso number.");
        document.RegisterForm.piso.focus();
        return false;
    }
    if (isNaN(puerta)) {
        console.log("Please provide a puerta number.");
        document.RegisterForm.puerta.focus();
        return false;
    }
    if (password.length!=8) {
        console.log("enter a valid password!");
        return false;
    }

    if (telefono.length!=9) {
        console.log("enter a valid telefono!");
        return false;
    }

    if (lastName=="") {
        console.log("enter your last name!");
        return false;
    }
    if (city=="") {
        console.log("enter your city!");
        return false;
    }

    if (directions=="") {
        console.log("enter your directions!");
        return false;
    }
    if (bloque=="") {
        console.log("enter your bloque!");
        return false;
    }
    if (cp.length!=5) {
        console.log("enter your cp!");
        return false;
    }
    if (esc=="") {
        console.log("enter your esc!");
        return false;
    }

    return (true);
}

function validateEmail(email) {

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
