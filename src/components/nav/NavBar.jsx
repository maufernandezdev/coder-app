import React , { useRef } from "react";
import './NavBar.css';
import CartWidget from "../cartWidget/CartWidget";
import { Link } from 'react-router-dom';
import {FaBars , FaTimes} from 'react-icons/fa'

const NavBar = () =>{

    const navRef = useRef();
    const showNavBar = () =>
    {
        navRef.current.classList.toggle('responsive_nav');
    }

    return(
        <header>
            <Link to='/'>Logo</Link>
            <nav ref={navRef}>
                <Link onClick={showNavBar} to='/'>Inicio</Link>
                <Link onClick={showNavBar} to='/category/mobile'>Mobile</Link>
                <Link onClick={showNavBar} to='/category/watch'>Watch</Link>
                <Link onClick={showNavBar} to='/cart'><CartWidget></CartWidget></Link>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}> <FaTimes></FaTimes> </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}> <FaBars></FaBars> </button>
        </header>
    )
}

export default NavBar;