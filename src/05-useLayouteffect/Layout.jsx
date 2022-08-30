import { useCounter, useFetch } from "../hooks"
import { LoadingQuote, Quote } from "../03-examples"

export const Layout = () => {

    const { counter, increment } = useCounter(1)
    const { data, loading, error } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const { author, quote } = !!data && data[0]

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                loading
                    ? <LoadingQuote />
                    : <Quote author={author} quote={quote} />
            }

            <button
                className='btn btn-primary'
                disabled={loading}
                onClick={() => increment()}
            >
                Next Quote
            </button>
        </>
    )
}