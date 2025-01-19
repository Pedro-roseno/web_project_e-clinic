import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import chatbotConfig from "../../config/chatbotConfig";
import MessageParser from "../../config/MessageParser";
import ActionProvider from "../../config/ActionProvider";
import "./ChatbotScreen.css";

const ChatbotScreen = () => {
  return (
    <div className="chatbot-container">
      <h1 className="chatbot-title">eClinic+ Chatbot</h1>
      <Chatbot
        config={chatbotConfig}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatbotScreen;
