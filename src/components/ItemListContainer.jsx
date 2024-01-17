// ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import classes from './ItemListContainer.module.css';




// Importa las imágenes desde tus archivos locales
// ItemListContainer.jsx

import ItemCard from './ItemCard';

import { items } from '../data';

function ItemListContainer() {
  return (
    <div className= {classes.itemListCont}>
      {items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemListContainer;