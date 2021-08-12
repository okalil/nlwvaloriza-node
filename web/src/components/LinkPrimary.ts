import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkPrimary = styled(Link)`
  display: block;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.bgBrand};

  &:hover {
    text-decoration: underline;
  }
`;
