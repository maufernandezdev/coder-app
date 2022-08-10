import React, { useContext, useState } from 'react'
import { Shop } from '../../context/cartContext';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import './CartForm.css'
import sendOrder from '../../utils/sendOrder';
import EmptyCart from '../emptyCart/EmptyCart';

const CartForm = () => {

  const navigate = useNavigate();
  const {getElementsCount} = useContext(Shop);
  const [nameValid , setNameValid] = useState('');
  const [emailValid , setEmailValid] = useState('');
  const [addressValid , setAddressValid] = useState('');
  const [commentsValid , setCommentsValid] = useState('');
  const {clearCart} = useContext(Shop);
  const { cart } = useContext( Shop );

  const [buttons] = useState({
      submit:'Pagar',
      back: 'Anterior'
  });

  const initialForm = {
      name:'',
      email:'',
      address:'',
      paymentMethod:'card',
      comments:'',
  };

  const validationsForm = (formValues) => 
  {
      let errors = {};
      let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
      let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
      let regexComments = /^.{1,255}$/;
    
      if (!formValues.name.trim())
      {
        setNameValid('');
        errors.name = "El campo 'Nombre' es requerido.";
      }
      else if (!regexName.test(formValues.name.trim()))
      {
        setNameValid('');
        errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco.";
      }
      else
      {
        setNameValid('valid');
      }
      
      if (!formValues.email.trim())
      {
        setEmailValid('');
        errors.email = "El campo 'Mail' es requerido.";
      }
      else if (!regexEmail.test(formValues.email.trim()))
      {
        setEmailValid('');
        errors.email = "El campo 'Mail' es invalido.";
      }
      else
      {
        setEmailValid('valid');
      }
    
      if (!formValues.address.trim())
      { 
        setAddressValid('');
        errors.address = "La dirección de entrega es requerida.";
      }
      else
      {
        setAddressValid('valid');
      }
    
      if (!formValues.comments.trim())
      { 
        setCommentsValid('');
        errors.comments = "El comentario es requerido.";
        
      } else if (!regexComments.test(formValues.comments.trim()))
      {
        setCommentsValid('');
        errors.comments = "El comentario excede los 255 caracteres.";
      }
      else
      {
        setCommentsValid('valid');
      }
    
      return errors;
  }
  const [formValues, handleInputChange , handleBlur , errors ] = useForm(initialForm, validationsForm);

  const getTotal = () =>
  { 
      return cart.reduce((acc, item) => acc + item.price * item.quantity , 0);
  }
    
  const handleSubmit = (e) =>
  {   
      e.preventDefault();
      handleInputChange(e);
  
      if (Object.keys(errors).length === 0)
      {
          const dataOrder = {
              buyer: formValues,
              items: cart, 
              totalPrice: getTotal(),
              date: new Date().toLocaleString()
          }
          sendOrder(cart, dataOrder);
          setTimeout(() => {
            clearCart();
            navigate('/success');
          }, 3000);
      }
  }

  const options = 
  [
    { value: 'card', label: 'Tarjeta' },
    { value: 'debit', label: 'Debito' },
    { value: 'mercadopago', label: 'MercadoPago' },
    { value: 'paypal', label: 'PayPal' },
  ]
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleChange = (e) =>
  {
    let value = e.target.value;
    setSelectedOption(value);
    handleInputChange(e);
  }

  const goToCart = () =>
  {
    navigate('/cart');
  }

  return (
    <>
      {
        getElementsCount() > 0 ?
          <div>
            
            <div className='setStep'>
                <h2>Pago</h2>
            </div>
            <form className='form' onSubmit={(e) => handleSubmit(e)}>
              
              <div className='form-container'>
                <h3>Datos personales</h3>
                <input type="text" className={nameValid} placeholder='Nombre' name='name' onBlur={handleBlur} onChange={e => handleInputChange(e)} value={formValues.name || ''} required />
                {errors.name && <p className='error'>{errors.name}</p>}
                
                <input type="email" className={emailValid} placeholder='Mail' name='email' onBlur={handleBlur} onChange={e => handleInputChange(e)} value={formValues.email || ''} required/>
                {errors.email && <p className='error'>{errors.email}</p>}
                <input type="text" className={addressValid} placeholder='Dirección' name='address' onBlur={handleBlur} onChange={e => handleInputChange(e)} value={formValues.address || ''} required/>
                
                {errors.address && <p className='error'>{errors.address}</p>}
                <label>Medio de pago</label>
                <select name="paymentMethod" onChange={e => handleChange(e)} value={selectedOption}>
                { 
                    options.map(option => (<option key={option.value} value={option.value}> {option.label} </option>))
                }
                </select>
                
                <textarea name='comments' className={commentsValid} cols='30' rows='10' placeholder='Comentario' onBlur={handleBlur} onChange={e => handleInputChange(e)} value={formValues.comments || ''} required></textarea>
                {errors.comments && <p className='error'>{errors.comments}</p>}
                
                <div className='button-container'>
                    <input type="button" className='secondary' value={buttons.back} onClick={(e) => goToCart(e)}/>
                    <input type="submit"  value={buttons.submit} />
                </div>
              </div>

            </form>

          </div>
          :
          <> 
              <EmptyCart></EmptyCart>
          </>
      }
    </>
  )
}

export default CartForm;