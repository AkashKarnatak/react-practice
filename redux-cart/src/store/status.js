import { createSlice } from '@reduxjs/toolkit'

const initialStatus = {
  status: {
    status: '',
    title: '',
    message: '',
    showStatus: false,
  }
}

const statusSlice = createSlice({
  name: 'status',
  initialState: initialStatus,
  reducers: {
    updateStatus(state, action) {
      state.status = action.payload
    },
  },
})

export const statusActions = statusSlice.actions

const statusReducer = statusSlice.reducer
export default statusReducer
