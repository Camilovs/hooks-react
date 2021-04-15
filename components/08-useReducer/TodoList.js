import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleToggle, handleDelete}) => {
    return (
        <div>
            <ul className= "list-group list-group-flush">
                {
                    todos.map((todo,i)=>(
                        //TodoList Item, arg todo, index, handledelete, handletoggle
                        /* <li key={todo.id} className= "list-group-item">
                            <p 
                                className={`${ todo.done && "complete" } text-center`}
                                onClick={()=> handleToggle(todo.id)}
                            >{i+1}. {todo.desc}</p>
                            <button 
                                className= "btn btn-danger"
                                onClick= {() => handleDelete(todo.id)}
                            >Borrar</button>
                        </li> */
                        <TodoListItem 
                            todo={todo}
                            handleDelete ={handleDelete}
                            handleToggle = {handleToggle}
                            i={i}
                        />                
                    ))
                }          
            </ul>
        </div>
    )
}
