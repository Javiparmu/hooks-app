import { MultipleCustomHooks } from "../../src/03-examples"
import { render, screen, fireEvent } from "@testing-library/react"
import { useCounter, useFetch } from "../../src/hooks"

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('Pruebas en <MultipleCustomHooks />', () => {

    test('debe mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })

        useCounter.mockReturnValue({
            counter: 0,
            increment: jest.fn(),
        })

        beforeEach(() => jest.clearAllMocks())

        render(<MultipleCustomHooks />)

        expect(screen.getByText('Loading...'))
        expect(screen.getByText('BreakingBad Quotes'))

        const nextButton = screen.getByRole('button', { name: 'Next Quote' })
        expect(nextButton.disabled).toBeTruthy()

    })

    test('debe mostrar el componente con una frase', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Walter White', quote: 'I am not a crook.' }],
            loading: false,
            error: null
        })

        useCounter.mockReturnValue({
            counter: 0,
            increment: jest.fn(),
            decrement: jest.fn(),
            reset: jest.fn()
        })

        render(<MultipleCustomHooks />)
        expect(screen.getByText('I am not a crook.')).toBeTruthy()
        expect(screen.getByText('Walter White')).toBeTruthy()

        const nextButton = screen.getByRole('button', { name: 'Next Quote' })
        expect(nextButton.disabled).toBeFalsy()

    })

    test('debe llamar a la función de incrementar', () => {

        const mockIncrement = jest.fn()

        useFetch.mockReturnValue({
            data: [{ author: 'Walter White', quote: 'I am not a crook.' }],
            loading: false,
            error: null
        })

        useCounter.mockReturnValue({
            counter: 0,
            increment: mockIncrement
        })

        render(<MultipleCustomHooks />)
        const nextButton = screen.getByRole('button', { name: 'Next Quote' })
        fireEvent.click(nextButton)
        expect(mockIncrement).toHaveBeenCalled()

    })

})