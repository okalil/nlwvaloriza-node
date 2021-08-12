import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { api } from '../services/api';
import { useAuth } from '../hooks/useAuth';

import { ButtonSecondary } from '../components/ButtonSecondary';
import { CreateUser } from '../components/CreateUser';
import { FormButton } from '../components/FormButton';
import { FormControl } from '../components/FormControl';
import { LinkPrimary } from '../components/LinkPrimary';
import { Modal } from '../components/Modal';
import {
  Wrapper,
  Container,
  Title,
  About,
  LoginBox,
  Form,
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

  const [isModalOpen, setModalState] = useState(false);

  return (
    <Wrapper>
      <Container>
        <div>
          <Title>Valoriza</Title>
          <About>
            O Valoriza promove o reconhecimento entre os companheiros de equipe.
          </About>
        </div>

        <LoginBox>
          <Form onSubmit={handleSubmit}>
            <FormControl name="email" placeholder="Email" required />
            <FormControl
              name="password"
              placeholder="Senha"
              type="password"
              required
            />
            <FormButton>Entrar</FormButton>
            <LinkPrimary to="/forgot">Esqueceu sua senha?</LinkPrimary>
          </Form>
          <hr />
          <ButtonSecondary onClick={() => setModalState(true)}>
            Criar nova conta
          </ButtonSecondary>
        </LoginBox>
        {isModalOpen && (
          <Modal setState={setModalState}>
            <CreateUser setModalState={setModalState} />
          </Modal>
        )}
      </Container>
    </Wrapper>
  );
};

export default Login;
