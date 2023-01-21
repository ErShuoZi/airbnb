import {configureStore} from '@reduxjs/toolkit'
import  homeReducer  from '@/store/modules/home'
import  entireReducer from '@/store/modules/entire/reducer'

const store = configureStore({
  reducer:{
    home:homeReducer,
    entire:entireReducer
  }
})

export default store