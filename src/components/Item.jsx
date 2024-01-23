import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Item.module.css';
function Item({ item }) {
    return (
        <div className={classes.card}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <Link className={classes.detailButton} to={`/item/${item.id}`}>Ver más detalle</Link>
        </div>
    );
}

export default Item;