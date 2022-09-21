import Testimonio from './componentes/Testimonio';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros famosos Argentinos:</h1>
        <Testimonio 
          imagen='ankaramessi'
          nombre='Lionel Andrés Messi Cuccittini'
          pais='Paris'
          cargo='Jugador de futbol'
          empresa='PSG'
          testimonio='Que nosotros anteriormente habíamos hecho cosas espectaculares y no se valoraba,
          como llegar a una final del mundo, dos finales de Copa América. Se fue muy injusto con el grupo anterior, 
          porque es esto que decís vos. Nosotros dimos todo en ese momento por la Selección y quedó una sensación rara con ese grupo, 
          fue maltratado y no se lo merecía porque había hecho cosas importantes'
        />
        <Testimonio 
          imagen='marley'
          nombre='Alejandro Wiebe'
          pais='Argentina'
          cargo='Conductor'
          empresa='La Voz'
          testimonio='Destrui la caja de cereales! Se me aplastó con la bolsa del super! Soy un asesino cereal!, 
          Las vías que marcan el futuro de... Perdón, quise escribir esas frases “profundas” que escriben varios, 
          pero mejor sigo poniendo pavadas jaja, Mirko y yo en las vías'
        />
        <Testimonio 
          imagen='comandante'
          nombre='Ricardo Fort'
          pais='Maiameeeee'
          cargo='Comandante del Rating'
          empresa='ShowMatch'
          testimonio='Mamá, sacá la mano de ahí carajo. Acabás de cortar la electricidad,
            te podés quedar electrificada, loca!. Mamá cortaste toda la looz.
            Yo no manejo el rating, yo manejo un Rolls Royce. Basta chicos...'
        />

      </div>
    </div>
  );
}

export default App;
