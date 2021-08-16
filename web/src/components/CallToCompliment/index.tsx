import React, { SetStateAction, Dispatch } from 'react';
import { Container, CallTitle, ComplimentButton } from './styles';

type CallToComplimentProps = {
  openModal: () => void;
  setModalContent: Dispatch<SetStateAction<string>>;
};

export const CallToCompliment: React.FC<CallToComplimentProps> = ({
  openModal,
  setModalContent,
}) => {
  const handleClick = () => {
    openModal();
    setModalContent('selectReceiver');
  };

  return (
    <Container>
      <CallTitle>Quem você gostaria de valorizar hoje?</CallTitle>
      <ComplimentButton onClick={handleClick}>Valorize agora</ComplimentButton>
    </Container>
  );
};
