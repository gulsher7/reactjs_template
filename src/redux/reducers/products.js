import { createSlice } from '@reduxjs/toolkit'

const saveProducts = createSlice({
    name: 'products',
    initialState: {
      data: []
    },
    reducers: {
      saveAllProcuts: (state, action) => {
        state.data = action.payload;
      },
    }
  })
  
  export const { saveAllProcuts } = saveProducts.actions
  
  export default saveProducts.reducer