var featureNames = ["Buscador inteligente", "Control del directo", "Feature 3", "Feature 4", "Feature 5", "Feature 6", "Feature 7"];
var video;

function FeatureBase() {
	this.self = this;
	this.category = null;
	this.id = null;
	this.assetId = null;
	this.assetPrefix = "";
	this.container = $("#ScreenContentContainer");
	this.buttons = $("#ButtonsContainer button");
	this.finishContainer = $("#GameFinish");
	
	this.preloader = new createjs.LoadQueue();
	this.preloader.installPlugin(createjs.Sound);
	this.videos = [];
	this.videoLoaderCounter = 0;
	this.isPreloadLoaded = false;
	this.isVideosLoaded = false;

	this.video = null;

}

FeatureBase.prototype.finish = function(isRightAnswer) {
	TweenMax.to(this.finishContainer, 1, {css:{left:"0px"}});
}

FeatureBase.prototype.loadVideo = function(_id, _url) {

	var videoItem = new createjs.LoadItem().set({src:_url, maintainOrder:true});
	var video = new createjs.VideoLoader(videoItem);

	video.on("complete", this.handleVideoComplete, this);
	video.load();

	var o = {video:video, id:_id};
	this.videos.push(o);
}

FeatureBase.prototype.handleAllLoaded = function() {
	loadingContainer.hide();
	this.startGame();

	console.log("ALL VIDEO IS LOADED");
}

FeatureBase.prototype.handlePreloadComplete = function(event) {
	this.isPreloadLoaded = true;
 	if (this.isVideosLoaded) {
 		this.handleAllLoaded();
 	}
}

FeatureBase.prototype.handleVideoComplete = function(event) {
	
	this.videoLoaderCounter++;
	if (this.videoLoaderCounter == this.videos.length) {
		this.isVideosLoaded = true;
		if (this.isPreloadLoaded) this.handleAllLoaded();
	}
}

FeatureBase.prototype.setButtons = function() {
	var randNames = featureNames.slice();
    // remove one element in the position of the one with the right answer
    randNames.splice(this.category, 1);
    randNames = shuffle(randNames);
    rightAnswerID = Math.floor(Math.random() * 3);
    randNames.splice(rightAnswerID, 0, featureNames[this.category]);
	
	for (var i = 0; i < 3; i++) {
        var button = $(".featureButton:nth-child(" + (i + 1) + ")").find(".featureName");
        button.html(randNames[i]);
    }
}

FeatureBase.prototype.incomingCall = function() {
	TweenMax.to($("#IncomingCall"), .5, {css:{right:"130px"}, ease:Back.easeOut});
	video.volume = 0;
	callSound = createjs.Sound.play("SoundCall");
	callSound.volume = 1;
}

FeatureBase.prototype.incomingCallEnd = function() {
	TweenMax.to($("#IncomingCall"), .5, {css:{right:"-300px"}, ease:Back.easeIn});
	callSound.volume = 0;
}

function shuffle(array) {
    var i = array.length - 1,
        j = 0,
        temp;
    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        // swap randomly chosen element with current element    
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
