import ReactDOM from 'react-dom';
import React, { ReactNode } from 'react';
import { useState, useImperativeHandle, useCallback, forwardRef } from 'react';

import { ModalContainer, ModalBox } from './styles';

export type ModalHandles = {
  openModal: () => void;
  closeModal: () => void;
};

type ModalProps = {
  children: ReactNode;
};

const Modal: React.ForwardRefRenderFunction<ModalHandles, ModalProps> = (
  { children },
  ref
) => {
  const [visible, setVisible] = useState(false);

  const openModal = useCallback(() => setVisible(true), []);
  const closeModal = useCallback(() => setVisible(false), []);

  useImperativeHandle(ref, () => {
    return {
      openModal,
      closeModal,
    };
  });

  return visible
    ? ReactDOM.createPortal(
        <ModalContainer onClick={closeModal}>
          <ModalBox onClick={e => e.stopPropagation()}>{children}</ModalBox>
        </ModalContainer>,
        document.getElementById('modal') as HTMLElement
      )
    : null;
};

export default forwardRef(Modal);
