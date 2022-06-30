import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/itemDetail/ItemDetail';
import Loader from '../../components/spinner/Spinner';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})

    const params = useParams();

    useEffect(()=> {
        const getProductos = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
                const data = await response.json();
                setProductDetail(data)
            } catch (error) {
                console.log(error)
            }
        }
        getProductos();
    }, [params])

    return (
        Object.keys(productDetail).length !== 0 ? <ItemDetail product={productDetail}/> : <Loader></Loader>
    )
}

export default ItemDetailContainer;