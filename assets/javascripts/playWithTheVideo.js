window.onload = function() {
    var video = document.getElementById('introvideo');
    var intervalRewind;
    $(video).on('play', function() {
        video.playbackRate = 1.0;
        clearInterval(intervalRewind);
    });
    $(video).on('pause', function() {
        video.playbackRate = 1.0;
        clearInterval(intervalRewind);
    });
    $("#forward").click(function() { // button function for 3x fast speed forward
        video.playbackRate = 3.0;
    });
    $("#rewind").click(function() { // button function for rewind
        intervalRewind = setInterval(function() {
            video.playbackRate = 1.0;
            if (video.currentTime == 0) {
                clearInterval(intervalRewind);
                video.pause();
            } else {
                video.currentTime += -.1;
            }
        }, 30);
    });

};
