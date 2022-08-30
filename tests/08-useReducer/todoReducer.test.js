import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Pruebas en todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Hacer la compra',
        done: false,
    }]
    
    test('debe retornar los valores por defecto', () => {

        const newState = todoReducer(initialState, {})
        expect(newState).toBe(initialState)

    })

    test('debe agregar un todo', () => {

        const action = {
            type: 'ADD_TODO',
            payload: {
                id: 2,
                description: 'Hacer la compra',
                done: false,
            }
        }

        const newState = todoReducer(initialState, action)
        expect(newState.length).toBe(2)
        expect(newState).toContain( action.payload )

    })

    test('debe eliminar un todo', () => {

        const addAction = {
            type: 'ADD_TODO',
            payload: {
                id: 2,
                description: 'Hacer la compra',
                done: false,
            }
        }

        const removeAction = {
            type: 'REMOVE_TODO',
            payload: 2,
        }

        const newState = todoReducer(initialState, addAction)
        const newState2 = todoReducer(newState, removeAction)
        expect(newState2.length).toBe(1)
        expect(newState2).not.toContain( addAction.payload )

    })

    test('debe cambiar el estado de un todo', () => {

        const toggleAction = {
            type: 'TOGGLE_TODO',
            payload: 1,
        }

        const newState = todoReducer(initialState, toggleAction)
        expect(newState[0].done).toBe(true)

        const newState2 = todoReducer(newState, toggleAction)
        expect(newState2[0].done).toBe(false)

    })

})
