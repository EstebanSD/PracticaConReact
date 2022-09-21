import React from 'react';
import logo from '../logo.svg';
import '../hoja-estilos/Logo.css';

function Logo() {
    return (
        <div className='contenedor-logo'>
            <img
            className='logo'
            src={logo}
            alt='logo' />
        </div>
    );
};

export default Logo;