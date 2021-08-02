import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 6rem 1fr;
  gap: 1.5rem;

  width: min(80vw, 300px);
  padding: 0 1rem;

  > * {
    align-self: center;
  }
`;

const ComplimentForm = styled.form`
  position: relative;
  grid-column: span 2;
  display: grid;
  gap: 0.75rem;

  /* ul {display: none} */

  textarea,
  input {
    width: 100%;
    padding: 0.5rem 1rem;
    outline: none;
  }

  textarea {
    min-height: 100px;
    max-height: 250px;
    width: min(calc(80vw - 2rem), calc(300px - 2rem)) !important;
  }

  button {
    text-transform: uppercase;
    font-size: 1rem;
    width: 30%;
    margin-top: 1rem;
    margin-left: auto;
    padding: 0.5rem 0;
    text-align: center;
  }
`;

const Autocomplete = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgBox};

  position: relative;
  display: inline-block;

  input {
    height: 2rem;
    width: 100%;
    background: #f2f2f2;
    border: 1px solid transparent;
    padding: 0.5rem;
  }
`;

const AutocompleteItems = styled.ul`
  --border: 1px solid ${({ theme }) => theme.colors.border};
  --border-radius: ${({ theme }) => theme.borderRadius};

  border-bottom: var(--border);
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  list-style: none;
  max-height: 9rem;
  overflow: auto;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;

  li {
    padding: 0.5rem;
    border: var(--border);
    background: ${({ theme }) => theme.colors.bgBox};
    font-weight: 500;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors.bgGeneral};
    }

    &:last-child {
      border-bottom-left-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
  }
`;

export { Container, ComplimentForm, Autocomplete, AutocompleteItems };
