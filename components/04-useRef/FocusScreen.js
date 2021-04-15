import React, { Fragment, useRef } from 'react'
import  "../02-useEffect/effects.css"
export const FocusScreen = () => {

    const inputRef = useRef()
    console.log(inputRef)
    const handleClick = ()=>{  
        inputRef.current.select()
        console.log(inputRef)
    }

    return ( 
        <Fragment>
            
            <h1>Focus Screen</h1>
            <hr/>
            <input 
                type="text"
                className="form-control" 
                aria-describedby="helpId"
                ref={inputRef}
            />
            <small 
                id="helpId" 
                className="form-text text-muted"
            > Su nombre </small>   
            <p></p>
            <button type="button" 
                    className="btn btn-primary mb-1" 
                    data-toggle="modal" 
                    data-target="#exampleModal"
                    onClick={handleClick}>
                    Focus
            </button>
        </Fragment>
    )
}
