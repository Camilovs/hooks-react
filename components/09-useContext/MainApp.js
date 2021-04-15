import React ,{useState}from 'react'
import { AppRouter } from './AppRouter'
import {UserContext } from './UserContext'

export const MainApp = () => {
    
    const [user, setUser] = useState({})
    
    return (
        //UserContext proveee el valor de usuario a todos los hijos de AppRouter
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <AppRouter/>
        </UserContext.Provider>
        
    )
}
