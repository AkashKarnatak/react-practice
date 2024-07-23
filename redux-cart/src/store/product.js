import { createSlice } from '@reduxjs/toolkit'

const initialProductState = {
  products: [
    {
      id: 1,
      name: 'My first book',
      desc: 'The first book I ever wrote',
      price: 6,
    },
    {
      id: 2,
      name: 'My second book',
      desc: 'The second book I ever wrote',
      price: 5,
    },
  ],
}

const productSlice = createSlice({
  name: 'product',
  initialState: initialProductState,
  reducers: {},
})

export const productActions = productSlice.actions
const productReducer = productSlice.reducer

export default productReducer
