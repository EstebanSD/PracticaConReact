import React from 'react';
import '../hojas-estilo/Boton.css';

//usando desestructuración y no props
class Boton extends React.Component {
    render() {
        return (
            <button
                className={ this.props.esBotonClick ? 'boton-click' : 'boton-reiniciar' }
                onClick={this.props.manejador}>
                {this.props.texto}
            </button>
        );
    };
};

export default Boton;