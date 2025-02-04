import React from "react";
import ActionButtons from "./ActionButtons"; // Importando o componente principal

export const TestIcons = () => {
  return (
    <div>
      <h3>Testando Botões para Admin:</h3>
      <ActionButtons userType="admin" onAdd={() => {}} onEdit={() => {}} onDelete={() => {}} />

      <h3>Testando Botões para Paciente:</h3>
      <ActionButtons userType="paciente" onAdd={() => {}} onEdit={() => {}} onDelete={() => {}} />

      <h3>Testando Botões para Médico (nenhum botão deve aparecer):</h3>
      <ActionButtons userType="medico" onAdd={() => {}} onEdit={() => {}} onDelete={() => {}} />
    </div>
  );
};
