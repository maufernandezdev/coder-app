import React from "react";
import './NavBar.css';
import CartWidget from "../cartWidget/CartWidget";
import { Link } from 'react-router-dom';

const NavBar = () =>{
    return(
        <header>
            <nav>
                
                <div className="nav">
                    <Link to='/'>Coder Store</Link>
                    <div className="search-container">
                        <input type="text" placeholder="Buscar productos..." className="search"/>
                        <Link to='/cart'><CartWidget></CartWidget></Link>
                    </div>
                </div>

                <div className="links">
                    <Link to='/'>Inicio</Link>
                    <Link to='/category/mobile'>Mobile</Link>
                    <Link to='/category/watch'>Watch</Link>
                </div>
                
            </nav>
        </header>
    )
}

export default NavBar;