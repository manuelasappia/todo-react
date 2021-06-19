import React, {useContext, useState, useEffect}from 'react'
import { TodoContext } from "./context/TodoContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function TodoItem({ id, title, completed }) {

	const [todos, setTodos] = useContext(TodoContext)

	const handleDelete = id => {
			setTodos(todos.filter(todo => todo.id !== id))
	}

	const handleComplete = id => {
		let updatedTodos = todos.map(todo => {
			if (todo.id === id) {
			  todo.completed = !todo.completed;
			}
			return todo;
		  });
	setTodos(updatedTodos);
}

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className=''>
				<span className=''>
					<input id={`${id}`} className="list-group-item__checkbox" type='checkbox' checked={completed} onClick={() => handleComplete(id)}></input>
					<label for={`${id}`}>{title}</label>
				</span>
				<button className='list-group-item__button-delete' onClick={() => handleDelete(id)}>
					<FontAwesomeIcon icon={faTrash} />
				</button>
			</div>
		</li>
	);
}
