import axios from 'axios';

const API_URL = 'http://localhost:8080/api/pacientes';

const pacienteService = {
  // Criar um novo paciente
  create: async (dados) => {
    try {
      const response = await axios.post(API_URL, dados);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar paciente:', error);
      throw error;
    }
  },

  // Obter todos os pacientes
  getAll: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar pacientes:', error);
      throw error;
    }
  },

  // Obter um paciente pelo ID
  getById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar paciente com ID ${id}:`, error);
      throw error;
    }
  },

  // Atualizar um paciente pelo ID
  update: async (id, dados) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, dados);
      return response.data;
    } catch (error) {
      console.error(`Erro ao atualizar paciente com ID ${id}:`, error);
      throw error;
    }
  },

  // Deletar um paciente pelo ID
  delete: async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return { message: 'Paciente deletado com sucesso' };
    } catch (error) {
      console.error(`Erro ao deletar paciente com ID ${id}:`, error);
      throw error;
    }
  }
};

export default pacienteService;