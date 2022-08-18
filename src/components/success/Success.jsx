import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import './Success.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const Success = () => {

  const navigate = useNavigate();
  const lastOrderId = localStorage.getItem('LAST_ORDER_ID');
  
  const goToHome = () =>
  {
    localStorage.removeItem('LAST_ORDER_ID');
    navigate('/')
  }

  // const goToCart = () =>
  // {
  //   navigate('/cart');
  // }

  return (
    <>
    {
      lastOrderId ?
      <>
        <div className='order-container'>
          <BsFillCheckCircleFill></BsFillCheckCircleFill>
          <h4>¡Tu compra ha sido exitosa!</h4>
          <h5>Te avisaremos cuando tus productos esten en camino</h5>
          <h5>Número de orden : {lastOrderId} </h5>
          <button onClick={goToHome}>Seguir comprando <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight></button>
        </div>
      </>
      :
      <>
        <h4>error, no hay una orden reciente para visualizar</h4>
      </>
    }
    </> 
  )
}

export default Success