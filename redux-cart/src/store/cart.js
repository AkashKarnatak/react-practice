import { createSlice } from '@reduxjs/toolkit'

const initialCartState = { cart: {}, isBumping: false }

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    updateCartItems(state, action) {
      const id = action.payload.id
      const items = action.payload.items
      state.cart[id] = (state.cart[id] || 0) + items
    },

    startBumping(state) {
      state.isBumping = true
    },

    stopBumping(state) {
      state.isBumping = false
    },
  },
})

export const cartActions = cartSlice.actions
const cartReducer = cartSlice.reducer

export default cartReducer
