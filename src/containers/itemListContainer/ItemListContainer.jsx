import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/itemList/ItemList';
import Loader from '../../components/spinner/Spinner';
// import ItemCount from '../../components/itemCount/ItemCount';

const ItemListContainer = ({greeting}) => {

  // const addToCart = () =>
  // {
  //   alert("se agregó al carrito");
  // }

  const [productos, setProductos] = useState([]);

  useEffect(() => {

      // async mock with 2000 ms timeout
      const getProducts = async () => {
        try
        {
          const response = await fetch('https://fakestoreapi.com/products' , { timeout: 2000 });
          const data = await  response.json()
          setProductos(data);
        }
        catch (error)
        {
          console.log("Hubo un error:");
          console.log(error);
        }
      }
      getProducts();
  }, [])
  
  return (
    <div className='container'>
      <h1>{greeting}</h1>
      {/* <ItemCount handleAdd={addToCart}  initialStock={10}></ItemCount> */}
      { productos.length !== 0 ? <ItemList products={productos} /> : <Loader></Loader> }
    </div>
  )
}

export default ItemListContainer;