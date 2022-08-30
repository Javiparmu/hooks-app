import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ onNewTodo }) => {

    const { description, handleInputChange, onResetForm } = useForm({
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (description.trim().length <= 1) return

        const newTodoObj = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        onNewTodo(newTodoObj)
        onResetForm()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="description"
                className="form-control"
                placeholder="¿Qué hay que hacer?"
                value={ description }
                onChange={ handleInputChange }
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1 btn-block"
            >
                Agregar
            </button>
        </form>
    )
}
