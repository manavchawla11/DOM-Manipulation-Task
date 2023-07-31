// function showApplication (appName) {
//     const appDiv = document.querySelector(`#${appName}`);
//     appDiv.classList.toggle("hide");
// }

import Counter from "./counter/counter.js";

const root = document.getElementById("root");

const counter = new Counter();
counter.mount(root);

const counter1 = new Counter();
counter1.mount(root);
