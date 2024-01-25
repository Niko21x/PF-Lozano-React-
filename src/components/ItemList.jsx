// ItemList.jsx

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Item from './Item'; // Asegúrate de que la ruta sea correcta
import classes from './Item.module.css'; // Asegúrate de que la ruta sea correcta

function ItemList({ items }) {
    return (
        <div className={classes.itemList}>
            {items.map(item => (
                <Link key={item.id} to={`/item/${item.id}`}>
                    <Item item={item} />
                </Link>
            ))}
        </div>
    );
}

ItemList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            marca: PropTypes.string,
            modelo: PropTypes.string,
            imagen: PropTypes.string,
            precio: PropTypes.number,
        })
    ).isRequired,
};

export default ItemList;