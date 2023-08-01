import { generateUniqueId } from "../helpers.js";

class Timer {
  constructor() {
    this.hours = 0;
    this.mins = 0;
    this.secs = 0;
    this.isMounted = false;
    this.uid = generateUniqueId();
    this.intervalId = "";
  }

  startTimer() {
    this.intervalId = setInterval(this.updateTime.bind(this), 1000);
  }

  stopTimer() {
    clearInterval(this.intervalId);
  }

  updateTime() {
    console.log(`${this.hours}:${this.mins}:${this.secs}`);

    if (this.secs == 59) {
      this.mins++;
      this.secs = 0;
      if (this.mins == 59) {
        this.hours++;
        this.mins = 0;
      }
    } else {
      this.secs++;
    }

    this.updateDOM();
  }

  resetTimer() {
    this.hours = 0;
    this.mins = 0;
    this.secs = 0;
    this.updateDOM();
  }

  updateDOM() {
    let timerText = document.getElementById(`timerText-${this.uid}`);
    let h = (this.hours < 10 ? "0" : "") + this.hours;
    let m = (this.mins < 10 ? "0" : "") + this.mins;
    let s = (this.secs < 10 ? "0" : "") + this.secs;
    timerText.innerText = `${h}:${m}:${s}`;
  }

  // <div id="timer">
  //   <p>12:22:25</p>
  //   <button>Start</button>
  //   <button>Stop</button>
  //   <button>Reset</button>
  // </div>

  render() {
    // creating required elements
    let timerDiv = document.createElement("div");
    let timerText = document.createElement("h2");
    let startButton = document.createElement("button");
    let stopButton = document.createElement("button");
    let resetButton = document.createElement("button");

    // populating the elements
    timerDiv.id = `timerDiv-${this.uid}`;
    timerText.id = `timerText-${this.uid}`;
    timerText.innerText = "00:00:00";
    startButton.innerText = "Start";
    stopButton.innerText = "Stop";
    resetButton.innerText = "Reset";

    // button bootstrap classes
    startButton.classList.add("btn", "btn-success", "mx-2");
    stopButton.classList.add("btn", "btn-warning", "mx-2");
    resetButton.classList.add("btn", "btn-danger", "mx-2");

    // providing click functionailty
    startButton.onclick = this.startTimer.bind(this);
    stopButton.onclick = this.stopTimer.bind(this);
    resetButton.onclick = this.resetTimer.bind(this);

    timerDiv.appendChild(timerText);
    timerDiv.appendChild(startButton);
    timerDiv.appendChild(stopButton);
    timerDiv.appendChild(resetButton);

    return timerDiv;
  }

  mount(el) {
    if (this.isMounted) return;
    if (el) {
      el.appendChild(this.render());
      this.isMounted = true;
      return;
    }
    document.body.appendChild(this.render());
  }

  hide() {
    const timerDiv = document.getElementById(`timerDiv-${this.uid}`);
    timerDiv.classList.add("hide");
  }

  show() {
    const timerDiv = document.getElementById(`timerDiv-${this.uid}`);
    timerDiv.classList.remove("hide");
  }
}

export default Timer;
