import React, {useState} from 'react';
import './ItemCount.css';

const ItemCount = ( props ) => {

  const [count, setCount] = useState(1);
  const [quantity , setQuantity] = useState(false); 
  const [exceeds, setExceeds] = useState(false);

  // change the value of the count state if there is stock
  const onAdd = (value) =>
  {   
    if(parseInt(value) <= props.initialStock)
    {
      setCount(parseInt(value));
      setExceeds(false);
      return;
    }
    setCount(count);
    setExceeds(true);
  }

  // simulate add to cart
  const addToCart = () =>
  {
    if(!exceeds)
    {
      console.log('agregando al carrito: ' , count);
      return;
    }
    console.log('la cantidad supera el stock');
  }

  // if an amount was selected from the select element, it is set in the count state
  // show or hide the quantity input
  const handleChange = (e) =>
  {
    let value = e.target.value;
    value == 'more'? setQuantity(true) : setQuantity(false);
    if(!quantity)
    {
      onAdd(value);
    }
  }

  // validates that the user does not enter text in the quantity input //
  const textValidation = (e) =>
  {
    let value = e.target.value;
    e.target.value = value.replace(/[^A-Z\d-]/g, "");
    let result = /[^A-Z\d-]/.test(value);
    if(!result && value != '')
    {
      onAdd(value);
    }
  }

  return (
    <div className='item-count'>
      
        <select name="selected-value" onChange={handleChange}>
          <option value="1" selected>1 unidad</option>
          <option value="2">2 unidades</option>
          <option value="3">3 unidades</option>
          <option value="4">4 unidades</option>
          <option value="5">5 unidades</option>
          <option value="6">6 unidades</option>
          <option value="more">Más de 6 unidades</option>
        </select>

        { quantity? <input type="text" placeholder='Cantidad' maxLength={2} onChange={textValidation} /> : null }

        <button onClick={addToCart}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount