import React, {useState} from 'react';
import './ItemCount.css';

const ItemCount = ( { onConfirm, initialStock } ) => {

  const [count, setCount] = useState(1);
  const [quantity , setQuantity] = useState(false); 
  const [exceeds, setExceeds] = useState(false);

  // change the value of the count state if there is stock
  const onAdd = (value) =>
  {   
    if(parseInt(value) <= initialStock)
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
      onConfirm(count);
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
    setSelectedOption(value);
    value === 'more'? setQuantity(true) : setQuantity(false);
    if(!quantity)
    {
      onAdd(value);
    }
  }

  // validates that the user does not enter text in the quantity input
  const textValidation = (e) =>
  {
    let value = e.target.value;
    e.target.value = value.replace(/[^A-Z\d-]/g, "");
    let result = /[^A-Z\d-]/.test(value);
    if(!result && value !== '')
    {
      onAdd(value);
    }
  }

  // select options
  const options = 
  [
    { value: '1', label: '1 unidad' },
    { value: '2', label: '2 unidades' },
    { value: '3', label: '3 unidades' },
    { value: '4', label: '4 unidades' },
    { value: '5', label: '5 unidades' },
    { value: '6', label: '6 unidades' },
    { value: 'more', label: 'Más de 6 unidades' },
  ]

  const [selectedOption, setSelectedOption] = useState(options[0].value);

  return (
    <div className='item-count'>
      
        <select name="selected-value" onChange={handleChange} value={selectedOption}>
        { 
          options.map(option => (<option key={option.value} value={option.value}> {option.label} </option>))
        }
        </select>
        { quantity? <input type="text" placeholder='Cantidad' maxLength={2} onChange={textValidation} /> : null }
        <button onClick={addToCart}>Agregar al carrito</button>

    </div>
  )
}

export default ItemCount