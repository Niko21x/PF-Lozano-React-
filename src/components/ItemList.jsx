// ItemList.jsx

import PropTypes from 'prop-types';

import Item from './Item'; 
import classes from './Item.module.css'; 

function ItemList({ items }) {
    return (
        <div className={classes.itemList}>
            {items.map(item => (
                <Item key={item.id} item={item} />
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