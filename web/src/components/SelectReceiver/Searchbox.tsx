import React, { Dispatch, SetStateAction } from 'react';
import searchIcon from '../../assets/search.svg';
import { SearchboxWrapper, SearchInput, SearchIcon } from './styles';

type SearchboxProps = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export const Searchbox: React.FC<SearchboxProps> = ({ value, setValue }) => {
  return (
    <SearchboxWrapper>
      <SearchInput
        type="text"
        placeholder="Pesquisar"
        onChange={event => setValue(event.target.value)}
        value={value}
      />
      <SearchIcon src={searchIcon} alt="Search" />
    </SearchboxWrapper>
  );
};
