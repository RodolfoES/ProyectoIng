import { useState } from 'react';
import { crearItem } from '../api/items';

function Publicar() {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);
  const [deseados, setDeseados] = useState('');
  const [estado, setEstado] = useState('publicado'); // campo nuevo
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      alert("Debes iniciar sesión para publicar");
      return;
    }

    try {
      await crearItem({ titulo, descripcion, imagen, deseados, estado }, token);
      setMensaje("✅ Objeto publicado con éxito");
      setTitulo('');
      setDescripcion('');
      setImagen(null);
      setDeseados('');
      setEstado('publicado');
    } catch (error) {
      console.error(error);
      setMensaje("❌ Error al publicar");
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Publicar Objeto</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        <textarea placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        <input type="file" onChange={(e) => setImagen(e.target.files[0])} />
        <input type="text" placeholder="Deseados" value={deseados} onChange={(e) => setDeseados(e.target.value)} />

        <select value={estado} onChange={(e) => setEstado(e.target.value)}>
          <option value="publicado">Publicado</option>
          <option value="reservado">Reservado</option>
          <option value="intercambiado">Intercambiado</option>
        </select>

        <button type="submit">Publicar</button>
      </form>

      {mensaje && (
        <p style={{ color: mensaje.includes("✅") ? "green" : "red" }}>{mensaje}</p>
      )}
    </div>
  );
}

export default Publicar;
