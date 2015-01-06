function FeatureControl() {
	var self = this;
	this.id = 1;

	this.init = function() {
		createFeaturesRandomly(self.id);
		console.log("INIT CONTROL");
	}


	this.featureAnswer = function(isRight) {
		if (isRight) this.play();
		else console.log("NOOOOO :(");
	}

	this.play = function() {
		console.log("YESSSSSS");
 		$("#videocontainer").show();
	}

	
}