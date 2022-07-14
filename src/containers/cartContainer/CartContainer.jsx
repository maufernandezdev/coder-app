import React, { useEffect, useState , useContext } from 'react';
import Loader from '../../components/spinner/Spinner';
import './CartContainer.css';
import { Shop } from '../../context/cartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContainer = () => {

  const {cart} = useContext(Shop);
  const {removeItem} = useContext(Shop);
  const {clearCart} = useContext(Shop);
  const [show, setShow] = useState(false);

  // delay to show loader component
  useEffect(() => {
      let timer = setTimeout(() => setShow(true), 2000);

      return () => {
        clearTimeout(timer);
      };

  },[]);

  const notification = (text) =>
  {
    toast.success(text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  
  const getPrice = (quantity, price) =>
  {
    return quantity * price;
  }
  
  const getTotal = () =>
  { 
    const initialValue = 0;
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity , initialValue
    );

    return total;
  }

  const handleRemove = (id, e) =>
  {
    e.preventDefault();
    removeItem(id);
    notification('Producto eliminado con éxito');
  }

  const clear = (e) =>
  {
    e.preventDefault();
    if(cart.length > 0)
    {
      clearCart();
      notification('Se vacio el carrito');
      return;
    }
    notification('El carrito ya esta vacio');
  }

  return show ? 
  (
    <div className='cart-container'>
      <h2>Mi carrito de compras</h2>
      <ul className='product-list'>
      {cart.map(product => {
        return <li className='product-li' key={product.id}>
                <div className='header-li'>
                <img src={product.image} alt={product.title}/>
                 <h3>{product.title}</h3>
                 <h4>cantidad {product.quantity}</h4>
                 <h5>$ {getPrice(product.quantity, product.price)} </h5>
                </div>
                <div className='buttons-li'>
                  <button onClick={(e) => handleRemove(product.id, e)}>Eliminar</button>
                </div>
              </li>
        })}
        <li className='product-li'>
          <h5 className='total'>Total : ${getTotal()}</h5>
          <div className='buttons-li'>
            <button onClick={(e) => clear(e)}>Vaciar carrito</button>
          </div>
        </li>
      </ul>
    <ToastContainer />
    </div>
  )  : ( <Loader></Loader> );
}

export default CartContainer;