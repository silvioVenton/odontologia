// components/Form.js
"use client";

import { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

const Form = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'agendamentos'), form);
      alert('Seu agendamento foi enviado com sucesso! Em breve entraremos em contato.');
      setForm({ nome: '', email: '', telefone: '' });
    } catch (error) {
      console.error('Erro ao enviar agendamento:', error);
      alert('Ocorreu um erro ao enviar seu agendamento. Por favor, tente novamente.');
    }
  };

  return (
    <div style={formContainerStyle}>
      <h2 style={formTitleStyle}>Agende sua Consulta</h2>
      <p style={formDescriptionStyle}>
        Preencha o formulário abaixo e nossa equipe entrará em contato para confirmar o agendamento.
      </p>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          placeholder="Seu Nome"
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Seu Email"
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="telefone"
          value={form.telefone}
          onChange={handleChange}
          placeholder="Seu Telefone"
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Enviar</button>
      </form>
    </div>
  );
};

// Estilos modernos para o formulário
const formContainerStyle = {
  maxWidth: '500px',
  margin: '0 auto',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  textAlign: 'center'
};

const formTitleStyle = {
  fontSize: '24px',
  marginBottom: '10px'
};

const formDescriptionStyle = {
  fontSize: '16px',
  marginBottom: '20px',
  color: '#555'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
};

const inputStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ddd',
  fontSize: '16px'
};

const buttonStyle = {
  padding: '10px 15px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#007bff',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer'
};

export default Form;
