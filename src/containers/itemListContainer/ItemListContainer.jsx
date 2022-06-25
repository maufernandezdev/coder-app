import React from 'react';
import './ItemListContainer.css';
import ItemCount from '../../components/itemCount/ItemCount';

const ItemListContainer = ({greeting}) => {

  const addToCart = () =>
  {
    alert("se agregó al carrito");
  }
  
  return (
    <div className='container'>
      <h1>{greeting}</h1>
      <ItemCount handleAdd={addToCart}  initialStock={10}></ItemCount>
    </div>
  )
}

export default ItemListContainer;