import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.colors.bgBrand};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.75rem;
`;

const Container = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr repeat(2, 60px);

  position: relative;
  width: min(100%, 950px);
  margin: auto;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 2.5rem;
  align-self: center;
`;

const HeaderLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  img {
    width: 2.5rem;
    height: 2.5rem;
  }

  span {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 600;
  }
`;

const Logout = styled(HeaderLink)`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.75rem;

  img {
    width: 1.75rem;
    height: 1.75rem;
  }
`;

export { HeaderWrapper, Container, Title, HeaderLink, Logout };
