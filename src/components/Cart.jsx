import  { useContext } from 'react';
import { CartContext } from './CartContext';
import classes from './Cart.module.css';

function Cart() {
    const { cart } = useContext(CartContext);
    const total = cart.reduce((total, product) => total + product.precio * product.quantity, 0);
    return (
        <div className={classes.cartContainer}>
            <h2>Carrito de compras</h2>
            {cart.map((item, index) => (
                <div key={index} className={classes.cartItem}>
                    <h3 className={classes.itemTitle}>{item.marca} {item.modelo} x{item.quantity}</h3>
                    <p className={classes.itemPrice}>Precio: ${item.precio * item.quantity}</p>
                    <div>Total: ${total}</div>
                </div>
            ))}
        </div>
    );
}
export default Cart;