// src/components/ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        // Aquí puedes cargar los detalles del item desde una API o base de datos
        // Por ahora, vamos a usar datos de prueba
        setItem({ id: 1, title: 'Producto 1', description: 'Este es el producto 1', image: 'url-to-image-1', price: 100 });
    }, [id]);

    return (
        <div>
            {item && (
                <>
                    <h2>{item.title}</h2>
                    <img src={item.image} alt={item.title} />
                    <p>{item.description}</p>
                    <p>Precio: {item.price}</p>
                </>
            )}
        </div>
    );
}

export default ItemDetailContainer;