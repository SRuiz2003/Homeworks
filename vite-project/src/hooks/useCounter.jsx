import { useState } from "react";
import React from "react";

export const useCounter = (value) => {
    const [counter,setCounter] = useState(value);

    const increment = () =>{
        setCounter(counter + 1)
    }

    const decrease = () =>{
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(value);
    }

    return{
        counter : counter,
        increment,
        decrease,
        reset
    }
}