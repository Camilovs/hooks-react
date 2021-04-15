import { useState } from "react"


/**
 * Custom Hook para una variable que funciona como contador.
 * @param {*} inicialState Valor de inicio para el contador, por defecto es 0
 * @returns Un objeto con el contador, y las funciones para aumentar, disminuir y resetearlo
 */
export const useCounter = (inicialState=0) => {
    
    const [counter, setCounter] = useState(inicialState)

    const increment = ()=>{
        setCounter(counter+1)
    }
    const decrement = ()=>{
        setCounter(counter-1)
    }
    const reset = ()=>{
        setCounter(inicialState)
    }
    return{
        counter,
        increment,
        decrement,
        reset
    }
}

