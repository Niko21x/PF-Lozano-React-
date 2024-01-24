// ItemDetail.jsx

import PropTypes from 'prop-types';
import classes from './Item.module.css';

function ItemDetail({ item }) {
    return (
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