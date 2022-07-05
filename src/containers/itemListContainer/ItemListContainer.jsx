import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/itemList/ItemList';
import Loader from '../../components/spinner/Spinner';
// import ItemCount from '../../components/itemCount/ItemCount';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {

  // const addToCart = () =>
  // {
  //   alert("se agregó al carrito");
  // }

  const [products, setproducts] = useState([]);
  const [filterProducts, setfilterProducts] = useState([]);
  const params = useParams();

  useEffect(() => {

      // async mock with 2000 ms timeout
      const getProducts = async () => {
        try
        {
          const response = await fetch('https://fakestoreapi.com/products' , { timeout: 2000 });
          const data = await response.json()
          setproducts(data);
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
      {/* <ItemCount handleAdd={addToCart}  initialStock={10}></ItemCount> */}
      { products.length !== 0 ? <ItemList products={filterProducts} /> : <Loader></Loader> }
    </div>
  )
}

export default ItemListContainer;