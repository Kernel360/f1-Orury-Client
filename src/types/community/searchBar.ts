import { Dispatch, SetStateAction } from 'react';

export interface SearchBarProps {
  searchText: string;
  isSearchingFocus: boolean;
  setIsSearchingFocus: Dispatch<SetStateAction<boolean>>;
  setSearchText: Dispatch<SetStateAction<string>>;
}
