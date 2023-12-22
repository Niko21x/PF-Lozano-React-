import carrito from '../assets/cart+.png';
import saco from '../assets/lakers.png';
import classes from './ItemListContainer.module.css';



import React from 'react';
import PropTypes from 'prop-types';

const ItemListContainer = ({ greeting, title, description }) => {
  return (
    <div>
      <h1 className={classes.title}>{greeting}</h1>
      <div className={classes.content}>
        {title && <h2 className={classes.subtitle}>{title}</h2>}
        {description && <p className={classes.description}>{description}</p>}
      </div>
    </div>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ItemListContainer;
