import React from 'react';
import '../hoja-estilos/Boton.css'

function Boton (props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor!='.') && (valor != '=');
    };

    return (
        <div                         //trimEnd() elimina espacios al final de una cadena de caracteres
            className={`contenedor-boton ${ esOperador(props.children) ? 'operador' : '' }`.trimEnd()}
            onClick={() => props.manejarClick(props.children)}>
            {props.children}
        </div>
    );
}

export default Boton;