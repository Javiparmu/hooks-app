import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks"

describe('Pruebas en el hook useCounter', () => {

    test('debe retornar los valores por defecto', () => {
        
        const { result } = renderHook(() => useCounter())
        const { counter, increment, decrement, reset } = result.current

        expect(counter).toBe(0)
        expect(increment).toEqual(expect.any(Function))
        expect(decrement).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))

    })

    test('debe generar el counter con el valor de 100', () => {

        const { result } = renderHook(() => useCounter(100))
        const { counter } = result.current

        expect(counter).toBe(100)

    })

    test('debe incrementar el counter', () => {

        const { result } = renderHook(() => useCounter(100))
        const { increment } = result.current

        act(() => {
            increment()
            increment(2)
        })

        expect(result.current.counter).toBe(103)

    })

    test('debe decrementar el counter', () => {

        const { result } = renderHook(() => useCounter(100))
        const { decrement } = result.current

        act(() => {
            decrement()
            decrement(2)
        })

        expect(result.current.counter).toBe(97)

    })

    test('debe resetear el counter', () => {

        const { result } = renderHook(() => useCounter(100))
        const { increment, reset } = result.current

        act(() => {
            increment(10)
            reset()
        } )

        expect(result.current.counter).toBe(100)

    })

})