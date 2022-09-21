import './App.css';
import logoClick from './imagenes/logo-click.png';
import Contador from './componentes/Contador';
import Boton from './componentes/Boton';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1); 
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img
          className='logo-click'
          src={logoClick}
          alt='logoClick'/>
      </div>
      <div className='contador-contenedor'>
        
        <Contador
          numero={numClicks} />
        
        <Boton
          texto='Click'
          esBotonClick={true}
          manejador={manejarClick}/>
        
        <Boton
          texto='Reiniciar'
          esBotonClick={false}
          manejador={reiniciarContador}/>
      
      </div>
    </div>
  );
}

export default App;
