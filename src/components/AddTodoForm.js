import React, {useState, useContext, useEffect} from 'react'
import { TodoContext } from "./context/TodoContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function AddTodoForm() {
const [todos, setTodos] = useContext(TodoContext)
const [value, setValue] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {id: Math.floor(Math.random() * 10000), title:value, completed:false}
    setTodos([...todos, newTodo] )
    setValue(" ")
}

useEffect(() => {
console.log(todos)
}, [todos])

    return (
            <form
            className="form"
            onSubmit={handleSubmit}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            >
                <input type="text" className="form__input" placeholder="Aggiungi un todo..."></input>
                <button type='submit' className="form__button-add">
                <FontAwesomeIcon icon={faPlus} />
                </button>
            </form>
        
    )
}
