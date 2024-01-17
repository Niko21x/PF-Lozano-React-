// ItemCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ItemListContainer.module.css';

// ItemCard.jsx
// ItemCard.jsx
function ItemCard({ item }) {
    return (
        <div className={classes.container}>
            <h2 className={classes.title}>{item.title}</h2>
            <img className={classes.productImage} src={item.image} alt={item.title} />
            <p>{item.description}</p>
            <p>Precio: {item.price}</p>
            <Link className={classes.detailButton} to={`/item/${item.id}`}>Ver más detalle</Link>
        </div>
    );
}
export default ItemCard;