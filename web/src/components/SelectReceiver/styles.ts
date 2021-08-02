import styled from 'styled-components';

const SearchboxWrapper = styled.div`
  background: ${({ theme }) => theme.colors.bgGeneral};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};

  width: min(50%, 300px);
  height: 2rem;
  margin: 1rem auto;
  position: relative;
`;

const SearchIcon = styled.img`
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  width: 1rem;
`;

const SearchInput = styled.input`
  background: transparent;
  padding-left: 2rem;
  width: 100%;
  height: inherit;
  border: 0;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

const CoworkersList = styled.ul`
  list-style: none;

  li:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;

const Receiver = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;

  img {
    width: 6rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export { SearchboxWrapper, SearchInput, SearchIcon, CoworkersList, Receiver };
