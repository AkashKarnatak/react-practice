import { createStore } from 'redux'

const initialCounterState = {
  counter: 0,
}

export const actions = {
  INCREMENT: 'increment',
  INCREASE: 'increase',
  DECREMENT: 'decrement',
}

const counterReducer = (state, action) => {
  if (action.type === actions.INCREMENT) {
    return { counter: state.counter + 1 }
  }

  if (action.type === actions.INCREASE) {
    return { counter: state.counter + action.payload }
  }

  if (action.type === actions.DECREMENT) {
    return { counter: state.counter - 1 }
  }

  return initialCounterState
}

const store = createStore(counterReducer)

export default store
