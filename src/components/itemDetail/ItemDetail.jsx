import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
    console.log(product);
    return (
        <div className='item-detail'>
            <img src={product.image} alt="product-image"/>
            <div className='item-description'>
            <h2>{product.title}</h2>
            <h3>${product.price}</h3>
            <p>{product.description}</p>
            <button>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemDetail;