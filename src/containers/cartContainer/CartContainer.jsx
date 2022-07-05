import React, { useEffect, useState } from 'react';
import Loader from '../../components/spinner/Spinner';
import './CartContainer.css';

const CartContainer = () => {

  const [show, setShow] = useState(false);

  // delay to show loader component
  useEffect(() => {
      let timer = setTimeout(() => setShow(true), 2000);

      return () => {
        clearTimeout(timer);
      };

    },[]);

  return show ? 
  (
    <div>
      <h2>Carrito de compras!</h2>
    </div>
  )  : ( <Loader></Loader> );
}

export default CartContainer;