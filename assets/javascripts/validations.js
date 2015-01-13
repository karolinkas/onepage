function validateLogin() {

    var emailLogin = document.LoginForm.emailLogin;
    var passwordLogin = document.LoginForm.passwordLogin;
    var val = true;

    if (passwordLogin.value.length < 4) {
        console.log("enter a valid password!");
        passwordLogin.className += 'error';

        val = false;
    }

    if (!validateEmail(emailLogin.value)) {
        console.log("Please provide a valid Email!");
        emailLogin.className += 'error';

        val = false;
    }
    
    return val;

}


function validate() {

    var name = document.RegisterForm.Name;
    var lastName = document.RegisterForm.lastName;
    var email = document.RegisterForm.email;
    var password = document.RegisterForm.password;
    var city = document.RegisterForm.city;
    var directions = document.RegisterForm.directions;
    var block = document.RegisterForm.block;
    var floor = document.RegisterForm.floor;
    var esc = document.RegisterForm.esc;
    var door = document.RegisterForm.door;
    var zip = document.RegisterForm.zip;
    var phone = document.RegisterForm.phone;


    $("#RegisterView input").removeClass("error");

    var val = true;
    if (password.value.length < 4) {
        console.log("enter a valid password!");
        password.className += 'error';

        val = false;
    }

    if (!validateEmail(email.value)) {
        console.log("Please provide a valid Email!");
        email.className += 'error';

        val = false;
    }

    if (name.value == "") {
        console.log("Please provide your name!");
        name.className += 'error';

        val = false;
    }

    if (floor.value == "") {
        console.log("Please provide a piso number.");
        floor.className += 'error';

        val = false;
    }
    if (door.value == "") {
        console.log("Please provide a puerta number.");
        door.className += 'error';

        val = false;
    }


    if (phone.value.length != 9) {
        console.log("enter a valid telefono!");
        phone.className += 'error';

        val = false;
    }

    if (lastName.value == "") {
        console.log("enter your last name!");
        lastName.className += 'error';

        val = false;
    }
    if (city.value == "") {
        console.log("enter your city!");
        city.className += 'error';

        val = false;
    }

    if (directions.value == "") {
        console.log("enter your directions!");
        directions.className += 'error';

        val = false;
    }
    if (block.value == "") {
        block.className += 'error';

        console.log("enter your bloque!");
        val = false;
    }
    if (zip.value.length != 5) {
        zip.className += 'error';

        console.log("enter your cp!");
        val = false;
    }
    if (esc.value == "") {
        esc.className += 'error';

        console.log("enter your esc!");
        val = false;
    }

    return val;
}

function validateEmail(email) {

    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return re.test(email);
}
