import React from 'react';
import '../hojas-estilo/Contador.css';

class Contador extends React.Component {
    render() {
        return (
            <div className='contador'>
                {this.props.numero}
            </div>
        );    
    };
};

export default Contador;