// ItemDetailContainer.jsx

import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getProducts } from '../services/Firestore';

function ItemDetailContainer() {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getProducts().then(products => {
            const fetchedItem = products.find(product => product.id === Number(id));
            setItem(fetchedItem);
        });
    }, [id]);

    return item ? (
        <ItemDetail item={item} />
    ) : (
        <p>Cargando...</p>
    );
}

export default ItemDetailContainer;