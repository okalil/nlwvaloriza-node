import styled from 'styled-components';

const Main = styled.main`
  width: min(100%, 950px);
  display: grid;
  gap: 0.75rem;

  padding: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
    margin: auto;
  }
`;

export { Main };
