import styled from 'styled-components';
import { Box } from '../components/Box';

const MainContainer = styled.main`
  padding: 1rem;
`;

const ProfileSection = styled(Box)`
  width: min(100%, 700px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: min(100%, 600px);
  gap: 1rem;
  justify-content: center;
`;

const SectionHeader = styled.header`
  display: flex;
  justify-content: center;
  gap: 4rem;
  width: min(100%, 400px);
  margin: auto;
  white-space: nowrap;

  img {
    width: 10rem;
    height: 10rem;
  }
`;

const Status = styled.div`
  display: grid;
  grid-template-rows: 2rem repeat(2, 1rem);
  gap: 1rem;
  margin: auto 0;

  h2 + span {
    margin-top: 0.5rem;
  }

  span + span {
    margin-left: 1rem;
  }
`;

const Username = styled.h2`
  font-size: 2rem;
`;

const RecognitionsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 0.5rem;
  background: #823acf;
  border-radius: ${({ theme }) => theme.borderRadius};

  > div:last-child {
    grid-column: span 2;
    margin: 0 1rem;
  }
`;

const Subtitle = styled.strong`
  --radius: ${({ theme }) => theme.borderRadius};
  --border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  background: ${({ theme }) => theme.colors.bgBrand};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.5rem;

  &:first-child {
    border-top-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);

    + strong {
      border-top-right-radius: var(--radius);
      border-bottom-left-radius: var(--radius);
    }
  }
`;

export {
  MainContainer,
  ProfileSection,
  SectionHeader,
  Status,
  Username,
  RecognitionsContainer,
  Subtitle,
};
