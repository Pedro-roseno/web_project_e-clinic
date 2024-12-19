import "../../styles/global.css";
import React from "react";
import { Container, Menu, Input, Button, Icon } from "semantic-ui-react";

const MenuLayout = () => (
  <div>
    {/* Menu no topo */}
    <Menu fixed="top" style={{ backgroundColor: "#265BA7" }}>
      <Container>
        <div
          style={{
            color: "white",
            fontSize: "3rem",
            fontWeight: "bold",
            marginRight: "10rem",
            alignSelf: "center",
          }}
        >
          eClinic+
        </div>
        <Menu.Item as="a">Início</Menu.Item>
        <Menu.Item as="a">Sobre</Menu.Item>
        <Menu.Item as="a">Serviços</Menu.Item>
        <Menu.Item as="a">Depoimentos</Menu.Item>
      </Container>
    </Menu>
    {/* Caixa de texto no meio da tela */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "end", // Alinha itens do container
        height: "100vh", // Centraliza verticalmente
        paddingTop: "5rem", // Ajusta para não ficar atrás do menu
      }}
    >
      {/* Exemplo de mensagem do bot */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          marginBottom: "1rem",
          width: "60%",
        }}
      >
        <img
          src="/robot.png"
          style={{
            marginRight: "0.5rem",
            width: "60px",
            height: "60px",
            borderRadius: "50%", // Deixa a imagem em formato circular
            marginRight: "0.5rem",
          }}
        />
        <div
          style={{
            backgroundColor: "#e0e0e0",
            borderRadius: "10px",
            padding: "10px",
            maxWidth: "70%",
          }}
        >
          Gostaria de iniciar um atendimento ou acessar o sistema? Para
          pacientes: Para iniciar o atendimento, por favor, informe o seu CPF.
          Para médicos: Para acessar o sistema, informe o seu CRM ou CPF.
        </div>
      </div>
      {/* Exemplo de mensagem do usuário */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          marginBottom: "1rem",
          justifyContent: "flex-end",
          width: "60%",
        }}
      >
        <div
          style={{
            backgroundColor: "#007bff",
            color: "white",
            borderRadius: "10px",
            padding: "10px",
            maxWidth: "70%",
            textAlign: "right",
          }}
        >
          XXX.XXX.XXX-XX
        </div>
        <Icon name="user circle" size="huge" style={{ marginLeft: "0.5rem" }} />
      </div>
      <Input
        action={
          <Button inverted color="blue">
            Enviar
          </Button>
        }
        placeholder="Mensagem"
        style={{ width: "60%" }} // Alterar tamanho da caixatexto
      />
    </div>
  </div>
);
export default MenuLayout;
