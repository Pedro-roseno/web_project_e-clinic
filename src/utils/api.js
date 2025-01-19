import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api"; // Substitua pela URL do seu backend

// Instância do Axios com a base URL
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Função para cadastrar um novo usuário
export const registerUser = async (email, senha) => {
  try {
    const response = await api.post("/register", { email, senha });
    return response.data;
  } catch (error) {
    console.error("Erro na API de Cadastro:", error);
    return { status: "error", message: "Não foi possível realizar o cadastro" };
  }
};

// Função para login
export const loginUser = async (email, senha) => {
  try {
    const response = await api.post("/login", { email, senha });
    return response.data;
  } catch (error) {
    console.error("Erro na API de Login:", error);
    return { status: "error", message: "Credenciais inválidas" };
  }
};

// Função para buscar especialidades
export const getEspecialidades = async () => {
  try {
    const response = await api.get("/especialidades");
    return response.data;
  } catch (error) {
    console.error("Erro na API de Especialidades:", error);
    return [];
  }
};

// Função para agendar consulta
export const agendarConsulta = async (dados) => {
  try {
    const response = await api.post("/agendamento", dados);
    return response.data;
  } catch (error) {
    console.error("Erro na API de Agendamento:", error);
    return { status: "error", message: "Não foi possível agendar a consulta" };
  }
};

// Função para buscar consultas anteriores
export const getConsultas = async (pacienteId) => {
  try {
    const response = await api.get(`/consultas`, { params: { pacienteId } });
    return response.data;
  } catch (error) {
    console.error("Erro na API de Consultas:", error);
    return [];
  }
};
