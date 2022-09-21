import React from 'react';
import '../hoja-estilos/Pantalla.css';

//Es igual a function Pantalla().....pero cuando los componentes 
//son sencillos se puede usar asi como a continuacion.
const Pantalla = ({ ver }) => (
    <div className='input'>
        {ver}
    </div>
);


export default Pantalla;