// Item.jsx

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './Item.module.css';

function Item({ item }) {
    return (
        <Link to={`/item/${item.id}`} className={classes.card1}>
            <h3>{item.name}</h3>
            <img src={item.imagen} alt={item.name} />
            <p>{item.description}</p>
            <div className={classes.detailButton}>Ver más detalle</div>
        </Link>
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