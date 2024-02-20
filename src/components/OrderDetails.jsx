// OrderDetails.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import  db  from '../services/Firebase';
import classes from './Order.module.css';
import  {Link}  from 'react-router-dom';

function OrderDetails() {
    const { orderId } = useParams();
    const [orderData, setOrderData] = useState(null);

    useEffect(() => {
        const fetchOrderData = async () => {
            const docRef = doc(db, 'orders', orderId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setOrderData(docSnap.data());
            } else {
                console.log('No such document!');
            }
        };

        fetchOrderData();
    }, [orderId]);

    if (!orderData) {
        return <div>Loading...</div>;
    }

    return (
        <div className={classes.containorder}>
            <h2>Comprobante de pago</h2>
            <p>El ID de tu compra es: {orderId}</p>
            <div className={classes.gridContainer}>
                <div>
                    {orderData.items.map((item, index) => (
                        <div className={classes.list} key={index}>
                            <p className={classes.product}>Producto: {item.marca} {item.modelo}</p>
                            <p className={classes.quantity}>Cantidad: {item.quantity}</p>
                            <p className={classes.price}>Precio: {item.precio}</p>
                        </div>
                    ))}
                    <p className={classes.total}>Total: {orderData.items.reduce((sum, item) => sum + (item.precio * item.quantity), 0)}</p>
                </div>
                <div>
                    <h2>Datos del comprador</h2>
                    <p>Nombre: {orderData.contactData.nombre}</p>
                    <p>Apellido: {orderData.contactData.apellido}</p>
                    <p>Teléfono: {orderData.contactData.telefono}</p>
                    <p>Email: {orderData.contactData.email}</p>
                </div>
            </div>
            <Link className={classes.closecart} to="/">Volver a inicio</Link>
        </div>
    );
}

export default OrderDetails;