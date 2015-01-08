
var currentView;

var HOME_VIEW;
var LOGIN_VIEW;
var REGISTER_VIEW;
var GAME_VIEW;

window.onload = function() {
    HOME_VIEW = $("#HomeView");
    LOGIN_VIEW = $("#LoginView");
    REGISTER_VIEW = $("#RegisterView");
    GAME_VIEW = $("#GameView");

    currentView = HOME_VIEW;
    currentView.css({left:"50%"});

    $("img:nth-child(1)").click();
    $("img:nth-child(2)").click(function () {nextView(GAME_VIEW)});
    $("img:nth-child(3)").click();

    $("#logo").click(function () {nextView(HOME_VIEW)});
		$("#LoginButtonContainer").click(function () {nextView(LOGIN_VIEW)});
		$("#RegisterButton").click(function () {nextView(REGISTER_VIEW)});
    $(".BackButton").click(function () {nextView(HOME_VIEW)});
    

    $( window ).resize(resize);
    resize();

};

function resize() {
	var h = $( window ).height();
	var y = (h - HOME_VIEW.height()) * .5;
	LOGIN_VIEW.css({top:y});

	y = (h - REGISTER_VIEW.height()) * .5;
	REGISTER_VIEW.css({top:y});
}

function nextView(view) {
	console.log("NEXT VIEW = " + view);
	if (currentView) {
		TweenMax.to(currentView, 0.7, {css:{left:"-50%"}, ease:Quad.easeInOut});
	}
	
	currentView = view;
	currentView.css({left:"150%"});
	TweenMax.to(currentView, 0.7, {css:{left:"50%"}, ease:Quad.easeInOut});

	
}


