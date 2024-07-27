import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './modal'
import cartReducer from './cart'
import productReducer from './product'
import statusReducer from './status'

const store = configureStore({
  reducer: {
    modal: modalReducer,
    cart: cartReducer,
    product: productReducer,
    status: statusReducer,
  },
})

export default store
