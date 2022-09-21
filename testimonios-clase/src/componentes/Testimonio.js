import React from 'react';
import '../hojas-de-estilo/Testimonio.css';


class Testimonio extends React.Component {
    render () {
        return (
            <div className='contenedor-testimonio'>
                <img 
                    className='imagen-testimonio'
                    src={require(`../imagenes/testimonio-${this.props.imagen}.jpg`)} 
                    alt={`Foto de ${this.props.nombre}`}
                />
                <div className='contenedor-texto-testimonio'>
                    <p className='nombre-testimonio-en'>
                        <b>{this.props.nombre}</b> en {this.props.pais}
                    </p>
                    <p className='cargo-testimonio-en'>
                        {this.props.cargo} en <b>{this.props.empresa}</b>
                    </p>
                    <p className='texto-testimonio'>"{this.props.testimonio}"</p>
                </div>
            </div> 
        );
    };
};

export default Testimonio;