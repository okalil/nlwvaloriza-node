import styled from "styled-components";

const CoworkersList = styled.ul`
    list-style: none;
    margin: 1rem 0;
`;

const StyledItem = styled.li`
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    padding: 1rem 0;
    position: relative;

    display: flex;
    justify-content: space-between;

    &:last-child {
        padding-bottom: 0;
    }

    img {
        grid-row: span 2;
        width: 5rem;
        height: 5rem;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 500;
        text-align: right;
    }

    button {
        position: absolute;
        right: 0;
        bottom: 1rem;
        text-transform: uppercase;
        font-weight: 600;
    }
`;

export { CoworkersList, StyledItem };
