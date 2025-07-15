import axios from 'axios';

export const crearItem = async (datos, token) => {
  const formData = new FormData();
  formData.append('titulo', datos.titulo);
  formData.append('descripcion', datos.descripcion);
  formData.append('imagen', datos.imagen);
  formData.append('estado', datos.estado); // nuevo campo obligatorio
  formData.append('deseados', datos.deseados);

  const config = {
    headers: {
      'Authorization': `Token ${token}`,
      'Content-Type': 'multipart/form-data',
    }
  };

  const response = await axios.post('http://localhost:8000/api/items/crear/', formData, config);
  return response.data;
};
