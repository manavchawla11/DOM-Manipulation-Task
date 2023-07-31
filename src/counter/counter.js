import { generateUniqueId } from "../helpers.js";

class Counter {
  constructor() {
    this.count = 0;
    this.isMounted = false;
    this.uid = generateUniqueId();
  }

  increment() {
    this.count++;
    console.log(this.count);
    this.updateDOM();
  }

  decrement() {
    this.count--;
    this.updateDOM();
  }

  reset() {
    this.count = 0;
    this.updateDOM();
  }

  updateDOM() {
    let counterText = document.getElementById(`countValue-${this.uid}`);
    counterText.innerText = `Count: ${this.count}`;
  }

  render() {
    // creating required elements
    let counterDiv = document.createElement("div");
    let counterText = document.createElement("p");
    let incButton = document.createElement("button");
    let decButton = document.createElement("button");
    let resetButton = document.createElement("button");

    // populating the elements
    counterDiv.id = `counter-${this.uid}`;
    counterText.id = `countValue-${this.uid}`;
    counterText.innerText = `Count: ${this.count}`;
    incButton.innerText = "+";
    decButton.innerText = "-";
    resetButton.innerText = "Reset";

    // providing click functionailty
    incButton.onclick = this.increment.bind(this);
    decButton.onclick = this.decrement.bind(this);
    resetButton.onclick = this.reset.bind(this);

    counterDiv.appendChild(counterText);
    counterDiv.appendChild(incButton);
    counterDiv.appendChild(decButton);
    counterDiv.appendChild(resetButton);

    return counterDiv;
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
}

export default Counter;
