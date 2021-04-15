import React, { Fragment, useEffect, useState } from 'react'
import "./effects.css"
import { Message } from './Message'


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:"",
        email:""
    })

    const{ name, email} = formState

    //Realiza acciones solo el componente por primera vez
    useEffect(()=>{
        // console.log("hey")
    },[])
    //Realiza acciones solo cuando hay un cambio en el formstate
    useEffect(()=>{
        // console.log("form cambio")
    },[formState])
    //Realiza acciones solo cuando hay un cambio en el email
    useEffect(()=>{
        // console.log("email cambio")
    },[email])

    const handleInputChange =({target})=>{
        setFormState({
            ...formState,
            [target.name]:target.value
        })
    }
    return (
        <Fragment>
            <h1>useEffect</h1>
            <hr></hr>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@email.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            {(name==="123") && <Message/>}
            
        </Fragment>
    )
}
