
const initialState = [{
    id: 1,
    todo: 'Learn React',
    done: false
}]

const todoReducer = (state = initialState, action={}) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.payload.id)
        default:
            return state
    }
}

let todos = todoReducer()

const newTodo = {
    id: 2,
    todo: 'Learn Redux',
    done: false
}

const addTodoAction = {
    type: 'ADD_TODO',
    payload: newTodo
}

const removeTodoAction = {
    type: 'REMOVE_TODO',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction)

console.log({ state: todos })

todos = todoReducer(todos, removeTodoAction)

console.log({ state: todos })