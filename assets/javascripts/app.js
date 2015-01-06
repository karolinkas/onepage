// navigate through features via mobile
var games = new Array();

// id for the game that is being executed at the currently
var currentGameId = 0;

// element in the games array
var currentGame;


var featureNames = ["Buscador inteligente", "Control del directo", "Grabación", "Aplicaciones", "Multipantalla", "Emisión", "Sugerencias"];


$(function() {

    $("#videocontainer").hide();
    $("#userinput").hide();
    $(".suggestions").hide();
    // create Objects to be added to games array for each feature so you can call each game when you access the array
    games.push(new FeatureSearch());
    games.push(new FeatureControl());


    $('#enter').click(function() {

        checkFeatureButtons();
    })

    currentGame = games[currentGameId];
    // initialise what has to be prepared for the game
    currentGame.init();

});

function nextFeature() {
    // step to next game
    currentGameId++;
    currentGame = games[currentGameId];
    currentGame.init();

}

//check feature buttons for the right answer 
function checkFeatureButtons() {
    // returns Boolean!!  
    var isRightAnswer = $(".feature.active").hasClass("rightAnswer");
    currentGame.featureAnswer(isRightAnswer);

}



