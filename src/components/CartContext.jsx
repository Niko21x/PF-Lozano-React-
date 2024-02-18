import  { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart(prevItems => {
            const existingItem = prevItems.find(i => i.id === item.id);
            if (existingItem) {
                // Si el producto ya está en el carrito, incrementa la cantidad
                return prevItems.map(i =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            } else {
                // Si el producto no está en el carrito, añádelo con una cantidad de 1
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    const updateQuantityInCart = (item, quantity) => {
        setCart(prevItems => {
            return prevItems.map(i =>
                i.id === item.id ? { ...i, quantity: quantity } : i
            );
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantityInCart }}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};