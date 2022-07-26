import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore";
import { db } from "../firebase/config";

const sendOrder = (cart, order) =>
{
    console.log("init send order");
    // removing stock property before commit to firebase
    const newOrder = order.items.map((customerOrder) => {
        const {stock , ...updateOrder} = customerOrder;
        return updateOrder;
    });
    console.log('new order' , newOrder);
    
    const batch = writeBatch(db);
    const outOfStock = [];
    
    cart.forEach((productInCart) => {
        getDoc(doc(db, 'products', productInCart.id))
        .then(async (documentSnapshot) => {

            const prod = {...documentSnapshot.data(), id: documentSnapshot.id};
            if (prod.stock >= productInCart.quantity)
            {
                batch.update(doc(db, 'products', prod.id) ,{
                    stock: prod.stock - productInCart.quantity
                })
            }
            else
            {
                outOfStock.push(prod)
            }
            console.log("productos fuera de stock:");
            console.log(outOfStock);

        });
    });

    //if there is at least one product out of stock, the order is not generated
    (async ()=>{

        if (outOfStock.length === 0)
        {   
            try
            {
                const reference = await addDoc(collection(db, 'orders'), newOrder);
                await batch.commit();
                console.log('Se genero la order con id: ' , reference.id)
            }
            catch(error)
            {
                console.log('create order in firebase error: ', error.message);
            }
        }
        else
        {   
            // products out of stock
            let msj = ''
            for (const product of outOfStock)
            {
                msj += product.title + ' ';
            }
            console.log('prods fuera de stock: ', msj)
        }
    })();
}

export default sendOrder;