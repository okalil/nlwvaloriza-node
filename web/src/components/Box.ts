import styled from 'styled-components';

export const Box = styled.section`
  background: ${({ theme }) => theme.colors.bgBox};
  border-radius: 8px;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 5%);
  padding: 1rem;
`;
