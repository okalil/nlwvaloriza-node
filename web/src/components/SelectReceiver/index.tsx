import React, { Dispatch, SetStateAction, useState } from 'react';

import profile from '../../assets/profile.svg';

import { Searchbox } from './Searchbox';
import { CoworkersList, Receiver } from './styles';
import User from '../../types/User';

type SelectProps = {
  receivers: User[];
  setCurrentReceiver: Dispatch<SetStateAction<User>>;
  setModalContent: Dispatch<
    SetStateAction<'selectReceiver' | 'createCompliment'>
  >;
};

export const SelectReceiver: React.FC<SelectProps> = ({
  receivers,
  setCurrentReceiver,
  setModalContent,
}) => {
  const [searchValue, setSearchValue] = useState('');

  const filteredReceivers = receivers.filter((item: User) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <h2>Selecione quem você vai valorizar</h2>
      <Searchbox value={searchValue} setValue={setSearchValue} />
      <CoworkersList>
        {filteredReceivers.length ? (
          filteredReceivers.map((item: User) => {
            return (
              <Receiver
                key={item.id}
                onClick={() => {
                  setCurrentReceiver({ name: item.name, id: item.id });
                  setModalContent('createCompliment');
                }}
              >
                <img src={profile} alt="profile pic" />
                <h3>{item.name}</h3>
              </Receiver>
            );
          })
        ) : (
          <h1>Nenhum resultado encontrado</h1>
        )}
      </CoworkersList>
    </div>
  );
};
