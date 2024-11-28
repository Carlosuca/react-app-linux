import './App.css';
import { useState } from 'react';

function App() {
  const [detallesVisibles, setDetallesVisibles] = useState(Array(4).fill(false));

  const jugadores = [
    {
      nombre: "",
      descripcion: "Considerado como el mejor jugador de la historia. Ha ganado múltiples Balones de Oro y Champions League.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"
    },
    {
      nombre: "Pelé",
      descripcion: "Conocido como 'O Rei', Pelé es una leyenda del fútbol brasileño y tres veces campeón del mundo.",
      imagen: "https://www.clarin.com/2022/10/21/SsSA8miEa_2000x1500__1.jpg"
    },
    {
      nombre: "Diego Maradona",
      descripcion: "Famoso por su habilidad con el balón, Maradona llevó a Argentina a la victoria en la Copa Mundial de 1986.",
      imagen: "https://hips.hearstapps.com/hmg-prod/images/muere-maradona-1606326764.jpg?crop=0.845xw:1.00xh;0.0783xw,0&resize=640:*"
    },
    {
      nombre: "Cristiano Ronaldo",
      descripcion: "Una máquina de goles, ganador de múltiples Balones de Oro y títulos con varios clubes europeos.",
      imagen: "https://img.asmedia.epimg.net/resizer/v2/NJ7KAGQD6S7SESSOVBPSFWIXXY.jpg?auth=b67979cf13e7b2b4e7e6589e408d6bcf7dfaf91eb9821c5f13e09cce0624ab2c&width=1200&height=1200&focal=1351%2C524"
    }
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
