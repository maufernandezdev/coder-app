import React, {useState , useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import './ItemDetail.css';
import ItemCount from '../../components/itemCount/ItemCount';
import { Shop } from '../../context/cartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({ product }) => {

    const navigate = useNavigate();
    const [stock, setStock] = useState(10);
    const {addItem} = useContext(Shop);

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
            <img src={product.image} alt={product.title}/>
            <div className='item-description'>
                <h2>{product.title}</h2>
                <h3>${product.price}</h3>
                <p>{product.description}</p>
                <p>Stock disponible: {stock} </p>
                <ItemCount onConfirm={handleConfirm}  initialStock={stock}></ItemCount>
                <button onClick={checkout}>Comprar ahora</button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ItemDetail;