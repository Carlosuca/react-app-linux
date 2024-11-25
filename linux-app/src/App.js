import './App.css';
import { useState } from 'react';

function App() {
  const [detallesVisibles, setDetallesVisibles] = useState(Array(4).fill(false));

  const jugadores = [
    {
      nombre: "Lionel Messi",
      descripcion: "Considerado como el mejor jugador de la historia. Ha ganado múltiples Balones de Oro y Champions League.",
      detalles: "Ha jugado principalmente en Barcelona y actualmente en Inter Miami. Además, es campeón mundial con Argentina en 2022.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"
    },
    {
      nombre: "Pelé",
      descripcion: "Conocido como 'O Rei', Pelé es una leyenda del fútbol brasileño y tres veces campeón del mundo.",
      detalles: "Marcó más de 1,000 goles en su carrera y fue un ícono dentro y fuera del campo por su labor humanitaria.",
      imagen: "https://www.clarin.com/2022/10/21/SsSA8miEa_2000x1500__1.jpg"
    },
    {
      nombre: "Diego Maradona",
      descripcion: "Famoso por su habilidad con el balón, Maradona llevó a Argentina a la victoria en la Copa Mundial de 1986.",
      detalles: "Recordado por el 'Gol del Siglo' contra Inglaterra y su paso por clubes como Napoli y Barcelona.",
      imagen: "https://hips.hearstapps.com/hmg-prod/images/muere-maradona-1606326764.jpg?crop=0.845xw:1.00xh;0.0783xw,0&resize=640:*"
    },

  ];

  const toggleDetalles = (index) => {
    const nuevosDetalles = [...detallesVisibles];
    nuevosDetalles[index] = !nuevosDetalles[index];
    setDetallesVisibles(nuevosDetalles);
  };

  return (
    <div className="App">
      <h1>Jugadores Icónicos del Fútbol</h1>
      <div className="galeria">
        {jugadores.map((jugador, index) => (
          <div key={index} className="card">
            <img src={jugador.imagen} alt={jugador.nombre} />
            <h2>{jugador.nombre}</h2>
            <p>{jugador.descripcion}</p>
            {detallesVisibles[index] && <p className="detalles">{jugador.detalles}</p>}
            <button onClick={() => toggleDetalles(index)}>
              {detallesVisibles[index] ? "Ver menos" : "Ver mas"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
