import { TodoApp } from "../../src/08-useReducer/TodoApp"
import { render, screen, fireEvent } from "@testing-library/react"
import { useTodos } from "../../src/hooks"

jest.mock("../../src/hooks/useTodos")

describe('Pruebas en <TodoApp />', () => {

    useTodos.mockReturnValue({
        todos: [
            { id: 1, description: 'Hacer la compra', done: false },
            { id: 2, description: 'Sacar al perro', done: true },
            { id: 3, description: 'Sacar la basura', done: false },
        ],
        todosCount: 3,
        pendingTodosCount: 2,
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
    })

    test('debe mostrar el componente correctamente', () => {

        render( <TodoApp /> )

        expect(screen.getByText('Hacer la compra')).toBeTruthy()
        expect(screen.getByText('Sacar al perro')).toBeTruthy()
        expect(screen.getByText('Sacar la basura')).toBeTruthy()
        expect(screen.getByRole('textbox')).toBeTruthy()

    })

})