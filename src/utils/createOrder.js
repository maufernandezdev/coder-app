const createOrder = (name, address, cart, total) => 
{
    return {
        buyer: {
            name: name,
            address: address
        },
        items: cart,
        total: total,
        creationDate: new Date().toLocaleString()
    }
}

export default createOrder;