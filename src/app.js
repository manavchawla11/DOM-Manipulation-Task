import Counter from "./counter/counter.js";
import Timer from "./timer/timer.js";

const outputDiv = document.getElementById("output");

const counter = new Counter();
counter.mount(outputDiv);

const timer = new Timer();
timer.mount(outputDiv);
timer.hide();

const counterRadio = document.getElementById("counter-radio");
const timerRadio = document.getElementById("timer-radio");

counterRadio.addEventListener("click", (e) => {
  counter.show();
  timer.hide();
});

timerRadio.addEventListener("click", (e) => {
  counter.hide();
  timer.show();
});
