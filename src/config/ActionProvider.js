import {
  registerUser,
  loginUser,
  getEspecialidades,
  agendarConsulta,
  getConsultas,
} from "../utils/api"; // Funções de API usando Axios

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.clientLoggedIn = false; // Variável para verificar se o cliente está logado
  }

  // Exibe opções iniciais após o login
  handleInitialOptions = () => {
    const message = this.createChatBotMessage(
      `Olá! Seja bem-vindo(a) de volta!\nComo posso ajudar você hoje?\n1 - Agendar uma nova consulta\n2 - Verificar consultas anteriores\n3 - Falar com o suporte`
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  // Lida com o cadastro de usuário
handleRegister = async (email, senha) => {
  try {
    // Chama a API para registrar o usuário
    const response = await registerUser(email, senha);

    // Verifica se o cadastro foi bem-sucedido
    if (response.status === "success") {
      const message = this.createChatBotMessage(
        "Cadastro realizado com sucesso! Você já pode fazer login."
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    } else {
      // Exibe mensagem de erro retornada pelo backend
      const message = this.createChatBotMessage(
        response.message || "Houve um problema ao realizar o cadastro."
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  } catch (error) {
    // Lida com erros inesperados
    console.error("Erro na API de Cadastro:", error);
    const message = this.createChatBotMessage(
      "Desculpe, ocorreu um erro ao tentar registrar. Tente novamente mais tarde."
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }
};


  // Lida com o login
  handleLogin = async () => {
    const response = await loginUser("admin@example.com", "senha123"); // Simula entrada do usuário
    if (response.status === "success") {
      const message = this.createChatBotMessage(
        `Login bem-sucedido! Bem-vindo, ${response.role === "admin" ? "Administrador" : "Cliente"}!`
      );
      this.clientLoggedIn = true; // Atualiza estado de login
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
      this.handleInitialOptions(); // Mostra as opções após login
    } else {
      const message = this.createChatBotMessage("Login falhou. Tente novamente.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  };

  // Lida com o suporte
  handleSupport = () => {
    const message = this.createChatBotMessage(
      "Nosso suporte está disponível em suporte@eclinic.com ou pelo telefone (11) 99999-9999."
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  // Recuperação de senha
  handlePasswordRecovery = () => {
    const message = this.createChatBotMessage(
      "Por favor, insira seu email para enviarmos um link de recuperação de senha."
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  // Agendamento de consultas
  handleAgendarConsulta = async () => {
    const especialidades = await getEspecialidades(); // Obtém especialidades do backend
    const message = this.createChatBotMessage(
      `Ótimo! Vamos agendar sua consulta.\nEscolha uma das especialidades abaixo para ver os médicos disponíveis:\n` +
      especialidades.map((e) => `${e.id}. ${e.nome} - ${e.medico}`).join("\n")
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  // Lida com a escolha de especialidade
  handleEspecialidade = async (especialidade) => {
    const dados = {
      especialidade: especialidade,
      data: "2023-01-20", // Simulação
      horario: "10:30", // Simulação
      paciente: "João Silva", // Simulação
    };
    const response = await agendarConsulta(dados);
    const message = this.createChatBotMessage(response.message);
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  // Consultas anteriores
  handleConsultas = async () => {
    const consultas = await getConsultas("paciente123"); // Substituir por ID real
    const message = this.createChatBotMessage(
      "Aqui estão suas consultas anteriores:\n" +
      consultas.map((c) => `${c.data} - ${c.horario} - ${c.especialidade}`).join("\n")
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  // Resposta para mensagens desconhecidas
  handleUnknown = () => {
    const message = this.createChatBotMessage(
      "Desculpe, não entendi sua solicitação. Por favor, tente novamente."
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
}

export default ActionProvider;
