// ItemDetail.jsx
import { useContext } from 'react';
import PropTypes from 'prop-types';
import classes from './Item.module.css';
import { CartContext } from './CartContext';

function ItemDetail({ item }) {
    const { addToCart } = useContext(CartContext);
    return (
        <div className={classes.container}>
            <div className={classes.dcard}>
                <img src={item.imagen} alt={item.modelo} /> {/* Esta imagen se mostrará en la primera columna */}
                <div className={classes.container2}> 
                    <h2>{item.marca} {item.modelo}</h2>
                    <p>{item.descripcion}</p>
                    <p>Price  ${item.precio}USD</p>
                     <button className={classes.addcart} onClick={() => addToCart(item)}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
}

ItemDetail.propTypes = {
    item: PropTypes.shape({
        imagen: PropTypes.string,
        modelo: PropTypes.string,
        marca: PropTypes.string,
        descripcion: PropTypes.string,
        precio: PropTypes.number,
    }).isRequired,
};

export default ItemDetail;