import styled from 'styled-components';

export const FormControl = styled.input`
  border: 1px solid #ddd;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: inset 0px 0px 1px 1px rgb(0 0 0 / 5%);
  padding: 0.75rem 1rem;
  outline: 0;

  &:focus {
    border-color: ${({ theme }) => theme.colors.bgBrand};
    box-shadow: 0 0 0px 1px #bbb0fc;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;
