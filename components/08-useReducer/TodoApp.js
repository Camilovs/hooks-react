import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm'
import "./styles.css"
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'

//Funcion para definir el initialState del useReducer
const init = ()=>{
    
    //Usamos el localStorage para obtener los datos guardados, en este caso obtenemos los 
    //"todos" que es un string en JSON, lo parseamos y si es null (||) iniciamos con un arreglo
    //vacio. En el caso que exista un todo en el localStorage lo obtenemos.
    return JSON.parse(localStorage.getItem("todos")) || [];
}

export const TodoApp = () => {
    
    /**
     * dispatch: funcion que informa al reducer de la accion que se ejecutara.
     * init: Funcion que ayuda al componente para iniciar los estados iniciales, optimiza 
     * para que no sea necesario ejecuta y ejecutar la funcion. El retorno de esta funcion sera
     * el InitialState.
     */
    const [todos, dispatch] = useReducer(todoReducer, [], init) 
    const [{description}, handleInputChange, reset] = useForm({
        description:""
    });

    //Si los todos cambian su estado, realiza la accion de este useEffect, en este caso si 
    //se agrega algun todo quiero que se guarden en el localStorage
    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todos))
    }, [todos])

    const handleDelete = ((todoId)=>{
        console.log(todoId)
        //crear action
        const action = {
            type: "delete",
            payload: todoId
        }
        //dispatch
        dispatch(action)
    })
    
    const handleToggle = ( todoId) =>{
        
        //Combinar el action con el dispatch
        dispatch({
            type:"toggle",
            payload: todoId
        })
    }


    const handleSubmit = (e) =>{

        e.preventDefault()  

        //Validacion de formulario
        if(description.trim().length<=1){
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false 
        }
        
        //el action del useReducer tiene este formato:
        const action = {
            type:"add",
            payload: newTodo
        }

        //Informa al reducer de la accion que debe llevar a acabo
        dispatch(action)

        //Luego del cambio del estado resetea los valores del formulario
        reset()
    }
    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>
            <div className="row">
                <div className = "col-7">
                    <TodoList 
                        todos={todos} 
                        handleDelete = {handleDelete}
                        handleToggle = {handleToggle} 
                    />

                </div>

                <div className= "col-5">
                    <h4>Agregar Todo</h4>
                    <hr/>
                    <form onSubmit ={handleSubmit}>
                        <input 
                            type="text" 
                            name="description" 
                            className="form-control"
                            placeholder="Aprender..."
                            autoComplete="off"
                            value={description}
                            onChange={handleInputChange}
                            />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
            

        </div>
    )
}
