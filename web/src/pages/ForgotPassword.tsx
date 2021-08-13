import React, { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import { api } from '../services/api';

import { Box } from '../components/Box';
import { CenteredContainer } from '../components/CenteredContainer';
import { FormButton } from '../components/FormButton';
import { FormControl } from '../components/FormControl';
import { LinkPrimary } from '../components/LinkPrimary';

const GridContainer = styled.div`
  display: grid;
  row-gap: 1rem;

  h1,
  h2 {
    text-align: center;
  }
`;
const GridBox = styled(Box)`
  display: grid;
  gap: 1rem;
  width: min(90vw, 325px);
  margin: auto;
  padding: 1.5rem;
`;

const ForgotPassword: React.FC = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get('email');

    try {
      await api.post('/forgot_password', { email });
      toast.success('Acabamos de te enviar um link para redefinição de senha!');
      setSent(true);
    } catch (err) {
      toast.error('Esse email não está registrado!');
      console.log(err);
    }
  };

  return (
    <CenteredContainer>
      {sent ? (
        <GridContainer>
          <h1>Redefina sua senha</h1>
          <GridBox>
            <strong>
              Verifique seu e-mail para obter um link para redefinir sua senha.
              Se não aparecer em alguns minutos, verifique sua pasta de spam.
            </strong>
            <LinkPrimary to="/login">Voltar para Login</LinkPrimary>
          </GridBox>
        </GridContainer>
      ) : (
        <GridContainer>
          <h1>Verifique sua conta</h1>
          <GridBox as="form" onSubmit={handleSubmit}>
            <label htmlFor="email_field">
              <strong>
                Digite seu endereço email e te enviaremos um link para redefinir
                a sua senha.
              </strong>
            </label>
            <FormControl
              required
              type="text"
              name="email"
              id="email_field"
              placeholder="Insira seu endereço de email"
            />
            <FormButton type="submit">Verificar</FormButton>
          </GridBox>
          <LinkPrimary to="/login">Voltar</LinkPrimary>
        </GridContainer>
      )}
    </CenteredContainer>
  );
};

export default ForgotPassword;
