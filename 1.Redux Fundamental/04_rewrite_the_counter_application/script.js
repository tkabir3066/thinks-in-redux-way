// select DOM elements
const incrementElm = document.getElementById("increment");
const decrementElm = document.getElementById("decrement");
const counterElm = document.getElementById("counter");

//initial state

const initialState = {
  value: 0,
};

// create reducer function

function counterReducer(state = initialState, action) {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - 1,
    };
  } else {
    return state;
  }
}

// create store

let store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterElm.innerText = state.value.toString();
};

// update ui initially
render();

store.subscribe(render);

// button click listeners

incrementElm.addEventListener("click", () => {
  store.dispatch({
    type: "increment",
  });
});

decrementElm.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
  });
});
