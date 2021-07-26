import styled from "styled-components";

export const Button = styled.button`
    display: block;
    color: white;
    border: 0;
    border-radius: ${({ theme }) => theme.borderRadius};
    cursor: pointer;

    transition: filter 0.4s;

    &:hover {
        filter: brightness(0.95);
    }
`;
