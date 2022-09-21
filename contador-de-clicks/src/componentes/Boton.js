import React from 'react';
import '../hojas-estilo/Boton.css';

//usando desestructuración y no props
function Boton ({ texto, esBotonClick, manejador }) {
    return (
        <button
            className={ esBotonClick ? 'boton-click' : 'boton-reiniciar' }
            onClick={manejador}>
            {texto}
        </button>
    );
}

export default Boton;