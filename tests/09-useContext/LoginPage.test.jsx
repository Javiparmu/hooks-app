import { render, screen, fireEvent } from '@testing-library/react'
import { UserContext } from '../../src/09-useContext/context/UserContext'
import { LoginPage } from '../../src/09-useContext/LoginPage'

describe('Pruebas en <LoginPage />', () => {

    test('debe mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')

    })

    test('debe mostrar el componente con el usuario', () => {

        const user = {
            id: 1,
            name: 'Juan',
        }

        render(
            <UserContext.Provider value={{ user }}>
                <LoginPage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3))

    })

    test('debe llamar el setUser cuando se hace click en el boton', () => {

        const setUser = jest.fn()

        render(
            <UserContext.Provider value={{ user: null, setUser }}>
                <LoginPage />
            </UserContext.Provider>
        )

        const button = screen.getByRole('button')
        fireEvent.click(button)
        expect(setUser).toHaveBeenCalledWith({
            id: 1,
            name: "John Doe",
            email: "john@gmail.com",
        })

        
    })

})