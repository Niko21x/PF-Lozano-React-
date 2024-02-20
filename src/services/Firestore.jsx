// firestore.js
import { collection, addDoc, getDocs, query, where, serverTimestamp,updateDoc } from "firebase/firestore";
import db from './Firebase'; 
import { products } from '../data/Products'; 

const addProductsToFirestore = async () => {
    const itemsCol = collection(db, 'items');
    const itemSnapshot = await getDocs(itemsCol);
    if (itemSnapshot.empty) { 
        for (const product of products) {
            await addDoc(itemsCol, product);
        }
    }
};

addProductsToFirestore();

const createOrder = async (items, contactData) => {
    const ordersCol = collection(db, 'orders');
    const newOrder = {
        items,
        contactData,
        fecha: serverTimestamp(),
        estado: 'generada'
    };
    const docRef = await addDoc(ordersCol, newOrder);
    const orderId = docRef.id; // Este es el ID del documento que Firebase generó automáticamente

    
    await updateDoc(docRef, { orderId: orderId });

    return orderId; // Devuelve el orderId 
};

export default createOrder;

export const getProducts = async () => {
    const itemsCol = collection(db, 'items');
    const itemSnapshot = await getDocs(itemsCol);
    let itemList = itemSnapshot.docs.map(doc => doc.data());
    itemList.sort((a, b) => a.id - b.id); // Ordena los productos por id
    return itemList;
};


export const getProductById = async (productId) => {
    const itemsCol = collection(db, 'items');
    const q = query(itemsCol, where("id", "==", productId));
    const productSnapshot = await getDocs(q);
    return productSnapshot.docs[0]?.data() || null;
};

export const getProductsByCategory = async (categoryId) => {
    const itemsCol = collection(db, 'items');
    const q = query(itemsCol, where("category", "==", categoryId));
    const categorySnapshot = await getDocs(q);
    let categoryList = categorySnapshot.docs.map(doc => doc.data());
    categoryList.sort((a, b) => a.id - b.id); 
    return categoryList;
};