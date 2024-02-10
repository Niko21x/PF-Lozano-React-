import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import classes from './Navbar.module.css';
import Cart from './Cart';
import { CartContext } from './CartContext';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Esto es necesario para la accesibilidad

function Navbar() {
    const { cart } = useContext(CartContext);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const handleCartClick = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div>
            <header>
                <h1>Tienda de Guitarras Eléctricas</h1>
                <div className={classes.navbar}>
                    <Link className={classes.nav} to="/">Home</Link>
                    <Link className={classes.nav} to="/category/fender">Fender</Link>
                    <Link className={classes.nav} to="/category/gibson">Gibson</Link>
                    <Link className={classes.nav} to="/category/ibanez">Ibanez</Link>
                    <Link className={classes.nav} to="/category/ESP">ESP</Link>
                </div>
                <button className={classes.carritobtn} onClick={handleCartClick}> 
                    <img src="/img/cart.png" alt="carrito de compras" className={classes.imgcompras} /> 
                    <span className={classes.cantidadcarrito}>{totalItems}</span>
                </button>
            </header>

            <Modal
                isOpen={isCartOpen}
                onRequestClose={handleCartClick}
                contentLabel="Carrito"
                overlayClassName={classes.modalOverlay}
            >
                <div className={classes.modalContent}>
                    <Cart />
                    <button onClick={handleCartClick}>Cerrar carrito</button>
                </div>
            </Modal>
        </div>
    );
}

export default Navbar;