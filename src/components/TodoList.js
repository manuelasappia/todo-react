import React, {useContext} from 'react'
import TodoItem from './TodoItem';
import { TodoContext } from "./context/TodoContext";

export default function TodoList() {
    const [todos, setTodos] = useContext(TodoContext)

    return (
            <ul className='list-group'>
                {todos && todos.map((todo) => (
                    <TodoItem id={todo.id} title={todo.title} completed={todo.completed} key={todo.id}/>
                ))}
            </ul>
        );
    
}
