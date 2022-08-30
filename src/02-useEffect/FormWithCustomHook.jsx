import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"

const formInitialState = {
    username: '',
    email: '',
    password: ''
}

export const FormWithCustomHook = () => {

    const { formState, onResetForm, handleInputChange, username, email, password } = useForm(formInitialState)

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

            <input
                type='text'
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleInputChange}
            />

            <button onClick={ onResetForm } className='btn btn-primary mt-2'>Borrar</button>
        </>
    )
}
