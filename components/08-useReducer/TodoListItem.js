import React from 'react'

export const TodoListItem = ({todo, handleDelete, handleToggle,i}) => {
    return (
        <li key={todo.id} className= "list-group-item">
            <p 
                className={`${ todo.done && "complete" } text-center`}
                onClick={()=> handleToggle(todo.id)}
            >{i+1}. {todo.desc}</p>
            <button 
                className= "btn btn-danger"
                onClick= {() => handleDelete(todo.id)}
            >Borrar</button>
        </li>
    )
}
