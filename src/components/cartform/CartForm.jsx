import React, { useContext, useState } from 'react'
import { Shop } from '../../context/cartContext';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import './CartForm.css'
import sendOrder from '../../utils/sendOrder';

const CartForm = () => {

    const [step, setStep] = useState(1);
    const [buttons] = useState({
        submit:'Pagar',
        back: 'Anterior'
    });
    const {clearCart} = useContext(Shop);
    const navigate = useNavigate();

    const { cart } = useContext( Shop );
    
    const [ formValues, handleInputChange ] = useForm({
        name:'',
        email:'',
        street:'',
        number:'',
        CP:'',
        comment:'',
        cardholderName:'',
        cardNumber:'',
        expiryDate:'',
        cvv:''
    });

  //eventos del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Se envía el formulario');
    console.log('form values: ', formValues);
    const dataOrder = {
        buyer: formValues,
        items: cart, 
        totalPrice: getTotal(),
        date: new Date().toLocaleString()
    }
    console.log('data order: ' , dataOrder);

    sendOrder(cart, dataOrder);
    clearCart();
    navigate('/success');
  }

  const getTotal = () =>
  { 
    return cart.reduce((acc, item) => acc + item.price * item.quantity , 0);
  }

  const handleStep = (stepNumber , e) =>
  {
    e.preventDefault();
    setStep(stepNumber);
    console.log(step);
  }

  return (
    <div>
        <div className='setStep'>
            <h2>Pago</h2>
        </div>
        <form className='form' onSubmit={(e) => handleSubmit(e)}>
            
            {   
                step === 1?
                <>
                    <div className='form-container'>
                        <h3>Detalle de envio</h3>
                        <input type="text"  placeholder='Nombre' name='name' onChange={e => handleInputChange(e)} value={formValues.name || ''}/>
                        <input type="email" placeholder='Mail' name='email' onChange={e => handleInputChange(e)} value={formValues.email || ''}/>
                        <input type="text"  placeholder='Calle' name='street' onChange={e => handleInputChange(e)} value={formValues.street || ''}/>
                        <input type="text"  placeholder='Número' name='number' onChange={e => handleInputChange(e)} value={formValues.number || ''}/>
                        <input type="text"  placeholder='Código postal' name='CP' onChange={e => handleInputChange(e)} value={formValues.CP || ''}/>
                        <textarea name='comment' cols='30' rows='10' placeholder='Comentario' onChange={e => handleInputChange(e)} value={formValues.comment || ''}></textarea>
                        <div className='button-container'>
                            <button onClick={(e) => handleStep(2,e)}>Siguiente</button>
                        </div>
                    </div>
                </>:
                <>
                    <div className='form-container'>
                        <h3>Detalle de pago</h3>
                        <input type="text" placeholder='Titular de la tarjeta' name='cardholderName' onChange={e => handleInputChange(e)} value={formValues.cardholderName || ''}/>
                        <input type="text" placeholder='Número de tarjeta'     name='cardNumber'     onChange={e => handleInputChange(e)} value={formValues.cardNumber || ''}/>
                        <div className='credit-card-data'>
                            <input type="month" min="2022-08" placeholder='Fecha de caducidad' name='expiryDate' onChange={e => handleInputChange(e)} value={formValues.expiryDate || ''}/>
                            <input type="text" placeholder='CVV' name='cvv' onChange={e => handleInputChange(e)} value={formValues.cvv || ''}/>
                        </div>
                        <div className='button-container'>
                            <input type="button" className='secondary' value={buttons.back} onClick={(e) => handleStep(1,e)}/>
                            <input type="submit"  value={buttons.submit} />
                        </div>
                    </div>
                </>
            }

        </form>
    </div>
  )
}

export default CartForm;