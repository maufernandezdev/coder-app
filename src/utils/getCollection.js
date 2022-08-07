import { collection , query, getDocs } from 'firebase/firestore';
import {db} from '../firebase/config';

const getCollection = async (param) => 
{
    const q = query(collection(db, param));
    const querySnapshot = await getDocs(q);
    const products = []; 
    querySnapshot.forEach((doc) => {
    products.push(
        {
            id: doc.id ,
            ...doc.data()
        }
    )});
    return products;
}

export default getCollection;