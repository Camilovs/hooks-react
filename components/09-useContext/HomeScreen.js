import React, { useContext } from 'react'
import {UserContext} from './UserContext'
export const HomeScreen = () => {

    const {user} = useContext(UserContext)
    console.log(user)
    return (
        <div>
            <p>Hello {user.name}</p>
            <h1>Home Screen</h1>
            <hr/>

            <pre>
                {JSON.stringify(user,null,3)}
            </pre>
        </div>
    )
}
