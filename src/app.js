import Counter from "./counter/counter.js";
import Timer from "./timer/timer.js";

class App {
  constructor() {
    this.components = [new Counter(), new Timer()];
    this.isMounted = false;
  }

  render() {
    // creating all elements
    let wrapperDiv = document.createElement("div");
    let formDiv = document.createElement("div");
    let h1 = document.createElement("h1");
    // radio one elements
    let radioOneDiv = document.createElement("div");
    let radioOne = document.createElement("input");
    let labelRadioOne = document.createElement("label");
    // radio two elements
    let radioTwoDiv = document.createElement("div");
    let radioTwo = document.createElement("input");
    let labelRadioTwo = document.createElement("label");
    let outputDiv = document.createElement("div");

    // adding classes
    formDiv.classList.add("form-check");
    h1.innerText = "Choose Counter or Timer";

    radioOneDiv.classList.add("form-check");
    radioOne.classList.add("form-check-input");
    radioOne.type = "radio";
    radioOne.name = "choice";
    radioOne.id = "counter-radio";
    labelRadioOne.classList.add("form-check-label");
    labelRadioOne.htmlFor = "counter-radio";
    labelRadioOne.innerText = "Counter";

    radioTwoDiv.classList.add("form-check");
    radioTwo.classList.add("form-check-input");
    radioTwo.type = "radio";
    radioTwo.name = "choice";
    radioTwo.id = "timer-radio";
    labelRadioTwo.classList.add("form-check-label");
    labelRadioTwo.htmlFor = "timer-radio";
    labelRadioTwo.innerText = "Timer";

    outputDiv.classList.add("text-center");
    outputDiv.id = "output";

    // appending elements
    radioOneDiv.append(radioOne, labelRadioOne);
    radioTwoDiv.append(radioTwo, labelRadioTwo);
    formDiv.append(h1, radioOneDiv, radioTwoDiv);
    wrapperDiv.append(formDiv, outputDiv);

    for (let component of this.components) {
      component.mount(outputDiv);
    }

    radioOne.addEventListener("click", () => {
      this.components[0].show();
      this.components[1].hide();
    });
    radioTwo.addEventListener("click", () => {
      this.components[0].hide();
      this.components[1].show();
    });

    return wrapperDiv;
  }

  mount(el) {
    // if (this.isMounted) return;
    if (el) {
      el.appendChild(this.render());
      this.isMounted = true;
    } else {
      document.body.appendChild(this.render());
    }
    for (let component of this.components) {
      component.hide();
    }
  }
}

const app = new App();
const root = document.getElementById("root");
app.mount(root);

const counterRadio = document.getElementById("counter-radio");
const timerRadio = document.getElementById("timer-radio");
