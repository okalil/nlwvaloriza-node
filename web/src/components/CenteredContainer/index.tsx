import React from 'react';
import { Wrapper, Container } from './styles';

export const CenteredContainer: React.FC = ({ children }) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
);
