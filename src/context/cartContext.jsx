import React, { createContext, useState } from 'react'

export const Shop = createContext();

const ShopProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const addItem = (producto, cantidad) =>
    {   
        const productoRepetido = cart.find(elemento => elemento.id === producto.id);
        if (productoRepetido)
        {
            productoRepetido.quantity += cantidad
            setCart([...cart]);
        } 
        else
        {
            setCart([...cart, {...producto, quantity: cantidad}]);
        }

    }

    const removeItem = (id) =>
    {
        const productosFiltrados = cart.filter(producto => producto.id !== id)
        setCart(productosFiltrados);
    }

    const clearCart = () =>
    {
        setCart([]);
    }

    const getElementsCount = () =>
    {
        return cart.reduce((acc, item) => acc + item.quantity , 0);
    }

    return (
        <Shop.Provider value={{addItem, removeItem, clearCart, getElementsCount , cart}}> {children} </Shop.Provider>
    )
}

export default ShopProvider;