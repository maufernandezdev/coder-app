import React , {useContext} from 'react';
import './CartWidget.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Shop } from '../../context/cartContext';

const CartWidget = () => {
  const {getElementsCount} = useContext(Shop);
  
  return (
    <>
      {getElementsCount() > 0 ? <label className='number'>{getElementsCount()}</label> : null}
      {getElementsCount() > 0 ? (<AiOutlineShoppingCart className='icon'></AiOutlineShoppingCart>) : null}
    </>
  )
}

export default CartWidget;