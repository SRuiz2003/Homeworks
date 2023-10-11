import './App.css'
import React from 'react'
import { useReducer } from 'react'

const initialState = [{
    id: new Date().getTime(),
    description:'Hacer los Challenges',
    done: false
}]

export const todoApp = () => {
    const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

    return(
        <>
        
        </>
    )
}

