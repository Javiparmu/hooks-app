import { useState } from "react";

export const useCounter = (initialState = 0) => {
    const [counter, setCounter] = useState(initialState);

    const increment = (value = 1) => {
        setCounter((counter) => counter + value);
    }

    const decrement = (value = 1) => {
        if (counter === 0) return
        setCounter((counter) => counter - value);
    }

    const reset = () => {
        setCounter(initialState);
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }
}
