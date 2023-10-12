import './App.css'
import React from 'react'
import { useReducer } from 'react'
import {TodoAdd} from './components/TodoAdd'
import {TodoList} from './components/TodoList'

const initialState = [{
    id: new Date().getTime(),
    description:'Hacer los Challenges',
    done: false
}]

export const todoApp = () => {
    const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

    const handleNewTodo = (todo) => {
        const action = {
            type:'Add todo',
            payload:todo
        }
        dispatchTodo(action);
    }

    return(
        <>
        <h1> TodoApp:10, <small>pendientes: 2</small></h1>
        <hr />

        <div>
            <div>
                <TodoList todos={todos}/>
            </div>
            <div>
                <TodoAdd onNewTodo={handleNewTodo}/>
            </div>
        </div>
        </>
    )
}

