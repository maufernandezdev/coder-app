import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/itemDetail/ItemDetail';
import Loader from '../../components/spinner/Spinner';
import {useParams} from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import {db} from '../../firebase/config'

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})

    const params = useParams();

    useEffect(()=> {
        const getProductos = async () => {
            try {
                const docRef = doc(db, "products", params.productId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists())
                {
                    console.log(docSnap);
                    console.log("Document data:", docSnap.data());
                    const productDetail = {id: docSnap.id , ...docSnap.data()}
                    setProductDetail(productDetail);
                }
                else 
                {
                    console.log("No such document!");
                }
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