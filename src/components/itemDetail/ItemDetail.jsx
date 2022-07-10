import React from 'react';
import './ItemDetail.css';
import ItemCount from '../../components/itemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product }) => {
    console.log(product);
    return (
        <div className='item-detail'>
            <img src={product.image} alt={product.title}/>
            <div className='item-description'>
                <h2>{product.title}</h2>
                <h3>${product.price}</h3>
                <p>{product.description}</p>
                <p>Stock disponible</p>
                <ItemCount initialStock={10}></ItemCount>
                <button><Link to='/cart'>Comprar ahora</Link></button>
                {/* <button>Agregar al carrito</button> */}
            </div>
        </div>
    )
}

export default ItemDetail;