import React from 'react';

function ItemDetail({ item }) {
    return (
        <div>
            <h2>{item.marca} {item.modelo}</h2>
            <img src={item.imagen} alt={item.modelo} />
            <p>${item.precio}</p>
        </div>
    );
}

export default ItemDetail;