import React from 'react';
import '../hoja-estilos/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea ({ id, texto, completada, completarTarea, eliminarTarea }) {
    return (
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div 
                className='tarea-texto'
                onClick={() => completarTarea(id)} >
                
                {texto}
            </div>
            <div 
                className='tarea-contenedor-icono'
                onClick={() => eliminarTarea(id)} >

                {/*No se le esta asignanco una clase, es un prop, ya que el icono es un componente*/}
                <AiOutlineCloseCircle className='tarea-icono' />
            </div>
        </div>
    );
};

export default Tarea;