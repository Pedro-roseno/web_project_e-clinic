import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "eClinicBot",
  initialMessages: [
    createChatBotMessage("Bem-vindo ao eClinic+! Escolha uma opção: 1. Cadastrar-se, 2. Login...")
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#5A9",
    },
    chatButton: {
      backgroundColor: "#5A9",
    },
  },
};

export default config;
