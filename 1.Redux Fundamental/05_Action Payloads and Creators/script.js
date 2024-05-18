// select DOM elements
const incrementElm = document.getElementById("increment");
const decrementElm = document.getElementById("decrement");
const counterElm = document.getElementById("counter");

// action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

//action creators
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};
//initial state

const initialState = {
  value: 0,
};

// create reducer function

function counterReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
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
  store.dispatch(increment(5));
});

decrementElm.addEventListener("click", () => {
  store.dispatch(decrement(2));
});
