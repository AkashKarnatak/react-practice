import { configureStore } from '@reduxjs/toolkit'

const initialCounterState = {
  counter: 0,
  showCounter: true,
}

export const actions = {
  INCREMENT: 'increment',
  INCREASE: 'increase',
  DECREMENT: 'decrement',
  TOGGLE: 'toggle'
}

const counterReducer = (state, action) => {
  if (action.type === actions.INCREMENT) {
    return { ...state, counter: state.counter + 1 }
  }

  if (action.type === actions.INCREASE) {
    return { ...state, counter: state.counter + action.payload }
  }

  if (action.type === actions.DECREMENT) {
    return { ...state, counter: state.counter - 1 }
  }

  if (action.type === actions.TOGGLE) {
    return { ...state, showCounter: !state.showCounter }
  }

  return initialCounterState
}

const store = configureStore({ reducer: counterReducer })

export default store
