import React from "react";

import styled from "styled-components";
import { Header } from "../components/Header";
import { Compliments } from "../components/Compliments";
import { Coworkers } from "../components/Coworkers";

const Main = styled.main`
    width: min(100%, 950px);
    display: grid;
    gap: 0.75rem;

    padding: 1rem;

    @media (min-width: 768px) {
        grid-template-columns: 2fr 1fr;
        margin: auto;
    }
`;

const Home: React.FC = () => {
    document.title = "Valoriza";

    return (
        <>
            <Header />

            <Main>
                <Compliments route="/compliments" />
                <aside>
                    <Coworkers />
                </aside>
            </Main>
        </>
    );
};

export default Home;
