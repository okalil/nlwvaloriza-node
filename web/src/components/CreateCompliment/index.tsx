import React, {
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
  useContext,
} from 'react';
import { ThemeContext } from 'styled-components';
import Tag from '../../types/Tag';
import User from '../../types/User';
import profile from '../../assets/profile.svg';

import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';

import { Button } from '../Button';
import {
  Container,
  ComplimentForm,
  Autocomplete,
  AutocompleteItems,
} from './styles';

type CreateComplimentProps = {
  currentReceiver: User;
  tags: Tag[];
  setModalState: Dispatch<SetStateAction<boolean>>;
};

export const CreateCompliment: React.FC<CreateComplimentProps> = ({
  tags,
  currentReceiver,
  setModalState,
}) => {
  const theme = useContext(ThemeContext);
  const { authentication, currentUserId } = useAuth();

  const [tagName, setTagName] = useState('');
  const [isAutocompleteOpen, setAutocompleteState] = useState(false);
  const [currentFocus, setFocus] = useState(-1);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const [tag] = tags.filter((item: Tag) => item.name === formData.get('tag'));

    try {
      await api.post(
        '/compliments',
        {
          tag_id: tag.id,
          user_sender: currentUserId,
          user_receiver: currentReceiver.id,
          message: formData.get('message'),
        },
        { headers: authentication }
      );
      setModalState(false);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredTags = tags.filter(tag => tag.name.includes(tagName));

  const handleKeyPress = (e: React.KeyboardEvent<HTMLElement>) => {
    setAutocompleteState(true);

    const last = filteredTags.length - 1;

    switch (e.key) {
      case 'ArrowUp':
        setFocus(currentFocus - 1);
        if (currentFocus === 0) {
          setFocus(last);
        }
        break;
      case 'ArrowDown':
        setFocus(currentFocus + 1);
        if (currentFocus === last) {
          setFocus(0);
        }
        break;
      case 'Enter':
        e.preventDefault();
        setTagName(filteredTags[currentFocus].name);
        setAutocompleteState(false);
    }
  };

  const focusStyle = {
    color: theme.colors.textSecondary,
    background: theme.colors.bgBrand,
    borderBottom: theme.colors.textSecondary,
  };

  return (
    <Container id="container" onClick={() => setAutocompleteState(false)}>
      <img src={profile} alt="pic" />
      <h2>Para {currentReceiver.name}</h2>
      <ComplimentForm onSubmit={handleSubmit}>
        <textarea
          required
          name="message"
          placeholder="O que você está valorizando?"
          rows={5}
        />
        <h3>Tag</h3>
        <Autocomplete onKeyDown={handleKeyPress}>
          <input
            required
            type="text"
            name="tag"
            value={tagName}
            onChange={event => setTagName(event.target.value)}
            autoComplete="off"
          />
          {isAutocompleteOpen && (
            <AutocompleteItems>
              {tagName &&
                filteredTags.map((tag, index) => {
                  return (
                    <li
                      key={tag.id}
                      style={currentFocus === index ? focusStyle : undefined}
                      onClick={() => setTagName(tag.name)}
                    >
                      {tag.name}
                    </li>
                  );
                })}
              {!filteredTags.length && <li>Nenhuma tag encontrada</li>}
            </AutocompleteItems>
          )}
        </Autocomplete>

        <Button type="submit">Enviar</Button>
      </ComplimentForm>
    </Container>
  );
};
