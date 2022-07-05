import React from 'react'
import Item from '../item/Item';
import './ItemList.css'

const ItemList = ({products}) => {
    
  return (
    <div className='item-list-container'>
        { products.map( product => { return <Item product = { product } key = { product.id } /> }) }
    </div>
  )
}

export default ItemList