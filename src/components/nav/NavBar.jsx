import React from "react";
import './NavBar.css';
import CartWidget from "../cartWidget/CartWidget";
import Logo from '../../assets/quiksilver-logo-2.png'
import { Link } from 'react-router-dom';

const NavBar = () =>{
    return(
        <header>
            <nav>
                
                <div className="nav">
                    <Link to='/'><img src={Logo} alt="logo" className="img-logo" /></Link>
                    <div className="search-container">
                        <input type="text" placeholder="Buscar productos..." className="search"/>
                        <Link to='/cart'><CartWidget></CartWidget></Link>
                    </div>
                </div>

                <div className="links">
                    <Link to='/'>Inicio</Link>
                    <Link to='/category/electronics'>Electronics</Link>
                    <Link to='/category/jewelery'>Jewelery</Link>
                    <Link to="/category/women's clothing">Women's clothing</Link>
                    <Link to="/category/men's clothing">Men's clothing</Link>
                    {/* <Link to='/'>Hombres</Link>
                    <Link to='/'>Mujeres</Link>
                    <Link to='/'>Niños</Link>
                    <Link to='/'>Surf</Link> */}
                </div>
                
            </nav>
        </header>
    )
}

export default NavBar;