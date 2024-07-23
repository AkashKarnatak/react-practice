import { createSlice } from '@reduxjs/toolkit'

const initialCartState = { numItems: 0, isBumping: false }

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    increment(state) {
      ++state.numItems
    },

    decrement(state) {
      --state.numItems
    },

    startBumping(state) {
      state.isBumping = true
    },

    stopBumping(state) {
      state.isBumping = false
    }
  },
})

export const cartActions = cartSlice.actions
const cartReducer = cartSlice.reducer

export default cartReducer
