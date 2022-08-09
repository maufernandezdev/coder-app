import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/itemList/ItemList';
import Loader from '../../components/spinner/Spinner';
import { useParams } from 'react-router-dom';
import getCollection from '../../utils/getCollection';
import { ToastContainer, toast } from 'react-toastify';

const ItemListContainer = ({greeting}) => {

  const [products, setproducts] = useState([]);
  const [filterProducts, setfilterProducts] = useState([]);
  const params = useParams();

  useEffect(() => {

      const getProducts = async () => 
      {
        try
        {
          const products = await getCollection('products');
          setproducts(products);
        }
        catch (error)
        {
          toast.warn('Lo sentimos ocurrió un error al cargar nuestros productos', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }
      getProducts();

  },[]);

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
      <ToastContainer />
    </div>
  )
}

export default ItemListContainer;