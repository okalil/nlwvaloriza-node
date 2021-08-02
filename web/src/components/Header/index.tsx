import React from 'react';

import homeIcon from '../../assets/home.svg';
import profile from '../../assets/profile.svg';
import logout from '../../assets/logout.svg';

import { HeaderWrapper, Container, Title, HeaderLink, Logout } from './styles';

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Title>Valoriza</Title>
        <HeaderLink to="/">
          <img src={homeIcon} alt="Home" />
          <span>Home</span>
        </HeaderLink>
        <HeaderLink to="/">
          <img src={profile} alt="Eu" width="40" />
          <span>Você</span>
        </HeaderLink>
      </Container>
      <div>
        <Logout
          onClick={() => {
            localStorage.removeItem('currentUser');
          }}
          to="/login"
        >
          <img src={logout} alt="Sair" />
          <span>Sair</span>
        </Logout>
      </div>
    </HeaderWrapper>
  );
};
