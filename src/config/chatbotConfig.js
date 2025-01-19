import { createChatBotMessage } from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

const botName = "eClinic+";

const chatbotConfig = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(
      `Bem-vindo ao ${botName}! Estamos felizes por você escolher nossa plataforma para cuidar da sua saúde.`
    ),
    createChatBotMessage(
      "Escolha uma das opções abaixo:\n1. Cadastrar-se\n2. Fazer login\n3. Login de Administrador\n4. Falar com o Suporte\n5. Recuperar senha"
    ),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#007bff",
    },
    chatButton: {
      backgroundColor: "#007bff",
    },
  },
  actionProvider: ActionProvider,
  messageParser: MessageParser,
};

export default chatbotConfig;
