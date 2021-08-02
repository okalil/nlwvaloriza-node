import React, { MouseEvent, Dispatch, SetStateAction } from 'react';
import { ModalContainer, ModalBox } from './styles';

type ModalProps = {
  setState: Dispatch<SetStateAction<boolean>>;
};

export const Modal: React.FC<ModalProps> = ({ setState, children }) => {
  const handleClose = (event: MouseEvent) => {
    if ((event.target as HTMLElement).id !== 'background') {
      return;
    }

    setState(false);
  };

  return (
    <ModalContainer id="background" onClick={handleClose}>
      <ModalBox>{children}</ModalBox>
    </ModalContainer>
  );
};
