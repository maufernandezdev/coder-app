import React , { useEffect, useState } from 'react'
import Item from '../item/Item';
import './ItemList.css'

const ItemList = ({products}) => {
  
  const [mobiles, setMobiles] = useState([]);
  const [watchs, setWatchs] = useState([]);

  useEffect(() => {
    
    const mobileCategory = products.filter(product => product.category === 'mobile');
    const watchCategory = products.filter(product => product.category === 'watch');
    setMobiles(mobileCategory);
    setWatchs(watchCategory);

  },[products]);


  return (
    <div className='item-list-container'>
      <div className='category'> 
        {mobiles.map( product => {  return <Item product = { product } key = { product.id } />  })}
      </div>
      <div className='category'>
        { watchs.map( product => { return <Item product = { product } key = { product.id } /> }) }  
      </div>
    </div>
  )
}

export default ItemList