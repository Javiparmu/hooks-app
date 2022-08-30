import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Javi',
        email: 'javi@gmail.com'
    })

    const { username, email } = formState

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    useEffect(() => {
        // console.log('hey')
    }, [formState])

    return (
        <>
            <h1>SimpleForm</h1>
            <hr />

            <input 
                type='text'
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleInputChange}
            />

            <input
                type='text'
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleInputChange}
            />

            {
                (username === 'Javi2') && <Message />
            }
        </>
    )
}