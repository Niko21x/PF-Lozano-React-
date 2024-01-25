// Item.jsx

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './Item.module.css';

function Item({ item }) {
    return (
        <div className={classes.card1}>
            <h3>{item.name}</h3>
            <img src={item.imagen} alt={item.name} />
            <p>{item.description}</p>
            <Link className={classes.detailButton} to={`/item/${item.id}`}>Ver más detalle</Link>
        </div>
    );
}

Item.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        id: PropTypes.number,
        imagen: PropTypes.string,
    }).isRequired,
};

export default Item;