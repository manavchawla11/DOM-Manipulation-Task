function incrementCount() {
  const textDiv = document.querySelector("#count");
  let numValue = Number.parseInt(textDiv.textContent);
  textDiv.textContent = ++numValue;
}

function decrementCount() {
    const textDiv = document.querySelector("#count");
    let numValue = Number.parseInt(textDiv.textContent);
    textDiv.textContent = --numValue;
  }

function resetCount() {
  const textDiv = document.querySelector("#count");
  textDiv.textContent = 0;
}
