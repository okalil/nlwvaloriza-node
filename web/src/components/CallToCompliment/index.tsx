import React, { Dispatch, SetStateAction } from 'react';
import { Container, CallTitle, ComplimentButton } from './styles';

type CallToComplimentProps = {
  setModalState: Dispatch<SetStateAction<boolean>>;
};

export const CallToCompliment: React.FC<CallToComplimentProps> = ({
  setModalState,
}) => {
  return (
    <Container>
      <CallTitle>Quem você gostaria de valorizar hoje?</CallTitle>
      <ComplimentButton onClick={() => setModalState(true)}>
        Valorize agora
      </ComplimentButton>
    </Container>
  );
};
