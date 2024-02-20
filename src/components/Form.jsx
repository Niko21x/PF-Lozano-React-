import { useState, useContext } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import createOrder from '../services/Firestore';
import classes from './Form.module.css'

function CheckoutForm() {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (email !== confirmEmail) {
            alert('Los emails no coinciden');
            return;
        }

        const items = cart.map(item => ({
            id: item.id,
            marca: item.marca,
            modelo: item.modelo,
            precio: item.precio,
            quantity: item.quantity,
        }));

        const contactData = {
            nombre,
            apellido,
            telefono,
            email
        };

        try {
            const orderId = await createOrder(items, contactData);
            setIsModalOpen(true);
            setTimeout(() => {
                setIsModalOpen(false);
                navigate(`/order/${orderId}`);
            }, 3000);
        } catch (error) {
            alert('Hubo un error al crear la orden');
            console.error(error);
        }
    };

    const total = cart.reduce((sum, item) => sum + (item.precio * item.quantity), 0);

    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit} className={classes.form}>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required />
                <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Apellido" required />
                <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Teléfono" required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} placeholder="Confirma tu Email" required />
                <button className={classes.send} type="submit">Enviar</button>
            </form>
            <div className={classes['loading-animation']}></div>
            <div className={classes['order-summary']}>
                <h2>Resumen de la orden</h2>
                {cart.map((item, index) => (
                    <div className={classes.contain2} key={index}>
                        <p>Producto: {item.marca} {item.modelo}</p>
                        <p>Cantidad: {item.quantity}</p>
                    </div>
                ))}
                <p className={classes.total}>Total: ${total}</p>
            </div>
            <Modal 
                isOpen={isModalOpen}
                className={classes.successmodal}
                overlayClassName={classes.successoverlay}
            >
                <h2>Orden creada con éxito</h2>
                <div className={classes.checkmark}></div>
                <button className={classes.closecart} onClick={() => setIsModalOpen(false)}>Continuar</button>
            </Modal>
        </div>
    );
}

export default CheckoutForm;