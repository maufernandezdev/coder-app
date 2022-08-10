import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore";
import { db } from "../firebase/config";

const SendOrder = (cart, order) =>
{
    // [Start] removing stock and image url properties before commit to firebase
    const newOrder = order.items.map((customerOrder) => {
        const {stock , image , ...updateOrder} = customerOrder;
        return updateOrder;
    });
    order.items.splice(0, order.items.length);
    order.items.push(...newOrder);
    // [End] removing stock and image url properties before commit to firebase
    
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
        });
    });

    //if there is at least one product out of stock, the order is not generated
    (async ()=>{

        if (outOfStock.length === 0)
        {   
            try
            {
                const reference = await addDoc(collection(db, 'orders'), order);
                await batch.commit();
                console.log('reference id: ' , reference.id)
                localStorage.setItem('LAST_ORDER_ID', reference.id);
            }
            catch(error)
            {
                console.log('create order in firebase error: ', error.message); // show this error to the user
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
            console.log('prods fuera de stock: ', msj); // show this error to the user
        }
    })();
}

export default SendOrder;