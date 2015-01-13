var score = 0;

var featureSearch;

var features = [];
var currentFeature;
var roundNum = 0;
var gameLoader = null;
var isGameLoaded = false;
var isGameStarted = false;
var loadingContainer;
var screenContainer;
var timerContainer;
var controllerContainer;

var screenMinWidth = 500;
var screenMaxWidth = 960;

var totalGameTime = 30;
var gameTime = 3;
var gameTimer = null;

var selectedFeature = 0;
var rightAnswerID = 0;

var score = 0;
var isRightAnswer = false;

var callSound;

var gamePrefix = "assets/game/"


$(function() {
	screenContainer = $("#ScreenContainer");
	timerContainer = $("#TimerContainer");
  	loadingContainer = $("#GameLoading");
  	controllerContainer = $("#ControllerContainer");

  	loadingContainer.show();
  	gameLoader = new createjs.LoadQueue();
  	gameLoader.on("complete", gameLoaderComplete, this);

  	$("#ScoreTxt").html(score);
	//LOAD GENERAL SOUNDS
	for (var i = 0; i < 9; i++) {
		createjs.Sound.registerSound(gamePrefix + "sounds/general/right_answer/0" + (i+1) + ".mp3", "SoundRightAnswer" + i);	
		createjs.Sound.registerSound(gamePrefix + "sounds/general/wrong_answer/0" + (i+1) + ".mp3", "SoundWrongAnswer" + i);	
	}
	createjs.Sound.registerSound(gamePrefix + "sounds/general/call.mp3", "SoundCall");	

	//LOAD COUNTER IMAGES
	for (var i = 0; i < 7; i++) {
		gameLoader.loadFile({id:"counter" + i, src:gamePrefix + "img/counter/" + (i+1) + ".png"});
	}
	
	//NEXT BUTTON
	$("#GameNextBtn").click(function(event) {
		TweenMax.to($("#GameFinish"), .3, {css:{left:"-100%"}});
		TweenMax.to(timerContainer, .5, {css:{marginTop:-300}});
		roundNum++;
		currentFeature = features[roundNum];
		startGame();
	});

	$(".ControlBtn").click(function(){
		var c = $(this).attr('id');
		
		if (c == "ControlL") {
			stepFeature(-1);
		} else if (c == "ControlR") {
			stepFeature(1);
		} else if (c == "ControlOk") {
			selectFeature();
		}

	});

	$( window ).resize(resizeGame);
	resizeGame();

	featureSearch = new FeatureSearch();
	features.push(featureSearch);

	featureControl = new FeatureControl();
	features.push(featureControl);

	currentFeature = features[roundNum];
});


function gameLoaderComplete() {
	isGameLoaded = true;
	if (isGameStarted) startGame();
}

function startGame() {
	isGameStarted = true;
	if (isGameLoaded) {
		$("video").remove();
		gameTime = totalGameTime;
		currentFeature.init();
		$("#RoundCounterTxt").html(roundNum + 1);
		var image = gameLoader.getResult("counter" + roundNum);
		$("#RoundCounterSlice img").remove();
		$("#RoundCounterSlice").append(image);
	}
}

function endRound() {
	if (isRightAnswer) {
		$("#GameFinishTxt").html("&iexcl;Felicidades!");
		currentFeature.rightAnswer();
	} else {
		$("#GameFinishTxt").html("...Ohhh...");
		currentFeature.wrongAnswer();
	}
	$("#ScoreTxt").html(score);
}

function endFeature() {
	$("#GameFinish").css({left:"100%"});
	TweenMax.to($("#GameFinish"), .5, {css:{left:0}, ease:Quad.easeOut});
}

function animInFeatures() {
	for (var i = 0; i < 3; i++) {
		TweenMax.to($(".featureButton").eq(i), .5, {css:{top:0}, delay:i * 0.15, ease:Back.easeOut});
	}
}

function animOutFeatures() {
	for (var i = 0; i < 3; i++) {
		TweenMax.to($(".featureButton").eq(i), .3, {css:{top:200}, delay:i * 0.1, ease:Back.easeIn});
	}
	TweenMax.to($(".featureButton").eq(selectedFeature).find(".active"), .3, {css:{opacity:0}, delay:0.2});
}

function stepFeature(dir) {
	TweenMax.to($(".featureButton").eq(selectedFeature).find(".active"), .3, {css:{opacity:0}});

	selectedFeature += dir;
	if (selectedFeature < 0) selectedFeature = 2;
	if (selectedFeature > 2) selectedFeature = 0;

	TweenMax.to($(".featureButton").eq(selectedFeature).find(".active"), .3, {css:{opacity:1}});
}

function selectFeature() {
	var r = Math.floor((Math.random() * 9));
	var s;
	if (rightAnswerID == selectedFeature) {
		score += gameTime * 100;
		isRightAnswer = true;
		s = createjs.Sound.play("SoundRightAnswer" + r);
	} else {
		s = createjs.Sound.play("SoundWrongAnswer" + r);
		isRightAnswer = false;
		
	}
	animOutFeatures();
	s.on("complete", endRound, this);

	clearTimeout(gameTimer);
}

function resizeGame() {
	var w = $("#ViewContainer").width() * .4;
	if (w < screenMinWidth) w = screenMinWidth;
	if (w > screenMaxWidth) w = screenMaxWidth;
	var h = w * 0.5625;
	var l = ($("#ViewContainer").width() - w) * 0.5;
	var t = ($("#ViewContainer").height() - h) * 0.5;
	screenContainer.css({width:w + "px", height:h + "px", left:l, top:t});

	timerContainer.css({top:(t - 130) + "px"})

	//BUTTON CONTAINER
	$("#ButtonContainer").css({top:(t+h + 15)+"px", height:w * 0.3});

	w = w * 1.75;
	t = t + h;
	h = w * 0.36;
	t -= h * 0.6;
	l = ($("#ViewContainer").width() - w) * 0.5;
	$("#tablestuff").css({width:w, left:l, top:t});

	

	//CONTROLLER
	w = $("#ViewContainer").width() * 0.15;
	if (w > 200) w = 200;
	h = w * 1.96;
	controllerContainer.css({width:w + "px", height:h + "px"});

	var r = w / 321;
	 $(".ControlBtn").css({width:(50 * r) + "px", height:(50 * r) + "px"});

	 $("#ControlOk").css({left:(136*r)+"px", top:(180*r) + "px"});
	 $("#ControlL").css({left:(78*r)+"px", top:(180*r) + "px"});
	 $("#ControlU").css({left:(136*r)+"px", top:(120*r) + "px"});
	 $("#ControlR").css({left:(200*r)+"px", top:(180*r) + "px"});
	 $("#ControlD").css({left:(136*r)+"px", top:(236*r) + "px"});
}


function setTimer() {
	TweenMax.to(timerContainer, 1, {css:{marginTop:0}});
	setTimeout(function(){ timerHandler() }, 1000);
}

function timerHandler() {
	if (gameTime == 0) {
		clearTimeout(gameTimer);
		isRightAnswer = false;
		animOutFeatures();
		endRound();
		console.log("TIMER END!!!");
	} else {
		gameTime--;
		$("#TimerTxt").html(gameTime);
		gameTimer = setTimeout(function(){ timerHandler() }, 1000);
		TweenMax.fromTo($("#TimerLine"), 1, {width:80, ease:Linear.easeNone}, {width:0, ease:Linear.easeNone});
	}
}