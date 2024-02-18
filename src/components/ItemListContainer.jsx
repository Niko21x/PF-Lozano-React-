// ItemListContainer.jsx

import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts,  getProductsByCategory } from '../services/Firestore';
import ItemList from './ItemList';

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const { id: category } = useParams();

    useEffect(() => {
        if (category) {
            getProductsByCategory(category).then(filteredProducts => {
                setItems(filteredProducts);
            });
        } else {
            getProducts().then(products => {
                setItems(products);
            });
        }
    }, [category]);

    return <ItemList items={items} />;
}

export default ItemListContainer;