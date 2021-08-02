import React, { FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { api } from '../services/api';
import { useAuth } from '../hooks/useAuth';

import { Box } from '../components/Box';
import { Button } from '../components/Button';
import {
  Wrapper,
  Container,
  Title,
  About,
  Form,
  FormControl,
  GreenButton,
} from '../styles/login';

const Login: React.FC = () => {
  document.title = 'Login | Valoriza';
  const history = useHistory();
  const { setUserToken, setCurrentUserId } = useAuth();
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    try {
      const { data } = await api.post('/login', {
        headers: { 'Content-Type': 'application/json' },
        email: formData.get('email'),
        password: formData.get('password'),
      });
      const { token, user } = data;
      setUserToken(token);
      setCurrentUserId(user.id);
      localStorage.setItem(
        'currentUser',
        JSON.stringify({
          token,
          id: user.id,
          created_at: Date.now(),
        })
      );

      history.push('/');
    } catch (error) {
      if (error.message) {
        console.log(error.message);
      }
    }
  }

  return (
    <Wrapper>
      <Container>
        <div>
          <Title>Valoriza</Title>
          <About>
            O Valoriza promove o reconhecimento entre os companheiros de equipe.
          </About>
        </div>

        <Box>
          <Form onSubmit={handleSubmit}>
            <FormControl name="email" placeholder="Email" />
            <FormControl name="password" placeholder="Senha" />
            <Button>Entrar</Button>
          </Form>
          <hr />
          <GreenButton>Criar conta</GreenButton>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Login;
