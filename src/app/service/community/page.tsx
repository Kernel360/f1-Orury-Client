import React from 'react';
import Posts from '@/app/service/community/_components/Posts';
import SearchBar from '@/app/service/community/_components/SearchBar';
import Tabs from '@/app/service/community/_components/Tabs';
import Floating from '@/app/_components/buttons/Floating';
import Header from '@/app/_components/common/Header';
import HEADER from '@/constants/ui/common/header';

async function page() {
  return (
    <div className="relative bg-white pb-16">
      <Header title={HEADER.community} isBack />
      <SearchBar />
      <Tabs />
      <Posts />
      <Floating />
    </div>
  );
}

export default page;
