import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    //1. obtener referencia de context
    const {user, setUser} = useContext(UserContext)
    //2. setUser
    const newUser = {
        id:1,
        name: "camilo",
        email: "camilo.svs@gmail.com"
    }
    return (
        <div>
            <h1>Login Screen</h1>
            <hr/>
            <button
                className= "btn btn-primary"
                onClick = {()=>setUser(newUser)}
                >
                LOGIN
            </button>
        </div>
    )
}
