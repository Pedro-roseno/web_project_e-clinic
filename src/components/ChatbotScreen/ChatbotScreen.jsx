import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import chatbotConfig from "../../config/chatbotConfig";
import MessageParser from "../../config/MessageParser";
import ActionProvider from "../../config/ActionProvider";

const ChatbotScreen = () => {
  return (
    <div
      style={{ maxWidth: "600px", margin: "50px auto", textAlign: "center" }}
    >
      <h1 style={{ color: "#007bff" }}>eClinic+ Chatbot</h1>
      <Chatbot
        config={chatbotConfig}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatbotScreen;
