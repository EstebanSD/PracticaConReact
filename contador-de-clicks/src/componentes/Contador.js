import React from 'react';
import '../hojas-estilo/Contador.css';

function Contador ({ numero }) {
    return (
        <div className='contador'>
            {numero}
        </div>
    );
}

export default Contador;