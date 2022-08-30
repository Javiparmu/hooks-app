
export const todoReducer = (initialState = [] , action={}) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...initialState, action.payload]
        case 'REMOVE_TODO':
            return initialState.filter(todo => todo.id !== action.payload)
        case 'TOGGLE_TODO':
            return initialState.map(todo =>
                todo.id === action.payload ? { ...todo, done: !todo.done } : todo
            )
        default:
            return initialState
    }
}