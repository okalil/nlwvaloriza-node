import styled from 'styled-components';
import { Box } from '../components/Box';

const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: min(85%, 1100px);

  display: grid;
  gap: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 325px;
    text-align: start;
  }

  hr {
    border: 0.5px solid ${({ theme }) => theme.colors.hr};
    margin: 1rem 0;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.bgBrand};
  font-size: 2.5rem;
`;

const About = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
`;

const LoginBox = styled(Box)`
  width: min(100%, 300px);
  margin: 0 auto;

  button {
    font-size: 1rem;
    font-weight: 600;
    padding: 0.75rem 1rem;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(2, 2.75rem) 2.5rem;
  gap: 1rem;
`;

export { Wrapper, Container, Title, About, LoginBox, Form };
