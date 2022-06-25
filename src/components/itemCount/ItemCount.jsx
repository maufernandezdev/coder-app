import React, {useState} from 'react';
import './ItemCount.css';

const ItemCount = ( props ) => {

    const [count, setCount] = useState(0);
    const onAdd = () =>
    {   
        count < props.initialStock ? setCount(count + 1) : setCount(count);
    }

    const onDecrement = () =>
    {
        count > 0 ? setCount(count - 1) : setCount(count);
    }

  return (
    <div className='item-count'>
        <p className='count'>{count}</p>
        <button onClick={onAdd}>+</button>
        <button onClick={props.handleAdd}>Agregar al carrito</button>
        <button onClick={onDecrement}>-</button>
    </div>
  )
}

export default ItemCount