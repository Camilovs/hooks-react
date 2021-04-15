console.log("hola")

const initialState= [{
    id:1,
    todo: "comprar pan",
    done:false
}]

//el hook reducer cambia el estado segun la accion que se le manda, en este caso es agregar
const todoReducer = (state = initialState, action)=>{

    if(action?.type==="agregar"){
        return [...state, action.payload]
    }
    //Siempre debe retornar un nuevo state 
    return state

}

let todos = todoReducer();

const newTodo = {
    id:2,
    todo: "Estudiar",
    done:false
}

//Se debe especificar la accion segun los estandares de type y payload
const agregarTodoAction = {
    type:'agregar',
    payload: newTodo
}


todos = todoReducer(todos,agregarTodoAction)

console.log(todos)