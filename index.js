const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startedTime = 0
let elapsedTime = 0
let currentTime = 0
let paused = true;
let intervalid;
let hrs;
let mins;
let secs;
startBtn.addEventListener("click",() => {
    if(paused){
        paused = false; 
        startedTime = Date.now() - elapsedTime;
        intervalid = setInterval(updateTime,75)
    }
})
pauseBtn.addEventListener("click", () =>{
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startedTime;
        clearInterval(intervalid)
    }
});
resetBtn.addEventListener("click", () =>{
    paused = true;
    clearInterval(intervalid)
    startedTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs=0;
    mins=0;
    secs=0;
    timeDisplay.textContent = "00:00:00";
});

function updateTime(){
    elapsedTime = Date.now() - startedTime;
    secs = Math.floor((elapsedTime/1000) % 60)
    mins = Math.floor((elapsedTime/(1000 * 60)) % 60)
    hrs = Math.floor((elapsedTime/(1000 *60*60)) % 60)
    
   secs = pad(secs);
   mins = pad(mins);
   hrs = pad(hrs);
   timeDisplay.textContent = `${hrs}:${mins}:${secs}`
    function pad(unit){
        return ("0" + unit).length > 2 ? unit : "0"+unit
    }
}