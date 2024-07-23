import { createSlice } from '@reduxjs/toolkit'

const initialModalState = { isVisible: false }

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialModalState,
  reducers: {
    hide(state) {
      state.isVisible = false
    },

    show(state) {
      state.isVisible = true
    },
  },
})

export const modalActions = modalSlice.actions
const modalReducer = modalSlice.reducer

export default modalReducer
