import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './modal'
import cartReducer from './cart'
import productReducer from './product'

const store = configureStore({
  reducer: { modal: modalReducer, cart: cartReducer, product: productReducer },
})

export default store
