import styled from 'styled-components';
import { Button } from '../Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.bgBrand};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const CallTitle = styled.h2`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
  text-align: center;
`;

const ComplimentButton = styled(Button)`
  color: ${({ theme }) => theme.colors.bgBrand};
  background: ${({ theme }) => theme.colors.bgBox};
  text-transform: uppercase;
  font-weight: 600;
`;

export { Container, CallTitle, ComplimentButton };
