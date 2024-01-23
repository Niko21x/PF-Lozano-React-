// ItemDetail.jsx
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from './Products.json';
import classes from './Item.module.css';

function ItemDetailContainer() {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchedItem = products.find(product => product.id === Number(id));
        setItem(fetchedItem);
    }, [id]);

    return item ? (
        <div className={classes.container}>
            <div className={classes.dcard}>
                <img src={item.imagen} alt={item.modelo} /> {/* Esta imagen se mostrará en la primera columna */}
                <div className={classes.container2}> 
                    <h2>{item.marca} {item.modelo}</h2>
                    <p>{item.descripcion}</p>
                    <p>Price  ${item.precio}USD</p>
                </div>
            </div>
        </div>
    ) : (
        <p>Cargando...</p>
    );
}

export default ItemDetailContainer;