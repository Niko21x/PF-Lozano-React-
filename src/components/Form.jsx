import { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import createOrder from '../services/Firestore'; // Asegúrate de importar la función createOrder
import classes from './Form.module.css'

function CheckoutForm() {
    const { cart } = useContext(CartContext); // Accede a los datos del carrito

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (email !== confirmEmail) {
            alert('Los emails no coinciden');
            return;
        }

        // Aquí puedes manejar el envío del formulario
        const items = cart.map(item => ({ // Transforma los items del carrito para que coincidan con la estructura de tus documentos de Firestore
            id: item.id,
            descripcion: item.descripcion,
            precio: item.precio,
            quantity: item.quantity, // Asegúrate de incluir la cantidad
            // ... cualquier otro campo que necesites ...
        }));

        try {
            await createOrder(items); // Crea la orden con los items del carrito
            alert('Orden creada con éxito');
        } catch (error) {
            alert('Hubo un error al crear la orden');
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required />
            <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Apellido" required />
            <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Teléfono" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} placeholder="Confirma tu Email" required />
            <button className={classes.send} type="submit">Enviar</button>
        </form>
    );
}

export default CheckoutForm;