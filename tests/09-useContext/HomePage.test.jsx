import { HomePage } from "../../src/09-useContext/HomePage"
import { render, screen, fireEvent } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"


describe('Pruebas en <HomePage />', () => {

    const user = {
        id: 1,
        name: 'Juan',
    }


    test('debe mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')

    })

    test('debe mostrar el componente con el usuario', () => {

        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3))

    })

})