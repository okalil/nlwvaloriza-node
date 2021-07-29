import React, { FormEvent } from "react";
import { useHistory } from "react-router-dom";

import { Box } from "../components/Box";
import { Button } from "../components/Button";

// import {} from './styles'
import styled from "styled-components";
import { api } from "../services/api";

const Wrapper = styled.main`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: min(85%, 1100px);

    display: flex;
    gap: 1rem;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }

    hr {
        color: ${({ theme }) => theme.colors.hr};
        margin: 0.5rem 0;
    }
`;

const Title = styled.h1`
    color: #9c64e2;
`;

const About = styled.h2`
    font-size: 1.25rem;
    font-weight: 500;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    button {
        background: ${({ theme }) => theme.colors.bgBrand};
    }
`;

const FormControl = styled.input`
    border: 1px solid #ddd;
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 0.25rem 0.5rem;

    &::placeholder {
        color: ${({ theme }) => theme.colors.placeholder};
    }
`;

const GreenButton = styled(Button)`
    background: #04d361;
    display: block;
    margin: 0 auto;
`;

const Login: React.FC = () => {
    document.title = "Login | Valoriza";
    const history = useHistory();

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);

        try {
            const response = await api.post("/login", {
                headers: { "Content-Type": "application/json" },
                email: formData.get("email"),
                password: formData.get("password"),
            });
            localStorage.setItem("userToken", response.data);

            history.push("/");
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            } else if (error.request) {
            } else {
                console.log("Error", error.message);
            }
        }
    }

    return (
        <Wrapper>
            <Container>
                <div>
                    <Title>Valoriza</Title>
                    <About>
                        O Valoriza promove o reconhecimento entre os
                        companheiros de equipe.
                    </About>
                </div>

                <Box>
                    <Form onSubmit={handleSubmit}>
                        <FormControl name="email" placeholder="Email" />
                        <FormControl name="password" placeholder="Senha" />
                        <Button>Entrar</Button>
                    </Form>
                    <hr />
                    <GreenButton>Criar conta</GreenButton>
                </Box>
            </Container>
        </Wrapper>
    );
};

export default Login;
