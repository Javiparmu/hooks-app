import { useEffect, useReducer, useState } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const init = () => JSON.parse(localStorage.getItem('todos')) || []

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {
        dispatch({
            type: 'ADD_TODO',
            payload: todo
        })
    }

    const handleDeleteTodo = (todoId) => {
        dispatch({
            type: 'REMOVE_TODO',
            payload: todoId
        })
    }

    const handleToggleTodo = (todoId) => {
        dispatch({
            type: 'TOGGLE_TODO',
            payload: todoId
        })
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}
