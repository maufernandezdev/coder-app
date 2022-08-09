import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Success = () => {

  const navigate = useNavigate();
  const lastOrderId = localStorage.getItem('LAST_ORDER_ID');
  localStorage.removeItem('LAST_ORDER_ID');

  const goToHome = () =>
  {
    navigate('/')
  }

  const goToCart = () =>
  {
    navigate('/cart');
  }

  return (
    <>
    {
      lastOrderId ?
      <>
        <h3>Orden</h3>
        <h4>¡Tu compra ha sido exitosa!</h4>
        <h5>Te avisaremos cuando tus productos esten en camino</h5>
        <h5>Numero de orden : {lastOrderId} </h5>
        <button onClick={goToHome}>Seguir comprando <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight></button>
      </>
      :
      goToCart()
    }
    </> 
  )
}

export default Success