// orderid.jsx
import { useParams, useNavigate } from 'react-router-dom';
import classes from './Order.module.css';

function OrderPage() {
    const { orderId } = useParams();
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate(`/order/${orderId}/details`);
    };

    return (
        <div className={classes.containorder}>
            <h2>Tu pedido ha sido realizado</h2>
            <p>El ID de tu compra es: {orderId}</p>
            <button className={classes.closecart} onClick={handleContinue}>Continuar</button>
        </div>
    );
}

export default OrderPage;