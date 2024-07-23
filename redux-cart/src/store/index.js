import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './modal'
import cartReducer from './cart'

const store = configureStore({ reducer: { modal: modalReducer, cart: cartReducer } })

export default store
