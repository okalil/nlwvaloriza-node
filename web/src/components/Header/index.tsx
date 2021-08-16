import React from 'react';
import { useLocation } from 'react-router-dom';

import homeIcon from '../../assets/home.svg';
import notHomeIcon from '../../assets/empty-home.svg';
import profile from '../../assets/profile.svg';
import logout from '../../assets/logout.svg';

import { HeaderWrapper, Container, Title, HeaderLink, Logout } from './styles';

const HomeIcon = () => {
  const location = useLocation();
  return (
    <img src={location.pathname === '/' ? homeIcon : notHomeIcon} alt="Home" />
  );
};

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Title>Valoriza</Title>
        <HeaderLink to="/">
          <HomeIcon />
          <span>Home</span>
        </HeaderLink>
        <HeaderLink to="/me">
          <img src={profile} alt="Eu" width="40" />
          <span>Você</span>
        </HeaderLink>
      </Container>
      <Logout
        onClick={() => {
          localStorage.removeItem('currentUser');
        }}
        to="/login"
      >
        <img src={logout} alt="Sair" />
        <span>Sair</span>
      </Logout>
    </HeaderWrapper>
  );
};
