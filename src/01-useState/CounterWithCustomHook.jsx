import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter(10)


  return (
    <>
        <h1>CounterWithCustomHook: <small>{counter}</small></h1>
        <hr />

        <button className='btn btn-primary' onClick={() => increment()}>+1</button>
        <button className='btn btn-primary' onClick={() => decrement()}>-1</button>
        <button className='btn btn-primary' onClick={() => reset()}>Reset</button>
    </>
  )
}
