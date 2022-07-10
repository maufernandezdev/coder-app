import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './ItemDetail.css';
import ItemCount from '../../components/itemCount/ItemCount';

const ItemDetail = ({ product }) => {
    console.log(product);
    const navigate = useNavigate();
    const [stock, setStock] = useState(10);

    const handleConfirm = (quantity) =>
    {
        setStock(stock - quantity);
        console.log('nuevo stock: ' , stock);
    }
    const checkout = () =>
    {
        navigate('/cart');
    }

    return (
        <div className='item-detail'>
            <img src={product.image} alt={product.title}/>
            <div className='item-description'>
                <h2>{product.title}</h2>
                <h3>${product.price}</h3>
                <p>{product.description}</p>
                <p>Stock disponible: {stock} </p>
                <ItemCount onConfirm={handleConfirm}  initialStock={stock}></ItemCount>
                <button onClick={checkout}>Comprar ahora</button>
            </div>
        </div>
    )
}

export default ItemDetail;