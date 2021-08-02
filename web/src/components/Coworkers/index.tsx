import React, { Dispatch, SetStateAction } from 'react';
import User from '../../types/User';
import profile from '../../assets/profile.svg';

import { Box } from '../Box';
import { Button } from '../Button';
import { CoworkersList, StyledItem } from './styles';

type CoworkersProps = {
  coworkers: User[];
  setModalState: Dispatch<SetStateAction<boolean>>;
  setModalContent: Dispatch<
    SetStateAction<'selectReceiver' | 'createCompliment'>
  >;
  setCurrentReceiver: Dispatch<SetStateAction<User>>;
};

export const Coworkers: React.FC<CoworkersProps> = ({
  coworkers,
  setModalState,
  setModalContent,
  setCurrentReceiver,
}) => {
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
                  setModalState(true);
                  setModalContent('createCompliment');
                  setCurrentReceiver({ name: user.name, id: user.id });
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
