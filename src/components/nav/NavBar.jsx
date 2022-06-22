import React from "react";
import './NavBar.css';
import CartWidget from "../cartWidget/CartWidget";
import Logo from '../../assets/quiksilver-logo-2.png'

const NavBar = () =>{
    return(
        <header>
        <nav>
            <img src={Logo} alt="logo" className="img-logo" />
            <div className="links">
                <a href="#">Inicio</a>
                <a href="#">Hombres</a>
                <a href="#">Mujeres</a>
                <a href="#">Niños</a>
                <a href="#">Surf</a>
                <CartWidget></CartWidget>
            </div>
        </nav>
    </header>
    )
}

export default NavBar;