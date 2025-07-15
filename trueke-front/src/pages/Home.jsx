// src/pages/Home.jsx
import { useEffect, useState } from 'react';

function Home() {
  const [objetos, setObjetos] = useState([]);

  useEffect(() => {
    // Simulación de objetos por ahora
    const mockObjetos = [
      { id: 1, nombre: 'Bicicleta', descripcion: 'Bicicleta usada en buen estado', estado: 'Disponible' },
      { id: 2, nombre: 'Libro de Python', descripcion: 'Como nuevo, edición 2023', estado: 'Reservado' },
      { id: 3, nombre: 'Silla Gamer', descripcion: 'Color rojo, reclinable', estado: 'Intercambiado' },
    ];
    setObjetos(mockObjetos);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Objetos Disponibles para Trueke</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
        {objetos.map(obj => (
          <div key={obj.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
            <h3>{obj.nombre}</h3>
            <p>{obj.descripcion}</p>
            <span><strong>Estado:</strong> {obj.estado}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
