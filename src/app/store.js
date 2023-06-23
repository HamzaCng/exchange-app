import { configureStore } from '@reduxjs/toolkit'
import  ExchangeReducer from '../counter/ExchangeSlice'

export const store = configureStore({
  reducer: {
    exchanger: ExchangeReducer
  },
})