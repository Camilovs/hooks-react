import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,    
    } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (

        // Componente que crea el router para moverse entre vistas
        <Router>
            <div>
                {/* Componente de barra de navegacion */}
                <NavBar/>
                {/* Componente para gestionar las rutas de url hacia los componentes */}
                <div className="container">

                    <Switch>
                        <Route exact path="/about" component={AboutScreen}/>
                        <Route exact path="/login" component={LoginScreen}/>
                        <Route exact path="/" component={HomeScreen}/>
                        {/* Valor por defecto si no encuentra rutas validas */}
                        <Redirect to="/"/>
                    </Switch>              
                </div>
            </div>

        </Router>
    )
}
