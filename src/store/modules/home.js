import { createSlice } from '@reduxjs/toolkit'

const homeSlice = createSlice({
  name:"home",
  initialState:{
    productList:[]
  },
  reducers:{
    addNumberAction() {

    }
  }
})
export const { addNumberAction }  = homeSlice.actions
export default homeSlice.reducer