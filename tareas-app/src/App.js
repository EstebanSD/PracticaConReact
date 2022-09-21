import './App.css';
import ListaTareas from './componentes/ListaTareas';
import Logo from './componentes/Logo';

function App() {
  return (
    <div className='App'>
      <Logo/>

      <div className='componente-tareas'>
        <h1>Mis Tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
