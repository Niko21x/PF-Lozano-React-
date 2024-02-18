import  { useContext } from 'react';
import { CartContext } from './CartContext';
import classes from './Cart.module.css';
 

function Cart() {
    const { cart, updateQuantityInCart } = useContext(CartContext);
    const total = cart.reduce((total, product) => total + product.precio * product.quantity, 0);

    return (
        <div className={classes.cartContainer}>
            <h2>Carrito de compras</h2>
            {cart.map((item, index) => (
                <div key={index} className={classes.cartItem}>
                    <h3 className={classes.itemTitle}>{item.marca} {item.modelo}</h3>
                    <input className={classes.counter}
                        type="number" 
                        value={item.quantity} 
                        onChange={(e) => updateQuantityInCart(item, parseInt(e.target.value))}
                        min="1"
                    />
                    <p className={classes.itemPrice}>Precio: ${item.precio}</p>
                    <p className={classes.itemTotal}>Total: ${item.precio * item.quantity}</p>
                </div>
            ))}
            <div>Total del carrito: ${total}</div>
        </div>
    );
}
export default Cart;