// should count 30 seconds and the stop level of game
// no websocket connection yet

$(function() {

 $("#timeout").click(function(){
      CreateTimer("timer",30);
      });

})


var Timer;
var TotalSeconds;


function CreateTimer(TimerID, Time) {
  Timer = $("#timetogo");
  TotalSeconds = Time;

  UpdateTimer();
  window.setTimeout("Tick()", 1000);
  
}

function Tick() {
  if (TotalSeconds <= 0) {
    return;
  }
  TotalSeconds -= 1;
  UpdateTimer();
  window.setTimeout("Tick()", 1000);
}

function UpdateTimer() {

    var Seconds = TotalSeconds;

  var Days = Math.floor(Seconds / 86400);
  Seconds -= Days * 86400;

  var Hours = Math.floor(Seconds / 3600);
  Seconds -= Hours * (3600);

  var Minutes = Math.floor(Seconds / 60);
  Seconds -= Minutes * (60);


  var TimeStr = ((Days > 0) ? Days + " days " : "") + LeadingZero(Hours) + ":" + LeadingZero(Minutes) + ":" + LeadingZero(Seconds)

  Timer.html(TimeStr);

}

//  proper format for time

function LeadingZero(Time) {

  return (Time < 10) ? "0" + Time : + Time;
 
}


