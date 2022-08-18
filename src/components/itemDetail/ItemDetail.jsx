import React, {useState , useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import './ItemDetail.css';
import ItemCount from '../../components/itemCount/ItemCount';
import { Shop } from '../../context/cartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({ product }) => {

    const navigate = useNavigate();
    const [stock, setStock] = useState(product.stock);
    const {addItem, getElementsCount} = useContext(Shop);
    const imgClass = product.category;
    
    const handleConfirm = (quantity) =>
    {   
        setStock(stock - quantity);
        addItem(product, quantity);
        toast.success('Producto agregado al carrito', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    const checkout = () =>
    {   
        navigate('/cart');
    }

    return (
        <div className='item-detail'>
            <img src={product.image} alt={product.name} className={imgClass} />
            <div className='item-description'>
                <h2>{product.name}</h2>
                <h3>${product.price}</h3>
                <p>{product.description}</p>
                <p>Stock disponible: {stock} </p>
                <ItemCount onConfirm={handleConfirm}  initialStock={stock}></ItemCount>
                {getElementsCount() > 0 ? <button onClick={checkout}>Comprar ahora</button> : null}
            </div>
            <ToastContainer />
        </div>
    )
}

export default ItemDetail;