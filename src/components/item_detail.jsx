import React from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const { id } = useParams();

    // Aquí puedes usar el id para cargar los detalles del item

    return (
        <div>
            {/* Muestra los detalles del item aquí */}
        </div>
    );
}

export default ItemDetailContainer;

