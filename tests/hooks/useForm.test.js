import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks"

describe('Pruebas en useForm', () => { 

    const initialValues = {
        name: '',
        email: '',
        password: ''
    }

    test('debe retornar los valores por defecto', () => {

        const { result } = renderHook(() => useForm(initialValues))

        const { name, email, password, formState, handleInputChange, onResetForm } = result.current

        expect(name).toBe(initialValues.name)
        expect(email).toBe(initialValues.email)
        expect(password).toBe(initialValues.password)

        expect(formState).toEqual(initialValues)

        expect(handleInputChange).toEqual(expect.any(Function))
        expect(onResetForm).toEqual(expect.any(Function))

    })

    test('debe cambiar el nombre del formulario', () => {
        
        const { result } = renderHook(() => useForm(initialValues))

        const { handleInputChange } = result.current

        act(() => {
            handleInputChange({ target: { name: 'name', value: 'Juan' } })
        })
        
        expect(result.current.name).toBe('Juan')
        expect(result.current.formState.name).toBe('Juan')

    })

    test('debe resetear el formulario', () => {

        const { result } = renderHook(() => useForm(initialValues))

        const { handleInputChange, onResetForm } = result.current

        act(() => {
            handleInputChange({ target: { name: 'name', value: 'Juan' } })
            onResetForm()
        } )
        
        expect(result.current.formState).toEqual(initialValues)
        expect(result.current.name).toBe(initialValues.name)
        expect(result.current.email).toBe(initialValues.email)
        expect(result.current.password).toBe(initialValues.password)
    })

 })