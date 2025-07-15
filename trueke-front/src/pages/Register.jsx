import { useState } from 'react';
import { registrarUsuario } from '../api/auth';

function Register() {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    celular: '',
    password: ''
  });

  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registrarUsuario(form);
      setMensaje('Usuario registrado exitosamente.');
      setError('');
    } catch (err) {
      setError('Error al registrar usuario.');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="first_name" placeholder="Nombre" value={form.first_name} onChange={handleChange} />
        <input type="text" name="last_name" placeholder="Apellido" value={form.last_name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Correo" value={form.email} onChange={handleChange} />
        <input type="text" name="celular" placeholder="Celular" value={form.celular} onChange={handleChange} />
        <input type="password" name="password" placeholder="Contraseña" value={form.password} onChange={handleChange} />
        <button type="submit">Registrarse</button>
        </form>

      {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Register; 
