let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let milisec = document.getElementById("milisec");
let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let hours = 00;
let minutes = 00;
let seconds = 00;
let miliseconds = 00;
let interval;

start.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(timer, 10);
});

stop.addEventListener("click", () => {
  clearInterval(interval);
});

reset.addEventListener("click", () => {
  clearInterval(interval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  miliseconds = 0;
  hr.textContent = "00";
  min.textContent = "00";
  sec.textContent = "00";
  milisec.textContent = "00";
});

const timer = () => {
  miliseconds++;

  if (miliseconds == 100) {
    seconds++;
    miliseconds = 0;
  }

  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }

  if (minutes == 60) {
    hours++;
    minutes = 0;
    seconds = 0;
  }

  let hrs = hours.toString();
  let mins = minutes.toString();
  let secs = seconds.toString();
  let milisecs = miliseconds.toString();

  if (hours < 10) {
    hrs = "0" + hrs;
  }

  if (minutes < 10) {
    mins = "0" + mins;
  }

  if (seconds < 10) {
    secs = "0" + secs;
  }

  if (miliseconds < 10) {
    milisecs = "0" + milisecs;
  }

  hr.textContent = hrs;
  min.textContent = mins;
  sec.textContent = secs;
  milisec.textContent = milisecs;
};
