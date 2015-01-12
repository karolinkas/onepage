var currentView;

var HOME_VIEW;
var LOGIN_VIEW;
var GAME_VIEW;
var WINNER_VIEW;
var LOSER_VIEW;
var PRIZE_VIEW;
var CONNECT_VIEW;
var AUDIO_VIEW;
var HOWTOPLAY_VIEW;
var PROFILE_VIEW



window.onload = function() {
    HOME_VIEW = $("#HomeView");
    LOGIN_VIEW = $("#LoginView");
    REGISTER_VIEW = $("#RegisterView");
    GAME_VIEW = $("#GameView");
    WINNER_VIEW = $("#WinnerView");
    LOSER_VIEW = $("#LoserView");
    PRIZE_VIEW = $("#PrizeView");
    CONNECT_VIEW = $("#ConnectView");
    PROFILE_VIEW = $("#ProfileView");
    HOWTOPLAY_VIEW = $("#GameView").add($("#HowToPlayView"));
    slide1 = $("#slide1");
    slide2 = $("#slide2");
    slide3 = $("#slide3");
    
    slide2.hide();
    slide3.hide();
    

    currentView = HOME_VIEW;
    currentView.css({
        left: "50%"
    });
    


    $("img:nth-child(1)").click(function() {
        nextView(HOWTOPLAY_VIEW)
    });
    $("img:nth-child(2)").click(function() {
        nextView(GAME_VIEW)
    });
    $("img:nth-child(3)").click(function() {
        nextView(PRIZE_VIEW)
    });

    $("#logo").click(function() {
        nextView(HOME_VIEW)
    });
    $("#LoginButtonContainer").click(function() {
        nextView(LOGIN_VIEW)
    });
    $("#RegisterButton").click(function() {
        nextView(REGISTER_VIEW)
    });
    $(".BackButton").click(function() {
        nextView(HOME_VIEW)
    });
    $(".okButton").click(function() {
        $('#submitButton').submit();
        var valid = validate();
   			if(valid){
         alert("is valid!");       
   		} else {alert( "invalid" );}
    });
    $(".puntosButton").click(function() {
  			nextView(PROFILE_VIEW)
    });


    $(".dot:nth-child(1)").click(function() {
    		slide2.hide();
     		slide3.hide();
     		slide1.show();
        $(".dot:nth-child(1)").addClass("active");
        $(".dot").not(".dot:nth-child(1)").removeClass("active");
    });
     $(".dot:nth-child(2)").click(function() {
     		slide1.hide();
     		slide2.show();
     		slide3.hide();
        $(".dot:nth-child(2)").addClass("active");
        $(".dot").not(".dot:nth-child(2)").removeClass("active");
    });
       $(".dot:nth-child(3)").click(function() {
       	slide2.hide();
     		slide3.show();
     		slide1.hide();
        $(".dot:nth-child(3)").addClass("active");
        $(".dot").not(".dot:nth-child(3)").removeClass("active");
    });

  
    var selectTV = $("#GameView").find($("#newTV"));
    selectTV.append($(".content"));

   //  if( currentView===HOWTOPLAY_VIEW ){
   // 	    var selectTV = $("#GameView").find($("#newTV"));
   //  		selectTV.append($(".content"));
  	// } else {
  		// selectTV.removeChild($(".content"));
  	// }

    $(window).resize(resize);
    resize();

};

function resize() {
    var h = $(window).height();
    var y = (h - HOME_VIEW.height()) * .5;
    LOGIN_VIEW.css({
        top: y
    });

    y = (h - REGISTER_VIEW.height()) * .5;
    REGISTER_VIEW.css({
        top: y
    });

    y = (h - PRIZE_VIEW.height()) * .5;
    PRIZE_VIEW.css({
        top: y
    });

    y = (h - PRIZE_VIEW.height()) * .5;
    PROFILE_VIEW.css({
        top: y
    });
}

function nextView(view) {
    console.log("NEXT VIEW = " + view);
    if (currentView) {
        TweenMax.to(currentView, 0.7, {
            css: {
                left: "-50%"
            },
            ease: Quad.easeInOut
        });
    }

    currentView = view;
    currentView.css({
        left: "150%"
    });
    TweenMax.to(currentView, 0.7, {
        css: {
            left: "50%"
        },
        ease: Quad.easeInOut
    });

}



