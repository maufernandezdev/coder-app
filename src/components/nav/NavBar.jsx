import React from "react";
import './NavBar.css';

const NavBar = () =>{
    return(
        <header>
        <nav>
            <div className="links">
                <a href="#">Inicio</a>
                <a href="#">Hombres</a>
                <a href="#">Mujeres</a>
                <a href="#">Niños</a>
                <a href="#">Surf</a>
            </div>
        </nav>
    </header>
    )
}

export default NavBar;