'use client';

import { useState } from 'react';
import PostList from '@/app/service/community/_components/PostList';
import SearchBar from '@/app/service/community/_components/SearchBar';
import Tabs from '@/app/service/community/_components/Tabs';
import Floating from '@/app/_components/buttons/Floating';
import Header from '@/app/_components/common/Header';
import HEADER from '@/constants/ui/common/header';
import BottomSheetContainer from '@/app/service/community/_components/BottomSheetContainer';
import SearchPostSection from '@/app/service/community/_components/SearchPostSection';

function Page() {
  const bottomSheetTitle = '게시글 작성';
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isSearchingFocus, setIsSearchingFocus] = useState(false);
  const [searchText, setSearchText] = useState('');

  const onDisMiss = () => {
    setIsSheetOpen(false);
  };

  const exitHandler = () => {
    setIsSearchingFocus(false);
  };

  return (
    <div className="relative bg-white pb-16">
      <Header
        title={isSearchingFocus ? HEADER.write : HEADER.community}
        isBack={!isSearchingFocus}
        isExit={isSearchingFocus}
        exitHandler={exitHandler}
      />
      <SearchBar
        searchText={searchText}
        isSearchingFocus={isSearchingFocus}
        setIsSearchingFocus={setIsSearchingFocus}
        setSearchText={setSearchText}
      />
      <Tabs />
      {!isSearchingFocus && <PostList />}
      {isSearchingFocus && <SearchPostSection searchText={searchText} />}
      <BottomSheetContainer
        bottomSheetTitle={bottomSheetTitle}
        isSheetOpen={isSheetOpen}
        setIsSheetOpen={setIsSheetOpen}
        onDisMiss={onDisMiss}
      />
      {!isSearchingFocus && <Floating setIsSheetOpen={setIsSheetOpen} />}
    </div>
  );
}

export default Page;
