let hours = 0,
  minutes = 0,
  seconds = 0;
let intervalId;

// Form for duration of timer.
const form = document.getElementById("timer-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  hours = Number.parseInt(document.querySelector("#hours").value);
  minutes = Number.parseInt(document.querySelector("#mins").value);
  seconds = Number.parseInt(document.querySelector("#secs").value);
  // const secsLeft = hours * 3600 + minutes * 60 + s;
  intervalId = setInterval(showRemainingTime, 1000);
});

function showRemainingTime() {
  let h = (hours < 10 ? "0" : "") + hours;
  let m = (minutes < 10 ? "0" : "") + minutes;
  let s = (seconds < 10 ? "0" : "") + seconds;
  const timerOutput = document.querySelector("#timer-output");
  timerOutput.textContent = `${h}H : ${m}M : ${s}S`;
  console.log(`${h}:${m}:${s}`);
  if (seconds == 0 && hours == 0 && minutes == 0) {
    clearInterval(intervalId);
    timerOutput.textContent = "TIME IS UP!";
  }
  if (seconds > 0) {
    seconds--;
  } else {
    seconds = 59;
    if (minutes > 0) {
      minutes--;
    } else {
      minutes = 59;
      if (hours > 0) {
        hours--;
      }
    }
  }
}

function stopTimer() {
  clearInterval(intervalId);
  const timerOutput = document.querySelector("#timer-output");
  timerOutput.textContent = "00:00:00";
}
