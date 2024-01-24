
import PropTypes from 'prop-types';
import classes from './Item.module.css';

function ItemList({ items }) {
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

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
};

export default ItemList;