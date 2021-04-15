import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import "./layout.css"

export const Layout = () => {
    const {counter, increment} = useCounter(1); 
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)  
    //!null = true, !!null= false, Si existe data extrae su posicion 0
    const {quote } = !!data && data[0];
    const [boxSize, setBoxSize] = useState({})
    
    const parrafoTag = useRef("")
    useLayoutEffect(() => {
        setBoxSize(parrafoTag.current.getBoundingClientRect())
        // console.log(parrafoTag.current.getBoundingClientRect())
    }, [quote])

    return (
        <div>
            <h1>Layout Effect </h1>
            <hr/>

    
            <blockquote className= "blockquote text-right">
                <p className="mb-0" ref={parrafoTag}> {quote}</p>
                <p> </p>             
            </blockquote>

            <pre>
                {JSON.stringify(boxSize,null,3)}
            </pre>

            
            <button 
                className="btn btn-primary"
                onClick={increment}
                > Siguiente Quote</button>
            
        </div>
    )
}
