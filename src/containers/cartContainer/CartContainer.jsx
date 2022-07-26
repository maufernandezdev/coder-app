import React, { useEffect, useState , useContext } from 'react';
import Loader from '../../components/spinner/Spinner';
import { Shop } from '../../context/cartContext';
// import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import './CartContainer.css';
import 'react-toastify/dist/ReactToastify.css';
import createOrder from '../../utils/createOrder';
import sendOrder from '../../utils/sendOrder';


const CartContainer = () => {

  const {cart} = useContext(Shop);
  const {removeItem} = useContext(Shop);
  const {clearCart} = useContext(Shop);
  const {getElementsCount} = useContext(Shop);
  const [show, setShow] = useState(false);
  // const navigate = useNavigate();

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
      autoClose: 3000,
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

  const purchase = () =>
  { 
    notification('Muchas gracias por su compra!');
    let total = getTotal()
    const order = createOrder("Mau", "testing", cart, total);
    sendOrder(cart, order);
    clearCart();
    notification('Tu orden se genero con éxito');
  }

  return show ? 
  (
    <div className='cart-container'>
      <h2>Mi carrito de compras</h2>
      { 
        getElementsCount() > 0 ?
        <>
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
                <button onClick={purchase}>Finalizar compra</button>
              </div>
            </li>
          </ul>
        <ToastContainer />
        </>
        :
        <>
          <h3>Sin productos en el carrito</h3>
          <p>Para agregar productos dirigase a la sección de <Link to="/" className='link'>Inicio <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight> </Link></p>
        </>
      }
      
    </div>
  )  : ( <Loader></Loader> );
}

export default CartContainer;