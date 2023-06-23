import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../counter/ExchangeSlice'

export function Counter() {
  const count = useSelector((state) => state.exchanger.value)
  const dispatch = useDispatch()

  return (
    <div>        
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Arttir
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Azalt
      </button>
    </div>
    
  )
}