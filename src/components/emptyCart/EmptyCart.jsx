import React from 'react';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className='cart-container'>
        <h3>Sin productos en el carrito</h3>
        <p>Para agregar productos dirigase a la sección de <Link to="/" className='link'>Inicio <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight> </Link></p>
    </div>
  )
}

export default EmptyCart