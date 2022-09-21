import React from 'react';
import './App.css';
import logoClick from './imagenes/logo-click.png';
import Contador from './componentes/Contador';
import Boton from './componentes/Boton';


class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      numClicks : 0
    }
    this.manejarClick = this.manejarClick.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  };
  
  manejarClick() {
    //usando desestructuracion y funcion flecha, devuelve un objeto
    this.setState(({ numClicks }) => ({ numClicks: numClicks + 1 })); 
  } ; 

  reiniciarContador() {
    this.setState({ numClicks: 0 });
  };

  render() {
    return (
      <div className='App'>
        <div className='logo-contenedor'>
          <img
            className='logo-click'
            src={logoClick}
            alt='logoClick'/>
        </div>
        <div className='contador-contenedor'>
          
          <Contador numero={this.state.numClicks} />
          
          <Boton
            texto='Click'
            esBotonClick={true}
            manejador={this.manejarClick}/>
          
          <Boton
            texto='Reiniciar'
            esBotonClick={false}
            manejador={this.reiniciarContador}/>
        
        </div>
      </div>
    );  
  };
};

export default App;
