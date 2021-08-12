import styled from 'styled-components';

const Form = styled.form`
  width: 280px;
  max-width: 90vw;
  display: grid;
  gap: 0.75rem;

  input:focus {
    border-color: #04d361;
    box-shadow: 0 0 0 1px #5fd393;
  }
`;

export { Form };
