import { render, screen, fireEvent } from '@testing-library/react'
import { TodoItem } from '../../src/08-useReducer/TodoItem'

describe('Pruebas en <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'Hacer la compra',
        done: false,
    }

    const onDeleteTodoMock = jest.fn()
    const onToggleTodoMock = jest.fn()

    beforeEach(() => jest.clearAllMocks())

    test('debe mostrar el Todo pendiente de completar', () => {

        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        )

        const liElement = screen.getByRole('listitem')
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toBe('align-self-center ')

    })

    test('debe mostrar el Todo completado', () => {

        const todo = {
            id: 1,
            description: 'Hacer la compra',
            done: true,
        }

        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        )

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('text-decoration-line-through')

    })

    test('span debe llamar a ToggleTodo cuando se hace click', () => {
        
        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        )

        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement)
        expect(onToggleTodoMock).toHaveBeenCalledTimes(1)
        expect(onToggleTodoMock).toHaveBeenCalledWith(1)
        
    })

    test('debe llamar a onDeleteTodo cuando se haga click en el icono de eliminar', () => {

        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        )

        const buttonElement = screen.getByRole('button')
        fireEvent.click(buttonElement)

        expect(onDeleteTodoMock).toHaveBeenCalledTimes(1)
        expect(onDeleteTodoMock).toHaveBeenCalledWith(1)

    })

})