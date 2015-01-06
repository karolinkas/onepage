function FeatureSearch() {
	
	var self = this;
	this.id = 0;
	var rightSelection = $(".answer").hasClass("rightAnswer");

	this.init = function() {
		console.log("INIT SEARCH");
		createFeaturesRandomly(self.id);
	}

	this.featureAnswer = function(isRight) {
		

		if (isRight) {

			this.play(rightSelection);
			console.log("YESSSSSS");

		} else {console.log("NOOOOO :(");
	}

	}

	this.play = function(rightSelection){

		searchOnType();
				
		if (rightSelection){
		
			nextFeature();
			
		}
	} 



}