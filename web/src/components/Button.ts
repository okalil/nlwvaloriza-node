import styled from 'styled-components';

export const Button = styled.button`
  color: white;
  background: ${({ theme }) => theme.colors.bgBrand};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.5rem 0.75rem;
  cursor: pointer;

  transition: filter 0.4s;

  &:hover {
    filter: brightness(0.95);
  }

  &:disabled {
    filter: opacity(0.75);
    cursor: auto;
  }
`;
