// ItemListContainer.jsx
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from './Products.json';
import classes from './Item.module.css';

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const filteredProducts = products.filter(product => product.id === Number(id));
            setItems(filteredProducts);
        } else {
            setItems(products);
        }
    }, [id]);

    return (
        <div className={classes.itemList}>
            {items.map(item => (
                <div key={item.id} className={classes.card1}>
                    <h2>{item.marca} {item.modelo}</h2>
                    <img src={item.imagen} alt={item.modelo} />
                    <p>${item.precio}</p>
                    <a href={`/item/${item.id}`} className={classes.detailButton}>Ver detalles</a>
                </div>
            ))}
        </div>
    );
}

export default ItemListContainer;