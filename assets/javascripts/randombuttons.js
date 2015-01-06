function createFeaturesRandomly(rightId) {


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

    // creates duplicate of featureNames-Array
    var randNames = featureNames.slice();
    // remove one element in the position of the one with the right answer
    randNames.splice(rightId, 1);
    // shuffle all of it
    randNames = shuffle(randNames);

    // Create position in array for right answer 
    var rightAnswerID = Math.floor(Math.random() * 3);
    // add the shuffled element to the array that allready contains the     
    randNames.splice(rightAnswerID, 0, featureNames[rightId]);
    // console.log(randNames);

    $(".feature").removeClass("rightAnswer");
    $(".feature:nth-child(" + (rightAnswerID + 1) + ")").addClass("rightAnswer");

    for (var i = 0; i < 3; i++) {
        var button = $(".feature:nth-child(" + (i + 1) + ")");
        button.html(randNames[i]);
    }
}
