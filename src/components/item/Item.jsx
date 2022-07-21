import React from 'react';
import { useNavigate } from "react-router-dom";
import './Item.css';

const Item = ({ product }) => {

  const navigate = useNavigate();
  const handleDetail = ()=> {
    navigate(`/detail/${product.id}`);
  }

  return (
    <div className='card' onClick={handleDetail}>
       <img src={product.image} alt={product.description} /> 
       <h3>${product.price}</h3>
       <h4>{product.name}</h4> 
    </div >
  )
}

export default Item