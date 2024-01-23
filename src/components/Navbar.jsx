
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import Cart from './Cart'; // Asegúrate de que la ruta al archivo Cart.jsx sea correcta

function Navbar() {
    return (
        <div>
            <header>
            <h1>Tienda de Guitarras Eléctricas</h1>
            <div className={classes.navbar}>
                    <Link className={classes.nav} to="/">Home</Link>
                    <Link className={classes.nav} to="/category/1">Stratocaster</Link>
                    <Link className={classes.nav} to="/category/2">Telecaster</Link>
                    <Cart />

            </div>
            <button className={classes.carritobtn}> 
                <img src="/img/cart.png" alt="carrito de compras" className={classes.imgcompras} /> 
                <span className={classes.cantidadcarrito}>0</span>
            </button>
        </header>
            </div>
    );
}

export default Navbar;