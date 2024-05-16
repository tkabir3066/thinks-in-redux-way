// select DOM elements
const counterElm = document.querySelector("#counter");
const incrementBtnElm = document.querySelector("#increment");
const decrementBtnElm = document.querySelector("#decrement");

// initial state
let count = 0;

incrementBtnElm.addEventListener("click", () => {
  count++;
  counterElm.innerText = count;
});
decrementBtnElm.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counterElm.innerText = count;
  }
});
