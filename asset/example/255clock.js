const id    = (id) => document.getElementById(id);
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
const ts    = (num) => num.toLocaleString('en-US',{minimumIntegerDigits:2});

const alarm = id("beep");

const [SESSION, BREAK] = ["Session","Break"];
const action = {dormant: 'Paused', counting: 'Active'}; 
const startingMinutes = {session: 25, break: 5};

var trueSeconds, state, mode, interval = null;

function drawTime(){
  id("timer-label").innerHTML = `${mode} Timer: ${state}`;
  let minutes = Math.floor(trueSeconds / 60);
  let seconds = trueSeconds % 60;
  id("time-left").innerHTML   = `${ts(minutes)}:${ts(seconds)}`;
}

function reset(mins){
  alarm.pause();
  alarm.currentTime = 0;
  state       = action.dormant;
  trueSeconds = mins * 60;
  clearInterval(interval);
  drawTime();
}

function startPause(){
  switch(state){
    case action.dormant:
      state    = action.counting;
      interval = setInterval(countSeconds, 1000);
      break;
    case action.counting:
      state    = action.dormant;
      clearInterval(interval);
      break;
  }
  drawTime();
}

function countSeconds(){
  trueSeconds--;
  if (trueSeconds < 0) changeMode();
  drawTime();
}

function timeAdjust(inc,target){
  let value = clamp(parseInt(id(target).innerHTML) + inc,1,60);
  id(target).innerHTML = value.toString();
  reset(parseInt(id("session-length").innerHTML));
  mode = SESSION;
}

function changeMode(){
  mode = (mode == SESSION) ? BREAK : SESSION;
  switch(mode){
    case BREAK:
      reset(parseInt(id("break-length").innerHTML));
      break;
    case SESSION:
      reset(parseInt(id("session-length").innerHTML));
      break;
  }
  alarm.play();
  startPause();
}

function init(){
  mode = SESSION;
  reset(startingMinutes.session);
  id('session-length').innerHTML = startingMinutes.session;
  id('break-length').innerHTML   = startingMinutes.break;
}

init();