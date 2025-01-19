class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    // Opções iniciais
    if (lowerCaseMessage === "1" || lowerCaseMessage.includes("cadastrar")) {
      this.actionProvider.handleRegister();
    } else if (lowerCaseMessage === "2" || lowerCaseMessage.includes("login")) {
      this.actionProvider.handleLogin();
    } else if (lowerCaseMessage === "3" || lowerCaseMessage.includes("administrador")) {
      this.actionProvider.handleSupport(); // Simulando suporte para Admin
    } else if (lowerCaseMessage === "4" || lowerCaseMessage.includes("suporte")) {
      this.actionProvider.handleSupport();
    } else if (lowerCaseMessage === "5" || lowerCaseMessage.includes("senha")) {
      this.actionProvider.handlePasswordRecovery();

      // Após login
    } else if (lowerCaseMessage === "1" && this.actionProvider.clientLoggedIn) {
      this.actionProvider.handleAgendarConsulta();
    } else if (lowerCaseMessage === "2" && this.actionProvider.clientLoggedIn) {
      this.actionProvider.handleUnknown(); // Verificar consultas anteriores (a ser implementado)
    } else if (lowerCaseMessage === "3" && this.actionProvider.clientLoggedIn) {
      this.actionProvider.handleSupport();

      // Escolha de especialidade
    } else if (lowerCaseMessage.includes("pediatria")) {
      this.actionProvider.handleEspecialidade("Pediatria");
    } else if (lowerCaseMessage.includes("cardiologia")) {
      this.actionProvider.handleEspecialidade("Cardiologia");
    } else if (lowerCaseMessage.includes("dermatologia")) {
      this.actionProvider.handleEspecialidade("Dermatologia");
    } else if (lowerCaseMessage.includes("ortopedia")) {
      this.actionProvider.handleEspecialidade("Ortopedia");
    } else if (lowerCaseMessage.includes("ginecologia")) {
      this.actionProvider.handleEspecialidade("Ginecologia");

      // Mensagem desconhecida
    } else {
      this.actionProvider.handleUnknown();
    }
  }
}

export default MessageParser;
