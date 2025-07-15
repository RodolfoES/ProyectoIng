import axios from 'axios';

const API_URL = 'http://localhost:8000/api/users';  

export const registrarUsuario = async (datos) => {
  try {
    const response = await axios.post(`${API_URL}/register/`, datos);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
