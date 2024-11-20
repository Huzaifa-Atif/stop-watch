var milisecond = document.getElementById("MSec")
var second = document.getElementById("Sec")
var minHeading = document.getElementById("Min")
var hourHeading = document.getElementById("Hour")


var msec = 0
var sec = 0
var min = 0
var hour = 0

var interval;

function start() {
    interval = setInterval(time, 10)
}

function time(){
    msec++
    milisecond.innerHTML = msec

    if (msec === 100) {
       msec = 0 

       sec++
       second.innerHTML = sec
    }

    if (sec === 60) {
        sec = 0
        min++
        minHeading.innerHTML = min
    }

    if (min === 60) {
        sec = 0
        hour++
        hourHeading.innerHTML = hour
    }
    
milisecond.innerHTML = String(msec).padStart(2, "0");
second.innerHTML = String(sec).padStart(2, "0") + ":";
minHeading.innerHTML = String(min).padStart(2, "0") + ":";
hourHeading.innerHTML = String(hour).padStart(2, "0") + ":";
}

function stop() {
    clearInterval(interval)
}

function restart() {
    clearInterval(interval);

    msec = 0;
    sec = 0;
    min = 0;
    hour = 0;

    milisecond.innerHTML = "00";
    second.innerHTML = "00";
    minHeading.innerHTML = "00";
    hourHeading.innerHTML = "00";

    milisecond.innerHTML = String(msec).padStart(2, "0");
    second.innerHTML = String(sec).padStart(2, "0") + ":";
    minHeading.innerHTML = String(min).padStart(2, "0") + ":";
    hourHeading.innerHTML = String(hour).padStart(2, "0") + ":";
}