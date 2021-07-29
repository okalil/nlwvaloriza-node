import styled from "styled-components";

const CardHeader = styled.header`
    position: relative;
    display: flex;
    gap: 1rem;

    img {
        width: 6rem;
    }
`;

const RightContainer = styled.div`
    display: grid;
    grid-template-columns: 3rem 1fr;
    column-gap: 1rem;

    * {
        align-self: center;
    }

    h2 {
        font-weight: 600;
        grid-column: span 2;
    }
    img {
        width: 100%;
    }
    span {
        font-size: 1.25rem;
        font-weight: 600;
    }
`;

const CardBody = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    row-gap: 1rem;
    margin-top: 1rem;

    * {
        align-self: center;
    }

    p {
        grid-column: span 2;
        font-size: 1.25rem;
        font-weight: 500;
    }
`;

const TagWrapper = styled.div`
    text-align: right;

    span {
        font-family: "Poppins", sans-serif;
        color: ${({ theme }) => theme.colors.textSecondary};
        background: ${({ theme }) => theme.colors.bgBrand};
        border-radius: ${({ theme }) => theme.borderRadius};
        padding: 0.25rem 0.5rem;
    }
`;
const HeartIcon = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    max-width: 2rem;
    height: 2rem;
`;

export { CardHeader, RightContainer, CardBody, TagWrapper, HeartIcon };
