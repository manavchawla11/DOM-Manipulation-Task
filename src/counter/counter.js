function incrementCount() {
  const textDiv = document.querySelector("#count");
  let numValue = Number.parseInt(textDiv.textContent);
  console.log(textDiv);
  textDiv.textContent = ++numValue;
}

function resetCount() {
  const textDiv = document.querySelector("#count");
  textDiv.textContent = 0;
}
