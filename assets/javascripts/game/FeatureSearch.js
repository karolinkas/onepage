FeatureSearch.prototype = new FeatureBase();        // Here's where the inheritance occurs 
FeatureSearch.prototype.constructor = FeatureSearch;

function FeatureSearch() {
	this.category = 0;
  this.id = 0;
  this.assetId = this.category + "" + this.id;
  this.assetPrefix = gamePrefix + "games/" + this.category + "/";
}

FeatureSearch.prototype.init = function() {
  FeatureBase.prototype.setButtons.call(this);

  // IF THERE IS NO ELEMENT TO PRELOAD
  this.preloader.loadFile({id:this.assetId + "intro1", src:this.assetPrefix + "01.mp3"});
  this.preloader.loadFile({id:this.assetId + "intro2", src:this.assetPrefix + "02.mp3"});
  this.preloader.loadFile({id:this.assetId + "explanation", src:this.assetPrefix + "explanation.mp3"});
  
  FeatureBase.prototype.loadVideo.call(this, "videoSearch", this.assetPrefix + "search_robin_williams.mp4");
  this.preloader.on("complete", this.handlePreloadComplete, this);

  loadingContainer.show();
}

FeatureSearch.prototype.startGame = function() {
  var intro1 = createjs.Sound.play(this.assetId + "intro1");
  intro1.on("complete", this.intro1Complete, this);
}

FeatureSearch.prototype.intro1Complete = function() {
  var intro2 = createjs.Sound.play(this.assetId + "intro2");
  intro2.on("complete", this.intro2Complete, this);
}

FeatureSearch.prototype.intro2Complete = function() {
  animInFeatures();
  setTimer();
}

FeatureSearch.prototype.rightAnswer = function() {
  this.final();
}

FeatureSearch.prototype.wrongAnswer = function() {
  this.final();
}

FeatureSearch.prototype.final = function() {
  var v = this.videos[0].video._tag;
  this.container.append(v);

  createjs.Sound.play(this.assetId + "explanation");

  setTimeout(function(){ v.play() }, 1000);
  setTimeout(function(){ endFeature() }, 1000 + v.duration * 1000);

  TweenMax.to(this.container, .5, {css:{left:0}});
}



