import React from 'react';
import { useNavigate } from "react-router-dom";
import './Item.css';

const Item = ({ product }) => {

  const navigate = useNavigate();
  // console.log('producto', JSON.stringify(product));

  const handleDetail = ()=> {
    navigate(`/detail/${product.id}`);
  }

  return (
    <div className='card' onClick={handleDetail}>
       <img src={product.image} alt="product" /> 
       <h3>${product.price}</h3>
       <h4>{product.title}</h4> 
    </div >
  )
}

export default Item