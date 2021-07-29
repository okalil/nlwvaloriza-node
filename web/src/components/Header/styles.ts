import styled from "styled-components";
import { Button } from "../Button";

const HeaderWrapper = styled.header`
    background: ${({ theme }) => theme.colors.bgBrand};
`;

const Container = styled.div`
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 1fr repeat(2, 60px);

    position: relative;
    width: min(100%, 950px);
    padding: 1rem;
    margin: auto;

    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`;

const Title = styled.h1`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 2.5rem;
    align-self: center;
`;

const IconButton = styled.button`
    align-self: center;
    text-align: center;
    text-decoration: none;

    span {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-weight: 600;
    }
`;

const MenuContainer = styled.section`
    position: absolute;
    right: 10px;
    top: 65px;

    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.colors.bgBox};
    box-shadow: 0 0 1px 1px #00000030;

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.textPrimary};
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem 0.25rem;
    }

    img {
        height: 2rem;
    }
`;

const Arrow = styled.div`
    width: 14px;
    height: 14px;
    position: absolute;
    top: -5px;
    left: 35px;

    background: white;
    transform: rotate(45deg);
`;

const CallToCompliment = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    padding: 1rem 2rem;
    border-top: 1px solid ${({theme}) => theme.colors.border};

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

export {
    HeaderWrapper,
    Container,
    Title,
    IconButton,
    MenuContainer,
    Arrow,
    CallToCompliment,
    CallTitle,
    ComplimentButton,
};
