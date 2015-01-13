FeatureControl.prototype = new FeatureBase();        // Here's where the inheritance occurs 
FeatureControl.prototype.constructor = FeatureControl;

function FeatureControl() {
	this.category = 1;
  this.id = 0;
  this.assetId = this.category + "" + this.id;
  this.assetPrefix = gamePrefix + "games/" + this.category + "/";

  this.videoToSeek = 10;
}

FeatureControl.prototype.init = function() {
  FeatureBase.prototype.setButtons.call(this);

  // IF THERE IS NO ELEMENT TO PRELOAD
  this.preloader.loadFile({id:this.assetId + "intro1", src:this.assetPrefix + "01.mp3"});
  this.preloader.loadFile({id:this.assetId + "intro2", src:this.assetPrefix + "02.mp3"});
  this.preloader.loadFile({id:this.assetId + "intro3", src:this.assetPrefix + "03.mp3"});
  this.preloader.loadFile({id:this.assetId + "explanation", src:this.assetPrefix + "explanation.mp3"});
  
  FeatureBase.prototype.loadVideo.call(this, "video", this.assetPrefix + "video.mp4");
  this.preloader.on("complete", this.handlePreloadComplete, this);

  loadingContainer.show();
}

FeatureControl.prototype.startGame = function() {
  var intro1 = createjs.Sound.play(this.assetId + "intro1");
  intro1.on("complete", this.intro1Complete, this);

  video = this.videos[0].video._tag;
  this.container.append(video);

  TweenMax.to(this.container, .5, {css:{left:0}});
  //

  //FeatureBase.prototype.incomingCall.call(this);
}

FeatureControl.prototype.intro1Complete = function() {
  video.play();
  setTimeout(this.showCall.bind(this), 3000);
  setTimeout(this.intro2.bind(this), 5000);
}

FeatureControl.prototype.showCall = function() {
  console.log(this.category);
  FeatureBase.prototype.incomingCall.call(this); 
}

FeatureControl.prototype.intro2 = function() {
  console.log("INTRO 2!!");

  var intro2 = createjs.Sound.play(this.assetId + "intro2");
  intro2.on("complete", this.intro2Complete, this); 

  callSound.volume = 0.5;
}


FeatureControl.prototype.intro2Complete = function() {
  var intro3 = createjs.Sound.play(this.assetId + "intro3");
  intro3.on("complete", this.intro3Complete, this); 
}

FeatureControl.prototype.intro3Complete = function() {
  animInFeatures();
  setTimer();
}

FeatureControl.prototype.rightAnswer = function() {
  this.final();
}

FeatureControl.prototype.wrongAnswer = function() {
  this.final();
}

FeatureControl.prototype.final = function() {
  callSound.stop();
  createjs.Sound.play(this.assetId + "explanation");
  video.pause();
  this.seek();
  FeatureBase.prototype.incomingCallEnd.call(this); 
}

FeatureControl.prototype.seek = function() {
  if (video.currentTime > 7) {
    video.currentTime -= .15; 
    setTimeout(this.seek.bind(this), 100);
  } else {
    video.volume = 1;
    video.play();
    setTimeout(this.videoComplete.bind(this), 5000);
  }
}

FeatureControl.prototype.videoComplete = function() {
  endFeature();
  video.pause();
}



