import styled from 'styled-components';
import { Button } from '../components/Button';

const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: min(85%, 1100px);

  display: flex;
  gap: 1rem;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  hr {
    border: 0.5px solid ${({ theme }) => theme.colors.hr};
    margin: 0.5rem 0;
  }
`;

const Title = styled.h1`
  color: #9c64e2;
`;

const About = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    background: ${({ theme }) => theme.colors.bgBrand};
  }
`;

const FormControl = styled.input`
  border: 1px solid #ddd;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.25rem 0.5rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

const GreenButton = styled(Button)`
  background: #04d361;
  display: block;
  margin: 0 auto;
`;

export { Wrapper, Container, Title, About, Form, FormControl, GreenButton };
