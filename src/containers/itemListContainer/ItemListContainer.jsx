import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/itemList/ItemList';
import Loader from '../../components/spinner/Spinner';
// import { collection, query, getDocs } from 'firebase/firestore';
// import {db} from '../../firebase/config'

import { useParams } from 'react-router-dom';
import getCollection from '../../utils/getCollection';

const ItemListContainer = ({greeting}) => {

  const [products, setproducts] = useState([]);
  const [filterProducts, setfilterProducts] = useState([]);
  const params = useParams();

  useEffect(() => {

      // async mock with 2000 ms timeout
      const getProducts = async () => 
      {
        try
        {
          const products = await getCollection('products');
          setproducts(products);
        }
        catch (error)
        {
          console.log("getProducts error: " + error);
        }
      }
      getProducts();

  },[]);

  /* [2022-07-04] use effect to set a category */
  useEffect(() => {

    if (params?.categoryId)
    {
      const filterProducts = products.filter(product => product.category === params.categoryId)
      setfilterProducts(filterProducts)
    } 
    else
    {
      setfilterProducts(products)
    }

  },[params, products]);
  
  return (
    <div className='container'>
      <h1>{greeting}</h1>
      <h2>Firebase collection</h2>
      { products.length !== 0 ? <ItemList products={filterProducts} /> : <Loader></Loader> }
    </div>
  )
}

export default ItemListContainer;