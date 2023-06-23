import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const ExchangeSlice = createSlice({
  name: 'ExchangeSlice',
  initialState,
  reducers: {
    increment: (state) => {     
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = ExchangeSlice.actions

export default ExchangeSlice.reducer