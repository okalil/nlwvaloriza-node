import React, { useState } from "react";
import { Link } from "react-router-dom";

import homeIcon from "../../assets/home.svg";
import profile from "../../assets/profile.svg";

import { Menu } from "./Menu";
import {
    HeaderWrapper,
    Container,
    Title,
    IconButton,
    CallToCompliment,
    CallTitle,
    ComplimentButton,
} from "./styles";

export const Header: React.FC = () => {
    const [isMenuOpen, setMenuState] = useState(false);

    return (
        <HeaderWrapper>
            <Container>
                <Title>Valoriza</Title>
                <IconButton as={Link} to="/">
                    <img src={homeIcon} alt="home" />
                    <span>Home</span>
                </IconButton>
                <IconButton onClick={() => setMenuState(!isMenuOpen)}>
                    <img src={profile} alt="você" width="40" />
                    <span>Você</span>
                </IconButton>

                <Menu style={{ display: isMenuOpen ? "block" : "none" }} />
            </Container>

            <CallToCompliment>
                <CallTitle>Quem você gostaria de valorizar hoje?</CallTitle>
                <ComplimentButton>Valorize agora</ComplimentButton>
            </CallToCompliment>
        </HeaderWrapper>
    );
};
