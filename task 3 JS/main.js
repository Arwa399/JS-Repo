// clock
function clock(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    hours = (hours< 10) ? "0" + hours : hours;
    minutes = (minutes< 10) ? "0" + minutes : minutes;
    seconds = (seconds< 10) ? "0" + seconds : seconds;

    var time = hours +":"+ minutes+":"+ seconds;

    document.getElementById("demo2").innerHTML = time;

    setTimeout(clock,1000);
    
    if(hours >12){
        hours = hours - 12;
    }
    else if (hours === 0) {
        hours = 12;
    }
}
clock();

// stopwatch
var hours = 0;
var minutes = 0;
var seconds = 0;
var stopwatchInterval;

function updateTime(){
   seconds ++;

    if(minutes == 60){
        minutes = 0;
        hours ++;
    }
    if(seconds == 60){
        seconds = 0;
        minutes ++;
    }
    var displayHours = (hours < 10) ? "0" + hours : hours;
    var displayMinutes = (minutes < 10) ? "0" + minutes : minutes;
    var displaySeconds = (seconds < 10) ? "0" + seconds : seconds;
    
   document.getElementById("time").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}
function start(){
   
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(updateTime, 1000); 
    }
}
function stop(){
    clearInterval(stopwatchInterval); 
    stopwatchInterval = null;
}
function reset(){
    stop();
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById("time").innerHTML = "00:00:00";
}
  
//
