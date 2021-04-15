import {createContext} from 'react'

/**
 * useContext se utiliza para mantener propiedades entre todos los hijos de 
 * un componente, sin necesariamente mandarlo com props
 * Ejemplo de uso en HomeScreen.js
 */
export const UserContext = createContext(null);