import { useState } from 'react';
import axios from 'axios';

function Verify() {
  const [email, setEmail] = useState('');
  const [codigo, setCodigo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/users/verify/', {
        email,
        codigo,
      });
      setMensaje(response.data.msg || 'Cuenta verificada correctamente');
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Error en la verificación');
      setMensaje('');
    }
  };

  return (
    <div>
      <h2>Verificar Cuenta</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Código de verificación" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
        <button type="submit">Verificar</button>
      </form>
      {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Verify;
