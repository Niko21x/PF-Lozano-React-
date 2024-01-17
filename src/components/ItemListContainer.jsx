// ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import classes from './ItemListContainer.module.css';




// Importa las imágenes desde tus archivos locales
import image1 from '../assets/bulls.jpeg';
import image2 from '../assets/city.jpeg';
import image3 from '../assets/lakers.png';

function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([
      { id: 1, title: 'Producto 1', description: 'Este es el producto 1', image: image1, price: 100 },
      { id: 2, title: 'Producto 2', description: 'Este es el producto 2', image: image2, price: 200 },
      { id: 3, title: 'Producto 3', description: 'Este es el producto 3', image: image3, price: 300 },
    ]);
  }, []);

  return (
    <div className= {classes.itemListCont}>
      {items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemListContainer;