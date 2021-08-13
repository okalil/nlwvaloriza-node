import React, { FormEvent } from 'react';
import { useParams, useHistory } from 'react-router';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import { api } from '../services/api';

import { Box } from '../components/Box';
import { FormButton } from '../components/FormButton';
import { FormControl } from '../components/FormControl';
import { CenteredContainer } from '../components/CenteredContainer';

type ParamsType = { token: string };

const Container = styled.div`
  display: grid;
  row-gap: 1rem;
  text-align: center;
`;
const Form = styled(Box).attrs({ as: 'form' })`
  width: min(90vw, 300px);
  display: grid;
  gap: 1rem;
`;

const ResetPassword: React.FC = () => {
  const history = useHistory();
  const { token }: ParamsType = useParams();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const [password, repeatPassword] = formData.getAll('password');

    if (password !== repeatPassword) {
      toast.error('As senhas não coincidem!');
      return;
    }

    try {
      await api.post('/reset_password', { password, token });
      toast.success('Boa! Agora você já pode fazer o login!');
      history.push('/login');
    } catch (error) {
      toast.error('Seu link é inválido ou expirou.');
      console.log(error);
    }
  };

  return (
    <CenteredContainer>
      <Container>
        <h1>Redefina sua senha</h1>

        <Form onSubmit={handleSubmit}>
          <FormControl
            type="text"
            name="password"
            placeholder="Sua nova senha"
            required
          />
          <FormControl
            type="text"
            name="password"
            placeholder="Confirme sua senha"
            required
          />
          <FormButton type="submit">Enviar</FormButton>
        </Form>
      </Container>
    </CenteredContainer>
  );
};

export default ResetPassword;
