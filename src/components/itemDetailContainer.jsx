// itemDetailContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './data';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    const fetchItem = async () => {
        const foundItem = items.find(item => item.id === id);
        setItem(foundItem);
    }

    useEffect(() => {
        fetchItem();
    }, [id]);

    return (
        <div>
            {item ? (
                <>
                    <h2>{item.title}</h2>
                    <img src={item.image} alt={item.title} />
                    <p>{item.description}</p>
                    <p>Precio: {item.price}</p>
                </>
            ) : (
                <p>Cargando detalles del artículo...</p>
            )}
        </div>
    );
}

export default ItemDetailContainer;