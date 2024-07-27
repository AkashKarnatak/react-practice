import { createSlice } from '@reduxjs/toolkit'
import { statusActions } from './status'

const initialProductState = {
  products: [],
}

const productSlice = createSlice({
  name: 'product',
  initialState: initialProductState,
  reducers: {
    updateProducts(state, action) {
      console.log(action)
      state.products = action.payload
    },
  },
})

export const fetchProductData = () => {
  return async (dispatch) => {
    dispatch(
      statusActions.updateStatus({
        status: 'loading',
        title: 'Loading',
        message: 'Loading...',
        showStatus: true,
      }),
    )
    try {
      const res = await fetch('http://localhost:8080/api/products')
      if (!res.ok) {
        throw new Error('Something went wrong when fetching products')
      }
      const data = await res.json()
      dispatch(productActions.updateProducts(data.products)) // save data here
      dispatch(
        statusActions.updateStatus({
          status: 'success',
          title: 'Success',
          message: 'Fetched products data successfully',
          showStatus: true,
        }),
      )
    } catch (e) {
      dispatch(
        statusActions.updateStatus({
          status: 'error',
          title: 'Failed',
          message: 'Something went wrong fetching products data',
          showStatus: true,
        }),
      )
    }
  }
}

export const productActions = productSlice.actions
const productReducer = productSlice.reducer

export default productReducer
