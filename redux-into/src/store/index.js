import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter'

const store = configureStore({ reducer: counterSlice })

export default store
