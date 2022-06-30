import React from "react";
import './NavBar.css';
import CartWidget from "../cartWidget/CartWidget";
import Logo from '../../assets/quiksilver-logo-2.png'
import { Link } from 'react-router-dom';

const NavBar = () =>{
    return(
        <header>
        <nav>
            <img src={Logo} alt="logo" className="img-logo" />
            <div className="links">
                <Link to='/'>Inicio</Link>
                <Link to='/test'>Hombres</Link>
                <Link to='/'>Mujeres</Link>
                <Link to='/'>Niños</Link>
                <Link to='/'>Surf</Link>
                <CartWidget></CartWidget>
            </div>
        </nav>
    </header>
    )
}

export default NavBar;