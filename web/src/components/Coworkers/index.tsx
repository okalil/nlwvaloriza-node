import React, { Dispatch, SetStateAction } from 'react';
import User from '../../types/User';
import profile from '../../assets/profile.svg';

import { Box } from '../Box';
import { Button } from '../Button';
import { CoworkersList, StyledItem } from './styles';

type CoworkersProps = {
  coworkers: User[];
  setCurrentReceiver: Dispatch<SetStateAction<User>>;
  setModalContent: Dispatch<SetStateAction<string>>;
  openModal: () => void;
};

export const Coworkers: React.FC<CoworkersProps> = ({
  coworkers,
  openModal,
  setModalContent,
  setCurrentReceiver,
}) => {
  // const

  return (
    <Box>
      <h2>Seus colegas</h2>
      <CoworkersList>
        {coworkers.map(user => {
          return (
            <StyledItem key={user.id}>
              <img src={profile} alt="Colega" />
              <h3>{user.name}</h3>
              <Button
                onClick={() => {
                  setModalContent('createCompliment');
                  setCurrentReceiver({ name: user.name, id: user.id });
                  openModal();
                }}
              >
                Valorizar
              </Button>
            </StyledItem>
          );
        })}
      </CoworkersList>
    </Box>
  );
};
