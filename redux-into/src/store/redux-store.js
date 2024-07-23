import { createStore } from "redux";

const initialCounterState = {
  counter: 0
}

const counterReducer = (state, action) => {
  return initialCounterState
}

const store = createStore(counterReducer)

export default store
