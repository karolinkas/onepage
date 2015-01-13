var finalUrl = "https://boiling-island-5985.herokuapp.com";
var email = document.RegisterForm.email.value;

var requestPassword = function() {

    $.ajax({
        type: "POST",
        url: finalUrl + '/forgot_password',
        data: {
            email: 'email@example.com'
        },
        success: function(data) {

            console.log(data);
        },
        error: function() {
            alert('Error occured');
        }
    });
}


var loginUser = function() {

    var emailLogin = document.LoginForm.emailLogin.value;
    var passwordLogin = document.LoginForm.passwordLogin.value;

    console.log(passwordLogin+emailLogin);

    $.ajax({
        type: "POST",
        url: finalUrl + "/login?=r" + Math.random() * 1000,
        data: {
            email: emailLogin,
            password: passwordLogin
        },
        success: function(data) {

            console.log("I logged in!");
        },
        error: function() {
            alert('Error occured');
        }

    });
}

function registerUser() {

    var name = document.RegisterForm.Name.value;
    var email = document.RegisterForm.email.value;
    var password = document.RegisterForm.password.value;
    var lastName = document.RegisterForm.lastName.value;
    var city = document.RegisterForm.city.value;
    var directions = document.RegisterForm.directions.value;
    var block = document.RegisterForm.block.value;
    var floor = document.RegisterForm.floor.value;
    var esc = document.RegisterForm.esc.value;
    var door = document.RegisterForm.door.value;
    var zip = document.RegisterForm.zip.value;
    var phone = document.RegisterForm.phone.value;

    $.ajax({
        type: "POST",
        url: finalUrl + "/users?=r" + Math.random() * 1000,
        data: {
            name: name,
            lastName: lastName,
            email: email,
            password: password,
            phone: phone,
            directions: directions,
            block: block,
            floor: floor,
            door: door,
            city: city,
            zip: zip,
            user_type: '1'
        },
        success: function(data) {
            // if (data.registry == "Ok") {
            //     user = data.user;
            //     console.log(data);
            //     console.log("USER ID = " + user.id);
            // } else {
            //     console.log("EMAIL IS USED");
            //     // HANDLE ERROR
            // }
            console.log(data);

        },
        error: function() {
            alert('Error occured');
        }
    });


}

var sendGamesPlayed = function() {

    $.ajax({
        type: "PUT",
        url: finalUrl + '/game_start',
        success: function(data) {

            console.log(data);
        },
        error: function() {
            alert('Error occured');
        }
    });
}

var sendGamesFinished = function() {

    $.ajax({
        type: "PUT",
        url: finalUrl + '/game_finish',
        success: function(data) {

            console.log(data);
        },
        error: function() {
            alert('Error occured');
        }
    });
}

var getUserScore = function(user_id) {
    $.ajax({
        type: "GET",
        url: finalUrl + "/users/" + user_id + "/score",
        success: function(data) {

            console.log(data);
        },
        error: function() {
            alert('Error occured');
        }
    });
}
