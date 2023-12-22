import classes from './Header.module.css';
import React from 'react';
import Lupa from '../assets/lupa.png';
import CartWidget from './CartWidget';

const Header = () => {
    
    return (
        <div className={classes.container}>
            <div className={classes.header}>
            <header>
            <h2>EthicalEmporium</h2>
            </header>
            </div>
            <div className={classes.buscador}>
                <label htmlFor="nombre">
                    <input type="text" className={classes.search} />
                </label>
                <button className={classes.boton}></button>
            <img src={Lupa} alt="buscador"  className={classes.Lupa}/>
            </div>
            <CartWidget/>
       
        </div>
    );
};


export default Header;