import carty from '../assets/cart.png';
import classes from './Header.module.css';
const CartWidget = () => {
    return (
        <div className={classes.divcart}>
        <span className={classes.counter}>1</span>
        <button className={classes.boton2}></button>
    <img src={carty} alt="carrito de compras" className={classes.carty}/>
    </div>
    )

}

export default CartWidget;