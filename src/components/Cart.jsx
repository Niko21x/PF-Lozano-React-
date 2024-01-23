import  { useState } from 'react';

function Cart() {
    const [cartItems] = useState([]);

    // Comenta la función addToCart si no la necesitas en este momento
    // const addToCart = (item) => {
    //     setCartItems(prevItems => [...prevItems, item]);
    // };

    // Asumiendo que tienes un item para agregar al carrito
    // const item = { name: 'Producto', description: 'Descripción del producto' };

    return (
        <div>
            {cartItems.map((item, index) => (
                <div key={index}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
            {/* Aquí puedes agregar un botón o alguna otra forma de agregar productos al carrito */}
            {/* <button onClick={() => addToCart(item)}>Agregar al carrito</button> */}
        </div>
    );
}

export default Cart;